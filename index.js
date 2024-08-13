import express from "express";
import cors from "cors";
import hallRoute from "./Routers/hallRouters.js";

const app = express();
const PORT = 4000;

app.use(express.json());
app.use(cors());

app.use("/api", hallRoute);

app.get("/", (req, res) => {
  res.status(200).send("Hall Booking System");
});

app.listen(PORT, () => {
  console.log(`App is running on the Port: ${PORT}`);
});
