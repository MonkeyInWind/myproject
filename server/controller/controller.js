const getController = (ctx) => {
    console.log('get', ctx.query);
    ctx.body = {
        result: true
    }
}

const postController = (ctx) => {
    console.log('post', ctx.request.body);
    ctx.body = {
        result: true
    }
}

module.exports = {
    getController,
    postController
}
