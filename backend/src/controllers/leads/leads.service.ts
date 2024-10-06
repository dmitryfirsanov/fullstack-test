import { Injectable, HttpException } from '@nestjs/common';
import axios from 'axios';
import type { AuthData } from 'src/types';

@Injectable()
export class LeadsService {
  async createLead(authData: AuthData) {
    const { baseDomain, accessToken } = authData;

    if (!baseDomain || !accessToken) {
      throw new Error('Authentication data is missing');
    }

    const url = `https://${baseDomain}/api/v4/leads`;

    try {
      const response = await axios.post(url,
        {
          tags_to_add: [
            {
              name: "test lead",
            },
          ],
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          },
        }
      );

      return {
        id: response.data._embedded.leads[0].id,
      };
    } catch (error) {
      if (error.status) {
        throw new HttpException(error.message, error.status);
      } else {
        throw new HttpException('Внутренняя ошибка сервера', 500);
      }
    }
  }
}
