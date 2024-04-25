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
]

async function main() {
    for (let item of dataCategory) {
        await prisma.category.create({
            data: item
        })
        console.log(`Created category: ${item.name}`)
    }

    process.exit(0)
}

main().catch(error => {
    console.error(error)
    process.exit(1)
}).finally(async () => {
    await prisma.$disconnect()
})