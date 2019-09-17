import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { NavController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { User } from '../../model/user/user.model';
import { UserListService } from '../../services/user-list.service';
import 'rxjs/add/operator/map';

/**
 * Generated class for the ListuserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-listuser',
  templateUrl: 'listuser.html',
})
export class ListuserPage {


  userList: Observable<User[]>
    constructor(public navCtrl: NavController, private userListService: UserListService) {
      this.userList = this.userListService.getUserList()
        .snapshotChanges()
        .map(
        changes => {
          return changes.map(c => ({
            key: c.payload.key, ...c.payload.val()
          }))
        });
    }
  
  }
  