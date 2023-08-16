import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { CatalogComponent } from './catalog/catalog.component';
import { CreateComponent } from './create/create.component';
import { DetailsComponent } from './details/details.component';
import { EditComponent } from './edit/edit.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { NotFoundComponent } from './not-found/not-found.component';
import { CoreModule } from '../core/core.module';
import { DeleteComponent } from './delete/delete.component';
import { ViewsRoutingModule } from './views-routing.module';
import { YearComponent } from './year/year.component';
import { MycarsComponent } from './mycars/mycars.component';




@NgModule({
  declarations: [
    HomeComponent,
    CatalogComponent,
    CreateComponent,
    DetailsComponent,
    EditComponent,
    NotFoundComponent,
    DeleteComponent,
    YearComponent,
    MycarsComponent,
    
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    CoreModule,
    ViewsRoutingModule
  ],
  exports: [HomeComponent,
    CatalogComponent,
    CreateComponent,
    DetailsComponent,
    EditComponent,
    NotFoundComponent,
    MycarsComponent
   ]
})
export class ViewsModule { }
