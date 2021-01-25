/* eslint-disable strict */
const Controller = require('egg').Controller;

class YhqController extends Controller {
  async addYhq() {
    const { ctx } = this;
    const result = await ctx.service.yhq.addYhq(ctx.request.body);
    if (result) {
      ctx.body = {
        status: 200,
        data: result,
      };
    } else {
      ctx.body = {
        status: 500,
        errMsg: '失败',
      };
    }
  }
  async lookYhq() {
    const { ctx } = this;
    const result = await ctx.service.yhq.lookYhq(ctx.params.id);
    if (result) {
      ctx.body = {
        status: 200,
        data: result,
      };
    } else {
      ctx.body = {
        status: 500,
        errMsg: '失败',
      };
    }
  }
  async getAllUserYhq() {
    const { ctx } = this;
    const result = await ctx.service.yhq.getAllUserYhq();
    if (result) {
      ctx.body = {
        status: 200,
        data: result,
      };
    } else {
      ctx.body = {
        status: 500,
        errMsg: '失败',
      };
    }
  }


  async addY() {
    const { ctx } = this;
    const result = await ctx.service.yhq.addY(ctx.request.body);
    if (result) {
      ctx.body = {
        status: 200,
        data: result,
      };
    } else {
      ctx.body = {
        status: 500,
        errMsg: '失败',
      };
    }
  }
  async getAllY() {
    const { ctx } = this;
    const result = await ctx.service.yhq.getAllY();
    if (result) {
      ctx.body = {
        status: 200,
        data: result,
      };
    } else {
      ctx.body = {
        status: 500,
        errMsg: '失败',
      };
    }
  }
  async UpdateY() {
    const { ctx } = this;
    console.log(ctx.request.body);
    // 修改传进来的参数
    const result = await ctx.service.yhq.UpdateY(ctx.request.body);

    if (result) {
      ctx.body = {
        status: 200,
        data: result,
      };
    } else {
      ctx.body = {
        status: 500,
        errMsg: '失败',
      };
    }
  }
  async deleteY() {
    const { ctx } = this;
    const result = await ctx.service.yhq.deleteY(ctx.request.body.id);
    if (result) {
      ctx.body = {
        status: 200,
        data: result,
      };
    } else {
      ctx.body = {
        status: 500,
        errMsg: '失败',
      };
    }
  }
  async getUsedNumber() {
    const { ctx } = this;
    const result = await ctx.service.yhq.getUsedNumber();
    if (result) {
      ctx.body = {
        status: 200,
        data: result,
      };
    } else {
      ctx.body = {
        status: 500,
        errMsg: '失败',
      };
    }
  }
}

module.exports = YhqController;
