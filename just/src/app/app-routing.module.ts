import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyComponent1Component } from './my-component1/my-component1.component';
import { MyComponent2Component } from './my-component2/my-component2.component';
import { MyComponent3Component } from './my-component3/my-component3.component';
import { MyComponent4Component } from './my-component4/my-component4.component';
import { Router } from '@angular/router';
const routes: Routes = [{path: '', redirectTo: 'page', pathMatch: 'full'},
                         {
                           path: 'page',
                           component:  MyComponent1Component,
                         },
                         {
                           path:'page2/:id',
                           component:   MyComponent2Component,
                         },
                         {
                           path: 'page3/:id',
                           component: MyComponent3Component,
                         },
                         {
                           path: 'page4/:id',
                           component: MyComponent4Component,
                         }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  // constructor(private router: Router) {
  //   this.router.navigate(['/page2',2])
  // }

 }
