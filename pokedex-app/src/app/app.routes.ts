import { Routes, RouterModule } from '@angular/router';
import { PantallaunoComponent } from './pantallauno/pantallauno.component';
import { PantalladosComponent } from './pantallados/pantallados.component';
import { NgModule } from '@angular/core';


export const routes: Routes = [
{
   path: 'pantallauno',
   component: PantallaunoComponent
},

{
    path: 'pantallados',
    component: PantalladosComponent
}

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }


