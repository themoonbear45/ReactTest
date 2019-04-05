import React from 'react';

export default class TopBanner extends React.Component
{
    render(){
        return (
            <div className="topnav">
                <header>{this.props.firstElement}</header>
            </div>
            )
    };


}