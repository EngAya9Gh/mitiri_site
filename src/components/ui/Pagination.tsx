'use client';

import { Link } from '@/i18n/routing';
import { useSearchParams } from 'next/navigation';

type Props = {
    totalPages: number;
    currentPage: number;
    locale: string;
    prevLabel: string;
    nextLabel: string;
};

export default function Pagination({ totalPages, currentPage, locale, prevLabel, nextLabel }: Props) {
    const searchParams = useSearchParams();

    const createPageURL = (pageNumber: number | string) => {
        const params = new URLSearchParams(searchParams);
        params.set('page', pageNumber.toString());
        return `/blog?${params.toString()}`;
    };

    if (totalPages <= 1) return null;

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '12px',
            marginTop: '80px'
        }}>
            {currentPage > 1 && (
                <Link
                    href={createPageURL(currentPage - 1)}
                    style={{
                        padding: '12px 24px',
                        borderRadius: '12px',
                        background: 'white',
                        border: '1px solid #F1F5F9',
                        color: 'var(--color-secondary)',
                        textDecoration: 'none',
                        fontWeight: '700',
                        fontSize: '0.95rem',
                        transition: 'all 0.2s ease'
                    }}
                >
                    {locale === 'en' ? '← ' : ' → '}{prevLabel}
                </Link>
            )}

            <div style={{ display: 'flex', gap: '8px' }}>
                {[...Array(totalPages)].map((_, i) => {
                    const page = i + 1;
                    const isCurrent = page === currentPage;
                    return (
                        <Link
                            key={page}
                            href={createPageURL(page)}
                            style={{
                                width: '45px',
                                height: '45px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: '12px',
                                background: isCurrent ? 'var(--color-primary)' : 'white',
                                border: '1px solid #F1F5F9',
                                color: isCurrent ? 'white' : 'var(--color-secondary)',
                                textDecoration: 'none',
                                fontWeight: '800',
                                transition: 'all 0.2s ease'
                            }}
                        >
                            {page}
                        </Link>
                    );
                })}
            </div>

            {currentPage < totalPages && (
                <Link
                    href={createPageURL(currentPage + 1)}
                    style={{
                        padding: '12px 24px',
                        borderRadius: '12px',
                        background: 'white',
                        border: '1px solid #F1F5F9',
                        color: 'var(--color-secondary)',
                        textDecoration: 'none',
                        fontWeight: '700',
                        fontSize: '0.95rem',
                        transition: 'all 0.2s ease'
                    }}
                >
                    {nextLabel}{locale === 'en' ? ' →' : ' ←'}
                </Link>
            )}
        </div>
    );
}
