import { Component, OnInit } from '@angular/core';
import { HousesService } from '../../services/houses.service';
import { House } from '../../services/house.model';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  houses: House[];

  constructor(private housesService: HousesService) { 
    this.houses = [];
  }

  ngOnInit(): void {
    this.houses = this.housesService.getHouses();
  }

}
