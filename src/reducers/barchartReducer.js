const chartData = {
	      data:[1000, 400, 232, 200, 233, 120, 78, 100, 400, 232, 200, 233, 120, 78]
	    };
const barReducer  = (state = chartData, action) => {
	switch(action.type) {
	case 'SET_DATA':
		state = {
			...state,
			data:action.payload
		};
		break;
	}
	return state;
}

export default barReducer;
	
	