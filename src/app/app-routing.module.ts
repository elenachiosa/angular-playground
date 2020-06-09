import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RxjsOperatorsComponent } from './feature-modules/rxjs-operators/rxjs-operators.component';

const routes: Routes = [
  {
    path: 'tasks',
    loadChildren: () =>
      import('./feature-modules/notes/notes.module').then(
        (m) => m.NotesModule
      )
  },
  {
    path: 'rxjs',
    component: RxjsOperatorsComponent
  },
  { path: '', redirectTo: '/rxjs', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
