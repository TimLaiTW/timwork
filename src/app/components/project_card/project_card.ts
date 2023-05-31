import { Component, Input } from '@angular/core';
import { ProjectData } from 'src/app/pages/work/project_config';

@Component({
  selector: 'project-card',
  templateUrl: './project_card.html',
  styleUrls: ['./project_card.scss']
})
export class ProjectCard {
  @Input() project!: ProjectData; 
  
  openUrl(url: string){
    window.open(url, '_blank');
  }
}
