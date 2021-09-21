import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import {StyledTableCell, StyledTableCellWeb} from './TableCellStyles'
import CoinsRow from './CoinsRow';

import './CoinsTable.css'



export default function CoinsTable({data, update}) {
    return (      
    <TableContainer 
    // style={{backgroundColor :'#212325', 
    //   borderRadius: '30px',
    //   padding: '0px 20px 20px 20px', 
    //   whiteSpace:'nowrap',
    //   '@media (max-width: 900px)': {
    //     paddingBottom: '60px',
    //   },
    // }}
      >
      <Table stickyHeader>
        <TableHead >
          <TableRow >
            <StyledTableCell align="center">Rank</StyledTableCell>
            <StyledTableCell align="center">Name</StyledTableCell>
            <StyledTableCell align="center">Price</StyledTableCell>
            <StyledTableCellWeb align="center">7d%</StyledTableCellWeb>
            <StyledTableCellWeb align="center">24h%</StyledTableCellWeb>
            <StyledTableCell align="center">Circulating Supply</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <CoinsRow key={row.id} data={row} update={update}/>
          ))}
                    
        </TableBody>
      </Table>
            </TableContainer>
            
  );
}