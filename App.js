// logo from './logo.svg';
import React, {Component} from 'react';
import './App.css';
import Car from './Car/Car';
class App extends Component {
  render() {
    const divStyle = {
      textAlign: 'center'
    };

    return (
      <div style={divStyle}>
        <h1> Hello world !!</h1>
        <Car name={'Моя девушка - инопланетянка'} year={2022}>
        <p style={{color: '#ff5226'}}>Cтатус : Завершена </p>
        </Car>
        <Car name="Глоток молодости" year={2018}>
          <p style={{color: '#b7f4b7'}}>Cтатус : Выходит </p>
        </Car>
        <Car name={'Невеста на замену'} year={2019}/>
      </div>
    );
  }
}

export default App;
