import { Injectable } from '@angular/core';
import { WebReqService } from './web-req.service';


@Injectable({
  providedIn: 'root'
})
export class GetofficeService {

  constructor(private webReqService: WebReqService) { }

  getOfficess() {
    return this.webReqService.get('offices');
  }

  
}
