import express from 'express'
import htmlToPdf, { DEFAULT_OPTIONS } from '../helpers/htmlToPdf';
const router = express.Router(); 

router.post('/' , async (req,res) => {
    const {html} = req.body;

    if(!html){
        res.status(400).send('Request body should contain an html property');
        return;
    }

    const pdf = await htmlToPdf(html,DEFAULT_OPTIONS);
    res.contentType('application/pdf');
    res.send(pdf);
})


export default router;
