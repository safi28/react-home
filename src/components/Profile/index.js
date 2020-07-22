import React from "react";

class Profile extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
          username: null,
        }
      }
  componentWillMount() {
    this.getUser(this.props.match.params.userid)
  }
  getUser = async (id) => {
    const response = await fetch(`http://localhost:9999/user?id=${id}`);
    if (!response.ok) {
      this.props.history.push("/error");
    }
    const user = await response.json();
    console.log(response);
    this.setState({ username: user.username });
  };
  render() {
    const {
      username,
    } = this.state

    if(!username) {
      return (
          <div>Loading....</div>
      )
    }

    return (
        <div>
          <p>User: {username}</p>
        </div>
    )
  }
}
export default Profile
