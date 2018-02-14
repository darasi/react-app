require('./ignore.js')();
require('babel-polyfill');
require('babel-register')({
  presets: ['env', 'react', 'stage-0'],
  plugins: ["react-loadable/babel",'syntax-dynamic-import',"dynamic-import-node"]
});

const path = require('path');

const envPath = process.env.NODE_ENV === 'production' ? path.resolve(process.cwd(), '.env') : path.resolve(process.cwd(), '.dev.env');
require('dotenv').config({path: envPath});

const app = require('./app.js').default;
const clientRouter = require('./clientRouter.js').default;
const staticCache  = require("koa-static-cache");
const Loadable = require('react-loadable');

const host = process.env.APP_HOST || 'http://localhost';
const port = parseInt(process.env.APP_PORT, 10) || 3005;

app.use(clientRouter);
app.use(staticCache (path.resolve(__dirname,'../dist'),{
  maxAge: 365 * 24 * 60 * 60,
  gzip: true
}));

console.log(`\n==> 🌎  Listening on port ${port}. Open up ${host}:${port}/ in your browser.\n`)
Loadable.preloadAll().then(() => {
  app.listen(port)
})


