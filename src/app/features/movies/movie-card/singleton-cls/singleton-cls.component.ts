import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';


//Singleton Pattern 

//Singleton is a design pattern that ensures that a class has only one immutable instance. 
//Said simply, the singleton pattern consists of an object that can't be copied or modified

@Component({
  selector: 'app-singleton-cls',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './singleton-cls.component.html',
  styleUrls: ['./singleton-cls.component.scss']
})

export class SingletonClsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.start();
    this.update();
  }

  start(){
    console.log('App has started');
  }

  update(){ console.log('App has updated'); }
}
