import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {Office} from 'src/app/shared/models/office.model'
import { GetofficeService } from 'src/app/shared/getoffice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  officess: Office[];

  constructor(private route: ActivatedRoute, private router: Router, private getofficeService: GetofficeService) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        console.log(params)
      })

    this.getofficeService.getOfficess().subscribe((officess: Office[]) => {
      this.officess = officess;
    })
  }

  gotoPage(office: Office){
    this.router.navigate(['/office', office._id]);
  }

}
