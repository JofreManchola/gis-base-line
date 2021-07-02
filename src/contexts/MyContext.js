import React, { Component, createContext } from 'react';

export const MyContext = createContext();

export class MyContextProvider extends Component {

  state = {
    loading: true,
    user: null,
    test: "Eureka!"
  };

  updateUser = (params) => {
    // console.log("-.-.-.-.-.-.");
    // console.log("params", params);
    // console.log("this.state", this.state);
    // context["user"] = this.state.user["tryplany"];
    // this.state.user = params;

    this.setState({ user: params, loading: false })
    // console.log("this.state", this.state);
  }


  render() {
    // console.log("MyContext.Provider this.state", this.state);
    return (
      <MyContext.Provider value={{ ...this.state, updateUser: this.updateUser }}>
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

// export default MyContextProvider;