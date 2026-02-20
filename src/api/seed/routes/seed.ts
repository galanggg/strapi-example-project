export default {
  routes: [
    {
      method: 'POST',
      path: '/seed',
      handler: 'seed.seed',
      config: {
        // This route is temporary and should ideally be protected
        auth: false,
        policies: [],
        middlewares: [],
      },
    },
  ],
};
