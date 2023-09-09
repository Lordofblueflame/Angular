import { Component, Input } from '@angular/core';
import { Task } from '../interfaces/task.interface';
import { TaskServiceComponent } from '../task-service/task-service.component';

@Component({
  selector: 'app-functionalites-section',
  templateUrl: './functionalites-section.component.html',
  styleUrls: ['./functionalites-section.component.css']
})

export class FunctionalitesSectionComponent {
  tasks: Task[] = [];
  newFunctionality: string = '';
  editingFunctionality: string | null = null;
  editedFunctionalityValue: string = '';
  selectedFunctionality: string | null = null;

  constructor(private taskService: TaskServiceComponent) {}

  ngOnInit() {
    this.taskService.tasks.subscribe(tasks => {
      this.tasks = tasks;
      
    });
  }

  uniqueFunctionalities(): string[] {
    return [...new Set(this.tasks.map(task => task.functionality))];
  }  
  addFunctionality() {
    if (this.newFunctionality.trim()) {
      this.taskService.addFunctionality(this.newFunctionality.trim());
      this.newFunctionality = '';
    }
  }

  startEditFunctionality(functionality: string) {
    this.selectedFunctionality = null;
    this.editingFunctionality = functionality;
    this.editedFunctionalityValue = functionality;
  }
  
  finishEditFunctionality() {
    if (this.editingFunctionality) {
      this.taskService.updateFunctionality(this.editingFunctionality, this.editedFunctionalityValue);
      this.editingFunctionality = null;
    }
  }

  deleteFunctionality(functionality: string) {
    if (confirm('Are you sure you want to delete this functionality and all associated tasks?')) {
      this.taskService.deleteFunctionality(functionality);
    }
  } 

  tasksForFunctionality(functionality: string): Task[] {
    return this.tasks.filter(task => task.functionality === functionality);
  }

  setSelectedFunctionality(functionality: string) {
    this.selectedFunctionality = functionality;
  }
}
