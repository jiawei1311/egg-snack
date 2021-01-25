const Service =require('egg').Service;

class ShopService extends Service{
    /**
     * 表： goods
     * **/
    async create(params){
        //增加商品
        const {app} = this;
        console.log(params);
        try{
            const result = await app.mysql.insert('goods',params);
            return  result;
        }catch (e) {
            console.log(e);
            return null;
        }
    }

    async getAllShop(){
        const {app} = this;
        try{
            //select查询全表
            const result = await app.mysql.select('goods')
            return result
        }catch (e) {
            console.log(e);
            return null;
        }
    }

    async getHotShop(){
        const {app} = this;
        try{
            //select查询全表
            /*const result = await app.mysql.select('goods',{
                orders:['sale','DESC'],
                limit:10
            })*/
            let sql = `select * from goods order by sale desc limit 0,10`
            const result = await app.mysql.query(sql);
            return result
        }catch (e) {
            console.log(e);
            return null;
        }
    }
    async getSaledShop(){
        const {app} = this;
        try{
            //select查询全表
            /*const result = await app.mysql.select('goods',{
                orders:['sale','DESC'],
                limit:10
            })*/
            let sql = `select * from goods where sale>0`
            const result = await app.mysql.query(sql);
            return result
        }catch (e) {
            console.log(e);
            return null;
        }
    }
    
    async getFenleiShop(type){
        const {app} = this;
        console.log(type);
        try{
            let sql = `select * from goods where type="${type}"`
            const result = await app.mysql.query(sql);
            return result;
        }catch (e) {
            console.log(e);
            return null;
        }
    }

    async getShop(id){
        //id 动态路由查询
        const {app} =this;
        try {
            const result = await app.mysql.get('goods',{
                id
            })
            return result
        }catch (e) {
            console.log(e);
            return null;
        }
    }

    async SelectShop(name){
        //模糊查询
        const {app} = this;
        try{
            let sql = `select * from goods where name like "%${name}%"`
            const result = await app.mysql.query(sql);
            return result;
        }catch (e) {
            console.log(e);
            return null;
        }
    }

    async UpdateShop(params){
        const {app} = this;
        try {
            const result = await app.mysql.update('goods',params);
            return  result;
        }catch (e) {
            console.log(e);
            return null;
        }
    }
    async deleteShop(id){
        const {app} = this;
        try {
            const result = await app.mysql.delete('goods',{
                id
            });
            return  result;
        }catch (e) {
            console.log(e);
            return null;
        }
    }

    async addNum(params){
        const {app} = this;
        try{
            for(let shop of params){
                await app.mysql.query('update goods set sale = sale + ? where id = ?',[shop.shopNum,shop.shopId]);
            }

            return  true;
        }catch (e) {
            return null;
        }
    }
}

module.exports = ShopService;
