import { Module } from '@nestjs/common';
import { AuthController } from './controllers/auth/auth.controller';
import { AuthService } from './controllers/auth/auth.service';
import { LeadsController } from './controllers/leads/leads.controller';
import { LeadsService } from './controllers/leads/leads.service';
import { ContactsController } from './controllers/contacts/contacts.controller';
import { ContactsService } from './controllers/contacts/contacts.service';
import { CompaniesController } from './controllers/companies/companies.controller';
import { CompaniesService } from './controllers/companies/companies.service';

@Module({
  imports: [],
  controllers: [
    AuthController,
    LeadsController,
    ContactsController,
    CompaniesController
  ],
  providers: [
    AuthService,
    LeadsService,
    ContactsService,
    CompaniesService
  ],
})
export class AppModule { }
