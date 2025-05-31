// src/lib/firebaseAdmin.ts
import { cert, getApps, initializeApp } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";

const firebaseAdminConfig = {
  credential: cert({
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID!,
    clientEmail: process.env.NEXT_FIREBASE_CLIENT_EMAIL!,
    privateKey: process.env.NEXT_FIREBASE_PRIVATE_KEY!.replace(/\\n/g, "\n"),
  }),
};

const app = !getApps().length ? initializeApp(firebaseAdminConfig) : getApps()[0];
export const adminAuth = getAuth(app);

