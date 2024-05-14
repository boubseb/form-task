import { Routes } from '@angular/router';
import { UserProfilComponent } from './user-profil/user-profil.component';
import { SignUpComponent } from './sign-up/sign-up.component';

export const routes: Routes = [{ path: '', component: UserProfilComponent },

{ path: 'signup', component: SignUpComponent },
{ path: 'user', component: UserProfilComponent },
];
