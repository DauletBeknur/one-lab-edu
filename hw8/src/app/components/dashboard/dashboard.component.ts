import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { AuthService } from "../../shared/services/auth.service";
import {Observable} from 'rxjs';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
import { FirebaseFirestore, CollectionReference, DocumentReference } from '@firebase/firestore-types';
import { NgModule } from '@angular/core';

interface Item {
  item: string;
  size: number;
}


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  ref: AngularFirestoreCollection<Item>;
  items: Observable<Item[]>;




  constructor(public db: AuthService, private afs: AngularFirestore) {

   


    


  }

  ngOnInit() {
    // this.ref = this.afs.collection("items")
    // this.items= this.ref.valueChanges()
     this.items = this.db.col$("items")
  
 

  }

  // sortedItems = ['Link 1', 'Link 2', 'Link 3', 'Link 4'];
  // searchValue: string = '';

  // filterItems() {
  //   return this.sortedItems.filter(el => el.indexOf(this.searchValue) !== -1);
  // }

  // num: Array<String>=[];
  

  // filter() {
  //   for (let i=0; i<10; i++){
  //     this.num.push(this.items[i]);
    
  
 


  //   }
  // console.log(this.num);
  // }

  // searchValue: string = '';

  // filterItems() {
  //   return this.num.filter(el => el.indexOf(this.searchValue) !== -1);
  // }

  // myFunction() {
  //   document.getElementById("myDropdown").classList.toggle("show");
  // }

  filterFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    let div = document.getElementById("myDropdown");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
      let txtValue = a[i].textContent || a[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        a[i].style.display = "";
      } else {
        a[i].style.display = "none";
      }
    }
  }



  





}
