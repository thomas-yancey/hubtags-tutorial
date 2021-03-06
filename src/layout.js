import React from 'react'
import app from 'ampersand-app'
import localLinks from 'local-links'
import ampersandMixin from 'ampersand-react-mixin'
import NavHelper from './components/clickhandler'

export default React.createClass({
  mixins: [ampersandMixin],

  displayName: 'Layout',

  render: function(){
    return(
      <NavHelper className='container'>
        <nav className='top-nav top-nav-light cf' role='navigation'>
          <input id='menu-toggle' className='menu-toggle' type='checkbox'/>
          <label htmlFor='menu-toggle'>Menu</label>
          <ul className='list-unstyled list-inline cf'>
            <li>Labelr</li>
            <li><a href='/repos'>Repos</a></li>
            <li className='pull-right'><a href='/logout'>Logout</a> {this.props.me.login}</li>
          </ul>
        </nav>
        <div className='container'>
          {this.props.children}
        </div>
      </NavHelper>
    );
  }
});