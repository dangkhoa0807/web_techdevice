import React from 'react'
import { Navigate } from "react-router-dom";
import useUserStore from '../hooks/userStore';

interface Props{
	children: any
}

const RoutProvider :React.FC<Props> = (props) => {
	const {children}= props;
	const { user } = useUserStore();
	if (!user) return <Navigate to="/login" replace/>
  return (
	<>{children}</>
  )
}

export default RoutProvider