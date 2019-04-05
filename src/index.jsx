import React from 'react';
import ReactDOM from 'react-dom';
import TopBanner from './TopBanner';

const topBanner = <TopBanner firstElement="Hello"/>

class App extends React.Component
{
    render()
    {
        return(
            topBanner
        )
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));

