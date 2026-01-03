import React from 'react';
import Image from 'next/image';

type LogoProps = {
    color?: 'light' | 'dark';
    className?: string;
    usePng?: boolean;
};

export default function Logo({ color = 'dark', className, usePng = false }: LogoProps) {
    const src = usePng ? "/logo1.png" : "/logo.svg";

    return (
        <div className={className} style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ position: 'relative', height: '60px', width: '200px' }}>
                <Image
                    src={src}
                    alt="MITRI IP & Law Office"
                    fill
                    style={{
                        objectFit: 'contain',
                        filter: (color === 'light' && !usePng) ? 'brightness(0) invert(1)' : 'none'
                    }}
                    priority
                />
            </div>
        </div>
    );
}
