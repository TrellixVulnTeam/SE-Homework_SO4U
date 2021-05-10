import React from 'react';

class Tardis extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			tardis: {
				name: 'Time and Relative Dimension in Space',
				caps: false,
			},
		};
		this.changeIt = this.changeIt.bind(this);
		//binding the method(changeIt) to the component
	}

	changeIt = (text) => {
		if (this.state.tardis.caps) {
			this.setState({
				tardis: {
					name: this.state.tardis.name.toLowerCase(),
					caps: false,
				},
			});
		} else {
			this.setState({
				tardis: {
					name: this.state.tardis.name.toUpperCase(),
					caps: true,
				},
			});
		}
	};
	render() {
		return (
			<div onClick={this.changeIt}>
				<h3>{this.state.tardis.name}</h3>
			</div>
		);
	}
}

export default Tardis;
