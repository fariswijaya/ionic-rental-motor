import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Pesanan } from '../model/pesanan/pesanan.model';

@Injectable()
export class PesananListService {

    private pesananListRef = this.db.list<Pesanan>('pesanan-list');

    constructor(private db: AngularFireDatabase) { }

    getPesananList() {
        return this.pesananListRef;
    }

    addPesanan(pesanan: Pesanan) {
        return this.pesananListRef.push(pesanan);
    }

    konfirPesanan(pesanan : Pesanan){
        return this.pesananListRef.update(pesanan.key, pesanan);
    }
}
