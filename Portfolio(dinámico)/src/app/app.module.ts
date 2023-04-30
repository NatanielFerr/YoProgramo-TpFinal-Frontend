
//Importación de modulos
import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



//Importación de componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './intro/navbar/navbar.component';
import { RedessocialesComponent } from './intro/redessociales/redessociales.component';
import { ModalLoginComponent } from './modals/modal-login/modal-login.component';
import { ModalsComponent } from './modals/modals.component';
import { BannerComponent } from './intro/banner/banner.component';
import { ApartadoAcercademiComponent } from './components/apartado-acercademi/apartado-acercademi.component';
import { ApartadoExperienciaComponent } from './components/apartado-experiencia/apartado-experiencia.component';
import { ApartadoEducacionComponent } from './components/apartado-educacion/apartado-educacion.component';
import { ApartadoHabilidadesComponent } from './components/apartado-habilidades/apartado-habilidades.component';
import { ApartadoProyectosComponent } from './components/apartado-proyectos/apartado-proyectos.component';
import { PieDePaginaComponent } from './intro/pie-de-pagina/pie-de-pagina.component';
import { ErrorComponent } from './error/error.component';
import { IntroComponent } from './intro/intro.component';
import { BotonLoginComponent } from './intro/boton-login/boton-login.component';
import { BotonLogoutComponent } from './intro/boton-logout/boton-logout.component';
import { ModalLogoutComponent } from './modals/modal-logout/modal-logout.component';
import { ContactoComponent } from './contacto/contacto.component';
import { BotonesNavbarComponent } from './intro/botones-navbar/botones-navbar.component';
import { BotonAcercadeComponent } from './intro/botones-navbar/boton-acercade/boton-acercade.component';
import { BotonProyectosComponent } from './intro/botones-navbar/boton-proyectos/boton-proyectos.component';
import { BotonMasComponent } from './intro/botones-navbar/boton-mas/boton-mas.component';
import { BotonExperienciaComponent } from './intro/botones-navbar/boton-experiencia/boton-experiencia.component';
import { BotonEducacionComponent } from './intro/botones-navbar/boton-educacion/boton-educacion.component';
import { BotonHabilidadesComponent } from './intro/botones-navbar/boton-habilidades/boton-habilidades.component';
import { BotonContactoComponent } from './intro/botones-navbar/boton-contacto/boton-contacto.component';
import { NavbarContactoComponent } from './contacto/navbar-contacto/navbar-contacto.component';
import { ModalRedesAddComponent } from './modals/modal-redes-add/modal-redes-add.component';
import { ModalHabilidadesAddComponent } from './modals/modal-habilidades-add/modal-habilidades-add.component';
import { ModalProyectosAddComponent } from './modals/modal-proyectos-add/modal-proyectos-add.component';
import { InterceptorService } from './services/interceptor.service';
import { ModalExperienciaAddComponent } from './modals/modal-experiencia-add/modal-experiencia-add.component';
import { ModalEducacionAddComponent } from './modals/modal-educacion-add/modal-educacion-add.component';
import { ComponentsComponent } from './components/components.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RedessocialesComponent,
    ModalLoginComponent,
    ModalsComponent,
    BannerComponent,
    ApartadoAcercademiComponent,
    ApartadoExperienciaComponent,
    ApartadoEducacionComponent,
    ApartadoHabilidadesComponent,
    ApartadoProyectosComponent,
    PieDePaginaComponent,
    ErrorComponent,
    IntroComponent,
    BotonLoginComponent,
    BotonLogoutComponent,
    ModalLogoutComponent,
    ContactoComponent,
    BotonesNavbarComponent,
    BotonAcercadeComponent,
    BotonProyectosComponent,
    BotonMasComponent,
    BotonExperienciaComponent,
    BotonEducacionComponent,
    BotonHabilidadesComponent,
    BotonContactoComponent,
    NavbarContactoComponent,
    ModalRedesAddComponent,
    ModalHabilidadesAddComponent,
    ModalProyectosAddComponent,
    ModalExperienciaAddComponent,
    ModalEducacionAddComponent,
    ComponentsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [InterceptorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
