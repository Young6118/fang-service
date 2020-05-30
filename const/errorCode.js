/* eslint valid-jsdoc: "off" */
"use strict";

module.exports = code => {
    const ERROR_CODE = {
        0: "success", // 成功状态
        "-1": "syntax error", // 语法错误
        "-2": "request params not valid", // 参数错误
        "-10": "path and host cannot repeat", // path+host不能重复
        "-20": "fail to create template",
        "-50": "fail to upload", // 上传失败!
        "-51": "no right to manipulate the file", // 无权限操作该文件
        "-52": "the file has not changed", // 文件未发生变更
        "-53": "file does not exist", // 文件未发生变更
        "-54": "fail to rollback", // 回滚失败
        "-55": "the current version is the latest version", // 回滚失败
        "-60": "please apply for opening CDN first",
        "-11": "fail to delete",
        "-12": "fail to update",
        "-100": "fail to codepush",
        "-128": "permissions error", // 权限错误
        "-210": "fail to create EWX group", // 创建企业微信组失败
        "-211": "fail to send EWX message", // 发送企业微信失败
        "-212": "please check field format", // 请检查上报格式
        "-222": "please check username or password" // 请检查账号密码
    };
    return {
        code: parseInt(code),
        message: ERROR_CODE[code],
        currentTime: new Date().getTime(),
    };
};
