import axios from 'axios';
import {enviroment} from '../Config';
class FixtureService {
  async getFixture() {
    var config = {
      method: 'get',
      url: enviroment.fixtureUrl + 'fixtures',
    };
    const response = await axios(config);
    return response;
  }
  async getLiveFixture() {
    var config = {
      method: 'get',
      url: enviroment.fixtureUrl + 'fixtures/live',
    };
    const response = await axios(config);
    return response;
  }
}

export default new FixtureService();
