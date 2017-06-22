import React from 'react';
import {connect} from "react-redux";
import { Main } from '../../components/main';

import { BarChart } from '../../components/BarChart';

import { setData } from "../../actions/userActions";

class PlotBarChart extends React.Component {
	render(){
		return ( 
				
				<div>
					<Main changeUsername={ () => {
						this.props.setData([100, 300, 132, 400, 533, 120, 178, 140, 300, 132, 230, 133, 220, 178]);
						}
					} />
					<BarChart data={this.props.barData.data} />
				</div>
		);
	}
};


const mapStateToProps = (state) => {
	return {
		barData: state.barReducer
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		setData: (data) => {
			dispatch(setData(data));
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(PlotBarChart);


