import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RippleModule } from 'primeng/ripple';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar'
import { RouterModule, Routes } from '@angular/router'
import { CardModule } from 'primeng/card'
import { OverlayPanelModule } from 'primeng/overlaypanel'
import { DialogModule } from 'primeng/dialog'





//export const routes: Routes = []

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RippleModule,
    ButtonModule,
    SidebarModule,
    RouterModule,
    CardModule,
    OverlayPanelModule,
    DialogModule



//     RouterModule.forRoot(routes, {
//     anchorScrolling: 'enabled'
// })

   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
