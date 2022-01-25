import { Component } from '@angular/core';

interface MenuIten {
  texto: string;
  ruta: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tiendas-frontEnd';
  menuItems: MenuIten[] = [
    {
      texto: 'Tienda',
      ruta: './tiendas/pages/home'
    },
    {
      texto: 'Productos',
      ruta: './productos/pages/lista'
    }
  ]
}
