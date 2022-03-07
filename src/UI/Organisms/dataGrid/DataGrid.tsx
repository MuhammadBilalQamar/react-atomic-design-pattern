import * as React from 'react';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import FormControlLabel from '@mui/material/FormControlLabel';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import { Image, Spinner } from '../../Atoms/atoms';
import Right from '../../../assets/right-arrow.png';
import Chat from '../../../assets/chat.png';
import Menu from '../../../assets/menu_g.png';
import { _formatDate } from '../../../utils/_date';
import InfiniteScroll from 'react-infinite-scroll-component';
import EnhancedTableHead from './dataGridHead';

import { useDispatch, useSelector } from 'react-redux';

// actions
import { getPricingAction } from '../../../store/actions';
import { GridDATA } from '../../../types/dataGrid';

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

type Order = 'asc' | 'desc';

function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key
): (
  a: { [key in Key]: number | string },
  b: { [key in Key]: number | string }
) => number {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
function stableSort<T>(
  array: readonly T[],
  comparator: (a: T, b: T) => number
) {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map(el => el[0]);
}
interface EnhancedTableToolbarProps {
  numSelected: number;
}

const EnhancedTableToolbar = (props: EnhancedTableToolbarProps) => {
  const { numSelected } = props;

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: theme =>
            alpha(
              theme.palette.primary.main,
              theme.palette.action.activatedOpacity
            )
        })
      }}
    >
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: '1 1 100%' }}
          color='inherit'
          variant='subtitle1'
          component='div'
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          sx={{ flex: '1 1 100%' }}
          variant='h6'
          id='tableTitle'
          component='div'
        ></Typography>
      )}
      {numSelected > 0 ? (
        <Tooltip title='Delete'>
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title='Filter list'>
          <IconButton>
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
};

interface DataGridProps {
  rows: any;
  headerFieldData?: {
    fields: any;
    handleSearch: any;
  };
  handleDetailModal?: any;
  messageRequest?: any;
  pricingType?: any;
}
interface StateT {
  pricing: {
    data: Array<object>;
    load: boolean;
    error: object;
  };
}

export default function DataGrid(Props: DataGridProps) {
  const {
    rows,
    headerFieldData,
    handleDetailModal,
    messageRequest,
    pricingType
  } = Props;

  const dispatch = useDispatch();
  const { data, load, error } = useSelector((s: StateT) => s?.pricing);

  const [order, setOrder] = React.useState<Order>('asc');
  const [orderBy, setOrderBy] = React.useState<keyof GridDATA>('RequestId');
  const [selected, setSelected] = React.useState<readonly string[]>([]);
  const [VPA_selected, setVPA_selected] = React.useState<any>({});
  const [page, setPage] = React.useState(3);
  const [hasMore, setHasMore] = React.useState<boolean>(true);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(8);

  React.useEffect(() => {
    let obj = VPA_selected;
    if (rows.length > 0) {
      rows.forEach((row: any) => {
        obj = { [`id_${row?.RequestId}`]: row?.Vpa ? true : false, ...obj };
      });
      setVPA_selected(obj);
    }
  }, [rows]);

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof GridDATA
  ) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n: any) => n.RequestId);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event: React.MouseEvent<unknown>, RequestId: string) => {
    const selectedIndex = selected.indexOf(RequestId.toString());
    let newSelected: readonly string[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, RequestId.toString());
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDense(event.target.checked);
  };

  const isSelected = (RequestId: string) =>
    selected.indexOf(RequestId.toString()) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const rowData = (inp: any) => {
    if (!!inp) {
      const inpStr = inp.toString();
      return inpStr.length >= 30 ? `${inpStr.slice(0, 30)}...` : inp;
    }
    return 'N/A';
  };

  const fetchMoreData = () => {
    if (rows.length === 75 || error) {
      setHasMore(false);
      return;
    }

    setPage(page + 1);
    dispatch(getPricingAction({ page: page, limit: 8 }));
  };

  const handle_VPA_checks = (row: any) => {
    setVPA_selected((s: any) => ({
      ...s,
      [`id_${row?.RequestId}`]: !s[`id_${row?.RequestId}`]
    }));
  };

  return (
    <Box sx={{ width: '100%' }} className='pt-3'>
      {/* <EnhancedTableToolbar numSelected={selected.length} /> */}
      <TableContainer>
        <InfiniteScroll
          height='59vh'
          next={fetchMoreData}
          dataLength={rows.length}
          hasMore={
            !!data
              ? data.length === rows.length
                ? hasMore
                : false
              : load
              ? load
              : false
          }
          loader={<Spinner spinnerCont='py-5 ml-40' />}
          scrollThreshold='99%'
        >
          <Table
            sx={{ minWidth: 750, position: 'relative' }}
            aria-labelledby='tableTitle'
            // size={dense ? 'small' : 'medium'}
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
              headerFieldData={headerFieldData}
            />
            <TableBody>
              {/* if you don't need to support IE11, you can replace the `stableSort` call with:
              rows.slice().sort(getComparator(order, orderBy)) */}
              {rows && rows.length > 0
                ? stableSort(rows, getComparator(order, orderBy)).map(
                    (row, index) => {
                      const isItemSelected = isSelected(
                        row.RequestId?.toString()
                      );
                      const labelId = `enhanced-table-checkbox-${index}`;

                      return (
                        <TableRow
                          className={`bg-${row.WorkflowType}`}
                          aria-checked={isItemSelected}
                          tabIndex={-1}
                          key={row.RequestId}
                          selected={isItemSelected}
                          sx={{
                            whiteSpace: 'nowrap',
                            '& td': {
                              borderBottom: '2px solid #EAABAB',
                              p: '0.3rem 0.5rem 0.3rem 0.3rem',
                              fontSize: '.72rem'
                            },
                            '&:last-child td, &:last-child th': { border: 0 },
                            '& td span.MuiCheckbox-root': {
                              py: 0,
                              color: '#ff6b6b'
                            }
                          }}
                        >
                          <TableCell>
                            <Checkbox
                              checked={!!VPA_selected[`id_${row?.RequestId}`]}
                              onClick={() =>
                                isItemSelected ? handle_VPA_checks(row) : null
                              }
                              classes={{ root: 'w-3 pl-7' }}
                            />
                          </TableCell>

                          {/* action Icons */}
                          <TableCell align='left'>
                            <div className='flex justify-start items-center space-x-3'>
                              <Image src={Right} classes='w-4' />
                              <Image
                                src={Chat}
                                classes='w-4'
                                onClick={messageRequest}
                              />
                              {/* <Image src={Menu} classes='w-4' /> */}
                              <Checkbox
                                size='small'
                                onClick={e =>
                                  handleClick(e, row.RequestId.toString())
                                }
                                checked={isItemSelected}
                                inputProps={{ 'aria-labelledby': labelId }}
                                classes={{ root: 'w-1' }}
                              />
                            </div>
                          </TableCell>

                          {/* rows */}
                          <TableCell
                            align='left'
                            onClick={() => handleDetailModal(row)}
                          >
                            {_formatDate(
                              row.ProcessingDeadlineDate,
                              'DD/MM/YYYY h:mm'
                            )}
                          </TableCell>
                          <TableCell align='center'>{row.RequestId}</TableCell>
                          <TableCell align='center'>
                            {rowData(row.PricingAnalyst)}
                          </TableCell>
                          <TableCell align='left'>{row.Requester}</TableCell>
                          <TableCell align='center'>{row.LDCCode}</TableCell>
                          <TableCell align='center'>{row.LDCId}</TableCell>
                          <TableCell align='left'>{row.LDCName}</TableCell>
                          <TableCell align='center'>
                            {row.NumberOfAccounts}
                          </TableCell>
                          <TableCell align='center'>{row.AnnualMWh}</TableCell>
                          <TableCell align='center'>{row.PeakDemand}</TableCell>
                          <TableCell align='center'>
                            {row.ProductCode}
                          </TableCell>
                          <TableCell align='left'>{row.ProductType}</TableCell>
                          <TableCell align='left'>
                            {row.ProductCategory}
                          </TableCell>
                          <TableCell align='center'>
                            {row.OpportunityType}
                          </TableCell>
                          <TableCell align='center'>
                            {row.AgreementType}
                          </TableCell>
                          <TableCell align='center'>
                            <span
                              className='bg-orange-500 py-2 px-5  text-center'
                              onClick={pricingType}
                            >
                              {row.BillingOption}
                            </span>
                          </TableCell>
                          <TableCell align='center'>
                            {row.CanAutoProcess ? 'Yes' : 'No'}
                          </TableCell>
                          <TableCell align='center'>
                            {row.IsPostCurvePricing ? 'Yes' : 'No'}
                          </TableCell>
                          <TableCell align='left'>
                            {row.RequesterEmail}
                          </TableCell>
                          <TableCell align='center'>
                            {row.IDAErrorCount}
                          </TableCell>
                          <TableCell align='center'>
                            {_formatDate(row.RequestDate, 'DD/MM/YYYY h:mm')}
                          </TableCell>
                          <TableCell align='center'>
                            {_formatDate(row.StartDate, 'DD/MM/YYYY h:mm')}
                          </TableCell>
                          <TableCell align='center'>{row.TermLength}</TableCell>
                          <TableCell align='center'>
                            {row.GreenPercentage}
                          </TableCell>
                          <TableCell align='center'>
                            {row.MarginOption}
                          </TableCell>
                          <TableCell align='center'>
                            {row.BaseMarginRate}
                          </TableCell>
                          <TableCell align='center'>
                            {row.FixedEnergyMarginRate}
                          </TableCell>
                          <TableCell align='center'>
                            {row.IndexedEnergyMarginRate}
                          </TableCell>
                          <TableCell align='center'>
                            {row.TargetAllInclusive}
                          </TableCell>
                          <TableCell align='center'>
                            {row.TargetSummerOnPeak}
                          </TableCell>
                          <TableCell align='center'>
                            {row.TargetNonSummerOffPeak}
                          </TableCell>
                          <TableCell align='left'>
                            {rowData(row.CompanyLegalName)}
                          </TableCell>
                          <TableCell align='center'>{row.Status}</TableCell>
                          <TableCell align='center'>
                            {row.WorkflowType}
                          </TableCell>
                          <TableCell align='left'>
                            {rowData(row.SalesInstructions)}
                          </TableCell>
                        </TableRow>
                      );
                    }
                  )
                : !load &&
                  rows.length === 0 && (
                    <p className='absolute w-96 ml-52 text-right py-2'>
                      No data Found
                    </p>
                  )}
              {/* {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (dense ? 33 : 53) * emptyRows
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )} */}
            </TableBody>
          </Table>
        </InfiniteScroll>
      </TableContainer>
    </Box>
  );
}

//  <TablePagination
//         rowsPerPageOptions={[5, 10, 25]}
//         component='div'
//         count={rows.length}
//         rowsPerPage={rowsPerPage}
//         page={page}
//         onPageChange={handleChangePage}
//         onRowsPerPageChange={handleChangeRowsPerPage}
//       />
//        <FormControlLabel
//       control={<Switch checked={dense} onChange={handleChangeDense} />}
//       label="Dense padding"
//     />
