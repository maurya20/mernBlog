import express from 'express';
import bodyParser from 'body-parser';
// import {ProductRoutes} from './routes/Products';
// import {UserRoutes} from './routes/Users';
class App{
   public app: express.Application;
   constructor(){
      this.app = express();
      this.config();
      this.allRoutes();
    }
   private config(): void{
      this.app.use(bodyParser.json());
      this.app.use(bodyParser.urlencoded({ extended: false }));
      this.app.use('/uploads', express.static('uploads'));


    }
  
   private allRoutes(): void{
   
    }
    
}
export default new App().app;