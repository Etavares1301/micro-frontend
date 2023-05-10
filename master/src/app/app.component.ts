import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'master';
  extrato: boolean = false;
  pagamento: boolean = false;

  constructor() {}

  caminho(event: string) {
    if (event == 'extrato') {
      const script = document.createElement('script');
      script.src = 'http://localhost:3200/extrato.js';
      document.body.appendChild(script);
      this.extrato = true      
      this.pagamento = false
    } else if (event == 'pagamento') {
      const script2 = document.createElement('script');
      script2.src = 'http://localhost:3000/pagamento.js';
      document.body.appendChild(script2);
      this.pagamento = true
      this.extrato = false
    }
  }
}
