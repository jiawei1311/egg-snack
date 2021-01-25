const Controller = require('egg').Controller;
// 文件存储
const fs = require('fs');
const path = require('path');
const pump= require('mz-modules/pump');

class ShopController extends Controller {
    async create(){
        const {ctx} = this;

        const result = await ctx.service.shop.create(ctx.request.body);
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
    async getAllShop(){
        const {ctx} = this;
        const result = await ctx.service.shop.getAllShop();
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
    async getHotShop(){
        const {ctx} = this;
        const result = await ctx.service.shop.getHotShop();
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
    async getSaledShop(){
        const {ctx} = this;
        const result = await ctx.service.shop.getSaledShop();
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
    async getFenleiShop(){
        const {ctx} = this;

        const result = await ctx.service.shop.getFenleiShop(ctx.params.type);
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

    async getShop(){
        const {ctx} = this;
        console.log(ctx);
        const result = await ctx.service.shop.getShop(ctx.params.id);
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
    async SelectShop(){
        //模糊查询
        const {ctx} = this;
        console.log(ctx.params.name);
        const result = await ctx.service.shop.SelectShop(ctx.params.name);

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
    async UpdateShop(){
        const {ctx} =this;
        console.log(ctx.request.body);
        // 修改传进来的参数
        const result = await ctx.service.shop.UpdateShop(ctx.request.body)

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
    async deleteShop(){
        const {ctx} =this;
        console.log(ctx.request.body.id)
        const result = await ctx.service.shop.deleteShop(ctx.request.body.id)

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
    async uploadImg() {
        let parts = this.ctx.multipart({ autoFields: true });
        let stream, img_list = []; // 图片访问地址集合
        while ((stream = await parts()) != null) {
            if (!stream.filename) {
                break;
            }
            // 文件名为：时间戳+随机字符串+.文件后缀
            let filename = (new Date()).getTime() + Math.random().toString(36).substr(2) + path.extname(stream.filename).toLocaleLowerCase();
            // 上传图片的目录
            let target = 'app/public/img/' + filename;
            img_list.push('/public/img/' + filename);
            let writeStream = fs.createWriteStream(target);
            await pump(stream, writeStream);
        }
        console.log(parts.field) // 表单其他数据，可以根据需要处理
        this.ctx.body = {
            url: img_list,
            fields: parts.field
        }
    }
}

module.exports = ShopController;
