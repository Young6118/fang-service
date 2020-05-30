'use strict';

module.exports = ({ router, controller }) => {
    // 更新新增同一个接口
    router.post('/department/createOrUpdate', controller.department.createOrUpdate);
};
