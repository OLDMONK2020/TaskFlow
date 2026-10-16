import Express from 'express';

const app = Express();

const PORT = 7290;

app.listen(PORT, () => {
    console.log(`Application is running on PORT no ${PORT}`);
})