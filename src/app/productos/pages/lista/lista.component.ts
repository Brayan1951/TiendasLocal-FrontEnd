import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';


import { animate, state, style, transition, trigger } from '@angular/animations';
export interface Producto {
  nombre: string;
  precio: number;
  descripcion: string;
}

const Data: Producto[] = [
  { nombre: 'Hydrogen', precio: 1.0079, descripcion: 'H' },
  { nombre: 'Helium', precio: 4.0026, descripcion: 'He' },
  { nombre: 'Lithium', precio: 6.941, descripcion: 'Li' },
  { nombre: 'Beryllium', precio: 9.0122, descripcion: 'Be' },
  { nombre: 'Boron', precio: 10.811, descripcion: 'B' },
  { nombre: 'Carbon', precio: 12.0107, descripcion: 'C' },
  { nombre: 'Nitrogen', precio: 14.0067, descripcion: 'N' },
  { nombre: 'Oxygen', precio: 15.9994, descripcion: 'O' },
  { nombre: 'Fluorine', precio: 18.9984, descripcion: 'F' },
  { nombre: 'Neon', precio: 20.1797, descripcion: 'Ne' },
  { nombre: 'Neon', precio: 20.1797, descripcion: 'Ne' },
  { nombre: 'Neon', precio: 20.1797, descripcion: 'Ne' },
  { nombre: 'Neon', precio: 20.1797, descripcion: 'Ne' },
  { nombre: 'Neon', precio: 20.1797, descripcion: 'Ne' },
  { nombre: 'Neon', precio: 20.1797, descripcion: 'Ne' },
  { nombre: 'Neon', precio: 20.1797, descripcion: 'Ne' },
  { nombre: 'Neon', precio: 20.1797, descripcion: 'Ne' },
  { nombre: 'Neon', precio: 20.1797, descripcion: 'Ne' },
  { nombre: 'Neon', precio: 20.1797, descripcion: 'Ne' },
  { nombre: 'Neon', precio: 20.1797, descripcion: 'Ne' },
  { nombre: 'Neon', precio: 20.1797, descripcion: 'Ne' },
  { nombre: 'Neon', precio: 20.1797, descripcion: 'Ne' },
  { nombre: 'Neon', precio: 20.1797, descripcion: 'Ne' },
  { nombre: 'Neon', precio: 20.1797, descripcion: 'Ne' },
  { nombre: 'Neon', precio: 20.1797, descripcion: 'Ne' },
  { nombre: 'Neon', precio: 20.1797, descripcion: 'Ne' },
  { nombre: 'Neon', precio: 20.1797, descripcion: 'Ne' },
  { nombre: 'Neon', precio: 20.1797, descripcion: 'Ne' },
  { nombre: 'Neon', precio: 20.1797, descripcion: 'Ne' },
  { nombre: 'Neon', precio: 20.1797, descripcion: 'Ne' },
  { nombre: 'Neon', precio: 20.1797, descripcion: 'Ne' },

  // { nombre: 'Hydrogen', precio: 1.0079, descripcion: 'H', "action": 'edit' },
  // { nombre: 'Helium', precio: 4.0026, descripcion: 'He', "action": 'edit' },
  // { nombre: 'Lithium', precio: 6.941, descripcion: 'Li', "action": 'edit' },
  // { nombre: 'Beryllium', precio: 9.0122, descripcion: 'Be', "action": 'edit' },
  // { nombre: 'Boron', precio: 10.811, descripcion: 'B', "action": 'edit' },
  // { nombre: 'Carbon', precio: 12.0107, descripcion: 'C', "action": 'edit' },
  // { nombre: 'Nitrogen', precio: 14.0067, descripcion: 'N', "action": 'edit' },
  // { nombre: 'Oxygen', precio: 15.9994, descripcion: 'O', "action": 'edit' },
  // { nombre: 'Fluorine', precio: 18.9984, descripcion: 'F', "action": 'edit' },
  // { nombre: 'Neon', precio: 20.1797, descripcion: 'Ne', "action": 'edit' },
];


@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})
export class ListaComponent implements OnInit {

  datos = new MatTableDataSource(Data)
  // columns: string[] = ['nombre', 'descripcion', 'precio',]
  columns: string[] = ['nombre', 'precio',]
  expandedElement: Producto | null | undefined;
  constructor() { }


  ngOnInit(): void {
  }

  applyFilter(event: any) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.datos.filter = filterValue.trim().toLowerCase();
  }
  editar(e: any) {
    console.log(e);

  }
  add(e: any) {

  }
  remove(e: any) {
    console.log(e);

  }
}
