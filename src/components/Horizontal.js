import React from 'react'
import Flexbox from 'flexbox-react';
import styled from 'styled-components';
import MediaQuery from "react-responsive";

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