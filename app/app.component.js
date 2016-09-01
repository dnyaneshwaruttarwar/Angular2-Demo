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
var core_1 = require('@angular/core');
var AppComponent = (function () {
    function AppComponent() {
        this.pageTitle = 'Angular2 Demo Application';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'pm-app',
            template: "\n    <div class=\"panel panel-primary\">\n        <div class=\"panel-heading\">\n            {{pageTitle}}\n        </div>\n        <div class=\"panel-body\"  >\n            <div class=\"row\" >\n                <img src=\"./app/assets/images/logo.png\" \n                    class=\"img-responsive center-block\"\n                    style=\"max-height:300px;padding-bottom:50px\"/>\n            </div>\n            <div class=\"row\"  >\n                <div class=\"text-center\">Developed by:</div>\n                <h3 class=\"text-center\">Dnyaneshwar Uttarwar</h3>\n            </div>\n        </div>\n    </div>\n     "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map