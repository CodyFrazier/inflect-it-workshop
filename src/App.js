import React, { useState } from 'react';
import './App.css';
import Inflected from './Inflected.js';
import Inflection from 'inflection';

function App() {
	const [wordList, setWordList] = useState([])
	
	const inflectify = (event) => {
		const singular = Inflection.singularize(document.querySelector('#wordPlace').value)
		const plural = Inflection.pluralize(document.querySelector('#wordPlace').value)
		document.querySelector('#wordPlace').value = '';
		setWordList([ ...wordList, { singular, plural } ]);
	}
	
	return (
		<div className="App">
			<h1>The Pluralizer</h1>
			<form onSubmit = { (event) => {event.preventDefault(); inflectify(event); } }>
				<input id = 'wordPlace' type = 'text' />
				<input type = 'submit' value = 'Add Word' />
			</form>
			<Inflected wordList = { wordList } setWordList = { setWordList }/>
		</div>
	);
}

export default App;
