import express from "express";
import conversionController from '../src/controllers/conversion'

const PORT = 5001;


class Application {
 
   app = express();

  useMiddleware() {
    this.app.use(express.json());
    this.app.use('/conversion', conversionController);
  }

  listen() {
    this.app.listen(PORT, () => {
      console.log(`app listening on port ${PORT}`);
    });
  }
  async main() {
    
    this.useMiddleware();
    this.listen();

  }
}

export default Application;