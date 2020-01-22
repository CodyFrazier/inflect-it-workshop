import React, { useState } from 'react';
import Inflection from 'inflection';

function Inflected(obj){
	const list = obj.wordList;
	const setList = obj.setWordList;
	return (
		<ul>{ list.map((word, idx) => {
			return (
				<li key = { idx }>
					<div>{ word.singular } (Singular)</div>
					<div>{ word.plural } (Plural)</div>
					<input type = 'button' value = 'Remove' onClick = { (event) => {
						const newList = list.filter(word => { return word !== list[idx] });
						setList([...newList])
					} } />
				</li>
			) }) }
		</ul>
	)
}

export default Inflected;