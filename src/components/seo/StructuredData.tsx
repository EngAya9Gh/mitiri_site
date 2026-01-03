export default function StructuredData({ locale }: { locale: string }) {
    const data = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "MITRI IP & Law Office",
        "url": "https://mitrilawoffice.com",
        "logo": "https://mitrilawoffice.com/logo.png",
        "description": locale === 'ar'
            ? "مكتب متري للمحاماة والملكيه الفكرية - خبرة قانونية متخصصة في القانون التجاري وقانون الشركات في دمشق، سوريا."
            : "MITRI IP & Law Office - Leading law firm specializing in Commercial Law and Intellectual Property in Damascus, Syria.",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "P.O.Box: 35630",
            "addressLocality": "Damascus",
            "addressCountry": "SY"
        },
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+963-11-4445-441",
            "contactType": "customer service"
        }
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
    );
}
