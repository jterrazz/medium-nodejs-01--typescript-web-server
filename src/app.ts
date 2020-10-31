// import Koa, { Middleware } from 'koa';
//
// const getStateController: Middleware = async (ctx, next) => {
//     ctx.tracker.track(EVENTS.routes.getApiState);
//     ctx.body = {
//         version: apiConfig.version,
//         state: 'OK',
//         env: apiConfig.env,
//         time: new Date(),
//     };
//     await next();
// };
//
//
// export const createApp = async (): Promise<Koa> => {
//     logger.info(`App is starting with ${process.env.NODE_ENV} environment`);
//
//     const app = new Koa();
//     const router = await buildRouter();
//
//     await setupApp(app);
//
//     app.use(router.routes()).use(router.allowedMethods());
//     return app;
// };

console.log('Hello world');