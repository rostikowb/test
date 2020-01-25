import todoRouter from '../todo/todoRoutes';

export default function routes(app) {
    app.use('/', todoRouter);
}
