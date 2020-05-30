'use strict';

module.exports = ({ router, controller }) => {
    router.post('/user/add', controller.user.add);
    // 更新新增同一个接口
    router.post('/user/createOrUpdate', controller.user.createOrUpdate);
};
