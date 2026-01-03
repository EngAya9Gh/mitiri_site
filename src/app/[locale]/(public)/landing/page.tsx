'use client';

import { useTranslations } from 'next-intl';
import { useActionState } from 'react';
import { submitLeadForm } from '@/actions/lead';
import CountrySelector from '@/components/ui/CountrySelector';


const initialState = {
    message: '',
    errors: {},
};

export default function LandingPage() {
    const t = useTranslations('LeadForm');
    const [state, formAction] = useActionState(submitLeadForm, initialState);

    return (
        <div style={{
            minHeight: '90vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '8rem 1rem 4rem',
            color: 'var(--text-main)',
            background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)'
        }}>
            <div className="container" style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 350px), 1fr))',
                gap: 'clamp(2rem, 8vw, 6rem)',
                alignItems: 'center'
            }}>

                {/* Value Proposition */}
                <div className="animate-fade-in" style={{ textAlign: 'start' }}>
                    <h1 style={{
                        fontSize: 'clamp(2rem, 8vw, 3.5rem)',
                        marginBottom: '1.5rem',
                        background: 'linear-gradient(to right, var(--color-primary), var(--color-secondary))',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        fontWeight: 900,
                        lineHeight: 1.1
                    }}>
                        Protect Your Business & Intellectual Property
                    </h1>
                    <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', marginBottom: '2.5rem', lineHeight: '1.7', maxWidth: '500px' }}>
                        Expert legal counsel for commercial law, corporate restructuring, and trademark protection. Led by Attorney Ghayth G. Mitri.
                    </p>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <li style={{ padding: '0.5rem 0', display: 'flex', alignItems: 'center', gap: '15px', fontSize: '1.1rem', fontWeight: 600 }}>
                            <span style={{ color: 'var(--color-primary)', fontSize: '1.2rem' }}>⚖️</span> Commercial & Corporate Law
                        </li>
                        <li style={{ padding: '0.5rem 0', display: 'flex', alignItems: 'center', gap: '15px', fontSize: '1.1rem', fontWeight: 600 }}>
                            <span style={{ color: 'var(--color-primary)', fontSize: '1.2rem' }}>🛡️</span> Intellectual Property Protection
                        </li>
                        <li style={{ padding: '0.5rem 0', display: 'flex', alignItems: 'center', gap: '15px', fontSize: '1.1rem', fontWeight: 600 }}>
                            <span style={{ color: 'var(--color-primary)', fontSize: '1.2rem' }}>📄</span> Strategic Legal Consultation
                        </li>
                    </ul>
                </div>

                {/* Lead Form */}
                <div className="glass-card animate-fade-in" style={{
                    background: 'white',
                    padding: 'clamp(1.5rem, 5vw, 3rem)',
                    borderRadius: '32px',
                    boxShadow: '0 40px 100px -20px rgba(0,0,0,0.1)',
                    border: '1px solid #e2e8f0'
                }}>
                    <h2 style={{ marginBottom: '2rem', textAlign: 'center', color: '#1E293B', fontSize: '1.8rem', fontWeight: 800 }}>{t('title') || 'Book a Consultation'}</h2>

                    {state.message === 'success' ? (
                        <div style={{ textAlign: 'center', padding: '2rem', background: '#f0fff4', borderRadius: '24px', color: '#22543d', border: '1px solid #c6f6d5' }}>
                            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✅</div>
                            <h3 style={{ marginBottom: '0.5rem', fontWeight: 800 }}>Thank You!</h3>
                            <p>We will review your request and contact you shortly.</p>
                        </div>
                    ) : (
                        <form action={formAction} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div>
                                <label htmlFor="name" style={{ display: 'block', marginBottom: '0.6rem', fontWeight: 700, color: '#1E293B' }}>{t('name')}</label>
                                <input type="text" id="name" name="name" required
                                    placeholder="Full Name"
                                    style={{
                                        width: '100%',
                                        padding: '1.1rem',
                                        borderRadius: '16px',
                                        border: '1px solid #e2e8f0',
                                        background: '#f8fafc',
                                        color: '#111',
                                        fontSize: '1rem',
                                        outlineColor: 'var(--color-primary)'
                                    }}
                                />
                            </div>

                            <div>
                                <label htmlFor="phone" style={{ display: 'block', marginBottom: '0.6rem', fontWeight: 700, color: '#1E293B' }}>{t('phone')}</label>
                                <div style={{ display: 'flex', gap: '10px' }}>
                                    <CountrySelector name="countryCode" defaultValue="+963" />
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        required
                                        placeholder="11 4445 441"
                                        style={{
                                            flex: 1,
                                            padding: '1.1rem',
                                            borderRadius: '16px',
                                            border: '1px solid #e2e8f0',
                                            background: '#f8fafc',
                                            color: '#111',
                                            fontSize: '1rem',
                                            outlineColor: 'var(--color-primary)'
                                        }}
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="email" style={{ display: 'block', marginBottom: '0.6rem', fontWeight: 700, color: '#1E293B' }}>
                                    {t('email')} <span style={{ fontSize: '0.85rem', color: '#64748B', fontWeight: 400 }}>({t('optional')})</span>
                                </label>
                                <input type="email" id="email" name="email"
                                    placeholder="email@example.com"
                                    style={{
                                        width: '100%',
                                        padding: '1.1rem',
                                        borderRadius: '16px',
                                        border: '1px solid #e2e8f0',
                                        background: '#f8fafc',
                                        color: '#111',
                                        fontSize: '1rem',
                                        outlineColor: 'var(--color-primary)'
                                    }}
                                />
                            </div>

                            <button type="submit" className="btn-primary" style={{
                                width: '100%',
                                padding: '1.2rem',
                                fontSize: '1.2rem',
                                fontWeight: 800,
                                borderRadius: '16px',
                                marginTop: '1rem',
                                boxShadow: '0 20px 40px var(--color-primary-glow)'
                            }}>
                                {t('submit')}
                            </button>

                            {state.message && state.message !== 'success' && (
                                <p style={{ color: '#ef4444', textAlign: 'center', fontWeight: 600 }}>{state.message}</p>
                            )}
                        </form>
                    )}
                </div>

            </div>
        </div>
    );
}
