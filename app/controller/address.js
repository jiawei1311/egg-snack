const Controller = require('egg').Controller;

class AddressController extends Controller {
    async addAddress(){
        const {ctx} = this;
        const result = await ctx.service.address.addAddress(ctx.request.body);
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
    async getUserAddress(){
        const {ctx} = this;
        console.log(ctx.params);
        const result = await ctx.service.address.getUserAddress(ctx.params.id);
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
    async deleteAddress(){
        const {ctx} =this;
        console.log(ctx.request.body.id)
        const result = await ctx.service.address.deleteAddress(ctx.request.body.id)
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
    async UpdateAddress(){
        const {ctx} =this;
        console.log(ctx.request.body);
        // 修改传进来的参数
        const result = await ctx.service.address.UpdateAddress(ctx.request.body)

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
    async getAllAddress(){
        const {ctx} = this;
        const result = await ctx.service.address.getAllAddress();
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

module.exports = AddressController;
