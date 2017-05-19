import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import { BrowserRouter as Router,Route} from 'react-router-dom'
import Category from './js/category.js'
import Todo from './js/todo.js'
import App from './App.js'
ReactDOM.render(
       <Router>
        <div>
            <Route path="/" component={App} />
            <Route path="/category" component={Category} />
            <Route path="/todo" component={Todo} />
        </div>   
      </Router>
  ,document.getElementById('root')
)
