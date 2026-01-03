const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function main() {
    const hashedPassword = await bcrypt.hash('password', 10);

    // Create Admin User
    const admin = await prisma.user.upsert({
        where: { email: 'admin@mitri.com' },
        update: {},
        create: {
            email: 'admin@mitri.com',
            name: 'Admin',
            password: hashedPassword,
            role: 'ADMIN',
        },
    });

    console.log('Admin user created:', admin.email);

    // Initial Site Settings
    await prisma.siteSettings.upsert({
        where: { id: 1 },
        update: {},
        create: {
            id: 1,
            email: 'info@mitrilawoffice.com',
            phone_sy: '+963 11 4445 441',
        },
    });

    console.log('Initial site settings created.');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
