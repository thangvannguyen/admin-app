import Table from '@mui/material/Table';
import { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import TableHeader from './components/tableHeader';
import PaginationComponent from './components/pagination';
import TableData from './components/tableData';
import { TablePaginationProps } from './type';


const TablePagination = ({ 
  columns, 
  rows, 
  onChangePage, 
  onChangePageSize, 
  isShowPagination,
  sizes, 
  pageSize, 
  totalNumberPage, 
  totalAll, 
  page, 
}: TablePaginationProps) => {

  const handleChangePageSize = (pageSizeNow: number) => {
    if (onChangePageSize) onChangePageSize(Number(pageSizeNow));
  };
  const handleChangePage = (pageNow: number) => {
    if (onChangePage) onChangePage(Number(pageNow));
  };

  return (
		<>
			<TableContainer component={Paper} sx={{ p: 1 }}>
				<Table sx={{
				  minWidth: 650,
				  [`& .${tableCellClasses.root}`]: {
				    borderBottom: 'none',
				  },
				}} aria-label="simple table">
					<TableHeader columns={columns} />
					<TableData rows={rows} columns={columns} />
				</Table>
			</TableContainer>
			{isShowPagination &&
				<PaginationComponent
					sizes= { sizes }
					onChangePage= { handleChangePage }
					onChangePageSize= { handleChangePageSize }
					pageSize= { pageSize }
					page = {page}
					totalNumberPage= { totalNumberPage }
					totalAll= { totalAll } 
				/>
			}
		</>

  );
};
export default TablePagination;