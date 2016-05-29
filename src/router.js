import Router from 'ampersand-router'
import React from 'react'
import qs from 'qs'
import PublicPage from './pages/public'
import ReposPage from './pages/repos'
import Layout from './layout'

export default Router.extend({
  renderPage(page, opts={layout: true}){
    if (opts.layout){
      page = (
      <Layout>
        {page}
      </Layout>
      )
    }

    React.render(page, document.body)
  },

  routes: {
    '': 'public',
    'repos': 'repos',
    'login': 'login',
    'auth/callback?:query': 'authCallback'
  },

  public (){
    this.renderPage(<PublicPage/>, {layout: false})
  },

  repos (){
    this.renderPage(<ReposPage/>, {layout: true})
  },

  login (){
    window.location = "https://github.com/login/oauth/authorize?" + qs.stringify({
      client_id: '77d82d43128cfba5ee13',
      redirect_uri: window.location.origin + "/auth/callback",
      scope: 'user,repo',
    })
  },

  authCallback(query){
    query = qs.parse(query)
    console.log(query)
  }


})