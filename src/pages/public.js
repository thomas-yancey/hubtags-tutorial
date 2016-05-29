import React from 'react'
import NavHelper from '../components/clickhandler'

export default React.createClass({
  render: function(){
    return (
      <NavHelper className='container'>
        <header role='banner'>
          <h1>HubTags tutorial</h1>
        </header>
        <div>
          <p>label stuff for you</p>
          <a href="/login" className="button button-large">
            <span className='mega-octicon octicon-mark-github'>login with github</span>
          </a>
        </div>
      </NavHelper>
    )
  }
});