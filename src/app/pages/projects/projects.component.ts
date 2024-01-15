import { Component, OnInit } from '@angular/core';
import { FenixComponent } from '../fenix/fenix.component';
import { RCSComponent } from '../rcs/rcs.component';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit{

  isMenuCollapsed: boolean = true

  constructor(
    private router: Router
  ){
    this.router.events.pipe(filter(x => x instanceof NavigationEnd))
    .subscribe((value) => {
      this.isMenuCollapsed = true
    })
  }

  ngOnInit(): void {
    this.detectComp("fenix")
  }

  comp: any
  FenixComponent = FenixComponent
  RCSComponent = RCSComponent
  
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
