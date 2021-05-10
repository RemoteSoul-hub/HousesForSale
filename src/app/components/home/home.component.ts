import { Component, OnInit } from '@angular/core';
import { HousesService } from '../../services/houses.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private housesService: HousesService) { }

  ngOnInit(): void {
  }

  getHouses() {
    
  }

}
