import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

export default class Car extends Component {

    render() {

        const {name, year, color, namedriver, id} = this.props

        return (
            <div>
                <div>
                    <h3 style={{color: this.props.color, margin: 0}}>Автомобиль</h3>
                    <p><NavLink to={`/cars/${id}`}>{name}</NavLink> {year} {namedriver}</p>
                    <input type="text" /><button>Сменить цвет</button><br />
                    <input type="text" /><button>Сменить название</button>
                </div>
            </div>
        )
    }
}
