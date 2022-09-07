type Id = 'no' | 'groupId' | 'groupName' | 'groupName' | 'status' | 'action';

export interface TablePaginationProps {
  columns : any,
  rows: any,
  onChangePage: (page:number) => void,
  onChangePageSize: (pageSize: number) => void,
  isShowPagination: boolean,
  sizes: number[],
  pageSize: number,
  totalNumberPage: number,
  totalAll:number,
  page: number
}