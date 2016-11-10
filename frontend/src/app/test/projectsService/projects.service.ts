/**
 * Created by wiekonek on 10.11.16.
 */
import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";

@Injectable()
export class ProjectsService {
  http:Http;
  constructor(http: Http) {
    this.http = http;
  }

  private checkForError(resp: Response): Response {
    console.log(resp.status);
    console.log(resp.json());
    console.log(resp.headers);
    return resp;
  }

  getData() {
    return this.http.get('http://192.168.0.11:4000/rest/project')
      .map(this.checkForError)
      .map(res => res.json());

    // return [
    //   {title: "DataTitle 1"},
    //   {title: "DataTitle 2"},
    //   {title: "DataTitle 3"},
    //   {title: "DataTitle 4"}
    // ]
  }
}
