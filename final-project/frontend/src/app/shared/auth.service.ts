import { Injectable } from '@angular/core';
import { WebReqService } from './web-req.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private webReqService: WebReqService) { }

  getUsers() {
    return this.webReqService.get('users');
  }

  createUser(login: string, email: string, password: string) {
    return this.webReqService.post('users', { login, email, password });
  }

}
// this.store.dispatch(loadInvoices({}));
//     this.invoices$ = this.store.pipe(select(getAllInvoices));
// export const getAllInvoices = createSelector(getInvoicesState, (state: InvoicesState) => state.invoices);
// export const loadInvoices = createAction('[Invoices] Load Invoices', props<{ update?: boolean }>());
// on(InvoicesActions.loadInvoices, state => ({ ...state, loaded: false, error: null })),
// on(InvoicesActions.loadInvoicesSuccess, (state, { invoices }) => ({ ...state, loaded: true, invoices })),