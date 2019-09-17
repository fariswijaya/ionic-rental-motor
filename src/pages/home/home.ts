import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { IonicPage } from 'ionic-angular/navigation/ionic-page';
import { Observable } from 'rxjs/Observable';
import { Car } from '../../model/car/car.model';
import { CarListService } from '../../services/car-list.service';
import 'rxjs/add/operator/map';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


carList: Observable<Car[]>
//private pictures: any[];
  constructor(public navCtrl: NavController, private carListService: CarListService) {
    this.carList = this.carListService.getCarList()
      .snapshotChanges()
      .map(
      changes => {
        return changes.map(c => ({
          key: c.payload.key, ...c.payload.val()
        }))
      });
  }

}
