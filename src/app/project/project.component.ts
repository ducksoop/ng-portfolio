import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent {
  @Input() image!: string;
  @Input() title!: string;
  @Input() explanation!: string;
  @Input() appLink!: string;
  @Input() githubLink!: string;
}
