import React, { Component } from 'react'
import '../App.css';

export default class ReadMoreLess extends Component {

  constructor() {
    super();
    this.state = {
      showMore: false
    }
  }
  
  render() {

    let { len, content, btnColor, btnBackgroundColor } = this.props
  
    return (
      <div>
        {(content.length <= len) && content}
  
        {(content.length > len && !this.state.showMore) && (
          content.slice(0, len) + '... '
        )}
  
        {(content.length > len && !this.state.showMore) && (
          <a className="rbtn" style={{backgroundColor: btnBackgroundColor || "#353C51", color: btnColor || "white"}} onClick={(e) => this.setState({showMore: true})}>Read More</a>
        )}
  
        {(this.state.showMore) && (
          <p> {content + ' '}
            <a className="rbtn" style={{backgroundColor: btnBackgroundColor || "#353C51", color: btnColor || "white"}} onClick={(e) => this.setState({showMore: false})}>Read Less</a>
          </p>
        )}
      </div>
    );
  }
}
