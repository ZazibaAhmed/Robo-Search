import React from 'react';

// class Card extends Component{
// 	render(){
// 		return(
// 			<h1>Hello</h1>
// 		);
// 	}
// }

const Card=(props)=>{
	const { id, name, email}=props; //de
	return(
		<React.Fragment>
			<div className="tc bg-lightest-blue dib br2 pa1 ma2 grow bw2 shadow-5">
			  <img alt="robots" src={`https://robohash.org/${id}?200x200`} width="200" height="200"/>
				<div>
				<h3>{name}</h3>
				<p>{email}</p>
				</div>
			</div>
		</React.Fragment>
	);
}



export default Card;