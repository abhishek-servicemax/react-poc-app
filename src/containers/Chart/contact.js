import React from 'react';
import {connect} from "react-redux";

import { User} from '../../components/user';
import { Main } from '../../components/main';

import { BarChart } from '../../components/BarChart';
import { BarChartC } from '../Chart/barchart';

import { setName, setAge, setData } from "../../actions/userActions";


import { BrowserRouter, Link,  Match} from 'react-router';

import { BrowserRouter as Router, Route, browserHistory, IndexRoute } from 'react-router-dom';



class Contact extends React.Component {
		
		render(){
			return (
					<div>
					{this.props.children}
					<Link to="/about">Home</Link>
					 <Main changeUsername={ () => {
						 this.props.setName("Praveen");
						 this.props.setAge(30);
						 }} />
					 <User username={this.props.userDetail.name} userage={this.props.userDetail.age} />
					</div>
			);
		}
	};


	const mapStateToProps = (state) => {
		return {
			userDetail: state.userStore,
			math: state.math,
		};
	};

	const mapDispatchToProps = (dispatch) => {
		return {
			setName: (name) => {
				dispatch(setName(name));
			},
			setAge: (age) => {
				dispatch(setAge(age));
			}
		};
	};

export default connect(mapStateToProps, mapDispatchToProps)(Contact);