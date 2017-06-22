import React from 'react';
import {connect} from "react-redux";
import { User} from '../../components/user';
import { Main } from '../../components/main';

import { BarChart } from '../../components/BarChart';
import { BarChartC } from '../Chart/barchart';

import { setName, setAge, setData } from "../../actions/userActions";


class App extends React.Component {
	
	render(){
		return (
				<div>
				{this.props.children}
				</div>
		);
	}
};
export default App;
