const Controller = require('egg').Controller;

class NewsController extends Controller {
    async index() {
        const { ctx } = this;
        ctx.body = await ctx.model.News.findAll();
    }

    async show() {
        const ctx = this.ctx;
        ctx.body = await ctx.model.News.findByPk(parseInt(ctx.params.id));
    }

    async list() {
        const { ctx } = this;
        let _data = await ctx.model.News.findAll();
        ctx.body = _data.map(obj => {
            return {
                id: obj.id,
                title: obj.en.title,
                date: obj.time
            }
        })
    }

    async create() {
        const { ctx } = this;
        ctx.status = 201;
        ctx.body = await ctx.model.News.create(ctx.request.body);
    }

    async update() {
        // const ctx = this.ctx;
        // const id = parseInt(ctx.params.id);
        // const one_new = await ctx.model.News.findByPk(id);
        // if (!one_new) {
        //     ctx.status = 404;
        //     return;
        // }
        // await one_new.update(ctx.request.body);
        // ctx.body = one_new;
        const ctx = this.ctx;
        await ctx.model.News.update(ctx.request.body, {
            where: {
                id: parseInt(ctx.params.id)
            }
        });
        ctx.status = 200;
    }

    async destroy() {
        const ctx = this.ctx;
        await ctx.model.News.destroy({
            where: {
                id: parseInt(ctx.params.id)
            }
        })
        ctx.status = 200;
    }
}

module.exports = NewsController;