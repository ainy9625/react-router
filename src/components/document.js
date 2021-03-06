import React, { Component } from 'react';
import './style.css';
import { Route, Switch,NavLink} from 'react-router-dom';

class Document extends Component{
	constructor(){
		super()}
	render(){
		return (
			 <div>
				 <ul className="list" >
				 	 <p>编码规范</p> 
					<li><NavLink to="/document/sql" activeClassName="clickThis">SQL规范</NavLink></li>
					<li><NavLink to="/document/java" activeClassName="clickThis">Java基础开发规范</NavLink></li>
					<li><NavLink to="/document/javabackend" activeClassName="clickThis">Java后端服务开发规范</NavLink></li>
					<li><NavLink to="/document/rest" activeClassName="clickThis">Rest api规范</NavLink></li>
					<li><NavLink to="/document/front-end" activeClassName="clickThis">前端服务开发规范</NavLink></li>
					<li><NavLink to="/document/git" activeClassName="clickThis">Git提交规范</NavLink></li>
					<li><NavLink to="/document/gitlab" activeClassName="clickThis">Gitlab CI规范</NavLink></li>
				</ul>
				<div className="text">
				
					<Switch>
						<Route path="/document/sql" render={()=>{return <div>SQL规范</div>}}></Route>
						<Route path="/document/java" render={()=>{return <div>Java基础开发规范</div>}}></Route>
						<Route path="/document/javabackend" render={()=>{return <div>Java后端服务开发规范</div>}}></Route>
						<Route path="/document/rest" render={()=>{return <div>Rest api规范</div>}}></Route>
						<Route path="/document/front-end" render={()=>{return <div>前端服务开发规范</div>}}></Route>
						<Route path="/document/git" render={()=>{return <div>Git提交规范</div>}}></Route>
						<Route path="/document/gitlab" render={()=>{return <div>Gitlab CI规范</div>}}></Route>

					</Switch> 
				</div>
             </div>
			)
        
	}
}


export default Document