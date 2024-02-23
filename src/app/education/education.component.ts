import { Component } from '@angular/core';
import { DocumentService } from '../services/document.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
})
export class EducationComponent {
  title = 'Education';

  constructor(private documentService: DocumentService) {}

  ngOnInit(): void {
    this.documentService.updateTitle(this.title);
  }
}
