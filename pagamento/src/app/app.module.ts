import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  // bootstrap:[AppComponent], descomentar e rodar o ng s para desenvolver a página
  
  entryComponents: [AppComponent] //comentar qnd estiver desenvolvendo para ser possivel rodar o ng s
})
export class AppModule { 
  constructor(private injector: Injector) { }
  
  ngDoBootstrap() {
    const elem = createCustomElement(AppComponent, { injector: this.injector })
    customElements.define('micro-app-pagamento', elem);
  }

}
