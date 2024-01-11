module.exports = function (ctx, cb) {
  console.log(`Egregious Divulgation ${ctx.secrets.TEST_SECRET}`);
  cb(null, [ctx.secrets.TEST_SECRET]);
}
