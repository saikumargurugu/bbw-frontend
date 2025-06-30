import { adminAuth } from "../../lib/firebaseAdmin";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { idToken } = await req.json();
    const decodedToken = await adminAuth.verifyIdToken(idToken);

    const response = NextResponse.json({ uid: decodedToken.uid });
    response.cookies.set("token", idToken, {
      httpOnly: true,
      secure: true,
      maxAge: 60 * 60 * 24,
      path: "/",
    });

    return response;
  } catch (err) {
    console.error("Firebase auth error:", err);
    return new NextResponse("Unauthorized", { status: 401 });
  }
}
