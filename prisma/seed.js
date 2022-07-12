//! DO NOT MIGRATE THE SAME THING IT WILL DUPLICATE 
//! COMMENT IT OUT FIRST FOR NOW

const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

// seed data
const produceData = [
  {
    produce_id: 1,
    category: "meat",
    produce_name: "chicken breast",
    weight: 500,
  },
  {
    produce_id: 2,
    category: "meat",
    produce_name: "pork tenderloin fillet",
    weight: 600,
  },
  {
    produce_id: 3,
    category: "meat",
    produce_name: "beef fillet",
    weight: 400,
  },
  {
    produce_id: 4,
    category: "meat",
    produce_name: "chicken thigh",
    weight: 500,
  },
  {
    produce_id: 5,
    category: "fruit",
    produce_name: "banana",
    weight: 500,
  },
  {
    produce_id: 6,
    category: "fruit",
    produce_name: "orange",
    weight: 400,
  },
  {
    produce_id: 7,
    category: "fruit",
    produce_name: "blueberries",
    weight: 300,
  },
  {
    produce_id: 8,
    category: "fruit",
    produce_name: "avocado",
    weight: 400,
  },
  {
    produce_id: 9,
    category: "vegetable",
    produce_name: "spinach",
    weight: 300,
  },
  {
    produce_id: 10,
    category: "vegetable",
    produce_name: "corn",
    weight: 600,
  },
  {
    produce_id: 11,
    category: "vegetable",
    produce_name: "sweet potato",
    weight: 700,
  },
  {
    produce_id: 12,
    category: "vegetable",
    produce_name: "mushrooms",
    weight: 400,
  },
  {
    produce_id: 13,
    category: "snack",
    produce_name: "nuts mix",
    weight: 250,
  },
  {
    produce_id: 14,
    category: "snack",
    produce_name: "greek yogurt",
    weight: 350,
  },
  {
    produce_id: 15,
    category: "snack",
    produce_name: "cheese crackers",
    weight: 150,
  },
];

const plansData = [
    {
        plan_name: "The Hungry One",
        price_per_month: 36,
        plan_img: "https://i.imgur.com/wPnQzBw.jpg"
    },
    {
        plan_name: "Hungry Together",
        price_per_month: 44,
        plan_img: "https://i.imgur.com/aGEH6HA.jpg"
    },
    {
        plan_name: "Hungry Family",
        price_per_month: 62,
        plan_img: "https://i.imgur.com/az9FWhp.jpg"
    }
]

const listData = [
  {
    list_id: 1,
    plan_id: 1,
    produce_id: 1,
  },
  {
    list_id: 2,
    plan_id: 1,
    produce_id: 2,
  },
  {
    list_id: 3,
    plan_id: 1,
    produce_id: 5,
  },
  {
    list_id: 4,
    plan_id: 1,
    produce_id: 6,
  },
  {
    list_id: 5,
    plan_id: 1,
    produce_id: 9,
  },
  {
    list_id: 6,
    plan_id: 1,
    produce_id: 10,
  },
  {
    list_id: 7,
    plan_id: 1,
    produce_id: 13,
  },
  {
    list_id: 8,
    plan_id: 1,
    produce_id: 14,
  },
  {
    list_id: 9,
    plan_id: 2,
    produce_id: 1,
  },
  {
    list_id: 10,
    plan_id: 2,
    produce_id: 2,
  },
  {
    list_id: 11,
    plan_id: 2,
    produce_id: 5,
  },
  {
    list_id: 12,
    plan_id: 2,
    produce_id: 6,
  },
  {
    list_id: 13,
    plan_id: 2,
    produce_id: 9,
  },
  {
    list_id: 14,
    plan_id: 2,
    produce_id: 10,
  },
  {
    list_id: 15,
    plan_id: 2,
    produce_id: 13,
  },
  {
    list_id: 16,
    plan_id: 2,
    produce_id: 14,
  },
  {
    list_id: 17,
    plan_id: 2,
    produce_id: 3,
  },
  {
    list_id: 18,
    plan_id: 2,
    produce_id: 7,
  },
  {
    list_id: 19,
    plan_id: 2,
    produce_id: 11,
  },
  {
    list_id: 20,
    plan_id: 3,
    produce_id: 1,
  },
  {
    list_id: 21,
    plan_id: 3,
    produce_id: 2,
  },
  {
    list_id: 22,
    plan_id: 3,
    produce_id: 5,
  },
  {
    list_id: 23,
    plan_id: 3,
    produce_id: 6,
  },
  {
    list_id: 24,
    plan_id: 3,
    produce_id: 9,
  },
  {
    list_id: 25,
    plan_id: 3,
    produce_id: 10,
  },
  {
    list_id: 26,
    plan_id: 3,
    produce_id: 13,
  },
  {
    list_id: 27,
    plan_id: 3,
    produce_id: 14,
  },
  {
    list_id: 28,
    plan_id: 3,
    produce_id: 3,
  },
  {
    list_id: 29,
    plan_id: 3,
    produce_id: 7,
  },
  {
    list_id: 30,
    plan_id: 3,
    produce_id: 11,
  },
  {
    list_id: 31,
    plan_id: 3,
    produce_id: 4,
  },
  {
    list_id: 32,
    plan_id: 3,
    produce_id: 8,
  },
  {
    list_id: 33,
    plan_id: 3,
    produce_id: 12,
  },
  {
    list_id: 34,
    plan_id: 3,
    produce_id: 15,
  }
]

async function main() {
  console.log(`Start seeding ...`);
  // for (const p of produceData) {
  //   // await prisma.produce.deleteMany({});
  //   const produce = await prisma.produce.create({
  //     data: p,
  //   });
  //   console.log(`Created produce with id: ${produce.produce_id}`);
  // }
  for (const l of listData) {
    const list = await prisma.list.create({
      data: l,
    })
    console.log(`Created list with id: ${list.list_id}`);
  }
  // for (const pl of plansData) {
  //   //   await prisma.plans.deleteMany({});
  //     const plans = await prisma.plans.create({
  //         data: pl
  //       });
  //       console.log(`Created plan with id: ${plans.plan_id}`);
  //   }
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
