### Advanced Topic: React Best Practices, PWA and MobX

#### [Repo](https://github.com/vasiliy-klimkin/w9d2-adv-react)


Today's first part of the lecture focuses on making a react app, followed by refactoring it out so that its efficient.

We made a todo-list the same exact day we made chatty. But this is no efficient so we will refactor all of our components into functional based comonents, moving unnecessary.

What it was

```jsx
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

```

 What it became

```jsx
import React from 'react';

const formStyle = 'ma0 flex justify-between bg-navy pa3 w-90 white'

export default () => { 
	return (
		<form className={formStyle} >
			<p>Type in your to do item here:</p><input/>
			<button>Submit</button>
		</form>
	);
}

```

Essentially when we have Components that do not use state, make them into functional components. 

If we have Components that have helper functions withing the component, move them out in the global scope.

### PWA (Progressive Web Apps)

Let say you go on a website ("twitter") on your phone. The website asks you if you want to add the page to your phone. You say yes and it downloads it makes an icon app on the phone while removing the URL section of your browser. The app now acts like a mobile app!

This is what progressive web apps are.

This repo is configured to be a progressive web app. (We used create-react-app, which has the configuration for this.)

#### But how do I do this for my App if I'm using create-react-app??
[Tutorial](https://blog.bitsrc.io/how-to-build-a-react-progressive-web-application-pwa-b5b897df2f0a)
Remember you have to go index.js and change service worked from `unregister()`to `register().`

`serviceWorker.register();`
Then run: npm run build http-server ./build If you then visit your localhost IP with your phone, you can save this app as PWA to your phone.

