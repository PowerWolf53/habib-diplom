import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auto-park',
  templateUrl: './auto-park.component.html',
  styleUrls: ['./auto-park.component.scss']
})
export class AutoParkComponent implements OnInit {

  images = [
    {
      id: 1,
      path: '/assets/images/car-1.png'
    },
    {
      id: 2,
      path: '/assets/images/car-2.png'
    },
    {
      id: 3,
      path: '/assets/images/car-3.png'
    },
    {
      id: 4,
      path: '/assets/images/car-4.png'
    },
    {
      id: 5,
      path: '/assets/images/car-5.png'
    }
  ]

  activeCar = this.images[0];

  constructor() { }

  ngOnInit(): void {
  }

  handleLeftArrow() {
    if(this.activeCar.id > 1){
      this.activeCar = this.images[this.activeCar.id - 2];
    }
  }

  handleRightArrow() {
    if(this.activeCar.id < 5){
      this.activeCar = this.images[this.activeCar.id];
    }
  }
}
