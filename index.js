require("dotenv").config();
const express = require("express");
const app = express();
const route = express.Router();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const PORT = 3000;

// app.use("/", route);
// route.get("/data", async function name(req, res) {
//   const data = await prisma.nama.findMany();
//   return res
//     .status(200)
//     .json({ status: 200, message: "berhasil", datanya: data });
// });
app.use("/", (req, res) => {
  res.send("halo rek === coba");
});

app.listen(PORT, () => {
  console.log(`I LOVE YOU ${PORT}`);
});
