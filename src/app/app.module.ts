import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../material.module';

import { AppComponent } from './app.component';
import { Chip } from './components/chip/chip';
import { ProjectCard } from './components/project_card/project_card';
import { Toolbar } from './components/toolbar/toolbar';
import { HomePage } from './pages/home/home';
import { WorkPage } from './pages/work/work';
import { AboutPage } from './pages/about/about';
import { ContactPage } from './pages/contact/contact';

@NgModule({
  declarations: [
    AppComponent,
    Toolbar,
    HomePage,
    WorkPage,
    AboutPage,
    ContactPage,
    ProjectCard,
    Chip
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
