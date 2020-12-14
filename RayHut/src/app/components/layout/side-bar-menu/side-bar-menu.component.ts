import { Component, OnInit } from '@angular/core';
import {Plant} from 'src/app/interfaces/plant';
@Component({
  selector: 'app-side-bar-menu',
  templateUrl: './side-bar-menu.component.html',
  styleUrls: ['./side-bar-menu.component.css']
})
export class SideBarMenuComponent implements OnInit {
  plants:Plant[]=[
    {name:'plant 1',id:1},
    {name:'plant 2',id:2},
    {name:'plant 3',id:3},
    {name:'plant 4',id:4},
    {name:'plant 5',id:5},
  ]
  company:string="Company";
  user:string="user";
  constructor() { }

  ngOnInit(): void {
  }

}
