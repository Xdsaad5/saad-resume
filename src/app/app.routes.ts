import { Routes } from '@angular/router';
import { UserDetailComponent } from './components/user-detail/user-detail.component';

export const routes: Routes = [
    { path: ':username', component: UserDetailComponent },
    { path: "", redirectTo: "saad", pathMatch: "full" }
  ];
