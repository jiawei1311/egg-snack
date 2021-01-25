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
    config.keys = appInfo.name + '_1569733052226_6337';

    // add your middleware config here
    config.middleware = [];

    config.mysql = {
        client: {
            host: '47.94.13.138',
            port: '3306',
            user: 'snacks',
            password: 'hSPwyHsz3kz5aWYb',
            database: 'snacks',
        },
        app: true,
        agent: false,
    };

    config.security = {
        csrf: {
            enable: false
        },
        domainWhiteList: ['*']
    };
    //跨域
    config.cors = {
        origin: '*',
        allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS'
    };
    // add your user config here
    const userConfig = {
        // myAppName: 'egg',
    };

    return {
        ...config,
        ...userConfig,
    };
};
