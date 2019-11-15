import { Component } from '@angular/core';

@Component({
    selector: '[warning-alert]',
    template : `<p> This is just a warning </p>`,
    styles: [`
    p {
        padding : 10px;
        background-color : orange;
        border : 1px solid red; 
    }`]
})
export class WarningAlertComponent {

}
