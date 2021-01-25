const Service =require('egg').Service;

class AddressService extends Service{
    async addAddress(params){
        //增加用户
        const {app} = this;
        try{
            const result = await app.mysql.insert('address',params);
            return  result;
        }catch (e) {
            console.log(e);
            return null;
        }
    }
    async getUserAddress(userId){
        //id 动态路由查询
        const {app} =this;
        try {
            const result = await app.mysql.select('address',{
                where:{
                    userId
                }
            })
            return result
        }catch (e) {
            console.log(e);
            return null;
        }
    }

    async UpdateAddress(params){
        const {app} = this;
        try {
            const result = await app.mysql.update('address',params);
            return  result;
        }catch (e) {
            console.log(e);
            return null;
        }
    }
    async deleteAddress(id){
        const {app} = this;
        try {
            const result = await app.mysql.delete('address',{
                id
            });
            return  result;
        }catch (e) {
            console.log(e);
            return null;
        }
    }

    async getAllAddress(){
        const {app} = this;
        try{
            let sql =`SELECT * from address JOIN user ON address.userId=user.id`
            const result = await app.mysql.query(sql);
            return result
        }catch (e) {
            console.log(e);
            return null;
        }
    }
}

module.exports = AddressService;
