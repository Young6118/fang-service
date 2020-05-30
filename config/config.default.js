/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1590726756861_7127';

  // add your middleware config here
  config.middleware = [ "resHandler" ];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  	// 跨站脚本攻击
	config.security = {
    csrf: {
        ignore: ctx => true
    }
}

  // 允许跨域配置
  config.cors = {
    origin:'*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS'
  };

  // MongoDB数据库配置
	config.mongoose = {
      client: {
          url: 'mongodb://127.0.0.1:27017/department',
          options: {},
      },
  };

  return {
    ...config,
    ...userConfig,
  };
};
