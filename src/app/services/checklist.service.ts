import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { BehaviorSubject, Observable, Subject } from "rxjs";
import { ITaskDTO, ITypeDTO } from "../models/checklist";

@Injectable({
  providedIn: "root",
})
export class ChecklistService {
  private baseURL: string = environment.baseURL;
  public type$: BehaviorSubject<ITypeDTO[]> = new BehaviorSubject<ITypeDTO[]>(
    []
  );
  public tasks: ITaskDTO[];

  constructor(private http: HttpClient) {}

  public setTasks(tasks: ITaskDTO[]): void {
    this.tasks = tasks;
  }

  public getTypes(): Observable<ITypeDTO[]> {
    const url = `${this.baseURL}/Checklist/GetTypes`;
    return this.http.get<ITypeDTO[]>(url);
  }

  public getTypeById(typeId: string): Observable<ITypeDTO> {
    const url = `${this.baseURL}/Checklist/GetType/${typeId}`;
    return this.http.get<ITypeDTO>(url);
  }

  public createType(type: ITypeDTO): Observable<ITypeDTO> {
    const url = `${this.baseURL}/Checklist/CreateType`;
    return this.http.post<ITypeDTO>(url, type);
  }

  public updateType(type: ITypeDTO): Observable<ITypeDTO> {
    const url = `${this.baseURL}/Checklist/UpdateType/${type.id}`;
    return this.http.put<ITypeDTO>(url, type);
  }

  public deleteType(typeId: string): Observable<any> {
    const url = `${this.baseURL}/Checklist/DeleteType/${typeId}`;
    const options = { responseType: "text" as "json" };
    return this.http.delete<any>(url, options);
  }

  public getTasks(): Observable<ITaskDTO[]> {
    const url = `${this.baseURL}/Checklist/GetTasks`;
    return this.http.get<ITaskDTO[]>(url);
  }

  public getTasksByType(type: string): Observable<ITaskDTO[]> {
    const url = `${this.baseURL}/Checklist/GetTasksByType/${type}`;
    return this.http.get<ITaskDTO[]>(url);
  }

  public getTaskById(taskId: string): Observable<ITaskDTO> {
    const url = `${this.baseURL}/Checklist/GetTask/${taskId}`;
    return this.http.get<ITaskDTO>(url);
  }

  public createTask(task: ITaskDTO): Observable<ITaskDTO> {
    const url = `${this.baseURL}/Checklist/CreateTask`;
    return this.http.post<ITaskDTO>(url, task);
  }

  public updateTask(task: ITaskDTO): Observable<ITaskDTO> {
    const url = `${this.baseURL}/Checklist/UpdateTask/${task.id}`;
    return this.http.put<ITaskDTO>(url, task);
  }

  public deleteTask(taskId: string): Observable<any> {
    const url = `${this.baseURL}/Checklist/DeleteTask/${taskId}`;
    const options = { responseType: "text" as "json" };
    return this.http.delete<any>(url, options);
  }
}
