import { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getUsersAction } from '../../services/redux/usersSlice';

export default function useGetUsers() {

  const dispatch = useDispatch()
  const state = useSelector((state)=>state.users)

  useEffect(()=>{
    dispatch(getUsersAction())
  },[])

  return state

}
