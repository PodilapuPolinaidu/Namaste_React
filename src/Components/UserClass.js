import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Deffault",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/PodilapuPolinaidu");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
    console.log(json);
  }
  componentDidUpdate() {
    console.log("Component Did update");
  }
  componentWillUnmount() {
    console.log("Componet will Update ");
  }
  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        <img src={avatar_url} />
        <h2>Name: {name}</h2>
        <h3>Location: {location} </h3>
        <h4>Contact: polinaidupodilapu2@gmail.com</h4>
      </div>
    );
  }
}
export default UserClass;
