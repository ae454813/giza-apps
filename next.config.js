
const withAntdLess = require('next-plugin-antd-less');



module.exports = withAntdLess({
  images: {
    domains: ['www.gizaapps.com'],
  },
  reactStrictMode: true,
  swcMinify: false, // it should be false by default 

  // optional
  // modifyVars: { '@primary-color': '#04f' },
  // optional
  // lessVarsFilePath: './src/styles/variables.less',
  // optional
  lessVarsFilePathAppendToEndOfContent: false,
  // optional https://github.com/webpack-contrib/css-loader#object
  cssLoaderOptions: {},

  // Other Config Here...

  webpack(config) {
    return config;
  },

  // ONLY for Next.js 10, if you use Next.js 11, delete this block
  future: {
    webpack5: true,
  },
  
});