module.exports = app => {
  const {router, controller} = app;
  router.all('/finance/receipt/all', controller.finance.receipt.all);
  router.all('/finance/receipt/create', controller.finance.receipt.create);
  router.all('/finance/receipt/delete', controller.finance.receipt.delete);
  router.all('/finance/receipt/update', controller.finance.receipt.update)
  router.all('/finance/receipt/find', controller.finance.receipt.find);
};
