import React from 'react'
import Flexbox from 'flexbox-react';
import styled from 'styled-components';
import MediaQuery from "react-responsive";

// const horizontalStyle = {
//     flex:1,
//     flexDirection:'row',
//     flexWrap:'wrap',
//     display: 'flex',
//     backgroundColor: "#FFFFFF",
//     width: "100%"
// }
// const h2Style = {
// 	// float: 'left',
// 	paddingTop: "20px",
// 	paddingRight: "20px",
// 	paddingLeft: "5px",
// 	paddingBottom: "0px",
// 	marginBottom: "0"
// }
// const pStyle = {
// 	// float: 'left',
// 	paddingTop: "0px",
// 	paddingLeft: '5px',
// 	paddingRight: "100px",
// 	marginTop: "0px",
// 	color: '#404040',
// 	// padding: "20px",
//  //  	margin: "20px",
// 	textAlign:"left"
// }
// const imageStyle = {
// 	// float: 'left',
// 	paddingLeft: "100px",
// 	paddingRight: "20px",
// 	paddingTop: '50px',
// 	paddingBottom: "100px", 
// 	//width: '450px',
// 	width: "50%",
// 	paddingTop: "125px"
// }
// const childrenStyle = {
// 	display: 'flex',
// 	alignItems: 'flex-start',
// 	flexDirection: 'row-reverse',
// 	width: "50%",
// 	justifyContent: 'center'
// }
// const textStyle = {
// 	paddingBottom: "100px",
// 	paddingTop: "90px"
// }

// const responsive = {
// 	@media screen and (max-width: 600px) {
// 	  .horizontal {
// 	    width: 100%;
// 	  }
// 	}
// }
// const div = styled.div`
//  media only screen and (max-width: 600px) {
//     width: 100%;
// }
// `;
// const imageStyle = {
// 	paddingBottom: "20px", 
// 	width: '450px'
// }
// const h2Style = {
// 	textAlign:"right",
// }
// const pStyle = {
// 	textAlign:"right",
// }
const Horizontal = (title, text, src) => {
 	return (
		<div style={{display:'flex', flexWrap: 'wrap', paddingTop: '10%', paddingBottom: "10%", 
					paddingRight: '10%', paddingLeft: '10%', display: 'flex', flexDirection: "row-reverse", 
					backgroundColor: "#ffffff"}}>
			<div style={{flex:1, textAlign: "left", paddingLeft: "30px", paddingBottom: "30px", marginLeft: 'auto', marginRight: 'auto'}}>
				<span style={{color:'#404040', fontWeight: 'bold', fontSize: "24px"}}>
					{title} 
				</span>
				<br/>
				<span style={{color: '#404040'}}>
					{text}
				</span>
			</div>
			<div style={{flex:1, justifyContent: "center"}}>
				<span style={{flex:1}}>
					<img src={src}/>
				</span>
			</div>
		</div>
	)
 }
export default Horizontal;