module.exports = app => {
  const {router, controller} = app;
  router.all('/finance/payment/all', controller.finance.payment.all);
  router.all('/finance/payment/create', controller.finance.payment.create);
  router.all('/finance/payment/deletes', controller.finance.payment.deletes);
  router.all('/finance/payment/delete', controller.finance.payment.delete);
  router.all('/finance/payment/update', controller.finance.payment.update)
  router.all('/finance/payment/find', controller.finance.payment.find);
};
