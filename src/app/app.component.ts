import { Component } from '@angular/core';
import { PageTitle } from 'src/constants';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  PageTitle = PageTitle;
  openedPage: PageTitle = PageTitle.HOME;
  
  switchPage(page: PageTitle){
    this.openedPage = page;
  }
}
