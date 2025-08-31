export type ParsedCommand =
  | { intent: 'add', items: { item: string; quantity: number }[] }
  | { intent: 'remove', items: { item: string; quantity?: number }[] }
  | { intent: 'modify', item: string, quantity: number }
  | { intent: 'search', term: string, maxPrice?: number, brand?: string }
  | { intent: 'list' }
  | { intent: 'unknown', raw: string };

const qtyWords: Record<string, number> = {
  one: 1, two: 2, three: 3, four: 4, five: 5,
  six: 6, seven: 7, eight: 8, nine: 9, ten: 10
};

function parseQuantity(s: string): number | undefined {
  const num = s.match(/\b(\d+)\b/);
  if (num) return parseInt(num[1], 10);
  for (const [w, n] of Object.entries(qtyWords)) {
    if (new RegExp(`\\b${w}\\b`, 'i').test(s)) return n;
  }
  return undefined;
}

function normalizeItemName(name: string): string {
  name = name.toLowerCase().trim();

  // Handle common irregular plurals
  const irregulars: Record<string, string> = {
    tomatoes: "tomato",
    potatoes: "potato",
    mice: "mouse",
    geese: "goose",
    children: "child",
    feet: "foot",
    teeth: "tooth",
    men: "man",
    women: "woman"
  };
  if (irregulars[name]) return irregulars[name];

  // Handle words ending with "ies" → "y" (berries → berry)
  if (/ies$/.test(name)) return name.replace(/ies$/, "y");
  // Handle regular plural "s"
  
  if (/s$/.test(name) && !/ss$/.test(name)) {
    return name.replace(/s$/, "");
  }

  // Handle words ending with "es" (but not cases like "cheese")
  if (/[^aeiou]es$/.test(name) && !/ses$/.test(name)) {
    return name.replace(/es$/, "");
  }


  return name;
}


export function normalize(text: string) {
  return text.toLowerCase().replace(/[^a-z0-9\s.%-]/g, ' ').replace(/\s+/g, ' ').trim();
}

export function parseCommand(input: string): ParsedCommand {
  const s = normalize(input);

  // ---------------- ADD ----------------
  if (/\b(add|buy|get|need|want)\b/.test(s)) {
    const items: { item: string; quantity: number }[] = [];

    // Extract everything after "add/buy/get"
    const afterAdd = s.replace(/.*\b(add|buy|get|need|want)\b/, '').trim();

    // Split by "and"
    const parts = afterAdd.split(/\band\b/);

    for (const part of parts) {
      const trimmed = part.trim();
      if (!trimmed) continue;

      // Try to match number + item
      const match = trimmed.match(/^(\d+|one|two|three|four|five|six|seven|eight|nine|ten)\s+([a-z]+)/i);

      if (match) {
        const qtyStr = match[1].toLowerCase();
        const quantity = /^\d+$/.test(qtyStr) ? parseInt(qtyStr, 10) : qtyWords[qtyStr];
        const item = normalizeItemName(match[2]);
        items.push({ item, quantity });
      } else {
        // If no number → default qty 1
        const item = normalizeItemName(trimmed);
        items.push({ item, quantity: 1 });
      }
    }

    return { intent: 'add', items };
  }

  // ---------------- REMOVE ----------------
  if (/\b(remove|delete|drop|clear)\b/.test(s)) {
    const items: { item: string; quantity?: number }[] = [];

    const afterRemove = s.replace(/.*\b(remove|delete|drop|clear)\b/, '').trim();
    const parts = afterRemove.split(/\band\b/);

    for (const part of parts) {
      const trimmed = part.trim();
      if (!trimmed) continue;

      const match = trimmed.match(/^(\d+|one|two|three|four|five|six|seven|eight|nine|ten)\s+([a-z]+)/i);

      if (match) {
        const qtyStr = match[1].toLowerCase();
        const quantity = /^\d+$/.test(qtyStr) ? parseInt(qtyStr, 10) : qtyWords[qtyStr];
        const item = normalizeItemName(match[2]);
        items.push({ item, quantity });
      } else {
        const item = normalizeItemName(trimmed);
        items.push({ item, quantity: 1 });
      }
    }

    return { intent: 'remove', items };
  }

  // ---------------- MODIFY ----------------
  if (/\b(update|change|set)\b.*\b(quantity|qty|amount)\b/.test(s)) {
    const quantity = parseQuantity(s) ?? 1;
    const itemMatch = s.match(/\b(?:of|for)\b\s+(.*)/);
    const item = itemMatch ? itemMatch[1].replace(/s$/, '') : '';
    return { intent: 'modify', item, quantity };
  }

  // ---------------- SEARCH ----------------
  if (/\b(find|search|look for|show me)\b/.test(s)) {
    const termMatch = s.match(/\b(find|search|look for|show me)\b\s+(.*?)(?:\s+under\s+\$?(\d+(?:\.\d+)?))?(?:\s+by\s+([a-z0-9'\- ]+))?$/i);
    let term = '';
    let maxPrice;
    let brand;
    if (termMatch) {
      term = termMatch[2]?.trim();
      if (termMatch[3]) maxPrice = parseFloat(termMatch[3]);
      if (termMatch[4]) brand = termMatch[4].trim();
    } else {
      term = s.replace(/\b(find|search|look for|show me)\b/,'').trim();
    }
    return { intent: 'search', term, maxPrice, brand };
  }

  // ---------------- LIST ----------------
  if (/\b(list|what(?:'| i)s on my list|show list)\b/.test(s)) {
    return { intent: 'list' };
  }

  return { intent: 'unknown', raw: input };
}
