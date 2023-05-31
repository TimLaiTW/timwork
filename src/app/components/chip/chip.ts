import { Component, Input } from '@angular/core';
import { ProjectType } from '../../../types';

@Component({
  selector: 'chip',
  templateUrl: './chip.html',
  styleUrls: ['./chip.scss']
})
export class Chip {
@Input() projectTypes !: ProjectType[];
}
