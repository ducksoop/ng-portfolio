import { Component } from '@angular/core';
import { DocumentService } from '../services/document.service';
import { Router } from '@angular/router';
import { EmailService } from '../services/email.service';
import { NgForm } from '@angular/forms';

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

  public snackBar = { show: false, text: '' };

  constructor(
    private emailService: EmailService,
    private documentService: DocumentService
  ) {}

  ngOnInit(): void {
    this.documentService.updateTitle(this.title);
  }

  onSubmit(form: NgForm): void {
    if (!this.validateEmail(this.email)) {
      this.email = ' '; // show an invalid email error on the form
    } else if (this.name && this.email && this.message) {
      this.sendMessage();
      form.reset();
    } else {
      this.showSnackBar('Please fill in all the fields');
    }
  }

  sendMessage(): void {
    this.emailService.sendEmail(this.params);
    this.showSnackBar('Your message has been sent.');
  }

  validateEmail(email: string): boolean {
    // This regex is too long find out how to split it.
    const re =
      /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  showSnackBar(text: string) {
    this.snackBar = {
      show: true,
      text,
    };

    setTimeout(() => {
      this.snackBar.show = false;
    }, 10000);
  }

  get params(): Record<string, unknown> {
    return {
      name: this.name.trim(),
      email: this.email.trim(),
      message: this.message.trim(),
      contact_number: (Math.random() * 100000) | 0,
    };
  }
}
