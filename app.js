const express = require("express");
const expressLayouts = require("express-ejs-layouts");

const app = express();
const port = 3000;

// gunakan ejs untuk view engine
app.set("view engine", "ejs");

// third-party middleware
// set layout
app.use(expressLayouts);

// Halaman Home
app.get("/", (req, res) => {
  const mahasiswa = [
    {
      nama: "Ricky",
      prodi: "Teknologi Informasi",
      angkatan: 2020,
      email: "ricky@gmail.com",
    },
    {
      nama: "Yogi",
      prodi: "Teknologi Informasi",
      angkatan: 2020,
      email: "yogi@gmail.com",
    },
    {
      nama: "Miko",
      prodi: "Teknologi Informasi",
      angkatan: 2020,
      email: "miko@gmail.com",
    },
  ];

  res.render("index", {
    mahasiswa,
    layout: "layouts/main-layout",
    nama: "Ricky",
    title: "Halaman Home",
  });
});

app.listen(port, () => {
  console.log(`Mongo Contact App | Listening at http://localhost:${port}`);
});
