//* dependencies
const express = require('express');
const { PrismaClient } = require('@prisma/client');

//* config
const prisma = new PrismaClient()
const app = express()
const PORT = process.env.PORT 

//* middleware
app.use(express.json())

// test route
app.get('/', (req,res) => {
    res.send("welcome to the backrooms")
});

// READ plans
app.get('/plans', async (req,res) => {
    const plans = await prisma.plans.findMany();
    res.send(plans)
});

// READ ALL produce
app.get('/produce', async (req, res) => {
    const produce = await prisma.produce.findMany();
    res.send(produce)
});

// READ ONE produce
app.get('/produce/:id', async (req,res) => {
    const { id } = req.params;
    try {
        const produce = await prisma.produce.findUnique({
            where: { produce_id: Number(id) },
        })
        res.send(produce);
    } catch (error) {
        res.send(error);
    }
});

// please listen!!! 
app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`)
});