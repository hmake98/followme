import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../pages').then(m => m.HomePageModule)
      },
      {
        path: 'search',
        loadChildren: () => import('../pages').then(m => m.SearchPageModule)
      },
      {
        path: 'activity',
        loadChildren: () => import('../pages').then(m => m.ActivityPageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('../pages').then(m => m.ProfilePageModule)
      },
      {
        path: 'chats',
        loadChildren: () => import('../pages').then(m => m.ChatsPageModule)
      },
      {
        path: 'settings',
        loadChildren: () => import('../pages').then(m => m.SettingsPageModule)
      },
      {
        path: 'account',
        loadChildren: () => import('../pages').then( m => m.AccountPageModule)
      },
      {
        path: 'privacy',
        loadChildren: () => import('../pages').then( m => m.PrivacyPageModule)
      },
      {
        path: 'report',
        loadChildren: () => import('../pages').then( m => m.ReportPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      },
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule { }
