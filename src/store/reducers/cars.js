import {CHANGE_COLOR, TOGGLE_CARS} from "../actions/actionTypes";

const initialState = {
    cars: [
        {name: 'audi', year: 2005, color: 'red', namedriver: 'Дормидонт', id: 111},
        {name: 'шкода', year: 2005, color: 'green', namedriver: 'Дормидонт', id: 222},
        {name: 'бмв', year: 2005, color: 'yellow', namedriver: 'Дормидонт', id: 333},
    ],
    showCars: true
}

export default function  reducerCars(state = initialState, action) {
    switch (action.type) {
        case TOGGLE_CARS:
            return {
                ...state,
                showCars: !action.showCars
            }
        case CHANGE_COLOR:
            return {
                ...state,
                color: action.color
            }
        default:
            return {
                ...state
            }
    }
}