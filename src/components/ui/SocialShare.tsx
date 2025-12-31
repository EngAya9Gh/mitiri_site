'use client';

type Props = {
    url: string;
    title: string;
    label: string;
};

export default function SocialShare({ url, title, label }: Props) {
    const encodedUrl = encodeURIComponent(url);
    const encodedTitle = encodeURIComponent(title);

    const shareLinks = [
        {
            name: 'Twitter',
            icon: '𝕏',
            url: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
            color: '#000000'
        },
        {
            name: 'Facebook',
            icon: 'f',
            url: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
            color: '#1877F2'
        },
        {
            name: 'LinkedIn',
            icon: 'in',
            url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
            color: '#0A66C2'
        }
    ];

    return (
        <div style={{ marginTop: '60px', paddingTop: '40px', borderTop: '1px solid #F1F5F9' }}>
            <h4 style={{ marginBottom: '20px', color: 'var(--color-secondary)', fontWeight: '800' }}>{label}</h4>
            <div style={{ display: 'flex', gap: '12px' }}>
                {shareLinks.map((link) => (
                    <a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            width: '45px',
                            height: '45px',
                            borderRadius: '12px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            background: link.color,
                            color: 'white',
                            textDecoration: 'none',
                            fontSize: '1.2rem',
                            fontWeight: 'bold',
                            transition: 'transform 0.2s ease'
                        }}
                        onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-3px)'}
                        onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                    >
                        {link.icon}
                    </a>
                ))}
            </div>
        </div>
    );
}
