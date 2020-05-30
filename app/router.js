'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.post('/user/add', controller.user.add);
  // 登录接口
  router.post('/login', controller.home.login);
};