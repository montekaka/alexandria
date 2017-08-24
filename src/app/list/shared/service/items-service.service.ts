import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class ItemsServiceService {

  constructor(public http:Http) { }

  getReports(){
    return this.http.get("assets/api/reports.json")
        .map((res:Response) => res.json()); //records in this case
  }

}
