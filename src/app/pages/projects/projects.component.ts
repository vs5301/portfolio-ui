import { Component, OnInit } from '@angular/core';
import { FenixComponent } from '../fenix/fenix.component';
import { RCSComponent } from '../rcs/rcs.component';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit{

  constructor(){}

  ngOnInit(): void {

  }

  comp: any
  
  detectComp(comp: any){
    // console.log(comp);
    if (comp === "fenix"){
      this.comp = FenixComponent
    }
    if (comp === "rcs"){
      this.comp = RCSComponent
    }
  }
}
