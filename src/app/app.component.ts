import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app works!';
  marcas: string[] = ['nike', 'adidas', 'rebook'];
  message: string = 'initial message';
  name = 'Angular ' + VERSION.full;

  search(term?:string): string[]{
   if (!term) return this.marcas;
   return this.marcas.filter(marca => marca.indexOf(term) > -1);
  }

  onChangeMessage(): void{
    this.message = 'second message';
  }
}
