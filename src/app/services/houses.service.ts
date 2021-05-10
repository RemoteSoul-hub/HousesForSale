import { Injectable } from '@angular/core';
import { House } from '../services/house.model';

@Injectable({
  providedIn: 'root'
})
export class HousesService {

  houses: House[] = [
    {price: 10000, avail: false, location: 'Address 1'},
    {price: 15000, avail: true, location: 'Address 2'},
    {price: 20000, avail: true, location: 'Address 3'},
  ];

  constructor() { }
getHouses() {
  return this.houses;
}

postHouse(house: House){

}
deleteHouse(id: number) {

}
}
