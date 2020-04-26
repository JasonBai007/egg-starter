module.exports = () => {
    return async function uppercase(ctx, next) {
        await next();
        let body = ctx.body;
        ctx.body = {
            code: 0,
            msg: 'success',
            data: body
        }
    };
};
