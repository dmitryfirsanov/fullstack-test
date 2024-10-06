import { Controller, Post, Body } from '@nestjs/common';
import { LeadsService } from './leads.service';
import type { AuthData } from 'src/types';

@Controller('leads')
export class LeadsController {
  constructor(private readonly leadsService: LeadsService) {}

  @Post()
  createLead(@Body() authData: AuthData) {
    return this.leadsService.createLead(authData);
  }
}