import CityFilterReducer from "./cityFilterReducer";
import cityReducer from "./cityReducer";
import hotelReducer from './hotelReducer'
import hotelByUser from './hotelReducer'

const rootReducer = {
    cityReducer,
    CityFilterReducer,
    hotelReducer,
    hotelByUser
}
export default rootReducer;