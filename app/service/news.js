const Service = require('egg').Service;

class NewsService extends Service {
    async find() {
        const news = await this.ctx.model.News.findAll()
        return news;
    }
}

module.exports = NewsService;