import { getProductionLlmsText } from "../../lib/site-discovery";
import { isIndexable } from "../../lib/site-config";

export const dynamic = "force-static";

export function GET() {
  if (!isIndexable) {
    return new Response("Not found", {
      status: 404,
      headers: { "Cache-Control": "no-store" },
    });
  }

  return new Response(getProductionLlmsText(), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=0, must-revalidate",
    },
  });
}
