const express = require("express");
const app = express();
app.use(express.json());
const cors = require('cors');
const connectDB = require("./config/db");

app.use(cors())
const authRoute = require("./routes/user");
const accountRoute = require("./routes/account");
const chargeCard = require("./card");

connectDB();
// chargeCard({
//   accountId: "602f97053ee725194fb066e2",
//   pan: "5078 5078 5078 5078 12",
//   cvv: "081",
//   expiry_year: "23",
//   expiry_month: "11",
//   amount: 10000,
//   email: "ezekielblanc1@gmail.com",
// })
// .then(console.log)
// .catch(console.log);

app.use("/user", authRoute);
app.use("/account", accountRoute);

// connectDB();
const PORT = 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
