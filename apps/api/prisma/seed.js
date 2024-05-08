const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient();

const dataCategory = [
    {
        name: "Solo Concert"
    },
    {
        name: "Festival Concert"
    },
    {
        name: "Orchestral Concert"
    },
    {
        name: "Band/Group Concert"
    },
    {
        name: "EDM Concert"
    }
];

const dataRole = [
    {
        name: "participant"
    },
    {
        name: "event organizer"
    }
];

const dataUser = [
    {
        email: 'gee1@gmail.com',
        fullname: 'gee1',  
        password: 'gee1',   
        pointsBalance: 10000,
        code: 'gee1',          
        roleId: 1    
    },
    {
        email: 'gee2@gmail.com',
        fullname: 'gee2',  
        password: 'gee2',   
        pointsBalance: 10000,
        code: 'gee2',          
        roleId: 2    
    }
];

async function main() {
    for (let item of dataCategory) {
        await prisma.category.create({
            data: item
        });
        console.log(`Created category: ${item.name}`);
    }

    for (let item of dataRole) {
        await prisma.role.create({
            data: item
        });
        console.log(`Created Role: ${item.name}`);
    }

    for (let item of dataUser) {
        await prisma.user.create({
            data: item
        });
        console.log(`Created User: ${item.email}`);
    }

    await prisma.$disconnect();
    process.exit(0);
}

main().catch(error => {
    console.error(error);
    process.exit(1);
});
