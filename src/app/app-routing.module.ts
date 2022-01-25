import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'tienda', loadChildren: () => import('./tiendas/tiendas.module').then(m => m.TiendasModule)
  },
  {
    path: 'productos', loadChildren: () => import('./productos/productos.module').then(m => m.ProductosModule)
  },
  {
    path: '**',
    redirectTo: 'tienda'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
