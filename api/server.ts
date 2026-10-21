import express from 'express';

import router from './invoice.route.ts';

const app = express();

app.get('/api/health',(request, response) => {
    response.status(200).json({success: {
        status: 200,
        message: 'Server is running.'
    }});
});

app.get('/api/invoices', (request, response) => {
    response.status(200).json(invoices);
});

app.get('/api/invoices/:id', (request, response) => {
    const id = Number(request.params.id);

   
   if (!invoice) response.status(404).json({error: {
    status: 404,
    message: 'Invoice not found.'
   }})

   response.status(200).json(invoice);
});

app.use((request,response) => {
    response.status(404). json({error:{
        status: 404,
        message: 'Resource not found.'
    }})
});

app.listen(3000);