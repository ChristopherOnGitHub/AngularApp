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
var core_1 = require("@angular/core");
var core_2 = require("@angular/core");
var forms_1 = require("@angular/forms");
var AppComponent = (function () {
    function AppComponent() {
        this.showEdit = true;
        this.email = "none";
        this.profession = "none";
        this.address = {
            streetAdd: "none",
            city: "none",
            state: "none",
            zip: null
        };
        this.name = {
            fName: "Guest",
            lName: ""
        };
    }
    AppComponent.prototype.toggleEdit = function () {
        if (this.showEdit) {
            this.showEdit = false;
        }
        else {
            this.showEdit = true;
        }
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_2.NgModule({
        imports: [forms_1.FormsModule],
        declarations: [core_1.Component, core_2.NgModule]
    }),
    core_1.Component({
        selector: 'my-app',
        templateUrl: 'app.component.html',
        styleUrls: ['app.component.css'],
        moduleId: module.id
    }),
    __metadata("design:paramtypes", [])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map