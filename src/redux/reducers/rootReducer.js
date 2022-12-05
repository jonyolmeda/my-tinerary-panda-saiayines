import CityFilterReducer from "./cityFilterReducer";
import cityReducer from "./cityReducer";
import hotelReducer from './hotelReducer'
import hotelByUser from './hotelReducer'
import cityByUser from './cityByUser'
import myShowReduce from './myShowReducer'
import myItineraryReducer from './myItineraryReducer'
import loginInReducer from './loginInReducer'

import commentReducer from './commentReducer'
import reactionReducer from './reactionReducer'
import tokenReducer from './tokenReducer'


const rootReducer = {
    cityReducer,
    CityFilterReducer,
    hotelReducer,
    hotelByUser,
    cityByUser,
    myShowReduce,
    myItineraryReducer,
    loginInReducer,

    commentReducer,
    reactionReducer,
    tokenReducer
}
export default rootReducer;