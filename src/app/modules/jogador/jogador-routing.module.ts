import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AuthGuard } from "src/app/core/guards/authentication/auth.guard";
import { JogadorPageComponent } from "./jogador-page/jogador-page.component";

const routes: Routes = [
  { path: '', component: JogadorPageComponent, canActivate: [AuthGuard] }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JogadorRoutingModule { }
