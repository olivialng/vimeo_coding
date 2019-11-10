import React from 'react'
import Flexbox from 'flexbox-react';
import styled from 'styled-components';

// const moveStyle = {
//     flex:1,
//     background: 'linear-gradient(to bottom, #404040, #A9A9A9)',
//     color: "#ffffff",
//     width: "100%"
// }
// const h2Style = {
// 	float: 'left',
// 	paddingTop: "20px",
// 	paddingRight: "20px",
// 	paddingLeft: "5px",
// 	paddingBottom: "0px",
//   	margin: "0px",
// }
// const pStyle = {
// 	float: 'left',
// 	paddingTop: "5px",
// 	paddingLeft: '5px',
// 	paddingRight: "100px",
// 	marginTop: "0px",
// 	// padding: "20px",
//  //  	margin: "20px",
// 	textAlign:"left"
// }
// const imageStyle = {
// 	float: 'left',
// 	paddingLeft: "100px",
// 	paddingRight: "50px",
// 	paddingBottom: "150px", 
// 	width: '450px'
// }
// const childrenStyle = {
// 	display: 'flex',
// 	alignItems: 'flex-start',
// 	flexDirection: 'row-reverse',
// }
// const textStyle = {

// }
const Move = (title, text, src) => {
 	return (
		<div style={{display:'flex', flexWrap: 'wrap', paddingTop: '0%', 
						paddingBottom: "10%", paddingRight: '7%', paddingLeft: '7%', 
						background: 'linear-gradient(to bottom, #404040, #A9A9A9)', 
						display: 'flex', flexDirection: "row-reverse",}}>
			<div style={{flex:1, textAlign: "left", paddingLeft: "30px", paddingTop: "50px", 
							paddingBottom: "30px"}}>
				<span style={{color:'#ffffff', fontWeight: 'bold', fontSize: "24px"}}>
					{title} 
				</span>
				<br/>
				<span style={{color: '#ffffff'}}>
					{text}
				</span>
			</div>
			<div style={{flex:1}}>
				<span style={{flex:1, alignItems: 'flex-start', flexDirection: 'row'}}>
					<img src={src}/>
				</span>
			</div>
		</div>
	)
 }

export default Move;