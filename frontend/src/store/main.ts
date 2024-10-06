import { defineStore } from 'pinia';
import axios from 'axios';

interface MainState {
  accessToken: string,
  baseDomain: string,
  leads: string[],
  companies: string[],
  contacts: string[],
}

export const useMainStore = defineStore('main', {
  state: (): MainState => ({
    accessToken: '',
    baseDomain: '',
    leads: [],
    companies: [],
    contacts: [],
  }),
  actions: {
    async auth() {
      try {
        const response = await axios.get('http://localhost:3000/auth/');

        this.accessToken = response.data.access_token;
        this.baseDomain = response.data.base_domain;
      }
      catch (error) {
        console.log(error);
      }
    },

    async createLead() {
      const { accessToken, baseDomain } = this;

      try {
        const response = await axios.post('http://localhost:3000/leads/', {
          accessToken,
          baseDomain,
        });

        const { id }: { id: string } = response.data;

        this.leads.push(`Сделка №${id}`);
      }
      catch (error) {
        console.log(error);
      }
    },

    async createCompany() {
      const { accessToken, baseDomain } = this;

      try {
        const response = await axios.post('http://localhost:3000/companies/', {
          accessToken,
          baseDomain,
        });


        const { id }: { id: string } = response.data;

        this.companies.push(`Компания №${id}`);
      }
      catch (error) {
        console.log(error);
      }
    },

    async createContact() {
      const { accessToken, baseDomain } = this;

      try {
        const response = await axios.post('http://localhost:3000/contacts/', {
          accessToken,
          baseDomain,
        });

        const { id }: { id: string } = response.data;

        this.contacts.push(`Контакт №${id}`);
      }
      catch (error) {
        console.log(error);
      }
    },
  }
})