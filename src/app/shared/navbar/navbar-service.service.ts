import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class NavbarServiceService {

  constructor(public http:Http) { }

  getData() {
      return this.http.get("assets/api/nav-items.json")
          .map((res:Response) => res.json()); //records in this case
    }

}
