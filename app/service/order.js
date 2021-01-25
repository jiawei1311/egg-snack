const Service = require('egg').Service;
const uuidv1 = require('uuid/v1');

class OrderService extends Service {
    async addOrder(params) {
        //下订单
        const {app} = this;
        try {
            let order = params
            let shops = params.shop;
            delete order.shop;
            order.orderId = uuidv1();
            await app.mysql.insert('orders', order);
            console.log(order);
            if(order.yhqId>0){
                // 修改数据，将会根据主键 ID 查找，并更新
                await app.mysql.update('userYhq',{
                    id:order.yhqId,
                    used:1
                });
            }
            for (let shop of shops) {
                shop.orderId = order.orderId
                await app.mysql.insert('ordersShop', shop);
            }
            return true;
        } catch (e) {
            console.log(e);
            return null;
        }
    }

    async lookOrder(userId) {
        const {app} = this;
        try {
            let sql = `SELECT * from orders 
                        join ordersShop on ordersShop.orderId=orders.orderId
                        join goods on ordersShop.shopId=goods.id
                        join address on address.id=orders.addressId
                        where orders.userId= ${userId}
                        ORDER BY orders.create desc
                        `
            const result = await app.mysql.query(sql);
            return result;
        } catch (e) {
            console.log(e);
            return null;
        }
    }
    async getAllOrder(){
        const {app} = this;
        try{
            //select查询全表
            let sql =`SELECT * from orders 
                        JOIN  ordersShop ON orders.orderId=ordersShop.orderId 
                        JOIN address on orders.addressId=address.id
                        JOIN goods on goods.id=ordersShop.shopId`
            const result = await app.mysql.query(sql);
            return result
        }catch (e) {
            console.log(e);
            return null;
        }
    }
}

module.exports = OrderService;
