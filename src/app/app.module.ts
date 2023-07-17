import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { KanbanTableComponent } from './kanban-table/kanban-table.component';
import { TaskComponent } from './task/task.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { TaskformComponent } from './taskform/taskform.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { KanbanBoardComponent } from './kanban-board/kanban-board.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    KanbanTableComponent,
    TaskComponent,
    TaskformComponent,
    KanbanBoardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    BrowserAnimationsModule, 
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
