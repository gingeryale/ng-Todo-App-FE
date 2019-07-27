import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { AllComponent } from "./comps/all/all.component";
import { AddComponent } from "./comps/add/add.component";

@NgModule({
  declarations: [AppComponent, AllComponent, AddComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: "", redirectTo: "add", pathMatch: "full" },
      { path: "add", component: AddComponent },
      { path: "all", component: AllComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
