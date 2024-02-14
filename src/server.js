import express from "express";
import router from "./routes/routes";

const app = express();
const port = 5000;

app.use(express.json());

app.get("/", (req,res) => {
    res.status(200).json({'message': 'This is an Test extractor service'})
})

app.use("/api", router);


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
