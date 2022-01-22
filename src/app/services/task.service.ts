import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { Itasks  } from '../Itasks';
import { HttpClient,HttpHeaders } from '@angular/common/http';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:5000/tasks';

  constructor(private http : HttpClient) { }

  getTasks():Observable<Itasks[]>{
    return this.http.get<Itasks[]>(this.apiUrl);
  };

  deleteTask(task:Itasks):Observable<Itasks>{
    const url = `${this.apiUrl}/${task.id}`
    return this.http.delete<Itasks>(url);
  }

  updateReminder(task:Itasks):Observable<Itasks>{
    const url = `${this.apiUrl}/${task.id}`
    return this.http.put<Itasks>(url,task,httpOptions);
  }

}
