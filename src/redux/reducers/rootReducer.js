import CityFilterReducer from "./cityFilterReducer";
import cityReducer from "./cityReducer";
import hotelReducer from './hotelReducer'
import hotelByUser from './hotelReducer'
import cityByUser from './cityByUser'
import myShowReduce from './myShowReducer'
import myItineraryReducer from './myItineraryReducer'

const rootReducer = {
    cityReducer,
    CityFilterReducer,
    hotelReducer,
    hotelByUser,
    cityByUser,
    myShowReduce,
    myItineraryReducer
}
export default rootReducer;