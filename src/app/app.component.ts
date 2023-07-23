import { Component, OnInit } from "@angular/core";
import { ChecklistService } from "./services/checklist.service";
import { lastValueFrom } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  constructor(private checklistService: ChecklistService) {}

  ngOnInit(): void {
    // this.getTypes();
    // this.getTasks();
  }

  private async getTypes() {
    const types$ = this.checklistService.getTypes();
    const types = await lastValueFrom(types$);
    this.checklistService.type$.next(types);
  }

  private async getTasks() {
    const tasks$ = this.checklistService.getTasks();
    const tasks = await lastValueFrom(tasks$);
    this.checklistService.setTasks(tasks);
  }
}
