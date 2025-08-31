// /app/api/translate/route.ts
import { NextResponse } from "next/server";
import translate from "google-translate-api-x";

export async function POST(req: Request) {
  try {
    const { text, target } = await req.json();
    if (!text) return NextResponse.json({ error: "Missing text" }, { status: 400 });

    const result = await translate(text, { to: target || "en" });
    let translatedText: string;

    if (Array.isArray(result)) {
      translatedText = result.map(r => r.text).join(" ");
    } else if (typeof result === "object" && result !== null && "text" in result) {
      translatedText = (result as any).text;
    } else {
      translatedText = "";
    }

    return NextResponse.json({ translated: translatedText });
  } catch (err) {
    console.error("Translation error:", err);
    return NextResponse.json({ error: "Translation failed" }, { status: 500 });
  }
}
