import React from 'react';
import './App.css';

class App extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      error: null,
      tasks: []
    }
  }

  componentDidMount() {

    const apiUrl = "http://localhost:3001/";

    fetch(apiUrl)
      .then(res => res.json())
      .then((results) => {
        this.setState({tasks: results})
      })
      .catch(err => {
        this.setState({error: err});
        console.error(err);
      });
  }

  render() {
    const {tasks, error} = this.state;

    if(error) {
      return ( <div className="container mt-1">Error fetching tasks</div> );
    } else {
      return (
        <div className="container mt-1">
          <div className="row">
              <div className="col bg-info">
                  <h1 className="text-center">To Do List</h1>
              </div>
          </div>
          <div className="row my-3">
              <div className="col bg-info mr-3">
                  <h3 className="text-center p-1">Add Item</h3>
                  <form className="form-inline">
                      <div className="form-group mb-2 mx-3">
                          <input className="form-control" type="text" placeholder="New Task" id="inputTask" />
                      </div>
                      <button type="submit" className="btn btn-primary mb-2">Add</button>                 
                  </form>
              </div>
              <div className="col bg-info">
                  <h3 className="text-center p-1">To-Do Items</h3>
                  <ul className="list-group mb-2">
                    {
                      tasks.map(task => (
                        <li key={task._id} className="list-group-item d-flex justify-content-between align-items-center">
                          {task.TaskName}
                          <span className="badge badge-primary badge-pill">{task.Status}</span>
                        </li>
                      ))
                    }
                  </ul>
              </div>
          </div>
        </div>
      );
    }

  }

}

export default App;
