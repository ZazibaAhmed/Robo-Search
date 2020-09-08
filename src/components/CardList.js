import React from 'react';
import Card from './Card';


const CardList=({ robots })=>{
	
	return(
		<div>
		   {
		      robots.map((robot, index)=>{
				return (
				   <Card 
					key={robot.id} 
					id={robots[index].id} 
					name={robots[index].name} 
					email={robots[index].email}
					/>
			    );
			     //return <Card key={index} id={robot.id} name={robot.name} email={robot.email}/> //Does the same thing
			  })
		   }
       </div>
	);
}


export default CardList;