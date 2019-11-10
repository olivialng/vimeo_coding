import React from 'react'
import Flexbox from 'flexbox-react';
import styled from 'styled-components';

// const beamsStyle = {
//     flex:1,
//     flexDirection:'row',
//     flexWrap:'wrap',
//     backgroundColor: "#404040",
//     color: "#ffffff",
//     width: '100%'
// }
// const h2Style = {
// 	float: 'right',
// 	paddingTop: "20px",
// 	paddingRight: "20px",
// 	paddingBottom: "0px",
//   	margin: "0px",

// }
// const pStyle = {
// 	float: 'right',
// 	paddingTop: "0px",
// 	paddingLeft: "100px",
// 	paddingRight: "20px",
//   	marginTop: "0px",
// 	textAlign:"right"
// }
// const imageStyle = {
// 	float: 'left',
// 	paddingLeft: "20px",
// 	paddingTop: "150px",
// 	paddingRight: "100px",
// 	paddingBottom: '100px',
// 	width: '450px'
// }
// const childrenStyle = {
// 	display: 'flex',
// 	alignItems: 'flex-start',
// }
// const textStyle = {
// 	paddingTop: '150px',
// 	paddingBottom: '100px'
// }
// // const h2Style = {
// // 	paddingTop: "20px",
// // 	paddingLeft: "20px",
// // 	paddingBottom: "0px",
// //   	margin: "20px",
// //   	margin: "20px",
// // 	textAlign:"left"
// // }
// // const pStyle = {
// // 	paddingLeft: "20px",
// //   	margin: "20px",
// // 	textAlign:"left"
// // }
// // const imageStyle = {
// // 	paddingBottom: "20px", 
// // 	floated: 'right',
// // 	width: '450px'
// // }
const Beams = (title, text, src) => {
 	return (
		<div style={{display:'flex', flexWrap: 'wrap', paddingTop: '10%', paddingBottom: "10%", 
						paddingRight: '7%', paddingLeft: '7%', backgroundColor: "#404040"}}>
			<div style={{flex:1, textAlign: "right", paddingRight: "30px", 
							paddingTop: "50px", paddingBottom: '30px'}}>
				<span style={{color:'#ffffff', fontWeight: 'bold', fontSize: "24px"}}>
					{title} 
				</span>
				<br/>
				<span style={{color: '#ffffff'}}>
					{text}
				</span>
			</div>
			<span style={{flex:1}}>
				<img src={src}/>
			</span>
		</div>
	)
 }
export default Beams;