import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';


class App extends Component {
  state = {
    persons: [
      { id: 'a44f4', name: 'Max', age: 25 },
      { id: 'bbfd5', name: 'Mark', age: 26 },
      { id: 'a3rtg', name: 'Lisa', age: 30 }
    ],
    showPersons: false
  };

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Max', age: 25 },
        { name: event.target.value, age: 26 },
        { name: 'Lisa', age: 45 }
      ]
    })
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id} />
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, Im a React App</h1>
        <p>This is really working!</p>
        <button
          style={style}
          onClick={this.togglePersonsHandler}>Show/Hide People</button>
        {persons}
      </div>
    )
  }
}


export default App;


