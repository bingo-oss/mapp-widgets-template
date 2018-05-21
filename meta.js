module.exports = {
  "helpers": {
    "if_or": function (v1, v2, options) {
      if (v1 || v2) {
        return options.fn(this);
      }

      return options.inverse(this);
    },
    "camelcase": str => {
      const capitalize = str => str.charAt(0).toUpperCase() + str.toLowerCase().slice(1)
      let string = str.toLowerCase().replace(/[^A-Za-z0-9]/g, ' ').split(' ')
                      .reduce((result, word) => result + capitalize(word.toLowerCase()))
      return string.charAt(0).toLowerCase() + string.slice(1)
    }
  },
  "prompts": {
    "platform": {
      "type": "list",
      "message": "选择程序运行平台",
      "default":"web",
      "choices": [
        {
          "name": "web部件开发(pc)",
          "value": "web",
          "short": "web"
        },
        {
          "name": "weex部件开发(移动端)",
          "value": "weex",
          "short": "weex"
        }
      ]
    },
    "name": {
      "type": "string",
      "required": true,
      "message": "工程名称"
    },
    "description": {
      "type": "string",
      "required": false,
      "message": "工程描述",
      "default": "应用工厂部件库开发工程"
    },
    "author": {
      "type": "string",
      "message": "作者"
    },
    "lint": {
      "type": "confirm",
      "message": "是否使用ESLint规范代码?"
    },
    "lintConfig": {
      "when": "lint",
      "type": "list",
      "message": "选择ESLint预设规则",
      "default":"standard",
      "choices": [
        {
          "name": "语句后面不包含分号(https://github.com/feross/standard)",
          "value": "standard",
          "short": "Standard"
        },
        {
          "name": "语句后面包含分号(https://github.com/airbnb/javascript)",
          "value": "airbnb",
          "short": "Airbnb"
        },
        {
          "name": "none (个性配置)",
          "value": "none",
          "short": "none"
        }
      ]
    },
    "unit": {
      "type": "confirm",
      "message": "使用Karma + Mocha配置单元测试?"
    },
    "e2e": {
      "type": "confirm",
      "message": "使用Nightwatch配置e2e测试?"
    }
  },
  "filters": {
    ".eslintrc.js": "lint",
    ".eslintignore": "lint",
    "config/test.env.js": "unit || e2e",
    "test/unit/**/*": "unit",
    "build/webpack.test.conf.js": "unit",
    "test/e2e/**/*": "e2e"
  },
  "completeMessage": "To get started:\n\n  {{^inPlace}}cd {{destDirName}}\n  {{/inPlace}}npm install\n  npm run dev\n\nDocumentation can be found at https://vuejs-templates.github.io/webpack"
};
