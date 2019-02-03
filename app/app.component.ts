import {Component} from '@angular/core';
import {Employee,DepartMents} from './employees/employee';
import {EmployeeService} from './employees/employeeservice';
import { SelectItem } from 'primeng/primeng';

class GetEmployee implements Employee {
    constructor(public firstName?, public lastName?, public title?,public department?) {}
}

@Component({
	templateUrl: 'app/app.component.html',
	selector: 'my-app'
})

export class AppComponent {

	displayDialog: boolean;
    display: boolean = false;
    employee: Employee = new GetEmployee();    
    selectedEmployee: Employee;
    newEmployee: boolean;
    employees: Employee[];
    departmentsLst: SelectItem;
    selectedDepartMent :any;
    constructor(private employeeService: EmployeeService) {
        this.departmentsLst = new DepartMents().departments;;
     }

    ngOnInit() {
        this.employeeService.getEmployeeData().then(employees => this.employees = employees);      

    }
	onItemSelect(item: any){
        this.employees[this.findSelectedEmployeeIndex()].department = item;     
    }
    OnItemDeSelect(item: any){
        console.log(item);
    }
    onSelectAll(items: any){
        console.log(items);
    }
    onDeSelectAll(items: any){
        console.log(items);
    }
	 showDialogToAdd() {
        this.selectedDepartMent = [];
        this.newEmployee = true;
        this.employee = new GetEmployee();
        this.displayDialog = true;
    }
    showDialogToEdit() {
        this.newEmployee = false;
        
        if(this.employee!=null){
        this.selectedDepartMent=[];
        this.employees[this.findSelectedEmployeeIndex()] = this.employee;
        for(var i=0;i< this.employee.department.length;i++){
            this.selectedDepartMent.push(this.employee.department[i]);
        }
        this.displayDialog = true;
        }
    }

    save() {
        this.employee.department = this.selectedDepartMent;
        if(this.newEmployee){
            this.employees.push(this.employee);
            console.log(this.employee)
        }
        else
            this.employees[this.findSelectedEmployeeIndex()] = this.employee;
        this.employee = null;
        this.displayDialog = false;
        
    }

    showDialogondelete() {       
        this.display = true;
    }
    delete(){
        this.employees.splice(this.findSelectedEmployeeIndex(), 1);
        this.employee = null;
        this.display = false;
    }
    closeDialog(){
        this.displayDialog = false;
        this.display = false;
    }
    
    onRowSelect(event) {
        this.newEmployee = false;
        this.employee = this.cloneEmployee(event.data);
        this.displayDialog = false;
    }

    cloneEmployee(c: Employee): Employee {
        let employee = new GetEmployee();
        for(let prop in c) {
            employee[prop] = c[prop];
        }
        return employee;
    }

    findSelectedEmployeeIndex(): number {
        return this.employees.indexOf(this.selectedEmployee);
    }

   
}