import NextAuth from "next-auth";
import { authConfig } from "./auth.config";
import createMiddleware from 'next-intl/middleware';
import { NextRequest } from "next/request";

const intlMiddleware = createMiddleware({
    locales: ['en', 'ar'],
    defaultLocale: 'en'
});

const { auth } = NextAuth(authConfig);

export default auth((req) => {
    // 1. الحماية (Authentication) تتم أولاً عبر النسخة المتوافقة مع الـ Edge
    // 2. إذا تمت الموافقة، يتم تشغيل نظام الترجمة (Localization)
    return intlMiddleware(req as any);
});

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|.*\\.svg|.*\\.png|.*\\.jpg|favicon\\.ico).*)']
};
