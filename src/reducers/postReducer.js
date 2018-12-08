import {FETCH_POSTS,NEW_POSTS} from '../actions/types'

const initialstate = {

    items:[],
    item: {}
}

export default function(state = initialstate,action){
   switch(action.type)
   {
      case FETCH_POSTS:
      
      return{
          ...state,
          items:action.payload
      
   };
   case NEW_POSTS:

   return{
    ...state,
    item:action.payload

};
   
   default:
   return state;

}}