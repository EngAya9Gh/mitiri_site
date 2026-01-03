import { Link } from '@/i18n/routing';
import { getTranslations } from 'next-intl/server';
import Logo from '@/components/common/Logo';
import prisma from '@/lib/prisma';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default async function Footer({ locale }: { locale: string }) {
    const t = await getTranslations({ locale, namespace: 'Footer' });
    const settings = await prisma.siteSettings.findFirst({ where: { id: 1 } });

    const socialLinks = [
        { icon: <Linkedin size={20} />, url: settings?.linkedin, name: 'LinkedIn' },
        { icon: <Twitter size={20} />, url: settings?.twitter, name: 'Twitter' },
        { icon: <Instagram size={20} />, url: settings?.instagram, name: 'Instagram' },
        { icon: <Facebook size={20} />, url: settings?.facebook, name: 'Facebook' },
    ].filter(link => link.url);

    return (
        <footer style={{
            background: 'var(--color-secondary)',
            padding: '100px 0 40px',
            color: 'white',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Background Accent - Circle */}
            <div style={{
                position: 'absolute',
                bottom: '-5%',
                left: '-5%',
                width: '400px',
                height: '400px',
                background: 'var(--color-silver-metallic)',
                opacity: 0.04,
                borderRadius: '50%',
                zIndex: 0
            }}></div>

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '4rem',
                    marginBottom: '6rem'
                }}>
                    {/* Brand Info */}
                    <div style={{ gridColumn: 'span 1', display: 'flex', flexDirection: 'column', alignItems: locale === 'ar' ? 'center' : 'flex-start', textAlign: locale === 'ar' ? 'center' : 'left' }}>
                        <div style={{ marginBottom: '2rem' }}>
                            <Logo color="light" />
                        </div>
                        <p style={{
                            color: 'rgba(255,255,255,0.7)',
                            lineHeight: '1.8',
                            fontSize: '1.1rem',
                            marginBottom: '3rem',
                            maxWidth: '400px'
                        }}>
                            {locale === 'ar'
                                ? 'نحمي حقوقكم ومصالحكم التجارية بخبرة قانونية متكاملة. شريككم القانوني الموثوق في دمشق والشرق الأوسط.'
                                : 'Protecting your rights and business interests with integrated legal expertise. Your trusted legal partner in Damascus and the Middle East.'}
                        </p>

                        <div style={{ display: 'flex', gap: '1.2rem' }}>
                            {socialLinks.map(link => (
                                <a key={link.name} href={link.url || '#'} target="_blank" rel="noopener noreferrer" className="social-icon" aria-label={link.name}>
                                    {link.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 style={{ fontSize: '1.25rem', fontWeight: '800', marginBottom: '2.5rem', borderBottom: '2px solid var(--color-primary)', display: 'inline-block', paddingBottom: '0.5rem' }}>
                            {t('company')}
                        </h4>
                        <nav style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                            <Link href="/about" className="footer-link">{t('aboutUs')}</Link>
                            <Link href="/services" className="footer-link">{t('services')}</Link>
                            <Link href="/blog" className="footer-link">{t('blog')}</Link>
                            <Link href="/contact" className="footer-link">{t('contact')}</Link>
                        </nav>
                    </div>

                    {/* Office Contact Info */}
                    <div>
                        <h4 style={{ fontSize: '1.25rem', fontWeight: '800', marginBottom: '2.5rem', borderBottom: '2px solid var(--color-primary)', display: 'inline-block', paddingBottom: '0.5rem' }}>
                            {t('offices')}
                        </h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div>
                                <h5 style={{ fontWeight: '800', fontSize: '1rem', color: 'white', marginBottom: '0.5rem' }}>{t('syriaOffice')}</h5>
                                <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.7)', lineHeight: '1.6' }}>
                                    <span style={{ color: 'var(--color-primary)', marginRight: '10px' }}>📍</span>
                                    {locale === 'ar' ? 'دمشق، سوريا - ص.ب 35630' : 'P.O.Box: 35630 Damascus - Syria'}
                                </p>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.7)', direction: 'ltr', textAlign: locale === 'ar' ? 'right' : 'left' }}>
                                    <span style={{ color: 'var(--color-primary)', marginRight: '10px' }}>📞</span>
                                    +963 11 4445 441
                                </p>
                                <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.7)', direction: 'ltr', textAlign: locale === 'ar' ? 'right' : 'left' }}>
                                    <span style={{ color: 'var(--color-primary)', marginRight: '10px' }}>📱</span>
                                    +963 96 4445 441
                                </p>
                                <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.7)' }}>
                                    <span style={{ color: 'var(--color-primary)', marginRight: '10px' }}>✉</span>
                                    ghayth@mitrilawoffice.com
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: '2rem',
                    paddingTop: '3rem',
                    borderTop: '1px solid rgba(255,255,255,0.1)',
                    fontSize: '0.95rem',
                    fontWeight: '500',
                    color: 'rgba(255,255,255,0.5)'
                }}>
                    <p>© {new Date().getFullYear()} MITRI IP & Law Office. {t('allRights')}.</p>
                    <div style={{ display: 'flex', gap: '2rem' }}>
                        <a href="#" className="footer-link">Privacy Policy</a>
                        <a href="#" className="footer-link">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
