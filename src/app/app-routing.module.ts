import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './benificiary/list/list.component';
import { RegisterComponent } from './benificiary/register/register.component';
import { AuthGuard } from './service/auth.guard';

const routes: Routes = [
  {
    path:'',redirectTo:'benificiary',pathMatch:'full'
  },
  {
    path:'add',component:RegisterComponent,canActivate:[AuthGuard]
  },
  {
    path:'show',component:ListComponent,canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
