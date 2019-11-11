import React from 'react'
import Flexbox from 'flexbox-react';
import styled from 'styled-components';

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