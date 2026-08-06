import { getBetaLlmsText, getProductionLlmsText } from "../../lib/site-discovery";
import { isIndexable } from "../../lib/site-config";

export const dynamic = "force-static";

export function GET() {
  return new Response(isIndexable ? getProductionLlmsText() : getBetaLlmsText(), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=0, must-revalidate",
    },
  });
}
