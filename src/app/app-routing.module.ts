import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'chapters',
    loadChildren: () => import('./chapters/chapters.module').then( m => m.ChaptersPageModule)
  },
  {
    path: 'viewer',
    loadChildren: () => import('./viewer/viewer.module').then( m => m.ViewerPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
