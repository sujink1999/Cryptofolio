import { Collapse } from '@mui/material';
import TableRow from '@mui/material/TableRow';
import { StyledTableCell } from './TableCellStyles';
import {ReactComponent as Cart} from './../../assets/images/cart.svg'
import { ReactComponent as Update } from './../../assets/images/update.svg'
import './CoinsTable.css'

export default function Dropdown({open, onUpdateClick, onPurchaseClick, symbol}) {
    return <TableRow>
        <StyledTableCell style={{ padding:0}} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
              <div className="add-coin">
                    <div className="buy" onClick={() => onPurchaseClick(symbol)}>
                <Cart/>
                <p>Purchase</p>

            </div>
                    <div className="update" onClick={onUpdateClick}>
                <Update/>
                <p>Update</p>
            </div>
        </div>
          </Collapse>
          </StyledTableCell>
          </TableRow>
}