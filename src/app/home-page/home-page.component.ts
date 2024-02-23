import { Component } from '@angular/core';
import { DocumentService } from '../services/document.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  title = 'Home';
  
  constructor(private documentService: DocumentService) {}

  ngOnInit(): void {
    this.documentService.updateTitle(this.title);
  }
}
