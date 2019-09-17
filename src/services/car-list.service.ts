import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Car } from '../model/car/car.model';

@Injectable()
export class CarListService {

    private carListRef = this.db.list<Car>('car-list');

    constructor(private db: AngularFireDatabase) { }

    getCarList() {
        return this.carListRef;
    }

    addCar(car: Car) {
        return this.carListRef.push(car);
    }

    updateCar(car: Car) {
        return this.carListRef.update(car.key, car);
    }

    removeCar(car: Car) {
        return this.carListRef.remove(car.key);
    }
}
