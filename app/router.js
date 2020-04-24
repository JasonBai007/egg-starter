module.exports = app => {
  const { router, controller } = app;
  router.get('/api', controller.home.index);
  router.get('/news', controller.news.index);
};
