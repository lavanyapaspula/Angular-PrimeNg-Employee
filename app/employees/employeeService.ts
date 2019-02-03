import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Employee} from '../../app/employees/employee';

@Injectable()
export class EmployeeService {

    constructor(private http: Http) {}

    getEmployeeData() {
        return this.http.get('app/employees-data.json')
                    .toPromise()
                    .then(res => <Employee[]> res.json().data)
                    .then(data => { return data; });
    }
}