import React from 'react';
import { getFunName } from '../helpers'

class StorePicker extends React.Component {

	/*constructor() {
		super();
		this.goToStore = this.goToStore.bind(this);
	}*/

	goToStore(event) {
		event.preventDefault();
		console.log('changed url');
		//first grab the text from the box
		const storeId = this.storeInput.value;
		console.log('Going to ${storeId');
		//second transit from / to /store/:storeId
		this.context.router.transitionTo('/store/${storeId');
	}

	render() {

		//this is without jsx
		//return <p>Hello</p>;
		//return React.createElement('p', {className: 'Testing'}, 'Boombayah');

		//this is with jsx
		//returns only one parent element
		return (
			<form className="store-selector" onSubmit={(e) => this.goToStore(e)}>
			{ /* komentiranje u jsx-u */}
				<h2>Please Enter A Store</h2> 
				<input type="text" required placeholder="Store Name" 
					defaultValue={getFunName()} 
					ref={(input) => { this.storeInput = input}}/>
				<button type="submit">Visit Store</button>
			</form>
		)
	}
}

StorePicker.contextTypes = {
	router: React.PropTypes.object
}

export default StorePicker;