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

  config.sequelize = {
    dialect: 'mysql', // support: mysql, mariadb, postgres, mssql
    database: 'official_website',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    timezone: '+08:00',// 保存为本地时区
    define: {
      timestamps: false,
      // 禁止修改表名，默认情况下，sequelize将自动将所有传递的模型名称（define的第一个参数）转换为复数
      // 但是为了安全着想，复数的转换可能会发生变化，所以禁止该行为
      freezeTableName: true,
    },
    dialectOptions: {
      dateStrings: true,
      typeCast: true
    }
  };

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1587708930376_7167';

  // add your middleware config here
  config.middleware = ['wrap'];

  config.security = {
    csrf: {
      enable: false
    }
  }

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
