
import React, { forwardRef } from 'react';
export const IconSearch= ()=>{
	return(
	<svg xmlns="http://www.w3.org/2000/svg" width="18.382" height="18.34" viewBox="0 0 18.382 18.34" className='hover:fill-blue-500 hover:cursor-pointer'><g transform="translate(-1250 -76)"><path d="M1658.563,1091.246l-2.828-2.828c-.025-.024-.058-.034-.084-.056a8.487,8.487,0,1,0-1.381,1.394.758.758,0,0,0,.051.076l2.828,2.83a1,1,0,0,0,1.414-1.416Zm-9.589-1.633a6.5,6.5,0,1,1,6.5-6.5A6.508,6.508,0,0,1,1648.974,1089.613Z" transform="translate(-390.474 -998.613)" fill="#"></path></g></svg>
	)
}

export const IconUser = ()=>{
	return(
		<svg xmlns="http://www.w3.org/2000/svg" width="16.647" height="19.999" viewBox="0 0 16.647 19.999" className='hover:fill-blue-500 hover:cursor-pointer'><g transform="translate(-1690.831 -1073.114)"><path d="M1707.461,1091.721a6.669,6.669,0,0,0-6.209-6.084c-1.419-.069-2.848-.068-4.267,0a6.647,6.647,0,0,0-6.13,5.926c-.107,1.306.1,1.54,1.4,1.542q3.435.006,6.872,0c2.36,0,4.72.006,7.081,0C1707.293,1093.1,1707.551,1092.808,1707.461,1091.721Zm-14.82-.324a4.8,4.8,0,0,1,4.591-4.1c1.281-.056,2.569-.055,3.85,0a4.7,4.7,0,0,1,4.528,4.1Z" fill="#"></path><path d="M1699.124,1084.78a5.833,5.833,0,1,0-5.8-5.856A5.862,5.862,0,0,0,1699.124,1084.78Zm.123-10a4.164,4.164,0,1,1-.2,8.326,4.164,4.164,0,0,1,.2-8.326Z" fill="#"></path></g></svg>
	)

}

