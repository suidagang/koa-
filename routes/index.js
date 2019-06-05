const router = require('koa-router')();
const axios = require("axios");

router.get('/suigang', async (ctx, next) => {
  let result = await axios.get('http://47.95.213.4/goods/list', {
    params: {
      sort:'1',
      page:"1",
      pageSize:'10',
      priceStart:"",
      priceEnd:""
    }
  });
  ctx.body = result.data;
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

module.exports = router
