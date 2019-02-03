import { SelectItem } from "primeng/primeng";

export interface Employee {
    firstName?;
    lastName?;
    title?;
    department?;
}
interface DepartMent {
    label: string,
    value: string
}
export class DepartMents {

    departments: any;
    selectedDepartMent: DepartMent;
    constructor() {

        this.departments = [
            {label: 'IT', value: 'IT'},
            {label: 'HR', value: 'HR'},
            {label: 'Tax', value: 'Tax'},
            {label: 'Automation', value: 'Automation'},
            {label: 'Sales', value: 'Sales'}
        ];
}
}