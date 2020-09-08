import React from 'react';


const SearchBox= ({searchChange}) => {
	
	return (
		<div className="tc pa2">
		   <input className="w-30 pa3 tc b--green bg-light-green"
		    type="search" 
		    placeholder="Search Robots"
		    onChange={searchChange}
		    />
		</div>
	);
}


export default SearchBox;