import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [FormsModule],
    declarations: [Component, NgModule]
})

@Component({
    selector: 'my-app',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css'],
    moduleId: module.id
})

export class AppComponent {

    email: string;
    profession: string;
    name: name;
    address: address;
    showEdit: boolean = true;

    constructor() {
        this.email = "none";
        this.profession = "none";

        this.address = {
            streetAdd: "none",
            city: "none",
            state: "none",
            zip: null
        }
        this.name = {
            fName: "Guest",
            lName: ""
        }
    }

    toggleEdit() {
        if (this.showEdit) {
            this.showEdit = false;
        } else {
            this.showEdit = true;
        }
    }
}

interface name {
    fName: string,
    lName: string
}

interface address {
    streetAdd: string;
    city: string;
    state: string;
    zip: number;
}

