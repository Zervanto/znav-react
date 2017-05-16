import React,{Component} from 'react'
import '../scss/todo.css'
class Todo extends Component{
    render(){
        return <div>
		    <div className="wrap">	   		
				<div className="todoapp">
			   		<div className="header">
            			<h1>My todolist</h1>
						<input className="new-todo" placeholder="What needs to be done?"/>
					</div>
					<div className="main">
						<input className="toggle-all" type="checkbox" onChange={this.handleCheckChange}/>
						<label htmlFor="toggle-all">Mark all as complete</label>
						<ul className="todo-list">				
							<li>
								<div className="view">
									<input className="toggle" type="checkbox"/>
									<label></label>
									<button className="destroy"></button>
								</div>
								<input className="edit" value="Rule the web"/>
							</li>
						</ul>
					</div>
			<footer className="footer">		
				<span className="todo-count"><strong></strong> item left</span>		
				<ul className="filters">
					<li>
						<a className="selected" href="#/">All</a>
					</li>
					<li>
						<a href="#/active">Active</a>
					</li>
					<li>
						<a href="#/completed">Completed</a>
					</li>
				</ul>
				<button className="clear-completed">Clear completed</button>
			</footer>		
				
			    </div>
    		</div>
		</div>
			   	

    }
}
export default Todo
