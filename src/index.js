import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            money: 2.00,
            return: 0.00,
            savings: 0.00
        }
    }

    add = (value) => () => {
        console.log("add value " + value)
        this.setState({return: value})
        this.setState({money: this.state.money + value})
    }

    save = (value) => () => {
        console.log("save value " + value)
        this.setState({savings: this.state.savings + value})
        this.setState({money: 0.00})
    }
    return = (value) => () => {
        console.log("subtract last value" + value)
        this.setState({money: this.state.money - value})
        this.setState({return: 0.00})
    }

    render() {
        return (
            <div>
                <h1>{app.owner.name}{app.name}</h1>
                <Section title={app.sections[0].name}/>
                <Display money={(this.state.money).toFixed(2)}/>
                <Button
                    handleClick={this.save(this.state.money)} 
                    text="Save"
                />
                <Button 
                    handleClick={this.add(2.00)}
                    text="2.00 €"
                />
                <Button 
                    handleClick={this.add(1.00)}
                    text="1.00 €"
                />
                <Button 
                    handleClick={this.add(0.50)}
                    text="0.50 €"
                />
                <Button 
                    handleClick={this.add(0.20)}
                    text="0.20 €"
                />
                <Button 
                    handleClick={this.add(0.10)}
                    text="0.10 €"
                />
                <Button 
                    handleClick={this.add(0.05)}
                    text="0.05 €"
                />
                <Button 
                    handleClick={this.return(this.state.return)}
                    text="return"
                />
                <Section title={app.sections[1].name}/>
                <Savings money={(this.state.savings).toFixed(2)}/>
                <Section title={app.sections[2].name}/>
                <Footer designer="Mom"/>
            </div>
        )
    }
}

const Section = (props) => {
    return (
        <div>
            <h2>{props.title}</h2>
        </div>
    )
}

// selvitä miten nappien avulla voi muuttaa Appin tilaa
const Buttons = ({handleClick}) => (
        <div>
            <button onClick={handleClick}>2.00 €</button>
            <button>1.00 €</button>
            <button>0.50 €</button>
            <button>0.20 €</button>
            <button>0.10 €</button>
            <button>0.05 €</button>
        </div>
    )

const Button = ({handleClick, text}) => (
    <button onClick={handleClick}>
        {text}
    </button>
)

const Display = (props) => {
    return (
        <div>
            Money in the pocket: {props.money} €
        </div>
    )   
}

const Savings = (props) => {
    return (
        <div>
            Money saved up: {props.money}
        </div>
    )
}

const Footer = (props) => {
    return (
        <div>
            Designed by {props.designer} <a target="_blank" rel="noopener noreferrer" href="https://github.com/marikah"><i className="fab fa-github"></i></a>
        </div>
    )
}

// oliot
const app = {
    name: "'s Pocket Money App",
    version: "v1",
    owner: {
        name: "Minttu",
        age: "6",
        savings: ["1 €", "2 €", "3 €"]
    },
    sections: [
        {
            name: "Counter",
        },
        {
            name: "Savings",
        },
        {
            name: "Goals",
        }
    ]
}


ReactDOM.render(<App />, document.getElementById('root'));