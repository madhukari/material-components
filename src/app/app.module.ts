import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatRadioModule,} from '@angular/material/radio';
import {MatTreeModule}  from '@angular/material/tree';

import {MatSortModule} from '@angular/material/sort';
import {  MatCheckboxModule } from '@angular/material/checkbox';
import { TabComponent } from './tab/tab.component';
import { TreeViewComponent } from './tree-view/tree-view.component';
// import { WebService } from './services/web.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CommunicationComponent } from './concepts-wise/communication/communication.component';
import { AdvancedTreeComponent } from './components/advanced-tree/advanced-tree.component';
import { CdkDragStart, CdkDropList, moveItemInArray } from '@angular/cdk/drag-drop';
import {Component, OnInit, ViewChild} from '@angular/core';
import {HttpConfigInterceptor } from '../app/interceptors/httperror.interceptor';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { TreewithfilterComponent } from './components/treewithfilter/treewithfilter.component';
import { MatAccordionComponent } from './concepts-wise/mat-accordion/mat-accordion.component'; 
import { MatExpansionModule }  from '@angular/material/expansion';
@NgModule({
  declarations: [
    AppComponent,
    TabComponent,
    TreeViewComponent,
    CommunicationComponent,
    AdvancedTreeComponent,
    TreewithfilterComponent,
    MatAccordionComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatInputModule,
  MatSelectModule,
  MatGridListModule,
  MatDialogModule,
  MatTableModule,
  MatButtonModule,
  MatCheckboxModule,
    MatFormFieldModule,
    MatIconModule,
    MatTreeModule,
    MatRadioModule,
    MatSortModule,
    DragDropModule,
  MatExpansionModule,

  ],
  // providers: [WebService],
  providers: [ 

    { provide: HTTP_INTERCEPTORS, useClass: HttpConfigInterceptor, multi: true }
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
