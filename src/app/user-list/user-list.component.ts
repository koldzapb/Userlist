import {Component, EventEmitter, Input, Output} from "@angular/core";

@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.css']
})
export class UserListComponent {

    @Input() public users = [];

    @Input() public showButton = true;

    @Output() public selectUser = new EventEmitter<any>();

}
