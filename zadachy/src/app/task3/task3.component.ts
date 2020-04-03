import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Element {
  title: string;
  color: number;
}

@Component({
  selector: 'app-task3',
  templateUrl: './task3.component.html',
  styleUrls: ['./task3.component.scss']
})
export class Task3Component implements OnInit {
  elements: Element[];
  displayedColumns: string[] = ['title', 'color'];
  dataSource = new MatTableDataSource(this.elements);
  private _jsonURL = 'assets/data.json';
  

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(private http: HttpClient) {
    this.getJSON().subscribe(data => {
      this.elements=data;
     });
   }

  public getJSON(): Observable<any> {
    return this.http.get(this._jsonURL);
  }

  ngOnInit(): void {
  }

}
