import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Pesanan } from '../../model/pesanan/pesanan.model';
import { PesananListService } from '../../services/pesanan-list.service';
import { TabsPage } from '../tabs/tabs';



/**
 * Generated class for the VerifikasiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-verifikasi',
  templateUrl: 'verifikasi.html',
})
export class VerifikasiPage {
  pesanan: Pesanan = {
    email: '',
    model: '',
    merk: '',
    harga: '',
    durasi: '',
    konfirmasi: ''
  };

  constructor(public navCtrl: NavController, public navParams: NavParams,
  private pesananListService: PesananListService) {
  }

  ionViewDidLoad() {
    this.pesanan = this.navParams.get('pesanan');
  }

  konfirmasi(pesanan: Pesanan) {
    this.pesananListService.konfirPesanan(pesanan).then(() => {
      this.navCtrl.push(TabsPage);
    
    })
    
  }

}