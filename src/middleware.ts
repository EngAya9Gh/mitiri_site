import { auth } from "@/auth";
import createMiddleware from 'next-intl/middleware';

const intlMiddleware = createMiddleware({
    // A list of all locales that are supported
    locales: ['en', 'ar'],

    // Used when no locale matches
    defaultLocale: 'en'
});

export default auth((req) => {
    // NextAuth handles the authorized callback first.
    // If it returns false, it redirects to the login page defined in auth.ts.
    // If it returns true, we proceed to intlMiddleware.
    return intlMiddleware(req);
});

export const config = {
    // Match all pathnames except for
    // - API routes
    // - Static files (_next/static, _next/image, public files like favicon.ico)
    matcher: ['/((?!api|_next/static|_next/image|.*\\.svg|.*\\.png|.*\\.jpg|favicon\\.ico).*)']
};
