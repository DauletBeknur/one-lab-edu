import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { TwoComponent } from './two/two.component';
import { ThirdComponent } from './third/third.component';
import { FourthComponent } from './fourth/fourth.component';
import { FifthComponent } from './fifth/fifth.component';
import { SixthComponent } from './sixth/sixth.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    TwoComponent,
    ThirdComponent,
    FourthComponent,
    FifthComponent,
    SixthComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      [
          {path: '', redirectTo: 'auth', pathMatch: 'full'},
          {path: 'auth', component: FirstComponent },
          {path: 'home', component: TwoComponent },
          {path: 'contact', component: ThirdComponent },
          {path: 'group', component: FourthComponent },
          {path: 'images', component: FifthComponent },
          {path: 'settings', component: SixthComponent },
      ]
      ),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
