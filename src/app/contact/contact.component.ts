import { Component } from '@angular/core';
import { DocumentService } from '../services/document.service';
import { Router } from '@angular/router';
import { EmailService } from '../services/email.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  title = 'Contact';

  name: string = '';
  email: string = '';
  message: string = '';

  constructor(
    private router: Router,
    private emailService: EmailService,
    private documentService: DocumentService
  ) {}

  ngOnInit(): void {
    this.documentService.updateTitle(this.title);
  }

  onSubmit(): void {
    if (!this.validateEmail(this.email)) {
      this.email = 'INAVLID';
    } else if (this.name && this.email && this.message) {
      this.sendMessage();
    } else {
      alert('Please fill in all fields');
    }
  }

  sendMessage(): void {
    this.emailService.sendEmail(this.params);

    alert('Your message has been sent!');

    this.reloadComponent();
  }

  reloadComponent(): void {
    // A hacky solution for realoading the component
    this.router.navigate(['/']).then((nav) => {
      this.router.navigate(['/', 'contact']);
    });
  }

  validateEmail(email: string): boolean {
    // This regex is too long find out how to split it.
    const re =
      /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  get params(): Record<string, unknown> {
    return {
      name: this.name.trim().split(/\s+/).join(' '),
      email: this.email.trim(),
      message: this.message.trim().split(/\s+/).join(' '),
      contact_number: (Math.random() * 100000) | 0,
    };
  }
}
