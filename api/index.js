import express,{json} from 'express'
import router from './routes.js'
const port=3000;
const app=express();
app.use(json())
app.use('/',router);
app.listen(port,function(){console.log(`listening to ${port}`);})