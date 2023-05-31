import { Component } from '@angular/core';
import { SiteTitle, PageTitle } from 'src/static_string';

@Component({
  selector: 'toolbar',
  templateUrl: './toolbar.html',
  styleUrls: ['./toolbar.scss']
})
export class Toolbar {
  title = SiteTitle;
  pageTitle = PageTitle;
}
