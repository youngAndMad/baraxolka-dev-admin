import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AkbulakFirstFloorComponent } from './map/akbulak/akbulak-first-floor/akbulak-first-floor.component';
import { BoutiqueComponent } from './components/boutique/boutique.component';
import { EditBoutiqueComponent } from './components/edit-boutique/edit-boutique.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    AkbulakFirstFloorComponent,
    BoutiqueComponent,
    HomeComponent,
    EditBoutiqueComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgMultiSelectDropDownModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
