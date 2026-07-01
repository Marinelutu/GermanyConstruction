import { NextResponse } from "next/server";

export function GET() {
  throw new Error("Sentry Server-Side Test Error");
  return NextResponse.json({ status: "ok" });
}
