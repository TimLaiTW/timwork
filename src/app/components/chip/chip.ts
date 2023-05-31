import { Component, Input } from '@angular/core';
import { ProjectType } from 'src/app/pages/work/project_config';

@Component({
  selector: 'chip',
  templateUrl: './chip.html',
  styleUrls: ['./chip.scss']
})
export class Chip {
@Input() projectTypes !: ProjectType[];
}
