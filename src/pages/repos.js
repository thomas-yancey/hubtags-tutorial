import React from 'react'
import ampersandMixin from 'ampersand-react-mixin'

export default React.createClass({
  render: function(){
    const {repos} = this.props

    return (
      <div>
        <h2>Repos</h2>
        <ul>
        {repos.map((repo) => {
          return (
          <li key={repo.id}>
            <span className="octicon octicon-repo"></span>
            // If I comment out repo.appUrl here and then change it after they render, everything works fine, but it will not initially work with appUrl
            <a href={repo.appUrl}>{repo.full_name}</a>
          </li>
          )
        })}
        </ul>
      </div>
    );
  }
});