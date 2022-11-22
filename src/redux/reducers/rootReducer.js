import CityFilterReducer from "./cityFilterReducer";
import cityReducer from "./cityReducer";
import hotelReducer from './hotelReducer'
import hotelByUser from './hotelReducer'
import cityByUser from './cityByUser'

const rootReducer = {
    cityReducer,
    CityFilterReducer,
    hotelReducer,
    hotelByUser,
    cityByUser
}
export default rootReducer;