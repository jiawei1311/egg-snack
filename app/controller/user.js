const Controller = require('egg').Controller;
// 文件存储
const fs = require('fs');
const path = require('path');
const pump= require('mz-modules/pump');

class UserController extends Controller {
    async register(){
        const {ctx} = this;
        const result = await ctx.service.user.register(ctx.request.body);
        console.log(result);
        if(result){
            if(result==='账号已被注册'){
                ctx.body={
                    status:500,
                    data:result
                }
            }else{
                ctx.body={
                    status:200,
                    data:result
                }
            }

        }else{
            ctx.body={
                status:500,
                errMsg:'注册失败'
            }
        }
    }

    async login(){
        const {ctx} = this;
        const result = await ctx.service.user.login(ctx.request.body);
        console.log(result);
        if(result){
            ctx.body={
                status:200,
                data:result
            }
        }else{
            ctx.body={
                status:500,
                errMsg:'登录失败'
            }
        }
    }

    async getAllUser(){
        const {ctx} = this;
        const result = await ctx.service.user.getAllUser();
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
    async getUser(){
        const {ctx} = this;
        console.log(ctx);
        const result = await ctx.service.user.getUser(ctx.params.id);
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
    async SelectUser(){
        //模糊查询
        const {ctx} = this;
        console.log(ctx.params.name);
        const result = await ctx.service.user.SelectUser(ctx.params.name);

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

    async UpdateUser(){
        const {ctx} =this;
        console.log(ctx.request.body);
        // 修改传进来的参数
        const result = await ctx.service.user.UpdateUser(ctx.request.body)

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


    async deleteUser(){
        const {ctx} =this;
        const result = await ctx.service.user.deleteUser(ctx.request.body.id)
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

module.exports = UserController;
