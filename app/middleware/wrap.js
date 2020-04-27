module.exports = () => {
    return async function wrap(ctx, next) {
        await next();
        let body = ctx.body;
        ctx.body = {
            code: 0,
            msg: 'success',
            data: body
        }
    };
};
