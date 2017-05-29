import React, { Component } from 'react';

export default class NotFound extends Component {
  constructor(props){
    super(props);

  }

  render(){
    return(
      <div>
        <h1>404</h1>
        <p>Could not find that page :/</p>
      </div>

    )
  }
}
