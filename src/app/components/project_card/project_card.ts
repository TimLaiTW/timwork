import { Component } from '@angular/core';

@Component({
  selector: 'project-card',
  templateUrl: './project_card.html',
  styleUrls: ['./project_card.scss']
})
export class ProjectCard {
  openUrl(){
    console.log('clicked');
  }
}
