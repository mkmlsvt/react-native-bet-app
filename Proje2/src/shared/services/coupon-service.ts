import axios from 'axios';
import {enviroment} from '../Config';
import {CouponType} from '../store/slices/type';
class FixtureService {
  async getFixture(userId: number) {
    var config = {
      method: 'get',
      url:
        enviroment.couponUrl +
        'coupons/refreshAndUpdateCoupons?userId=' +
        userId,
    };
    const response = await axios(config);
    return response;
  }
  async postCoupon(coupon: CouponType | {}) {
    var config = {
      method: 'post',
      url: enviroment.couponUrl + 'coupons',
      data: coupon,
    };
    const response = await axios(config);
    return response;
  }
}

export default new FixtureService();
