import { Component, OnInit } from "@angular/core";
import { AppService } from "./app.service";
import "rxjs/add/operator/withLatestFrom";

const findUsersByIds = (ids, users) => users.filter(user => ids.indexOf(user.id) > -1);

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.css'],
  templateUrl: 'app.component.html',

})
export class AppComponent implements OnInit {

  public users$;

  public friends$;

  public friendsOfFriends$;

  constructor(private appService: AppService) {
  }

  ngOnInit() {
    this.users$ = this.appService.getUsers();
  }

  onSelectUser(selectedUser) {
    this.friends$ = this.users$.map(users => findUsersByIds(selectedUser.friends, users));
    this.friendsOfFriends$ = this.users$.withLatestFrom(this.friends$, (users, friends) => {
      const friendOfFriendsIds = friends
        .reduce((prev, friend) => prev.concat(friend.friends), [])
        .filter(id => friends.every(friend => friend.id !== id && selectedUser.id !== id));
      return findUsersByIds(friendOfFriendsIds, users);
    });
  }

}