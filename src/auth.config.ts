import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
    pages: {
        signIn: '/admin/login',
    },
    callbacks: {
        authorized({ auth, request: { nextUrl } }) {
            const isLoggedIn = !!auth?.user;
            const isOnAdmin = nextUrl.pathname.includes('/admin');
            const isOnLoginPage = nextUrl.pathname.includes('/admin/login');

            if (isOnAdmin && !isOnLoginPage) {
                if (isLoggedIn) return true;
                return false; // Redirect to login
            }
            return true;
        },
        async jwt({ token, user }) {
            if (user) {
                token.role = user.role;
            }
            return token;
        },
        async session({ session, token }) {
            if (token?.role) {
                session.user.role = token.role as string;
            }
            return session;
        }
    },
    providers: [], // سنضيف الـ Providers في ملف auth.ts فقط
} satisfies NextAuthConfig;
