import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home';
import { AuthGuard } from './common/_helpers';
import { ProfileComponent } from './pages/profile/profile.component';
import { VideoviewComponent } from './pages/home/videoview/videoview.component';
import { CategoryComponent } from './pages/home/category/category.component';

const accountModule = () => import('./pages/account/account.module').then(x => x.AccountModule);
const usersModule = () => import('./pages/users/users.module').then(x => x.UsersModule);

const routes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'users', loadChildren: usersModule, canActivate: [AuthGuard] },
    { path: 'account', loadChildren: accountModule },
    { path : 'profile', component: ProfileComponent},
    { path: 'videoview', component: VideoviewComponent},
    { path: 'category', component: CategoryComponent},
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }