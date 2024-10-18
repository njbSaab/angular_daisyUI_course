import { RequstestsModule } from './shared/requstests/requstests.module';
import { Routes } from '@angular/router';
import { CalcComponent } from './calc-module/calc/calc.component';
import { EmptyPageComponent } from './shared/empty-page/empty-page.component';
import { DirectiveComponent } from './shared/directive/component/directive.component';
import { isLoggedGuardService, isLoggedGuarFn } from './is-logged.guard';

export const routes: Routes = [
  {
  path: "calculator",
  component: CalcComponent
  },
  {
    path: "", redirectTo: "calculator", pathMatch: "full"

  },
  {
    path: "object-list",
    loadChildren: () => import('./shared/object-list/object-list.module').then(m => m.ObjectListModule)
  },
  {
    path: "life-cycle",
    loadChildren: () => import('./shared/life-cycle/life-cycle.module').then(m => m.LifeCycleModule)
  },
  {
    path: "posts",
    loadChildren: () => import('./shared/requstests/requstests.module').then(m => m.RequstestsModule),
    canActivate: [isLoggedGuardService]
  },
  {
    path: "form",
    loadChildren: () => import('./shared/tabs/tabs.module').then(m => m.TabsModule)
  },
  {
    path: "decorators",
    loadChildren: () => import('./shared/decorators/decorators.module').then(m => m.DecoratorsModule)
  },
  {
    path: "directive",
    component: DirectiveComponent
  },
  {
    path: "view",
    loadChildren: () => import('./shared/view/view.module').then(m => m.ViewModule)
  },
  {
    path: "**",
    component: EmptyPageComponent
  }
];

