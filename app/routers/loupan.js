'use strict';

module.exports = ({ router, controller }) => {
    router.get('/loupan/list', controller.loupan.list);
};
