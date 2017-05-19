import React,{Component} from 'react'
import PropTypes from 'prop-types'
import '../scss/category.css'
class CateContent extends Component{
    // constructor(props){
    //     super(props)
    // }
    static propTypes={
        name:PropTypes.string,
        title:PropTypes.array,
        item1:PropTypes.array,
        item2:PropTypes.array,
    }
    static defaultProps = {
        name:'name',
        title:['网站类型1', '网站类型2'], 
        item1:['站点','站点','站点','站点','站点','站点','站点','站点'],               
        item2:['站点','站点','站点','站点','站点','站点','站点','站点','站点','站点','站点','站点','站点']               
    }
    render(){
        
        return <div>
    <li><a href="#">{this.props.name}<span>&gt;</span></a>
        <div className="sub_menu">
            <div className="leftmenu">
            <dl>
                <dt><a href="#">{this.props.title[0]}</a></dt>
               <dd>
                <a href="#" >{this.props.item1[0]}</a>
                <a href="#" >{this.props.item1[1]}</a>
                <a href="#" >{this.props.item1[2]}</a>
                <a href="#" >{this.props.item1[3]}</a>
                <a href="#" >{this.props.item1[4]}</a>
                <a href="#" >{this.props.item1[5]}</a>
                <a href="#" >{this.props.item1[6]}</a>
                <a href="#" >{this.props.item1[7]}</a>          
                </dd>
            </dl> 
                  <dl>
                <dt><a href="#">{this.props.title[1]}</a></dt>
               <dd>
                <a href="#" >{this.props.item2[0]}</a>
                <a href="#" >{this.props.item2[1]}</a>
                <a href="#" >{this.props.item2[2]}</a>
                <a href="#" >{this.props.item2[3]}</a>
                <a href="#" >{this.props.item2[4]}</a>
                <a href="#" >{this.props.item2[5]}</a>
                <a href="#" >{this.props.item2[6]}</a>
                <a href="#" >{this.props.item2[7]}</a>
                <a href="#" >{this.props.item2[8]}</a>
                <a href="#" >{this.props.item2[9]}</a>
                <a href="#" >{this.props.item2[10]}</a>
                <a href="#" >{this.props.item2[11]}</a>
                <a href="#" >{this.props.item2[12]}</a>
                </dd>
            </dl> 
            </div>
        </div>
        </li>
        </div>
    }
}
export default CateContent
