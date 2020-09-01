import {CHANGE_NAME_APP, CHANGE_NAMEBUTTON_APP} from "../actions/actionTypes";

const initialState = {
    name: "Автомобили",
    nameButton: "Автомобили"
}

export default function  reducerApp(state = initialState, action) {
    switch (action.type) {
        case CHANGE_NAME_APP:
            return {
                ...state,
                name: action.name
            }
        case CHANGE_NAMEBUTTON_APP:
            return {
                ...state,
                nameButton: state.nameButton + action.nameButton
            }
        default:
            return {
                ...state
            }
    }
}