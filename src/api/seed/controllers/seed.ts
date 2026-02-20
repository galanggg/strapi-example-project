export default {
  async seed(ctx) {
    try {
      console.log('Seed controller invoked.');
      // The service is found at 'api::seed.seed'
      const result = await strapi.service('api::seed.seed').seed();
      ctx.body = result;
    } catch (err) {
      console.error('Error in seed controller:', err);
      ctx.body = { success: false, message: 'An error occurred in the seed controller.' };
      ctx.status = 500;
    }
  },
};
