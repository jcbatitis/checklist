import { Component, Input, OnInit } from "@angular/core";
import { Subject, lastValueFrom, takeUntil } from "rxjs";
import { ITaskDTO, ITypeDTO } from "src/app/models/checklist";
import { ChecklistService } from "src/app/services/checklist.service";

@Component({
  selector: "app-types",
  templateUrl: "./types.component.html",
  styleUrls: ["./types.component.scss"],
})
export class TypesComponent implements OnInit {
  public types: ITypeDTO[] = [
    {
      id: "0f9dfa5b-4bf4-4fc1-8a51-85fb01786ca3",
      configuration: {
        sequence: 3,
        disabled: false,
      },
      api_name: "slp",
      name: "Sleeping",
      description: "",
    },
    {
      id: "504b5e3d-de35-4250-89ff-a6730b02ee8a",
      configuration: {
        sequence: 1,
        disabled: false,
      },
      api_name: "lv_apt",
      name: "Leaving Apartment",
      description: "",
    },
    {
      id: "9f5fc9e2-b701-406c-81b9-444140201d11",
      configuration: {
        sequence: 2,
        disabled: false,
      },
      api_name: "uni",
      name: "University",
      description: "",
    },
  ];
  private sub$ = new Subject();

  constructor(private checklistService: ChecklistService) {}

  ngOnInit(): void {
    // this.checklistService.type$
    //   .pipe(takeUntil(this.sub$))
    //   .subscribe((types) => {
    //     this.types = types;
    //   });
  }

  public hasAssociatedTasks(type: string): boolean {
    return this.testTasks.some((task) => task.type === type);
  }

  public testTasks: ITaskDTO[] = [
    {
      id: "1f19b994-79c7-4b89-8b68-253d7ae8422d",
      configuration: {
        sequence: 5,
        disabled: false,
      },
      api_name: "plug",
      name: "Plug",
      description: "",
      type: "lv_apt",
      value: false,
    },
    {
      id: "22faf8cd-e34f-4c3c-b89e-4636bdcc6d0d",
      configuration: {
        sequence: 3,
        disabled: false,
      },
      api_name: "stove",
      name: "Stove",
      description: "",
      type: "lv_apt",
      value: false,
    },
    {
      id: "6c768bc1-5192-4329-a9db-f32202a13b9b",
      configuration: {
        sequence: 1,
        disabled: false,
      },
      api_name: "door",
      name: "Door",
      description: "",
      type: "lv_apt",
      value: false,
    },
    {
      id: "8d32c869-f948-4c68-a65f-c377eb75ad36",
      configuration: {
        sequence: 2,
        disabled: false,
      },
      api_name: "keys",
      name: "Keys",
      description: "",
      type: "lv_apt",
      value: false,
    },
    {
      id: "cc107d3a-e8e3-41c7-a5a9-f4333894c5d7",
      configuration: {
        sequence: 4,
        disabled: false,
      },
      api_name: "lights",
      name: "Lights",
      description: "",
      type: "lv_apt",
      value: false,
    },
    {
      id: "e7bdd13a-d275-438f-9613-577b381f5055",
      configuration: {
        sequence: 1,
        disabled: false,
      },
      api_name: "door",
      name: "Door",
      description: "",
      type: "slp",
      value: false,
    },
  ];
}
