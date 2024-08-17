import React from 'react'
import { useOutletContext ,Navigate } from "react-router-dom";
interface Props{
	children: any
}
interface User {
	avatar ?: string,
	email : string,
	full_name : string,
	created_at:string,
	id : number,
	is_admin :number, 
	password : string, 
	phone : string,
	updated_at:string,
	username : string,
  }
const RoutProvider :React.FC<Props> = (props) => {
	const {children}= props;
	const { user } = useOutletContext<{ user: User |null }>();
	if (!user) return <Navigate to="/login" replace/>
  return (
	<>{children}</>
  )
}

export default RoutProvider