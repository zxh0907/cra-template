const path = require('path')
// https://github.com/arackaf/customize-cra/blob/master/api.md
const { override, addWebpackAlias, addLessLoader } = require('customize-cra');
// const rewireLess = require("react-app-rewire-less");

function resolve (dir) {
  return path.join(__dirname, '.', dir)
}

/* config-overrides.js */
module.exports = override(
  // 设置别名路径
  addWebpackAlias({ //路径别名
    '@': path.resolve(__dirname, 'src'),
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
      '@primary-color': '#1DA57A'
    }
  }),
  // useEslintRc('.eslintrc')    // react-scriptr4.x版本弃用了useEslintRc，react17 官方团队修改了脚手架允许直接在外部声明.eslintrc文件覆盖eslint配置
)

// module.exports = function override(config, env) {
  
//   config.resolve.alias = {
//     ...config.resolve.alias,
//     '@': path.resolve(__dirname, 'src')
//   };

//   config = rewireLess(config, env);
  
//   // with loaderOptions
//   config = rewireLess.withLoaderOptions({
//       modifyVars: {
//         "@primary-color": "#1890ff",
//       },
//     })(config, env);

//   return config;
// }