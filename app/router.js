'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;

  /*用户接口*/
  router.post('/user/register',controller.user.register);
  router.post('/user/login',controller.user.login);
  router.get('/user/getUser/:id',controller.user.getUser)
  router.get('/user/SelectUser/:name',controller.user.SelectUser)
  router.get('/user/getAllUser',controller.user.getAllUser)
  router.post('/user/updateUser',controller.user.UpdateUser)
  router.post('/user/deleteUser',controller.user.deleteUser)
  router.post('/user/uploadImg',controller.user.uploadImg)

  /*商品接口*/
  router.post('/shop/uploadImg',controller.shop.uploadImg)
  router.post('/shop/create',controller.shop.create);
  router.get('/shop/getShop/:id',controller.shop.getShop)
  router.get('/shop/getFenleiShop/:type',controller.shop.getFenleiShop)
  router.get('/shop/SelectShop/:name',controller.shop.SelectShop)
  router.get('/shop/getAllShop',controller.shop.getAllShop)
  router.get('/shop/getSaledShop',controller.shop.getSaledShop)
  router.get('/shop/getHotShop',controller.shop.getHotShop)
  router.post('/shop/updateShop',controller.shop.UpdateShop)
  router.post('/shop/deleteShop',controller.shop.deleteShop)

  /*订单接口*/
  router.post('/order/addOrder',controller.order.addOrder);
  router.get('/order/lookOrder/:id',controller.order.lookOrder);
  router.get('/order/getAllOrder',controller.order.getAllOrder)

  /*优惠券*/
  router.post('/yhq/addYhq',controller.yhq.addYhq);
  router.get('/yhq/lookYhq/:id',controller.yhq.lookYhq);
  router.get('/yhq/getAllUserYhq',controller.yhq.getAllUserYhq);

  router.get('/yhq/getAllY',controller.yhq.getAllY);
  router.post('/yhq/addY',controller.yhq.addY);
  router.post('/yhq/updateY',controller.yhq.UpdateY);
  router.post('/yhq/deleteY',controller.yhq.deleteY);
  router.get('/yhq/getUsedNumber',controller.yhq.getUsedNumber);

  /*用户地址*/
  router.get('/address/getUserAddress/:id',controller.address.getUserAddress)
  router.get('/address/getAllAddress',controller.address.getAllAddress)
  router.post('/address/addAddress',controller.address.addAddress);
  router.post('/address/updateAddress',controller.address.UpdateAddress)
  router.post('/address/deleteAddress',controller.address.deleteAddress)

};
