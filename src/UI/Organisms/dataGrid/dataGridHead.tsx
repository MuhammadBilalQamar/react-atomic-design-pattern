import * as React from 'react';

import {
  Box,
  TableRow,
  TableHead,
  TableSortLabel,
  TableCell,
  Checkbox
} from '@mui/material';

import { visuallyHidden } from '@mui/utils';

import { headCells } from '../../../Constant/pricingQueue';
import { GridDATA } from '../../../types/dataGrid';

type Order = 'asc' | 'desc';

interface EnhancedTableHeadProps {
  numSelected: number;
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: keyof GridDATA
  ) => void;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
  headerFieldData?: {
    fields: any;
    handleSearch: any;
  };
}

export default function EnhancedTableHead(props: EnhancedTableHeadProps) {
  const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
    headerFieldData
  } = props;

  const { fields, handleSearch } = headerFieldData || {};

  const createSortHandler =
    (property: keyof GridDATA) => (event: React.MouseEvent<unknown>) => {
      onRequestSort(event, property);
    };

  return (
    <TableHead
      classes={{ root: 'bg-red-700 whitespace-nowrap sticky top-0 z-10' }}
    >
      <TableRow>
        {/* <TableCell padding='checkbox' sx={{ display: 'none' }}>
          <Checkbox
            color='primary'
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              'aria-label': 'select all desserts'
            }}
          />
        </TableCell> */}
        {headCells.map(headCell => (
          <TableCell
            key={headCell.id}
            align={'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
            sx={{ py: '0.5rem' }}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
              classes={{ root: 'text-white pl-1' }}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component='span' sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
            {headCell?.search && (
              <Box>
                <input
                  type='text'
                  value={fields[headCell.label]}
                  onChange={(e: any) =>
                    handleSearch(e, headCell.label, headCell.id)
                  }
                  className='mt-1 px-2 w-full bg-white text-xs border rounded focus:outline-0'
                />
              </Box>
            )}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}
