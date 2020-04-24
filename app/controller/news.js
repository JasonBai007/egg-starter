const Controller = require('egg').Controller;

class NewsController extends Controller {
    async index() {
        const { ctx, service } = this;
        // ctx.body = 'adfadsf'
        ctx.body = await ctx.service.news.find();
    }
}

module.exports = NewsController;