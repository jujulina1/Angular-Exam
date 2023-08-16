
import { RouterModule, Routes } from '@angular/router';
import { CatalogComponent } from './catalog/catalog.component';
import { CreateComponent } from './create/create.component';
import { DetailsComponent } from './details/details.component';
import { EditComponent } from './edit/edit.component';
import { DeleteComponent } from './delete/delete.component';
import { YearComponent } from './year/year.component';
import { AuthGuard } from '../shared/guards/auth.guard';
import { MycarsComponent } from './mycars/mycars.component';






const routes: Routes = [

  {
    path: 'catalog',
    component: CatalogComponent,
   
  },
  {
    path: 'create',
    component: CreateComponent,
    canActivate: [AuthGuard]

  },
  {
    path: 'year',
    component: YearComponent
  },
  {
    path: 'mycars',
    component: MycarsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'edit/:id',
    component: EditComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'delete/:id',
    component: DeleteComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'details/:id',
    component: DetailsComponent
  }
 

];


export const ViewsRoutingModule = RouterModule.forChild(routes)