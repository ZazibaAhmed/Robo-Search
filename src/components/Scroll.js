import React from 'react';

//Scroll needs to render its children
const Scroll =(props) =>{
 return (
 	<div style={{overflowY:'scroll', height: '450px'}}>
 		{props.children}
 	</div>
 );
}

export default Scroll;