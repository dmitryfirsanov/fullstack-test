import { Injectable, HttpException } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class AuthService {
  async auth() {
    try {
      const response = await axios.get('https://app2.gnzs.ru/amocrm/test/oauth/get-token.php', {
        // для удобства прописал сразу, 
        // но если б это было не тестовое задание, 
        // то правильнее засунуть эти данные в env файл
        headers: {
          "X-Client-Id": 31992158,
        }
      });

      return response.data;
    }
    catch (error) {
      throw new HttpException(error, 500);
    }
  }
}
