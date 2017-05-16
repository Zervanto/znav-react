import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link,hashHistory,IndexRoute} from 'react-router-dom'
import Category from './js/category.js'
import Todo from './js/todo.js'
import './scss/header.css'
import Search from './js/search.js'
const BaseRoute =()=> (
      <Router >
      <div>
          <div className='zheader wrap'>
                <div className="logo">Znav</div>
                    <div className="nav">
                        <ul>
                            <li><Link to="/category">category</Link></li>
                            <li><Link to="/todo">todo</Link></li>
                            <li><a href="http://zervanto.farbox.com/">blog</a></li>
                            <li><a href="http://zervanto.farbox.com/">blog</a></li>
                        </ul>
                    </div>               
            </div>    
         <hr/>
            <Route path="/" component={App}>
              <Route path="/category" component={Category}/>
              <Route path="/todo" component={Todo}/>
            </Route>
          </div>   
        </Router>
)

export default BaseRoute;
