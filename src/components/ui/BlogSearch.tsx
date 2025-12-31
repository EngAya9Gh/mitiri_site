'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function BlogSearch({ placeholder, locale }: { placeholder: string, locale: string }) {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [query, setQuery] = useState(searchParams.get('q') || '');

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            const params = new URLSearchParams(searchParams);
            if (query) {
                params.set('q', query);
                params.set('page', '1');
            } else {
                params.delete('q');
            }
            router.push(`/${locale}/blog?${params.toString()}`);
        }, 500);

        return () => clearTimeout(delayDebounceFn);
    }, [query, router, locale, searchParams]);

    return (
        <div style={{ marginBottom: '60px', maxWidth: '600px', marginInline: 'auto' }}>
            <div style={{ position: 'relative' }}>
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder={placeholder}
                    style={{
                        width: '100%',
                        padding: '18px 24px',
                        borderRadius: '20px',
                        border: '2px solid #F1F5F9',
                        fontSize: '1.1rem',
                        fontWeight: '500',
                        outline: 'none',
                        transition: 'all 0.3s ease',
                        boxShadow: '0 10px 25px rgba(0,0,0,0.03)',
                        background: 'white'
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--color-primary)'}
                    onBlur={(e) => e.target.style.borderColor = '#F1F5F9'}
                />
                <div style={{
                    position: 'absolute',
                    right: locale === 'en' ? '24px' : 'auto',
                    left: locale === 'ar' ? '24px' : 'auto',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    fontSize: '1.4rem'
                }}>
                    🔍
                </div>
            </div>
        </div>
    );
}
