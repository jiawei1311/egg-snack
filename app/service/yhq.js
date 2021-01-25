const Service = require('egg').Service;

class YhqService extends Service {
    async addYhq(params) {
        // 领取优惠券
        const {app} = this;
        try {
            await app.mysql.insert('userYhq', params);
            return true;
        } catch (e) {
            console.log(e);
            return null;
        }
    }

    async lookYhq(userId) {
        const {app} = this;
        try {
            let sql = `SELECT user.id,userYhq.* from user 
                        join userYhq on user.id=userYhq.userId
                        where userYhq.userId= ${userId}
                        order by used`
            const result = await app.mysql.query(sql);
            return result;
        } catch (e) {
            console.log(e);
            return null;
        }
    }
    async getAllUserYhq(){
        const {app} = this;
        try{
            //select查询全表
            let sql =`SELECT * from yhq 
                       JOIN userYhq ON yhq.id=userYhq.yhqId 
                       JOIN user ON user.id=userYhq.userId`
            const result = await app.mysql.query(sql);
            return result
        }catch (e) {
            console.log(e);
            return null;
        }
    }
    



    async getAllY(){
        const {app} = this;
        try{
            const result = await app.mysql.select('yhq')
            return result
        }catch (e) {
            console.log(e);
            return null;
        }
    }
    async addY(params) {
        const {app} = this;
        try {
            await app.mysql.insert('yhq', params);
            return true;
        } catch (e) {
            return null;
        }
    }
    async UpdateY(params){
        const {app} = this;
        try {
            const result = await app.mysql.update('yhq',params);
            return  result;
        }catch (e) {
            console.log(e);
            return null;
        }
    }
    async deleteY(id){
        const {app} = this;
        try {
            const result = await app.mysql.delete('yhq',{
                id
            });
            return  result;
        }catch (e) {
            console.log(e);
            return null;
        }
    }
    async getUsedNumber(){
        const {app} = this;
        try{
            //select查询全表
            let sql =`SELECT * , COUNT(*) count FROM userYhq 
                        join yhq on yhq.id=userYhq.yhqId
                        where used=1
                        GROUP BY yhqId `
            const result = await app.mysql.query(sql);
            return result
        }catch (e) {
            console.log(e);
            return null;
        }
    }
    
}

module.exports = YhqService;
