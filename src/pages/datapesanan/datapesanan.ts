import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { Pesanan } from '../../model/pesanan/pesanan.model';
import { PesananListService } from '../../services/pesanan-list.service';
import 'rxjs/add/operator/map';

/**
 * Generated class for the DatapesananPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-datapesanan',
  templateUrl: 'datapesanan.html',
})
export class DatapesananPage {

 
  pesananList: Observable<Pesanan[]>
    constructor(public navCtrl: NavController, private pesananListService: PesananListService) {
      this.pesananList = this.pesananListService.getPesananList()
        .snapshotChanges()
        .map(
        changes => {
          return changes.map(c => ({
            key: c.payload.key, ...c.payload.val()
          }))
        });
    }
  
  }
  