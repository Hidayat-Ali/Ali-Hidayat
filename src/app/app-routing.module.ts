import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { ContactComponent } from './components/contact/contact.component';
import { WorkComponent } from './components/work/work.component';




const routes: Routes = [
  { component: HomeComponent, path: '', },
  { component: BlogsComponent, path: 'blog/:id' },
  { component: ContactComponent, path: 'contact' },
  { component: WorkComponent, path: 'all_work' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
