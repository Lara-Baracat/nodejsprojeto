import express from 'express';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}))


const port = 9898;
app.listen(port, () => {
    console.log(`Started on port ${port}`);
});

app.get('/',(req,res)=>{
    res.send('OK!')
});


export default app;