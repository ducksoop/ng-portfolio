import { Component } from '@angular/core';
import { DocumentService } from '../services/document.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  title = 'Projects';
  
  constructor(private documentService: DocumentService) {}

  ngOnInit(): void {
    this.documentService.updateTitle(this.title);
  }
}
