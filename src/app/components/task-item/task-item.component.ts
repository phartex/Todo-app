import { Component, Input, OnInit, Output , EventEmitter} from '@angular/core';
import { Itasks } from 'src/app/Itasks';


@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent implements OnInit {
  @Input() task!:Itasks

  @Output() onDeleteTask: EventEmitter<Itasks> = new EventEmitter()


  @Output() onToggleReminder: EventEmitter<Itasks> = new EventEmitter()

  btnClick= new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }

  onDelete(task:Itasks){
      this.onDeleteTask.emit(task)
  }

  onToggle(task:Itasks){
    this.onToggleReminder.emit(task)
}

}
