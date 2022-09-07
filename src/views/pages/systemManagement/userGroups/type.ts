
export interface CreateData {
  no: number,
  groupId: string,
  groupName: string,
  status: any,
  action: any,
}

//Column
type Id = 'no' | 'groupId' | 'groupName' | 'groupName' | 'status' | 'action';
export interface Column {
  id: Id;
  label: string;
  width?: string;
  align?: string;
  format?: (value: number) => string;
  render?: any
}
export interface IFormInput {
  valueSearch: string;
  valueStatus: string;

}

