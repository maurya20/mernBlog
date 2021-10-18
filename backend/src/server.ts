import mongoose, { ConnectOptions } from "mongoose";
import app from "./app";
import dotenv from "dotenv";
mongoose
  .connect("mongodb://localhost:27017/Multer", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } as ConnectOptions)
  .then(() => console.log("Successfully connected to DataBase"))
  .catch((err: Error) => {
    console.log(err);
  });

////setting config file
dotenv.config({ path: "backend/config/config.env" });
//mongoose.set({useFindAndModify: false});
const port = process.env.PORT || 5000;
const server = app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
export { server as server };
