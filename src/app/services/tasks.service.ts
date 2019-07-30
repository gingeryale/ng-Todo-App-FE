import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { EventEmitter } from "@angular/core"

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json",
    Authorization: "my-auth-token"
  })
};

@Injectable({
  providedIn: "root"
})

export class TaskService {
  refresherEE: EventEmitter<string> = new EventEmitter();

  constructor(private http: HttpClient) {}

  allMembersInService: any[] = [];

  getDataFromServer(): Observable<any> {
    return this.http.get("http://localhost:3000/api/tasks");
  }

  getMembersFromServer(): Observable<any> {
    return this.http.get("http://localhost:3000/api/tasks/allMembers");
  }

  deleteTaskfromDB(tid: string): Observable<any> {
    //http://localhost:3000/api/deletechannel?cid=num
    return this.http.get('http://localhost:3000/api/deltask?cid='+tid);
}

  addTask(formObject: any): Observable<any> {
    return this.http.post(
      "http://localhost:3000/api/tasks",
      formObject,
      httpOptions
    );
  }
}
