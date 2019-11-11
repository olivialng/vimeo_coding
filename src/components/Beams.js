import React from 'react'
import Flexbox from 'flexbox-react';
import styled from 'styled-components';

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