export const IconWishList = ({ fill = 'rgb(0,0,0)' }) => {
	return (
	  <div className="group inline-block  p-1 hover:cursor-pointer">
		<svg
		  xmlns="http://www.w3.org/2000/svg"
		  width="19.426"
		  height="18.001"
		  viewBox="0 0 19.426 18.001"
		  className="group-hover:fill-blue-600 transition-colors duration-300"
		>
		  <path
			d="M1720.27,1076.85a5.469,5.469,0,0,0-4.177-2.068,5.3,5.3,0,0,0-4.047,1.888,5.533,5.533,0,0,0-4.048-1.888,5.467,5.467,0,0,0-4.178,2.069,6.552,6.552,0,0,0-1.379,5.346c1.019,5.365,8.748,10.23,9.076,10.434a1,1,0,0,0,1.056,0c.328-.2,8.057-5.069,9.077-10.434a6.559,6.559,0,0,0-1.38-5.347Zm-.585,4.974c-.719,3.784-5.945,7.608-7.64,8.76-1.7-1.152-6.921-4.976-7.64-8.76a4.538,4.538,0,0,1,.955-3.7,3.477,3.477,0,0,1,2.638-1.344,3.67,3.67,0,0,1,3.136,2.069,1,1,0,0,0,.906.585h.006a1,1,0,0,0,.907-.58,3.677,3.677,0,0,1,3.14-2.074,3.478,3.478,0,0,1,2.637,1.343,4.54,4.54,0,0,1,.95,3.7Z"
			transform="translate(-1702.332 -1074.781)"
			fill={fill}
			className="group-hover:fill-[rgb(37,99,235)]"
		  />
		</svg>
	  </div>
	);
  };
  export const IconCartProduct =({ fill = 'rgb(37 99 235)' })=>{
	return(
		<svg className="group-hover:fill-white transition-colors duration-1000"
		  xmlns="http://www.w3.org/2000/svg" width="19.65" height="21.224" viewBox="0 0 19.65 21.224" ><path d="M1762.1,1077.5a1,1,0,0,0-1,1v5.184a1.18,1.18,0,0,1-1.178,1.177h-9.971a1.18,1.18,0,0,1-1.178-1.177v-8.2a1,1,0,0,0-.551-.894l-3.327-1.662a1,1,0,0,0-1.339.449.987.987,0,0,0-.054.763,1,1,0,0,0,.5.579l2.77,1.384v7.577a3.18,3.18,0,0,0,3.177,3.177h9.971a3.181,3.181,0,0,0,3.178-3.177V1078.5A1,1,0,0,0,1762.1,1077.5Z" transform="translate(-1743.452 -1072.831)"></path><path d="M1751.156,1088.244a2.906,2.906,0,1,0,2.906,2.9A2.908,2.908,0,0,0,1751.156,1088.244Zm0,3.811a.906.906,0,1,1,.906-.907A.907.907,0,0,1,1751.156,1092.055Z" transform="translate(-1743.452 -1072.831)"></path><path d="M1759.981,1088.244a2.906,2.906,0,1,0,2.906,2.9A2.908,2.908,0,0,0,1759.981,1088.244Zm0,3.811a.906.906,0,1,1,.906-.907A.907.907,0,0,1,1759.981,1092.055Z" transform="translate(-1743.452 -1072.831)" ></path>
		</svg>
	) 
}
export const IconCart =({ fill = 'rgb(37 99 235)' })=>{
	return(
		<svg className=' hover:cursor-pointer' style={{
			fill: 'black',
			transition: 'fill 0.3s ease',
		  }}
		  onMouseEnter={(e) => e.currentTarget.style.fill = fill}
		  onMouseLeave={(e) => e.currentTarget.style.fill = 'black'} xmlns="http://www.w3.org/2000/svg" width="19.65" height="21.224" viewBox="0 0 19.65 21.224" ><path d="M1762.1,1077.5a1,1,0,0,0-1,1v5.184a1.18,1.18,0,0,1-1.178,1.177h-9.971a1.18,1.18,0,0,1-1.178-1.177v-8.2a1,1,0,0,0-.551-.894l-3.327-1.662a1,1,0,0,0-1.339.449.987.987,0,0,0-.054.763,1,1,0,0,0,.5.579l2.77,1.384v7.577a3.18,3.18,0,0,0,3.177,3.177h9.971a3.181,3.181,0,0,0,3.178-3.177V1078.5A1,1,0,0,0,1762.1,1077.5Z" transform="translate(-1743.452 -1072.831)"></path><path d="M1751.156,1088.244a2.906,2.906,0,1,0,2.906,2.9A2.908,2.908,0,0,0,1751.156,1088.244Zm0,3.811a.906.906,0,1,1,.906-.907A.907.907,0,0,1,1751.156,1092.055Z" transform="translate(-1743.452 -1072.831)"></path><path d="M1759.981,1088.244a2.906,2.906,0,1,0,2.906,2.9A2.908,2.908,0,0,0,1759.981,1088.244Zm0,3.811a.906.906,0,1,1,.906-.907A.907.907,0,0,1,1759.981,1092.055Z" transform="translate(-1743.452 -1072.831)"></path>
		</svg>
	) 
}
export const IconSendMail=()=>{
	return(
		<span className="qodef-m-icon"><svg className="qodef-svg--button-arrow" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12">
			<g>
				<path d="M11 5H1a1 1 0 0 0 0 2h10a1 1 0 0 0 0-2Z">
				</path>
				<path d="M7 11V1a1 1 0 1 0-2 0v10a1 1 0 0 0 2 0Z">
				</path>
			</g>
		</svg></span>
	)
}
// Icon components
export const IconLaptop = () => (
	<svg width="20" height="13" viewBox="0 0 20 13" fill="none" xmlns="http://www.w3.org/2000/svg">
	  <path d="M4.00002 1C3.44774 1 3.00002 1.44772 3.00002 2V8.5C3.00002 9.05229 3.44774 9.5 4.00002 9.5H16C16.5523 9.5 17 9.05229 17 8.5V2C17 1.44772 16.5523 1 16 1H4.00002ZM3.70002 0H10H16.3C16.7774 0 17.2353 0.184374 17.5728 0.512563C17.9104 0.840752 18.1 1.28587 18.1 1.75V8.75C18.1 9.21413 17.9104 9.65925 17.5728 9.98744C17.2353 10.3156 16.7774 10.5 16.3 10.5H3.70002C3.22263 10.5 2.7648 10.3156 2.42723 9.98744C2.08967 9.65925 1.90002 9.21413 1.90002 8.75V1.75C1.90002 1.28587 2.08967 0.840752 2.42723 0.512563C2.7648 0.184374 3.22263 0 3.70002 0Z" fill="currentcolor"></path>
	  <path d="M1 12L19 12" stroke="currentcolor" strokeLinecap="round"></path>
	</svg>
  );
  
  export const IconMouse = () => (
	<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 14 20" width="18" height="20">
	  <path d="M7,19.5L7,19.5c-3.6,0-6.5-3.1-6.5-6.8V7.3c0-3.7,2.9-6.8,6.5-6.8c3.6,0,6.5,3.1,6.5,6.8v5.4C13.5,16.4,10.6,19.5,7,19.5z M7,1.5C4,1.5,1.5,4.1,1.5,7.3v5.4c0,3.2,2.5,5.8,5.5,5.8h0c3,0,5.5-2.6,5.5-5.8V7.3C12.5,4.1,10,1.5,7,1.5z"></path>
	  <path d="M7,10L7,10c-0.3,0-0.5-0.2-0.5-0.5v-5C6.5,4.2,6.7,4,7,4h0c0.3,0,0.5,0.2,0.5,0.5v5C7.5,9.8,7.3,10,7,10z"></path>
	</svg>
  );
  
  export const IconHeadphones = () => (
	<svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
	  <path d="M2.12753 12.7623C2.35 9.44444 4.96063 9 6.0625 9H6.90625C7.37225 9 7.75 9.38375 7.75 9.85714V16.1429C7.75 16.6162 7.37225 17 6.90625 17H6.0625C3.93277 17 2.19823 15.2822 2.12753 13.1362L1.62188 12.8794C1.43501 12.7844 1.27785 12.6385 1.16801 12.458C1.05817 12.2774 0.999997 12.0694 1 11.8571V10.1429C1 5.08914 5.02609 1 10 1C14.9748 1 19 5.09003 19 10.1429V11.8571C19 12.0694 18.9418 12.2774 18.832 12.458C18.7221 12.6385 18.565 12.7844 18.3781 12.8794L17.8725 13.1362C17.8018 15.2822 16.0672 17 13.9375 17H13.0938C12.6278 17 12.25 16.6162 12.25 16.1429V9.85714C12.25 9.38375 12.6278 9 13.0938 9H13.9375C17.65 9 17.8725 11.6667 17.8725 12.7623" stroke="currentcolor"></path>
	</svg>
  );
  
  export const IconKeyboard = () => (
	<svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
	  <rect x="1" y="1" width="18" height="12" rx="1" stroke="currentcolor"></rect>
	  <rect x="4" y="8" width="7" height="2" fill="currentcolor"></rect>
	  <rect x="4" y="4" width="2" height="2" fill="currentcolor"></rect>
	  <rect x="9" y="4" width="2" height="2" fill="currentcolor"></rect>
	  <rect x="14" y="4" width="2" height="2" fill="currentcolor"></rect>
	  <rect x="14" y="8" width="2" height="2" fill="currentcolor"></rect>
	</svg>
  );
  
  export const IconHome=()=>{
	return(
		<svg style={{
			fill: 'black',
			transition: 'fill 0.3s ease',
		  }}
		  onMouseEnter={(e) => e.currentTarget.style.fill = 'rgb(37 99 235)'}
		  onMouseLeave={(e) => e.currentTarget.style.fill = 'black'} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 24 24">
<path d="M 12 2.0996094 L 1 12 L 4 12 L 4 21 L 11 21 L 11 15 L 13 15 L 13 21 L 20 21 L 20 12 L 23 12 L 12 2.0996094 z M 12 4.7910156 L 18 10.191406 L 18 11 L 18 19 L 15 19 L 15 13 L 9 13 L 9 19 L 6 19 L 6 10.191406 L 12 4.7910156 z"></path>
</svg>
	)
  }