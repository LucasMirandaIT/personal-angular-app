import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ReposListComponent } from './pages/repos-list/repos-list.component';
import { RepoListService } from './services/repo-list/repo-list.service';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { LoadingComponent } from './components/loading/loading.component';
import { SearchComponent } from './components/search/search.component';
import { FilesdownListComponent } from './pages/filesdown-list/filesdown-list.component';
import { MaterialImportsModule } from './shared/material-imports.module';
import { AddFileModal } from './modals/add-file-modal/add-file-modal.component';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material';
import { ProfileConfigComponent } from './pages/profile-config/profile-config.component';
import { ToastrModule } from 'ngx-toastr';
import { ImageCropperModule } from 'ngx-image-cropper';
import { ClipboardModule } from 'ngx-clipboard';
import { RegisterComponent } from './pages/register/register.component';
import { AdmAreaComponent } from './pages/adm-area/adm-area.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    ReposListComponent,
    LoadingComponent,
    SearchComponent,
    FilesdownListComponent,
    AddFileModal,
    ProfileConfigComponent,
    RegisterComponent,
    AdmAreaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    FormsModule,
    MaterialImportsModule,
    ToastrModule.forRoot({
      closeButton: true,
      progressBar: true
    }),
    ImageCropperModule,
    ClipboardModule,
    AppRoutingModule
  ],
  providers: [
    RepoListService,
    HttpModule,
    MatNativeDateModule,
    {provide: MAT_DATE_LOCALE, useValue: 'pt-BR'}
  ],
  entryComponents: [
    AddFileModal
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
