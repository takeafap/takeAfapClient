import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IVideo } from '../_models/iVideo';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  selectedEmployee: IVideo;
  employees: IVideo[];
  readonly baseURL = 'http://localhost:3000/employees';

  constructor(private http: HttpClient) { }

  postEmployee(emp: IVideo) {
    return this.http.post(this.baseURL, emp);
  }

  getEmployeeList() {
    return this.http.get(this.baseURL);
  }

  putEmployee(emp: IVideo) {
    return this.http.put(this.baseURL + `/${emp.title}`, emp);
  }

  deleteEmployee(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }

}
