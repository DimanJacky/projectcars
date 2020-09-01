import {TOGGLE_CARS, CHANGE_NAME_APP, CHANGE_NAMEBUTTON_APP, CHANGE_COLOR} from './actionTypes'

export function toggleCars(showCars) {
    return {
        type: TOGGLE_CARS,
        showCars: showCars
    }
}

export function changeColor(color) {
    return {
        type: CHANGE_COLOR,
        color: color
    }
}

export function changeNameApp(name) {
    return {
        type: CHANGE_NAME_APP,
        name: name
    }
}

export function changeNameButtonApp(change) {
    return {
        type: CHANGE_NAMEBUTTON_APP,
        nameButton: change
    }
}