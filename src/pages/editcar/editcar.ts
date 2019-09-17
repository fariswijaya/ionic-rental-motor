import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Car } from '../../model/car/car.model';
import { CarListService } from '../../services/car-list.service';

/**
 * Generated class for the EditcarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-editcar',
  templateUrl: 'editcar.html',
})
export class EditcarPage {
  car: Car = {
    merk: '',
    model: '',
    platno: '',
    harga: '',
    gambar: ''
  };

  constructor(public navCtrl: NavController, public navParams: NavParams,
  private carListService: CarListService) {
  }

  ionViewDidLoad() {
    this.car = this.navParams.get('car');
  }

  updateCar(car: Car) {
    this.carListService.updateCar(car).then(() => {
      this.navCtrl.setRoot('HomePage');
    })
  }

  removeCar(car: Car) {
    this.carListService.removeCar(car).then(() => {
      this.navCtrl.setRoot('HomePage');
    })
  }

}
