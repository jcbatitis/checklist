import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChange,
  SimpleChanges,
} from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { ITaskDTO, ITypeDTO } from "src/app/models/checklist";
import { ChecklistService } from "src/app/services/checklist.service";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.scss"],
})
export class CardComponent implements OnChanges {
  @Input()
  public type: ITypeDTO;

  public tasks: ITaskDTO[];

  public form: FormGroup;

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

  constructor(
    private checklistService: ChecklistService,
    private formBuilder: FormBuilder
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    const typeChanges = changes["type"];
    const firstChange = typeChanges.firstChange;

    if (typeChanges && firstChange) {
      this.tasks = this.testTasks.filter(
        (task) => task.type === this.type.api_name
      );

      this.setupForm();
    }
  }

  private setupForm(): void {
    this.form = this.formBuilder.group(
      this.tasks.reduce(
        (controls, task) => ({ ...controls, [task.api_name]: [""] }),
        {}
      )
    );
  }

  async submit(): Promise<void> {
    try {
    
    } catch(error) {

    }
   }
}
