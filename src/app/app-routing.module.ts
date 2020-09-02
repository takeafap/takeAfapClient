import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home';
import { AuthGuard } from '../../src/app/common/helpers/_helpers/auth.guard';
import { ProfileComponent } from '../app/pages/home/profile/profile.component';
import { VideoviewComponent } from '../app/pages/video/videoview/videoview.component';
import { CategoryComponent } from '../app/pages/dashboard/category/category.component';

const accountModule = () => import('../app/pages/login/account/account.module').then(x => x.AccountModule);
const usersModule = () => import('../app/pages/dashboard/users/users.module').then(x => x.UsersModule);

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
