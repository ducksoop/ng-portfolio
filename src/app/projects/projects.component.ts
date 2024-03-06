import { Component } from '@angular/core';
import { DocumentService } from '../services/document.service';

// TODO: Import projects from a service
// @ts-ignore
import projects from './projects';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  public projects = projects;
  
  title = 'Projects';
  
  constructor(private documentService: DocumentService) {}

  ngOnInit(): void {
    this.documentService.updateTitle(this.title);
  }
}
