import React from 'react';

//React Class component
export class ReactListComponents extends React.Component {
    render() {
        return [
            <h1 key="1" style={fancyStyle}>Hello Codepub!</h1>,
            <h2 key="2" style={codePubStyle}>Hello React with CSS modules!</h2>
        ];
    }
}

//Styling
const codePubStyle = {
    color: 'white',
    backgroundColor: 'black'
};
const fancyStyle = {
    padding: 10,
    margin: 'auto',
    backgroundColor: '#ffde00',
    color: '#333',
    fontFamily: 'monospace',
    fontSize: 32,
    textAlign: 'center'
};