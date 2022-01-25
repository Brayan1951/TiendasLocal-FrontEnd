import { Component } from '@angular/core';

interface MenuIten {
  texto: string;
  ruta: string;
}


@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css']
})
export class SidemenuComponent {

  constructor() { }

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
