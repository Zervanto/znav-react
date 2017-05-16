import React, { Component } from 'react'
import '../scss/search.css'

class Search extends Component{
    render(){
        return <div>
        <div id="baidu">
            <form action="http://www.baidu.com/baidu" target="_blank">
                <div className="center">
                    <input name='tn' type='hidden' value='baidu'/>
                    <input type='text' name='word' size='30'/>
                    <input type="submit" value="Search"/>
                </div>
            </form>
        </div>
        </div>
    }
}
export default Search