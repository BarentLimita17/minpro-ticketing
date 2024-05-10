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

const dataLocation = [
    {
        name: "Jakarta Convention Center",
        city: "Jakarta",
        details: "Plenary Hall",
        street: "JL. Gatot Subroto No.1 RT.1/RW.3",
        zipCode: "10270",
    },
    {
        name: "Stadion Merdeka",
        city: "Gorontalo",
        details: "Stadion Merdeka",
        street: "JL. Drs. Achmad Nadjamuddin No. 35",
        zipCode: "96138",
    }
]

const dataRole = [
    {
        name: "Customer"
    },
    {
        name: "Event Organizer"
    }
]


async function main() {

    for (let item of dataRole) {
        await prisma.role.create({
            data: item
        })
        console.log(`Created role: ${item.name}`)
    }

    for (let item of dataUser) {
        await prisma.user.create({
            data: item
        })
        console.log(`Created user: ${item.email}`)
    }
    for (let item of dataCategory) {
        await prisma.category.create({
            data: item
        });
        console.log(`Created category: ${item.name}`);
    }

    for (let item of dataLocation) {
        await prisma.location.create({
            data: item
        })
        console.log(`Created location: ${item.name}`)
    }
    process.exit(0)
}

main().catch(error => {
    console.error(error)
    process.exit(1)
}).finally(async () => {
    await prisma.$disconnect()
})
