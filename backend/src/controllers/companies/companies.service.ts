import { Injectable, HttpException } from '@nestjs/common';
import axios from 'axios';
import type { AuthData } from 'src/types';

@Injectable()
export class CompaniesService {
  async createCompany(authData: AuthData) {
    const { baseDomain, accessToken } = authData;

    if (!baseDomain || !accessToken) {
      throw new Error('Authentication data is missing');
    }

    const url = `https://${baseDomain}/api/v4/companies`;

    try {
      const response = await axios.post(url,
        {
          tags_to_add: [
            {
              name: "test company",
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
        id: response.data._embedded.companies[0].id,
      };
    } catch (error) {
      throw new HttpException(error, 500);
    }
  }
}
