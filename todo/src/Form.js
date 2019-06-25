import React, { Component } from 'react';

const formStyle = 'ma0 flex justify-between bg-navy pa3 w-90 white'

class Form extends Component {


	render() {
		return (
				<form className="ma0 flex justify-between bg-navy pa3 w-90 white" >
					<p>Type in your to do item here:</p><input/>
					<button>Submit</button>
				</form>
		);
	}


}

export default Form;