import {useDispatch, useSelector} from 'react-redux';
import { setUser } from '../store/slices/userSlice';

export function useAuth() {
    const dispatch = useDispatch() ;

    if(!!localStorage.isUser){ 
      let user = JSON.parse(localStorage.isUser) ; 
      dispatch(setUser({
          email : user.email, 
          id : user.id ,
          token : user.token , 
      }))  ;
    }

    const {email,token,id} = useSelector( state => state.user) ; 
    



    return {
      isAuth : !!email , 
      email,
      token, 
      id 
    }

   
}