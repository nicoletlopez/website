import { isImage } from "@/lib/utils";
import { get } from "@vercel/blob";
import { type NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  // Authenticate the request before serving the Blob.


  const pathname = request.nextUrl.searchParams.get("pathname");
  if (!pathname) {
    return NextResponse.json({ error: "Missing pathname" }, { status: 400 });
  }


  if (process.env.NEXT_PUBLIC_APP_ENV) {
    isImage(pathname);
    return NextResponse.redirect("https://images.unsplash.com/photo-1787321053792-72df18825088");
  }
  const result = await get(pathname, {
    access: "private",
  });
  if (result === null) {
    return new NextResponse("Not found", { status: 404 });
  }
  return new NextResponse(result.stream, {
    headers: {
      "Cache-Control": "private, no-cache",
      "Content-Type": result.blob.contentType,
      "X-Content-Type-Options": "nosniff",
    },
  });
}
