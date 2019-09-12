import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  isSubmit = false;
  isError = false;
  vege: string;
  meat: string;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    if(this.vege=="青菜" && this.meat=="肉丝")
    {
      this.isSubmit = true;
      this.isError= false;
    }
    else if (this.vege=="西兰花" && this.meat=="牛肉"){
      this.isSubmit = true;
      this.isError= false;
    }
    else {
      this.isSubmit = false;
      this.isError= true;
    }
  }

  reset(){
    this.vege = "";
    this.meat = "";
    this.isError= false;
    this.isSubmit = false;
  }
}
