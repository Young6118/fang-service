'use strict';

module.exports = ({ router, controller }) => {
    router.get('/department/list', controller.department.list);
    // 更新新增同一个接口
    router.post('/department/createOrUpdate', controller.department.createOrUpdate);
};
