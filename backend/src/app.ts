import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
// import {ProductRoutes} from './routes/Products';
// import {UserRoutes} from './routes/Users';
class App {
  public app: express.Application;
  constructor() {
    this.app = express();
    this.config();
    this.allRoutes();
  }
  private config(): void {
    ///Middleware
    this.app.use(express.json());
    this.app.use(cookieParser());
    this.app.use("/uploads", express.static("uploads"));
    this.app.use(
      cors({
        origin: [
          // `${process.env.FRONT_URL}`,
          "http://localhost:3000",
          //"http://localhost:4000",
          "http://localhost:8080",
          "http://localhost:3001",
        ],
        credentials: true,
      })
    );

    this.app.use(express.json());
    this.app.use(
      express.urlencoded({
        extended: true,
      })
    );
  }

  private allRoutes(): void {}
}
export default new App().app;
