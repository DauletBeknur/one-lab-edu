import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { GetofficeService } from 'src/app/shared/getoffice.service';
import { Office } from 'src/app/shared/models/office.model';
import { Store, select } from '@ngrx/store';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-office',
  templateUrl: './office.component.html',
  styleUrls: ['./office.component.scss']
})
export class OfficeComponent implements OnInit {
  offices: Office[];
  selectedId: string;
  offices$: Observable<Office[]> = this.store.select(state => state.offices);

  constructor(private getOfficeService: GetofficeService, private route: ActivatedRoute, private router: Router, private store: Store<{offices: Office[]}>) { }

  ngOnInit(): void {
    this.selectedId = this.route.snapshot.params['id'];
    this.getOfficeService.getOfficess().subscribe((officess: Office[]) => {
      this.offices$ = officess;
    })
    this.store.dispatch({ type: '[Movies Page] Load Movies' });
  }

}
