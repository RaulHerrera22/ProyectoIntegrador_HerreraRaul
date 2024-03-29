import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoArgPComponent } from './components/logo-arg-p/logo-arg-p.component';
import { BannerComponent } from './components/banner/banner.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ExperienciaLComponent } from './components/experiencia-l/experiencia-l.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HardComponent } from './components/hard/hard.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { FooterComponent } from './components/footer/footer.component';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { interceptorProvider } from './service/interceptor-service';
import { RouterModule } from '@angular/router';
import { EditExperienciaComponent } from './components/experiencia-l/edit-experiencia.component';
import { NewExperienciaComponent } from './components/experiencia-l/new-experiencia.component';
import { EditeducacionComponent } from './components/educacion/editeducacion.component';
import { NeweducacionComponent } from './components/educacion/neweducacion.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoArgPComponent,
    BannerComponent,
    AboutMeComponent,
    ExperienciaLComponent,
    EducacionComponent,
    HardComponent,
    ProyectosComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    EditExperienciaComponent,
    NewExperienciaComponent,
    EditeducacionComponent,
    NeweducacionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule,
    FormsModule,
    RouterModule
    
    ],
  providers: [interceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
