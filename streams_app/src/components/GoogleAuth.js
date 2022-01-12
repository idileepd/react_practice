import React from 'react'

class GoogleAuth extends React.Component {
  constructor() {
    super()
    this.state = { isSignedIn: null, auth: null }
    window.gapi.load('client:auth2', () => {
      window.gapi.client
        .init({
          clientId:
            '743855613223-v8memfn4vj6c63tpc5bn6kq2ufid6v72.apps.googleusercontent.com',
          scope: 'email',
        })
        .then(() => {
          const auth = window.gapi.auth2.getAuthInstance()
          this.setState({ isSignedIn: auth.isSignedIn.get(), auth })
          // wired the listeneres
          auth.isSignedIn.listen(this.onAuthChanged)
        })
    })
  }

  componentDidMount() {}

  onAuthChanged = () => {
    this.setState({ isSignedIn: this.state.auth.isSignedIn.get() })
  }

  renderAuthButton() {
    const { isSignedIn } = this.state
    if (isSignedIn === null) return null
    if (isSignedIn === true)
      return (
        <button
          onClick={() => {
            this.state.auth.signOut()
          }}
          type="button"
        >
          Logout
        </button>
      )
    return (
      <button
        type="button"
        onClick={() => {
          this.state.auth.signIn()
        }}
      >
        signIn with google
      </button>
    )
  }

  render() {
    return <div>{this.renderAuthButton()}</div>
  }
}

export default GoogleAuth
