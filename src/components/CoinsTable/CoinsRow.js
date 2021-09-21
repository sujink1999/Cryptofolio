import React from 'react';

import { StyledTableCell, StyledTableRow, SelectedTableCellTopLeft, SelectedTableCell, SelectedTableCellTopRight, SelectedTableCellWeb, StyledTableCellWeb } from './TableCellStyles';
import CoinName from './CoinName';
import ReturnsText from '../ReturnsText/ReturnsText';
import Dropdown from './Dropdown';
import Rank from './Rank';
import { numberWithCommas, getImage } from '../../utils/functions';

import './CoinsTable.css'

export default function CoinsRow({data, update}) {
    const {id, rank, name, price, circulatingSupply, oneDayChange, sevenDayChange, symbol} = data
    const [open, setOpen] = React.useState(false);

    const formattedPrice = `₹ ${numberWithCommas(price)}`
  const formattedCirculatingSupply = `₹ ${numberWithCommas(circulatingSupply)}`

  const purchase = (symbol) => {
    window.location = `https://www.coinbase.com/price/${symbol.toLowerCase()}`
  }
  

  const getRow = (open) => {
    if (open) {
      return (<StyledTableRow
              hover
              key={id}
              onClick={() => setOpen(!open)}
            >
              <SelectedTableCellTopLeft  align="center">
                    <Rank rank={rank}/>
              </SelectedTableCellTopLeft>
                <SelectedTableCell align="center">
                    <CoinName name={name} image={getImage(id)}/>
              </SelectedTableCell>
                <SelectedTableCell align="center">{formattedPrice}</SelectedTableCell>
                <SelectedTableCellWeb align="center"><ReturnsText value={oneDayChange} includeSign percent/></SelectedTableCellWeb>

                <SelectedTableCellWeb className="web" align="center"><ReturnsText value={sevenDayChange} includeSign percent/></SelectedTableCellWeb>
                  <SelectedTableCellTopRight align="center">
                  {formattedCirculatingSupply}
              </SelectedTableCellTopRight>
            </StyledTableRow>)
    } else {
      return (
        <StyledTableRow
              hover
              key={id}
              onClick={() => setOpen(!open)}
            >
              <StyledTableCell align="center">
                  <Rank rank={rank}/>
              </StyledTableCell>
              <StyledTableCell align="center">
                    <CoinName name={name} image={`https://s2.coinmarketcap.com/static/img/coins/64x64/${id}.png`}/>
                </StyledTableCell>
              <StyledTableCell align="center">{formattedPrice}</StyledTableCell>
              <StyledTableCellWeb align="center"><ReturnsText value={oneDayChange} includeSign percent/></StyledTableCellWeb>
                <StyledTableCellWeb align="center"><ReturnsText value={sevenDayChange} includeSign percent/></StyledTableCellWeb>
                  <StyledTableCell align="center">
                {formattedCirculatingSupply}
              </StyledTableCell>
            </StyledTableRow>
      )
    }
  }

    
  return (
      <>
        { getRow(open)}
        <Dropdown symbol={symbol} open={open} onUpdateClick={() => update(data)} onPurchaseClick={() => purchase(symbol)}/>
    </>
  );
}