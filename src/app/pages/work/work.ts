import { Component } from '@angular/core';
import { Projects } from './project_config';

@Component({
  selector: 'work-page',
  templateUrl: './work.html',
  styleUrls: ['./work.scss']
})
export class WorkPage {
  Projects = Projects;
}
