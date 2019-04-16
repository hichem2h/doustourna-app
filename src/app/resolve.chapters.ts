import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { DatabaseApiService } from './database-api.service';

@Injectable()
export class getDataToStore implements Resolve<any> {
  constructor(private api: DatabaseApiService) { }

  resolve() {

    this.api.loadChapters();

  }
}
