import React,{Component} from 'react'
import $ from 'jquery'
import '../scss/category.css'
import CateContent from './cateContent.js'
class Category extends Component{
    constructor(props){
        super(props)
        this.state = {
            siteData:{}
        }
    }
    componentWillMount(){
        // fetch('http://localhost:3000/getjson/getsitedata')
        //     .then(response=>response.json())
        //     .then(data=>{
        //         console.log(data)
        //         this.setState({siteData:data})
        //         console.log(this.state.siteData)  
        //     })
        //     .catch(e=>console.log("error",e))
        $.get('http://localhost:3000/getjson/getsitedata',data=>{
                console.log(data)
                this.setState({siteData:data})
                console.log(this.state.siteData)  
        });    
    }
    render(){
        // const siteData = ['w3c','nodejs','react','vue','angular','jquery','bootstrap','mdn'];
        console.log(this.state.siteData)  
        return <div>
        <div className='wrap'>
            <div className='cate'>
                <div className='all' href='#'>我的酷站</div>
                <div className='cate-item fl'>
                <ul>
                    <CateContent name={this.state.siteData.name} item1={this.state.siteData.item1} title={this.state.siteData.title}/>                   
                    <CateContent/>                   
                    <CateContent/>                   
                    <CateContent/>                   
                    <CateContent/>                   
                    <CateContent/>                   
                    <CateContent/>                   
                    <CateContent/>                   
                    <CateContent/>                   
                    <CateContent/>                   
                    <CateContent/>                                     
                </ul>
                </div>
            </div>
        </div>
        </div>
    }
}
export default Category