import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { AuthModule } from './auth/auth.module';
import { ViewsModule } from './views/views.module';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { ViewsRoutingModule } from './views/views-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppInterceptorProvider } from './app.interceptor';
import { AuthService } from './auth/auth.service';



@NgModule({
  declarations: [
    AppComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HttpClientModule,
    AuthModule,
    ViewsModule,
    AuthRoutingModule,
    ViewsRoutingModule,
    FormsModule
  ],
  providers: [AuthService, AppInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { 


}
