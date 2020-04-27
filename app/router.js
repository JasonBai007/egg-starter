module.exports = app => {
  const { router, controller } = app;
  router.get('/api', controller.home.index);
  router.get('/api/news/list', controller.news.list);
  router.resources('news', '/api/news', controller.news);
};
