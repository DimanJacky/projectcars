import React from 'react';
import Cars from "./components/Cars/Cars";

class App extends React.Component {

    state = {
        cars: [
            {name: 'audi', year: 2005, color: 'red', namedriver: 'Дормидонт'},
            {name: 'шкода', year: 2005, color: 'red', namedriver: 'Дормидонт'},
            {name: 'бмв', year: 2005, color: 'red', namedriver: 'Дормидонт'},
        ]
    }

    render() {

        const {cars} = this.state

        return (
            <div className="App">
                <h1>Автомобили</h1>
                <input type="text" id="newColorItem1"/><button>Сменить цвет</button><br />
                <input type="text" id="newNameItem0"/><button>Сменить водителя</button><br />
                <input type="text" id="name"/><button>Сменить название</button>
                <Cars cars={cars} />
            </div>
        )
    }
}

export default App;
