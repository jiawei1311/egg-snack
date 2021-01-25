const Controller = require('egg').Controller;

class OrderController extends Controller{
    async addOrder(){
        const {ctx} = this;
        let shops = ctx.request.body.shop
        const result = await ctx.service.order.addOrder(ctx.request.body);
        if(result){
            await ctx.service.shop.addNum(shops)
            ctx.body={
                status:200,
                data:result
            }
        }else{
            ctx.body={
                status:500,
                errMsg:'失败'
            }
        }
    }

    async lookOrder(){
        const {ctx} = this;
        const result = await ctx.service.order.lookOrder(ctx.params.id);
        if(result){
            ctx.body={
                status:200,
                data:result
            }
        }else{
            ctx.body={
                status:500,
                errMsg:'失败'
            }
        }
    }

    async getAllOrder(){
        const {ctx} = this;
        const result = await ctx.service.order.getAllOrder();
        if(result){
            ctx.body={
                status:200,
                data:result
            }
        }else{
            ctx.body={
                status:500,
                errMsg:'失败'
            }
        }
    }
}

module.exports = OrderController;
