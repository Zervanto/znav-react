import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import '../scss/header.css'
class Header extends Component{
    render (){
        return <div>
            <div className="zheader">
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
            </div>
    }
}
export default Header
