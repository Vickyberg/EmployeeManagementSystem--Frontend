import React, { Component } from 'react'

export default class HeaderComponents extends Component {

    constructor(props){
        super(props)

        this.state = {

        }
    }


  render() {
    return (
      <div>
        <header>
          <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <div>
              <a href="https://github.com/Vickyberg" className="navbar-brand">
                Employee Management App
              </a>
            </div>
          </nav>
        </header>
      </div>
    );
  }
}
