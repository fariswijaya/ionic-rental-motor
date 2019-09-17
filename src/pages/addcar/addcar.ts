import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Car } from '../../model/car/car.model';
import { CarListService } from '../../services/car-list.service';
import * as firebase from 'firebase';
import { LoadingController } from 'ionic-angular';


/**
 * Generated class for the AddcarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addcar',
  templateUrl: 'addcar.html',
})
export class AddcarPage {
  car: Car = {
    merk: '',
    model: '',
    platno: '',
    harga: '',
    gambar: 'platno'
  };

  url: any = '';

  constructor(public navCtrl: NavController, public navParams: NavParams,
  private carListService: CarListService,
  public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddcarPage');
  }

  addCar(car: Car) {
    this.carListService.addCar(car).then(ref => {
      this.navCtrl.setRoot('HomePage');
    })
  }

  chooseFile() {
    // open file picker
    document.getElementById('image').click();
  }
  upload() {
    // Create a root reference
    let storageRef = firebase.storage().ref();
    let loading = this.loadingCtrl.create({ content: 'Please wait...' });
    loading.present();

    for (let selectedFile of [(<HTMLInputElement>document.getElementById('image')).files[0]]) {
      let path = '/files/' + Date.now() + `${selectedFile.name}`;
      let iRef = storageRef.child(path);
      iRef.put(selectedFile).then(() => {
        loading.dismiss();
        iRef.getDownloadURL().then( url => this.url = url )
      });

    }
  }
}
