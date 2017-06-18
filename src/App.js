import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import AddForm from './components/AddForm';
import TableList from './components/TableList';

class App extends Component {
  render() {
    return (
    <div className="html5-test container">
        <div className="header clearfix">
            <Header />
        </div>
        <div className="body clearfix">
            <h2>List of participants</h2>
            <AddForm />
            <TableList />
        </div>
    </div>
    );
  }
}

export default App;
