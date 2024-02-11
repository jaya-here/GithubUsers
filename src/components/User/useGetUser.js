import { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getUserAction } from '../../services/redux/userSlice';
import { useParams } from 'react-router-dom';

export default function useGetUser() {

  const dispatch = useDispatch()
  const state = useSelector((state)=>state.user)
  const {username} = useParams()

  useEffect(()=>{
    dispatch(getUserAction(username))
  },[])


  return state

}
