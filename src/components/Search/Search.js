import {ReactComponent as SearchIcon} from './../../assets/images/search.svg'

import './Search.css'

export default function Search({ text, setText, inputRef }) {
    return (
            <div className="search-container">
          <input
            ref={inputRef}
            type="text"
            className="home-input"
            placeholder="search your coin..."
            value={text}
            onChange={(e) => {
              console.log(e);
              setText(e.target.value);
            }}
            autoFocus={true}
            />
            <SearchIcon/>
        </div>
    )
}