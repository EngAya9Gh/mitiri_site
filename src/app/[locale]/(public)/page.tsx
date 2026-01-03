import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/routing';
import Image from 'next/image';
import Reveal from '@/components/ui/Reveal';

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'HomePage' });
    const statsT = await getTranslations({ locale, namespace: 'Stats' });
    const servicesT = await getTranslations({ locale, namespace: 'Services' });
    const testT = await getTranslations({ locale, namespace: 'Testimonials' });
    const ctaT = await getTranslations({ locale, namespace: 'HomeCTA' });

    const services = [
        { key: 'webDev', icon: '🏢', color: 'var(--color-primary)', image: '/hero.png' },
        { key: 'mobile', icon: '📄', color: 'var(--color-secondary)', image: '/mobile-app.png' },
        { key: 'ai', icon: '⚖️', color: 'var(--color-accent)', image: '/ai-service.png' },
        { key: 'marketing', icon: '🛡️', color: '#1E293B', image: '/marketing.png' }
    ];

    const stats = [
        { val: '150+', label: statsT('projects') },
        { val: statsT('roots'), label: statsT('excellence') },
        { val: '99.9%', label: statsT('reliability') },
        { val: statsT('topTier'), label: statsT('support') }
    ];

    return (
        <main>
            {/* Hero Section - Immersive Full-Width Design */}
            <section style={{
                height: '92vh',
                width: '100%',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                overflow: 'hidden',
                color: 'var(--color-secondary)',
                background: '#fcfcfc',
                padding: 0
            }}>
                {/* Background Image / Pattern Area */}
                <div style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    width: '55%',
                    height: '100%',
                    zIndex: 0,
                    clipPath: locale === 'en' ? 'polygon(15% 0, 100% 0, 100% 100%, 0% 100%)' : 'polygon(0 0, 85% 0, 100% 100%, 0% 100%)',
                    display: typeof window !== 'undefined' && window.innerWidth < 1024 ? 'none' : 'block'
                }} className="hero-image-clip">
                    <Image
                        src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=80&w=1200"
                        alt="MITRI IP & Law Office"
                        fill
                        style={{ objectFit: 'cover' }}
                        priority
                    />
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'linear-gradient(90deg, #fcfcfc 0%, rgba(252, 252, 252, 0) 100%)',
                        zIndex: 1
                    }}></div>
                </div>

                <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                    <div className="animate-fade-in" style={{ maxWidth: '650px', textAlign: locale === 'ar' ? 'right' : 'left' }}>
                        <div style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '12px',
                            padding: '10px 20px',
                            background: 'white',
                            border: '1px solid #e2e8f0',
                            borderRadius: '100px',
                            color: 'var(--color-primary)',
                            fontWeight: '700',
                            fontSize: '0.85rem',
                            textTransform: 'uppercase',
                            letterSpacing: '2px',
                            marginBottom: '32px',
                            boxShadow: '0 4px 12px rgba(0,0,0,0.03)'
                        }}>
                            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--color-primary)' }}></span>
                            {t('getStarted')}
                        </div>

                        <h1 style={{
                            fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                            lineHeight: 1.1,
                            fontWeight: '950',
                            letterSpacing: '-2px',
                            marginBottom: '32px',
                            color: 'var(--color-secondary)'
                        }}>
                            {t('title').split(' ').map((word, i) => (
                                <span key={i} style={{ display: 'inline-block' }}>
                                    {i === 1 ? <span style={{ color: 'var(--color-primary)' }}>{word}</span> : word}
                                    &nbsp;
                                </span>
                            ))}
                        </h1>

                        <p style={{
                            fontSize: '1.25rem',
                            lineHeight: 1.6,
                            marginBottom: '48px',
                            color: 'var(--text-muted)',
                            fontWeight: '500',
                            maxWidth: '550px'
                        }}>
                            {t('subtitle')}
                        </p>

                        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: locale === 'ar' ? 'flex-start' : 'flex-start' }}>
                            <Link href="/contact" className="btn-primary" style={{
                                padding: '18px 48px',
                                fontSize: '1.1rem',
                                borderRadius: '12px',
                            }}>
                                {t('contact')}
                            </Link>
                            <Link href="/services" className="btn-secondary" style={{
                                padding: '18px 48px',
                                fontSize: '1.1rem',
                                borderRadius: '12px',
                                background: 'white',
                                color: 'var(--color-secondary)',
                                border: '1px solid #e2e8f0'
                            }}>
                                {t('services')}
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Bottom Scroll Indicator */}
                <div style={{
                    position: 'absolute',
                    bottom: '40px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    zIndex: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '12px'
                }}>
                    <div style={{ width: '2px', height: '60px', background: 'linear-gradient(to bottom, var(--color-primary), transparent)' }}></div>
                </div>
            </section>

            {/* Stats - More Consistent Alignment */}
            <section style={{ padding: '80px 0', background: 'white', borderTop: '1px solid #F1F5F9' }}>
                <div className="container">
                    <div className="stats-grid">
                        {stats.map((stat, i) => (
                            <div key={i} className="animate-fade-in" style={{
                                animationDelay: `${i * 0.1}s`,
                                padding: '20px',
                                borderRight: locale === 'en' && i < stats.length - 1 ? '1px solid #F1F5F9' : 'none',
                                borderLeft: locale === 'ar' && i < stats.length - 1 ? '1px solid #F1F5F9' : 'none',
                                textAlign: 'center'
                            }}>
                                <div style={{
                                    fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                                    fontWeight: '950',
                                    color: 'var(--color-secondary)',
                                    marginBottom: '8px',
                                    letterSpacing: '-2px',
                                    lineHeight: 1
                                }}>
                                    {stat.val}
                                </div>
                                <div style={{
                                    fontSize: '0.85rem',
                                    color: 'var(--text-muted)',
                                    fontWeight: '800',
                                    textTransform: 'uppercase',
                                    letterSpacing: '2px'
                                }}>
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Grid - Modern & Attractive */}
            <section style={{
                background: 'linear-gradient(180deg, #F8FAFC 0%, #FFFFFF 100%)',
                padding: '140px 0',
                position: 'relative',
                overflow: 'hidden'
            }}>
                {/* Decorative Elements */}
                <div style={{
                    position: 'absolute',
                    top: '10%',
                    right: '-5%',
                    width: '400px',
                    height: '400px',
                    background: 'var(--color-primary)',
                    opacity: 0.03,
                    filter: 'blur(100px)',
                    borderRadius: '50%',
                    zIndex: 0
                }}></div>
                <div style={{
                    position: 'absolute',
                    bottom: '10%',
                    left: '-5%',
                    width: '400px',
                    height: '400px',
                    background: 'var(--color-accent)',
                    opacity: 0.03,
                    filter: 'blur(100px)',
                    borderRadius: '50%',
                    zIndex: 0
                }}></div>

                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <div style={{ textAlign: 'center', marginBottom: '100px' }}>
                        <div style={{
                            color: 'var(--color-primary)',
                            fontWeight: '800',
                            fontSize: '1rem',
                            textTransform: 'uppercase',
                            letterSpacing: '3px',
                            marginBottom: '16px'
                        }}>
                            {t('services')}
                        </div>
                        <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: '950', marginBottom: '24px', color: 'var(--color-secondary)', letterSpacing: '-2px' }}>
                            {t('services')}
                        </h2>
                        <p style={{ color: 'var(--text-muted)', fontSize: '1.4rem', maxWidth: '850px', margin: '0 auto', fontWeight: '500', lineHeight: 1.6 }}>
                            {t('servicesDesc')}
                        </p>
                    </div>

                    <div className="services-grid-home-row" style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(4, 1fr)',
                        gap: '24px'
                    }}>
                        {services.map((s, i) => (
                            <Reveal key={s.key}>
                                <div className="service-card-modern" style={{ animationDelay: `${i * 0.1}s` }}>
                                    {/* Icon Background Circle */}
                                    <div className="icon-box" style={{
                                        background: `${s.color}08`,
                                        color: s.color,
                                        border: `1px solid ${s.color}15`
                                    }}>
                                        {s.icon}
                                    </div>

                                    <div>
                                        <h3 style={{ fontSize: '1.6rem', fontWeight: '900', marginBottom: '16px', color: 'var(--color-secondary)', letterSpacing: '-0.5px' }}>
                                            {servicesT(s.key as any)}
                                        </h3>
                                        <p style={{ color: 'var(--text-muted)', lineHeight: '1.7', fontSize: '1.05rem', fontWeight: '500', marginBottom: '8px' }}>
                                            {servicesT(`${s.key}Desc` as any)}
                                        </p>
                                    </div>

                                    <div style={{ marginTop: 'auto' }}>
                                        <Link href="/services" style={{
                                            color: s.color,
                                            fontWeight: '800',
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            gap: '12px',
                                            fontSize: '1rem',
                                            textTransform: 'uppercase',
                                            letterSpacing: '1px',
                                            transition: 'all 0.3s ease'
                                        }}>
                                            {t('viewService')} <span style={{ fontSize: '1.2rem' }}>{locale === 'en' ? '→' : '←'}</span>
                                        </Link>
                                    </div>

                                    {/* Decorative numbering */}
                                    <div style={{
                                        position: 'absolute',
                                        top: '20px',
                                        right: '30px',
                                        fontSize: '4rem',
                                        fontWeight: '900',
                                        color: '#000',
                                        opacity: 0.02,
                                        pointerEvents: 'none'
                                    }}>
                                        0{i + 1}
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials - Marquee */}
            <section style={{ padding: '140px 0', background: 'var(--color-secondary)', color: 'white', overflow: 'hidden' }}>
                <div className="container" style={{ textAlign: 'center', marginBottom: '100px' }}>
                    <h2 style={{ fontSize: 'clamp(3rem, 6vw, 4.5rem)', fontWeight: '950', letterSpacing: '-2px' }}>{testT('title')}</h2>
                </div>

                <div className="marquee-container">
                    {[1, 2, 3, 1, 2, 3].map((num, i) => (
                        <div key={i} style={{
                            width: '550px',
                            minWidth: '550px',
                            padding: '60px',
                            borderRadius: '48px',
                            background: 'rgba(255,255,255,0.03)',
                            border: '1px solid rgba(255,255,255,0.08)'
                        }}>
                            <div style={{ color: '#FBBF24', fontSize: '1.5rem', marginBottom: '32px' }}>★★★★★</div>
                            <p style={{ fontSize: '1.4rem', lineHeight: '1.8', marginBottom: '48px', fontWeight: '500', opacity: 0.9 }}>
                                "{testT(`${num}.quote` as any)}"
                            </p>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                                <div style={{
                                    width: '64px',
                                    height: '64px',
                                    borderRadius: '50%',
                                    background: 'var(--color-primary)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontWeight: '950',
                                    fontSize: '1.4rem'
                                }}>
                                    {testT(`${num}.name` as any).charAt(0)}
                                </div>
                                <div>
                                    <h4 style={{ fontWeight: '900', fontSize: '1.3rem' }}>{testT(`${num}.name` as any)}</h4>
                                    <p style={{ fontSize: '1rem', opacity: 0.5, fontWeight: '700' }}>{testT(`${num}.role` as any)}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA Section - Translated */}
            <section style={{ padding: '160px 1.5rem', textAlign: 'center', background: 'white' }}>
                <div className="container" style={{ maxWidth: '1000px' }}>
                    <h2 style={{ fontSize: 'clamp(2.5rem, 8vw, 4.5rem)', fontWeight: '950', marginBottom: '32px', color: 'var(--color-secondary)', letterSpacing: '-3px' }}>
                        {ctaT('title')}
                    </h2>
                    <p style={{ fontSize: '1.4rem', fontWeight: '500', marginBottom: '64px', color: 'var(--text-muted)', lineHeight: 1.6, maxWidth: '800px', marginInline: 'auto' }}>
                        {ctaT('subtitle')}
                    </p>
                    <Link href="/contact" className="btn-primary" style={{
                        padding: '24px 72px',
                        fontSize: '1.4rem',
                        borderRadius: '20px',
                        boxShadow: '0 30px 60px -10px var(--color-primary-glow)'
                    }}>
                        {ctaT('button')}
                    </Link>
                </div>
            </section>
        </main>
    );
}
