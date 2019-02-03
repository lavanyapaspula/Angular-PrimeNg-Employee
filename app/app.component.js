"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var employee_1 = require("./employees/employee");
var employeeservice_1 = require("./employees/employeeservice");
var GetEmployee = /** @class */ (function () {
    function GetEmployee(firstName, lastName, title, department) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.title = title;
        this.department = department;
    }
    return GetEmployee;
}());
var AppComponent = /** @class */ (function () {
    function AppComponent(employeeService) {
        this.employeeService = employeeService;
        this.display = false;
        this.employee = new GetEmployee();
        this.departmentsLst = new employee_1.DepartMents().departments;
        ;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.employeeService.getEmployeeData().then(function (employees) { return _this.employees = employees; });
    };
    AppComponent.prototype.onItemSelect = function (item) {
        this.employees[this.findSelectedEmployeeIndex()].department = item;
    };
    AppComponent.prototype.OnItemDeSelect = function (item) {
        console.log(item);
    };
    AppComponent.prototype.onSelectAll = function (items) {
        console.log(items);
    };
    AppComponent.prototype.onDeSelectAll = function (items) {
        console.log(items);
    };
    AppComponent.prototype.showDialogToAdd = function () {
        this.selectedDepartMent = [];
        this.newEmployee = true;
        this.employee = new GetEmployee();
        this.displayDialog = true;
    };
    AppComponent.prototype.showDialogToEdit = function () {
        this.newEmployee = false;
        if (this.employee != null) {
            this.selectedDepartMent = [];
            this.employees[this.findSelectedEmployeeIndex()] = this.employee;
            for (var i = 0; i < this.employee.department.length; i++) {
                this.selectedDepartMent.push(this.employee.department[i]);
            }
            this.displayDialog = true;
        }
    };
    AppComponent.prototype.save = function () {
        this.employee.department = this.selectedDepartMent;
        if (this.newEmployee) {
            this.employees.push(this.employee);
            console.log(this.employee);
        }
        else
            this.employees[this.findSelectedEmployeeIndex()] = this.employee;
        this.employee = null;
        this.displayDialog = false;
    };
    AppComponent.prototype.showDialogondelete = function () {
        this.display = true;
    };
    AppComponent.prototype.delete = function () {
        this.employees.splice(this.findSelectedEmployeeIndex(), 1);
        this.employee = null;
        this.display = false;
    };
    AppComponent.prototype.closeDialog = function () {
        this.displayDialog = false;
        this.display = false;
    };
    AppComponent.prototype.onRowSelect = function (event) {
        this.newEmployee = false;
        this.employee = this.cloneEmployee(event.data);
        this.displayDialog = false;
    };
    AppComponent.prototype.cloneEmployee = function (c) {
        var employee = new GetEmployee();
        for (var prop in c) {
            employee[prop] = c[prop];
        }
        return employee;
    };
    AppComponent.prototype.findSelectedEmployeeIndex = function () {
        return this.employees.indexOf(this.selectedEmployee);
    };
    AppComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/app.component.html',
            selector: 'my-app'
        }),
        __metadata("design:paramtypes", [employeeservice_1.EmployeeService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map