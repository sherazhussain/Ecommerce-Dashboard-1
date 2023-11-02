import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { Shell } from '@app/shell/shell.service';

const routes: Routes = [
  Shell.childRoutes([
    { path: 'about', loadChildren: () => import('./about/about.module').then((m) => m.AboutModule) },

    {
      path: 'inventory_management',
      loadChildren: () =>
        import('./inventory-management/inventory-management.module').then((m) => m.InventoryManagementModule),
    },
    {
      path: 'product_registration',
      loadChildren: () =>
        import('./product-registration/product-registration.module').then((m) => m.ProductRegistrationModule),
    },
    {
      path: 'users_management',
      loadChildren: () => import('./user-management/user-management.module').then((m) => m.UserManagementModule),
    },
  ]),
  // Fallback when no prior route is matched
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
