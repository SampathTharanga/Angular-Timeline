import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContentSectionComponent } from './components/content-section/content-section.component';
import { FooterSectionComponent } from './components/footer-section/footer-section.component';
import { HeaderSectionComponent } from './components/header-section/header-section.component';
import { NodeComponent } from './components/node/node.component';
import { RightNodeDirective } from './directives/right-node.directive';

@NgModule({
  declarations: [
    AppComponent,
    ContentSectionComponent,
    FooterSectionComponent,
    HeaderSectionComponent,
    NodeComponent,
    RightNodeDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
