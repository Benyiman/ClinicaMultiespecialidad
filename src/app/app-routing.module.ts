import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgendarHoraComponent } from './Components/agendar-hora/agendar-hora.component';
import { HomeComponent} from './Components/home/home.component';

const routes: Routes = [
  {path: '',redirectTo: 'agendar_hora', pathMatch: 'full'}, 
  {path: 'agendar_hora', component: AgendarHoraComponent},
  {path: 'home', component: HomeComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
