import React,{Component} from 'react'
import '../scss/category.css'
import CateContent from './cateContent.js'
class Category extends Component{
    render(){
        const siteData = ['w3c','nodejs','react','vue','angular','jquery','bootstrap','mdn'];
        return <div>
        <div className='wrap'>
            <div className='cate'>
                <div className='all' href='#'>我的酷站</div>
                <div className='cate-item fl'>
                <ul>
                    <CateContent name='前端，还有诗和远方' item1={siteData} title1='学习网站' title2='技术官网'/>                   
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