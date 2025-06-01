// src/app/api/auth/route.ts
import { adminAuth } from "../../lib/firebaseAdmin";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { idToken } = await req.json();
    const decodedToken = await adminAuth.verifyIdToken(idToken);

    // Optional: Set secure HTTP-only cookie (or use a lib like iron-session)
    const cookieStore = await cookies();
    cookieStore.set("token", idToken, {
      httpOnly: true,
      secure: true,
      maxAge: 60 * 60 * 24,
      path: "/",
    });

    return NextResponse.json({ uid: decodedToken.uid });
  } catch (err) {
    console.error("Firebase auth error:", err);
    return new NextResponse("Unauthorized", { status: 401 });
  }
}
