import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../model/user/user.model';
import { UserListService } from '../../services/user-list.service';
import { AngularFireAuth } from '@angular/fire/auth';

/**
 * Generated class for the AdduserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-adduser',
  templateUrl: 'adduser.html',
})
export class AdduserPage {
  emailNow: string;

  user : User = {
      nama: '',
      email: '',
      alamat:'',
      telp: '',
  };


  constructor(public navCtrl: NavController, private userListService: UserListService, public navParams: NavParams,
  private fire : AngularFireAuth) {
    this.emailNow = fire.auth.currentUser.email;
  }

      ionViewDidLoad() {
      console.log('ionViewDidLoad AdduserPage');
      }


    addUser(user : User) {
      this.userListService.addUser(user).then(ref => {
      this.navCtrl.push('LoginPage');
      })
    }
}
