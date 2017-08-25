import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class TeamServiceService {

  constructor(public http:Http) { }

  getHeros() {
      return this.http.get("assets/api/heros.json")
          .map((res:Response) => res.json()); //records in this case
    }

}
