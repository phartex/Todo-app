import { Component, OnInit } from '@angular/core';
import { Itasks } from 'src/app/Itasks';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  tasks: Itasks[] = []

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks)=>{
      this.tasks = tasks;
    })
  }

  deleteTask(task:Itasks){
      this.taskService.deleteTask(task).subscribe(()=>{
      this.tasks = this.tasks.filter(t => t.id !==task.id);
    })
  }

  toggleReminder(task:Itasks){
    task.reminder = !task.reminder;
    this.taskService.updateReminder(task).subscribe()
  }

}
