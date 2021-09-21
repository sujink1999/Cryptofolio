import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { styled } from '@mui/material/styles';

import './CoinsTable.css'

export const StyledTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#212325',
        color: 'white',
        fontSize: 16,
        fontWeight: 600,
        fontFamily: 'Avenir next',
    border: 0
  },
  [`&.${tableCellClasses.body}`]: {
        color: 'white',
        fontSize: 14,
        fontWeight: 400,
        fontFamily: 'Avenir next',
      border: 0,
  },
}));

export const StyledTableCellWeb = styled(TableCell)(({theme}) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#212325',
        color: 'white',
        fontSize: 16,
        fontWeight: 600,
        fontFamily: 'Avenir next',
    border: 0
  },
  [`&.${tableCellClasses.body}`]: {
        color: 'white',
        fontSize: 14,
        fontWeight: 400,
        fontFamily: 'Avenir next',
      border: 0,
  },
  [theme.breakpoints.down('md')]: {
    display: 'none'
    }
}));

export const SelectedTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.body}`]: {
    backgroundColor: '#161718',
        color: 'white',
        fontSize: 14,
        fontWeight: 400,
        fontFamily: 'Avenir next',
        border: 0,
  },
}));

export const SelectedTableCellWeb = styled(TableCell)(({theme}) => ({
  [`&.${tableCellClasses.body}`]: {
    backgroundColor: '#161718',
        color: 'white',
        fontSize: 14,
        fontWeight: 400,
        fontFamily: 'Avenir next',
        border: 0,
  },
  [theme.breakpoints.down('md')]: {
    display: 'none'
    }
}));

 export const SelectedTableCellTopLeft = styled(TableCell)(() => ({
  [`&.${tableCellClasses.body}`]: {
    backgroundColor: '#161718',
        color: 'white',
        fontSize: 14,
        fontWeight: 400,
        fontFamily: 'Avenir next',
        borderTopLeftRadius: 30,
        border: 0,
  },
}));

export const SelectedTableCellTopRight = styled(TableCell)(() => ({
  [`&.${tableCellClasses.body}`]: {
    backgroundColor: '#161718',
        color: 'white',
        fontSize: 14,
        fontWeight: 400,
        fontFamily: 'Avenir next',
        borderTopRightRadius: 30,
        border: 0,
  },
}));

export const StyledTableRow = styled(TableRow)(() => ({
  '&:hover': {
      cursor: 'pointer',
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));