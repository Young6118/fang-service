'use strict';

module.exports = ({ router, controller }) => {
    // 健康检查路由,用于服务器检查服务可用性
    router.get('/health', async ctx => {
        ctx.succeed();
    });

    router.get('/', controller.home.index);
    router.post('/login', controller.home.login);
};
