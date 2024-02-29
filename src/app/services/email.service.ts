import { Injectable } from '@angular/core';

import emailjs from 'emailjs-com';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  constructor() {
    emailjs.init('dRvzaAp8aTa8BxGA1');
  }

  sendEmail(params: Record<string, unknown> | undefined): void {
    emailjs.send('service_sctkkia', 'contact_form', params).then(
      (response) => {
        console.log('SUCCESS!', response.status, response.text);
      },
      (error) => {
        console.log('FAILED...', error);
      }
    );
  }
}
