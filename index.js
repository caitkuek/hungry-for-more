//* dependencies
const express = require("express");
const cors = require("cors");
const session = require("express-session");
const { PrismaClient } = require("@prisma/client");
const res = require("express/lib/response");

//* config
const prisma = new PrismaClient();
const app = express();
const PORT = process.env.PORT;

//* middleware
app.use(express.json());
app.use(cors());
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
  })
);

// test route
app.get("/", (req, res) => {
  res.send("welcome to the backrooms");
});

//* PLANS AND PRODUCE

// READ one plan
app.get("/plans/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const onePlan = await prisma.plans.findUnique({
      where: {plan_id: Number(id) },
    });
    console.log(onePlan)
    res.send(onePlan);
  } catch (error) {
    res.send(error);
  }
});

// READ plans
app.get("/plans", async (req, res) => {
  const plans = await prisma.plans.findMany();
  res.send(plans);
});

// READ ALL produce
app.get("/produce", async (req, res) => {
  const produce = await prisma.produce.findMany();
  res.send(produce);
});

// READ ONE produce
app.get("/produce/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const produce = await prisma.produce.findUnique({
      where: { produce_id: Number(id) },
    });
    res.send(produce);
  } catch (error) {
    res.send(error);
  }
});

//* TO FETCH LIST ITEMS IN PLAN

// get one plan list & use this to get produce hehe
// app.get("/list/:id", async (req, res) => {
//   const { id } = req.params;
//   const oneList = await prisma.list.findMany({
//     where: { plans : {
//         one: {
//             plans: {
//                 id
//             }
//         }
//     } },
//   });
//   for (let i = 0; i < oneList.length; i++) {
//     let produceID = oneList[i].produce_id;
//     await prisma.produce.findMany({
//       where: { produce_id: Number(produceID) },
//     });
//     console.log("produceID", produceID);
//   }
// });

app.get("/list/:id", async (req, res) => {
    const { id } = req.params; 
    const retrieveProduceID = await prisma.list.findMany({
        where: {
            plans: {
                    plan_id: Number(id),
                },
        },
            select: {
                produce_id: true
            }

    })

    console.log(req.params.id)
    console.log(retrieveProduceID)

    const foodName = []
    for (let i = 0; i < retrieveProduceID.length; i ++) {
        let produceID  = retrieveProduceID[i].produce_id
        // console.log(produceID)
        const retrieveProduces = await prisma.produce.findMany({
            where: { produce_id: Number(produceID)}
    });
    foodName.push(retrieveProduces[0])
    // res.send(retrieveProduceID)
}
res.send(foodName)
console.log(foodName)
})


//* USERS!

// READ one user
app.get("/users/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const user = await prisma.users.findUnique({
      where: { user_id: Number(id) },
    });
    res.send(user);
  } catch (error) {
    res.send(error);
  }
});

// CREATE - user signup
app.post("/signup", async (req, res) => {
  const { username, password, email, street_name, unit_no, postal_code } =
    req.body;
  console.log(req.body);
  const duplicateUser = await prisma.users.findUnique({
    where: { username: String(username) },
  });
  if (!duplicateUser) {
    try {
      const createUser = await prisma.users.create({
        data: {
          username,
          password,
          email,
          street_name,
          unit_no,
          postal_code,
        },
      });
      res.send({ status: "success", data: createUser });
    } catch (error) {
      res.send({ status: "fail", data: "something went wrong" });
    }
  } else {
    res.send("username taken");
  }
});

// CREATE - user login
app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  console.log(req.body);
  const userLogin = await prisma.users.findUnique({
    where: { username: String(username) },
  });
  if (userLogin === null) {
    res.send({ status: "fail", data: "Username not found :(" });
  } else {
    if (password === userLogin.password) {
      req.session.user = userLogin;
      res.send({ status: "success", data: userLogin });
    } else {
      res.send({ status: "error", data: "password fail" });
    }
  }
});

//* if i have time - authorization 
const isLoggedIn = (req, res, next) => {
    if (req.session.user) {
        return next();
    } else {
        res.send({ status: "error", data: "login fail"})
    }
}

app.get("/authorized", isLoggedIn, (req, res) => {
    res.send(req.session.user)
})

// please listen!!!
app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
