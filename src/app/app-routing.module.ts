import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'signup', loadChildren: './pages/sign-up/sign-up.module#SignUpPageModule' },
  { path: 'header', loadChildren: './pages/header/header.module#HeaderPageModule' },
  { path: 'tab4', loadChildren: './tab4/tab4.module#Tab4PageModule' },
  { path: 'alert-settings', loadChildren: './pages/alert-settings/alert-settings.module#AlertSettingsPageModule' },
  { path: 'comments', loadChildren: './pages/comments/comments.module#CommentsPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
