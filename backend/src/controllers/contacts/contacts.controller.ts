import { Controller, Post, Body } from '@nestjs/common';
import { ContactsService } from './contacts.service';
import type { AuthData } from 'src/types';

@Controller('contacts')
export class ContactsController {
  constructor(private readonly contactsService: ContactsService) { }

  @Post()
  createContact(@Body() authData: AuthData) {
    return this.contactsService.createContact(authData);
  }
}