import React, {Component} from 'react';
import AuthenticationService from "./AuthenticationService";
import TodoDataService from "./TodoDataService";

class ListTodo extends Component {

    constructor(props){
        super(props)
        this.state = {
            todos : [],
            message : null
        };
        this.deleteTodoClicked = this.deleteTodoClicked.bind(this);
        this.updateTodoClicked = this.updateTodoClicked.bind(this);
    }
    render() {
        return(
            <div>
                <h1>List Todos</h1>
                {this.state.message && <div class="alert alert-success">{this.state.message}</div>}
                <div className="container">
                    <table className="table table-hover">
                        <thead>
                        <tr>
                            <th>description</th>
                            <th>Is Completed?</th>
                            <th>Target Date</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.todos.map(
                                todo =>
                                    <tr key={todo.id}>
                                        <td>{todo.description}</td>
                                        <td>{todo.done.toString()}</td>
                                        <td>{todo.targetDate.toString()}</td>
                                        <td><button className="btn btn-success" onClick={() => this.updateTodoClicked(todo.id)}>Update</button></td>
                                        <td><button className="btn btn-warning" onClick={() => this.deleteTodoClicked(todo.id)}>Delete</button></td>
                                    </tr>
                            )
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }

    componentWillUnmount() {
        console.log('ComponentWillUnmount')
    }

    componentDidMount() {
        console.log('componentDidMount')
        this.refreshTodos();
        console.log(this.state)
    }

    refreshTodos() {
        let username = AuthenticationService.getLoggedInUserName()
        TodoDataService.retrieveAllTodos(username)
            .then (
                response =>{
                    //console.log(response);
                    this.setState({todos: response.data})
                }
        )
    }

    deleteTodoClicked(id) {
        let username = AuthenticationService.getLoggedInUserName()
        // console.log("deleteClicked")
        TodoDataService.deleteTodo(username, id).then(response =>{
            this.setState({message : `Delete of todo ${id} Successful`});
            this.refreshTodos();
        })
    }

    updateTodoClicked(id) {
        console.log('update' + id)
        this.props.history.push(`/todos/${id}`)
        // let username = AuthenticationService.getLoggedInUserName()
        // // console.log("deleteClicked")
        // TodoDataService.deleteTodo(username, id).then(response =>{
        //     this.setState({message : `Delete of todo ${id} Successful`});
        //     this.refreshTodos();
        // })
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log('shouldComponentUpdate')
        console.log(nextProps)
        console.log(nextState)
        return true
    }


}

export default ListTodo;