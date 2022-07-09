//! DO NOT MIGRATE THE SAME THING IT WILL DUPLICATE 
//! COMMENT IT OUT FIRST FOR NOW

const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

// seed data
const produceData = [
  {
    category: "meat",
    produce_name: "chicken breast",
    weight: 500,
  },
  {
    category: "meat",
    produce_name: "pork tenderloin fillet",
    weight: 600,
  },
  {
    category: "meat",
    produce_name: "beef fillet",
    weight: 400,
  },
  {
    category: "meat",
    produce_name: "chicken thigh",
    weight: 500,
  },
  {
    category: "fruit",
    produce_name: "banana",
    weight: 500,
  },
  {
    category: "fruit",
    produce_name: "orange",
    weight: 400,
  },
  {
    category: "fruit",
    produce_name: "blueberries",
    weight: 300,
  },
  {
    category: "fruit",
    produce_name: "avocado",
    weight: 400,
  },
  {
    category: "vegetable",
    produce_name: "spinach",
    weight: 300,
  },
  {
    category: "vegetable",
    produce_name: "corn",
    weight: 600,
  },
  {
    category: "vegetable",
    produce_name: "sweet potato",
    weight: 700,
  },
  {
    category: "vegetable",
    produce_name: "mushrooms",
    weight: 400,
  },
  {
    category: "snack",
    produce_name: "nuts mix",
    weight: 250,
  },
  {
    category: "snack",
    produce_name: "greek yogurt",
    weight: 350,
  },
  {
    category: "snack",
    produce_name: "cheese crackers",
    weight: 150,
  },
];

const plansData = [
    {
        plan_name: "The Hungry One",
        price_per_month: 36
    },
    {
        plan_name: "Hungry Together",
        price_per_month: 44
    },
    {
        plan_name: "Hungry Family",
        price_per_month: 62
    }
]

async function main() {
  console.log(`Start seeding ...`);
  for (const p of produceData) {
    // await prisma.produce.deleteMany({});
    const produce = await prisma.produce.create({
      data: p,
    });
    console.log(`Created produce with id: ${produce.produce_id}`);
  }
  for (const pl of plansData) {
    //   await prisma.plans.deleteMany({});
      const plans = await prisma.plans.create({
          data: pl
        });
        console.log(`Created plan with id: ${plans.plan_id}`);
    }
    console.log(`Seeding finished.`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });