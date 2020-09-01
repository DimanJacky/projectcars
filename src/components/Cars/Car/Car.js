import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import {changeNameApp, changeNameButtonApp} from "../../../store/actions/actions";
import {connect} from "react-redux";

class Car extends Component {

    changeName = (name) => {
        this.props.onChangeName(name);
    }

    render() {

        //console.log(this.props)
        const {name, year, color, namedriver, id} = this.props
        //console.log(id)
        return (
            <div>
                <div>
                    <h3 style={{color: this.props.color, margin: 0}}>Автомобиль</h3>
                    <p><NavLink to={`/cars/${id}`}>{name}</NavLink> {year} {namedriver}</p>
                    <input type="text" /><button>Сменить цвет</button><br />
                    <input type="text" onChange={event => this.changeName(event.target.value)} /><button>Сменить название</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        nameApp: state.app.name,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onChangeName: (name) => dispatch(changeNameApp(name))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Car)