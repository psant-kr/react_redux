import changeTheNumber from "./upDown";

import {combineReducers} from "redux";

const rootReducers = combineReducers({
    changeTheNumber: changeTheNumber
});

export default rootReducers;