import React from 'react'

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId:
          '743855613223-v8memfn4vj6c63tpc5bn6kq2ufid6v72.apps.googleusercontent.com',
        scope: 'email',
      })
    })
  }

  render() {
    return <div>Google Auth</div>
  }
}

export default GoogleAuth
