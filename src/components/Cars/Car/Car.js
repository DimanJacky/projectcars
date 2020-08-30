import React, {Component} from 'react';

export default class Car extends Component {

    render() {

        const {name, year, color, namedriver} = this.props

        return (
            <div>
                <div>
                    <h3 style={{color: this.props.color, margin: 0}}>Автомобиль</h3>
                    <p>{name} {year} {namedriver}</p>
                    <input type="text" id="newColor"/><button>Сменить цвет</button><br />
                    <input type="text" id="newName"/><button>Сменить название</button>
                </div>
            </div>
        )
    }
}
