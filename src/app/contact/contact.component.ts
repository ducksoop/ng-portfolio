import { Component } from '@angular/core';
import { DocumentService } from '../services/document.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  title = 'Contact';

  constructor(private documentService: DocumentService) {}

  ngOnInit(): void {
    this.documentService.updateTitle(this.title);
  }
}
