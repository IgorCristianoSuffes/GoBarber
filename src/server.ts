import express from 'express';
import routes from './routes';

const app = express();

app.use(routes);

app.listen(3333, () => {
    console.log('Server started on port 3333');
})

/*const app = express();
app.use(express.json());

app.get('/', (request, response) => {
    return response.json({ message: 'Hello GoStack' });
});

app.listen(3333, () => {
    console.log('Server started on port 3333');
})*/