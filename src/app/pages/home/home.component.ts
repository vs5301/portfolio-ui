import { Component, OnInit } from '@angular/core';
import { Firestore, collection, doc, getDoc } from '@angular/fire/firestore';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  data: any

  constructor(
    public firestore: Firestore
  ){}

  ngOnInit(): void {
      
  }

  openDoc(){
    this.getDocument()
    window.open(this.data['link'])
  }

  async getDocument(){
    await getDoc(doc(collection(this.firestore, "resume"), "nn1QOxSs6CzcAVNN4Nnk")).then((result) => {
      this.data = result.data()
      return this.data
    })
  }

}
