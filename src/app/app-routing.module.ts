import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },


  {
    path: 'page1',
    loadChildren: () => import('./page1/page1.module').then( m => m.Page1PageModule)
  },
  {
    path: 'page2',
    loadChildren: () => import('./page2/page2.module').then( m => m.Page2PageModule)
  },
  {
    path: 'page3',
    loadChildren: () => import('./page3/page3.module').then( m => m.Page3PageModule)
  },
  {
    path: 'sec1',
    loadChildren: () => import('./sec1/sec1.module').then( m => m.Sec1PageModule)
  },
  {
    path: 'sec2',
    loadChildren: () => import('./sec2/sec2.module').then( m => m.Sec2PageModule)
  },
  {
    path: 'sec3',
    loadChildren: () => import('./sec3/sec3.module').then( m => m.Sec3PageModule)
  },
  {
    path: 'sec4',
    loadChildren: () => import('./sec4/sec4.module').then( m => m.Sec4PageModule)
  },
  {
    path: 'sec5',
    loadChildren: () => import('./sec5/sec5.module').then( m => m.Sec5PageModule)
  },
  {
    path: 'section6',
    loadChildren: () => import('./section6/section6.module').then( m => m.Section6PageModule)
  },


  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
