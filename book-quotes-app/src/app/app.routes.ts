import { Routes } from '@angular/router';
import { Home } from './pages/home/home.component';
import { BookForm } from './pages/book-form/book-form.component';
import { MyQuotes } from './pages/my-quotes/my-quotes.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'add', component: BookForm, canActivate: [authGuard] },
  { path: 'edit/:id', component: BookForm, canActivate: [authGuard] },
  { path: 'quotes', component: MyQuotes },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '' }
];
