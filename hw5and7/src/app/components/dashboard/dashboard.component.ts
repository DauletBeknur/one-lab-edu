import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { AuthService } from "../../shared/services/auth.service";
import {Observable} from 'rxjs';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
import { FirebaseFirestore, CollectionReference, DocumentReference } from '@firebase/firestore-types';
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


}
