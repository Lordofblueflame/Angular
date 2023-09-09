import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { ProjectComponent } from './project/project.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FunctionalitesSectionComponent } from './functionalites-section/functionalites-section.component';
import { TaskServiceComponent } from './task-service/task-service.component';
import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    KanbanTableComponent,
    TaskComponent,
    TaskformComponent,
    KanbanBoardComponent,
    ProjectComponent,
    HomepageComponent,
    FunctionalitesSectionComponent,
    TaskServiceComponent,
    AComponent,
    BComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    BrowserAnimationsModule, 
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    DragDropModule,
    ReactiveFormsModule
  ],
  providers: [TaskServiceComponent], 
  bootstrap: [AppComponent]
})
export class AppModule { }
