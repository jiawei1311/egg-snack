const Service =require('egg').Service;
const utility = require("utility")//密码加密

class UserService extends Service{
    async register(params){
        //增加用户
        const {app} = this;
        let username = '';
        try{
            let sql = `select username from user where username='${params.username}'`
            username = await app.mysql.query(sql);
        }catch (e) {
            return null;
        }

        if(username==''){
            try{
                params.password = utility.md5(params.password);
                console.log(params.password);
                const result = await app.mysql.insert('user',params);
                return  result;
            }catch (e) {
                console.log(e);
                return null;
            }
        }else{
            return '账号已被注册';
        }

    }
    async login(params){
        const {app} = this;
        try{
            console.log(utility.md5(params.password))
            let sql = `select * from user where username='${params.username}' and password='${utility.md5(params.password)}'`
            const result = await app.mysql.query(sql);
            result[0].password=''

            return result;
        }catch (e) {
            console.log(e);
            return null;
        }

    }


    async getAllUser(){
        const {app} = this;
        try{
            //select查询全表
            const result = await app.mysql.select('user')
            return result
        }catch (e) {
            console.log(e);
            return null;
        }
    }

    async getUser(id){
        //id 动态路由查询
        const {app} =this;
        try {

            const result = await app.mysql.get('user',{
                id
            })
            return result
        }catch (e) {
            console.log(e);
            return null;
        }
    }

    async SelectUser(name){
        //模糊查询
        const {app} = this;
        try{
            let sql = `select * from user where realName like "%${name}%"`
            const result = await app.mysql.query(sql);
            return result;
        }catch (e) {
            console.log(e);
            return null;
        }
    }

    async UpdateUser(params){
        const {app} = this;
        try {
            const result = await app.mysql.update('user',params);
            return  result;
        }catch (e) {
            console.log(e);
            return null;
        }
    }
    async deleteUser(id){
        const {app} = this;
        try {
            const result = await app.mysql.delete('todos',{
                id
            });
            return  result;
        }catch (e) {
            console.log(e);
            return null;
        }
    }
}

module.exports = UserService;
