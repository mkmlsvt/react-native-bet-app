import axios from 'axios';
import {enviroment} from '../Config';
class UserService {
  async login(email: string) {
    console.log(email);
    
    var config = {
      method: 'get',
      url: enviroment.loginUrl + 'players/' + email,
      headers: {
        Accept: 'application/json',
      },
    };
    
    const response = await axios(config);
    return response;
  }
}

export default new UserService();
