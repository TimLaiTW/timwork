import { Component, EventEmitter, Output } from '@angular/core';
import { SiteTitle, PageTitle } from 'src/constants';

@Component({
  selector: 'toolbar',
  templateUrl: './toolbar.html',
  styleUrls: ['./toolbar.scss']
})
export class Toolbar {
  @Output() switchPageEvent = new EventEmitter<PageTitle>();
  title = SiteTitle;
  PageTitle = PageTitle;

  switchPage(page: PageTitle){
    this.switchPageEvent.emit(page);
  }
}
