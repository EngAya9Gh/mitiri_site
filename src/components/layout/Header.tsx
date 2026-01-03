'use client';

import { Link, usePathname, useRouter } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import { useState, useEffect } from 'react';
import Logo from '@/components/common/Logo';

export default function Header({ locale }: { locale: string }) {
    const t = useTranslations('Navigation');
    const pathname = usePathname();
    const router = useRouter();
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const switchLocale = (newLocale: string) => {
        router.replace(pathname, { locale: newLocale });
        setMenuOpen(false);
    };

    const navLinks: { href: any, label: string, active: boolean }[] = [
        { href: '/', label: t('home'), active: pathname === '/' },
        { href: '/services', label: t('services'), active: pathname === '/services' },
        { href: '/about', label: t('about'), active: pathname === '/about' },
        { href: '/blog', label: t('blog'), active: pathname.startsWith('/blog') },
    ];

    return (
        <header style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 1000,
            transition: 'all 0.3s ease',
            padding: scrolled ? '0.5rem 0' : '1rem 0',
            background: '#ffffff',
            borderBottom: '1px solid #f1f5f9',
            boxShadow: scrolled ? '0 10px 30px -10px rgba(0,0,0,0.05)' : 'none'
        }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                {/* Logo */}
                <Link href="/" style={{ textDecoration: 'none', transform: scrolled ? 'scale(0.95)' : 'scale(1)', transition: 'all 0.3s ease' }} onClick={() => setMenuOpen(false)}>
                    <Logo color="dark" usePng={true} />
                </Link>

                {/* Desktop Nav */}
                <nav style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }} className="nav-desktop">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            style={{
                                color: link.active ? 'var(--color-primary)' : '#47586D',
                                fontWeight: link.active ? '800' : '600',
                                fontSize: '0.9rem',
                                opacity: link.active ? 1 : 0.8,
                                transition: 'all 0.2s ease',
                                textTransform: 'uppercase',
                                letterSpacing: '1px'
                            }}
                            className="nav-link"
                        >
                            {link.label}
                        </Link>
                    ))}

                    <div style={{ width: '1px', height: '24px', background: '#e2e8f0', margin: '0 8px' }}></div>

                    <button
                        onClick={() => switchLocale(locale === 'en' ? 'ar' : 'en')}
                        style={{
                            background: 'transparent',
                            border: '1px solid #e2e8f0',
                            color: '#47586D',
                            padding: '6px 12px',
                            borderRadius: '8px',
                            cursor: 'pointer',
                            fontSize: '0.8rem',
                            fontWeight: '800',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            transition: 'all 0.2s'
                        }}
                    >
                        {locale === 'en' ? 'العربية' : 'ENGLISH'}
                    </button>

                    <Link href="/contact" className="btn-primary" style={{ padding: '0.8rem 2rem', borderRadius: '12px', fontSize: '0.9rem', fontWeight: 800 }}>
                        {t('contact')}
                    </Link>
                </nav>

                {/* Mobile Toggle */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    style={{
                        display: 'none',
                        background: 'none',
                        border: 'none',
                        fontSize: '1.8rem',
                        cursor: 'pointer',
                        color: 'var(--color-secondary)'
                    }}
                    className="mobile-only"
                >
                    {menuOpen ? '✕' : '☰'}
                </button>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div style={{
                    position: 'absolute',
                    top: '100%',
                    left: 0,
                    right: 0,
                    background: 'white',
                    padding: '2rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1.5rem',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                    borderBottom: '1px solid #f1f5f9'
                }}>
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setMenuOpen(false)}
                            style={{
                                fontSize: '1.1rem',
                                fontWeight: '700',
                                color: link.active ? 'var(--color-primary)' : 'var(--color-secondary)',
                                textTransform: 'uppercase'
                            }}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                        <button
                            onClick={() => switchLocale(locale === 'en' ? 'ar' : 'en')}
                            style={{ flex: 1, padding: '1rem', borderRadius: '12px', border: '1px solid #eee', fontWeight: '700' }}
                        >
                            {locale === 'en' ? 'العربية' : 'English'}
                        </button>
                        <Link href="/contact" onClick={() => setMenuOpen(false)} style={{ flex: 2 }} className="btn-primary">
                            {t('contact')}
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
}
