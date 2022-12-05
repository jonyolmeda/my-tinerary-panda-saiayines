import CityFilterReducer from "./cityFilterReducer";
import cityReducer from "./cityReducer";
import hotelReducer from './hotelReducer'
import hotelByUser from './hotelReducer'
import cityByUser from './cityByUser'
import myShowReduce from './myShowReducer'
import myItineraryReducer from './myItineraryReducer'
import loginInReducer from './loginInReducer'
import commentReducer from './commentReducer'

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
}
export default rootReducer;