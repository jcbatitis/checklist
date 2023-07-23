export interface ITypeDTO {
  id: string;
  name: string;
  api_name: string;
  description: string;
  configuration: IConfigurationDTO;
}

export interface ITaskDTO {
  id: string;
  name: string;
  type: string;
  api_name: string;
  description: string;
  configuration: IConfigurationDTO;
  value: boolean;
}

export interface IConfigurationDTO {
  disabled: boolean;
  sequence: number;
}
