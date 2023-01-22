import axios from 'axios';
import {enviroment} from '../Config';
class HomeService {
  async getLeaderBoard() {
    var config = {
      method: 'post',
      url: enviroment.loginUrl + 'players/getLeaderBoard',
      headers: {
        Accept: 'application/json',
      },
    };
    const response = await axios(config);
    return response;
  }
}

export default new HomeService();
