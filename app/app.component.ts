import { Component } from '@angular/core';

@Component({
    selector: 'pm-app',
    template: `
    <div class="panel panel-primary">
        <div class="panel-heading">
            {{pageTitle}}
        </div>
        <div class="panel-body"  >
            <div class="row" >
                <img src="./app/assets/images/logo.png" 
                    class="img-responsive center-block"
                    style="max-height:300px;padding-bottom:50px"/>
            </div>
            <div class="row"  >
                <div class="text-center">Developed by:</div>
                <h3 class="text-center">Dnyaneshwar Uttarwar</h3>
            </div>
        </div>
    </div>
     `
})

export class AppComponent {
    pageTitle: string = 'Angular2 Demo Application';
}
