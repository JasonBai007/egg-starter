module.exports = app => {
  const { router, controller } = app;
  router.get('/api', controller.home.index);
  router.get('/api/news', controller.news.index);
};
