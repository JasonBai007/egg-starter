module.exports = app => {
  const prefix = '/api/'
  const { router, controller } = app;
  router.get(`${prefix}news/list`, controller.news.list);
  router.resources('news', `${prefix}news`, controller.news);
};
