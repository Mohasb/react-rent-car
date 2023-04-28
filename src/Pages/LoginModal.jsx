import React from "react";
import { Modal, Button, Input, Application } from "react-rainbow-components";

class LoginModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: props.openModal,
      email: "",
      password: "",
      error: {
        emailError: "",
        passwordError: "",
      },
    };
    this.handleOnClick = this.handleOnClick.bind(this);
    this.handleOnClose = this.handleOnClose.bind(this);
    this.handleChageEmail = this.handleChageEmail.bind(this);
  }

  handleOnClick() {
    this.elevateToParent(true);
    return this.setState({ isOpen: true });
  }

  handleOnClose() {
    this.elevateToParent(false);
    return this.setState({ isOpen: false });
  }

  elevateToParent(state) {
    this.props.setOpenModal(state);
  }

  handleChageEmail(event) {
    return this.setState({ email: event.target.value });
  }
  handleChagePassword(event) {
    return this.setState({ password: event.target.value });
  }













  validateLogin(email, password) {
    const regexEmail =
      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
    const regexPassword =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;




    if (!regexEmail.test(email)) {
       this.setState(prevState => {
        let error = Object.assign({}, prevState.error);  
        error.emailError = 'someothername';                              
        return { error };                                 
      })
       
    }
     if (password == "") {
      this.setState(prevState => {
        let error = Object.assign({}, prevState.error);  
        error.passwordError = 'vacio';                              
        return { error };                                 
      })
    }else if (!regexPassword.test(password))
    {
      this.setState(prevState => {
        let error = Object.assign({}, prevState.error);  
        error.passwordError = 'no cumple';                              
        return { error };                                 
      })
    }
    /*- at least 8 characters
      - must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number
      - Can contain special characters*/
  }























  render() {
    const { isOpen, email, password } = this.state;
    const inputStyles = {
      width: 400,
    };
    const themeRainbow = {
      rainbow: {
        palette: {
          brand: "#F4B408",
        },
      },
    };
    return (
      <Application theme={themeRainbow}>
        <div className="rainbow-m-bottom_xx-large rainbow-p-bottom_xx-large visually-hidden">
          <Modal
            isOpen={isOpen}
            onRequestClose={this.handleOnClose}
            title="LOGIN"
            variant="brand"
            footer={
              <div className="rainbow-flex rainbow-justify_spread">
                <Button
                  label="Volver"
                  variant="neutral"
                  onClick={() => this.handleOnClose}
                />
                <Button
                  label="Login"
                  variant="brand"
                  type="submit"
                  onClick={() => {
                    this.validateLogin(email, password);
                    //this.handleOnClose();
                  }}
                />
              </div>
            }
          >
            <form>
              <Input
                label="Email"
                placeholder="email@gmail.com"
                type="email"
                style={inputStyles}
                className="rainbow-m-vertical_x-large rainbow-p-horizontal_medium rainbow-m_auto"
                borderRadius="semi-rounded"
                size="large"
                value={email}
                onChange={() => this.handleChageEmail(window.event)}
                error={this.state.error.emailError}
              />
              <Input
                label="Password"
                placeholder="**********"
                type="password"
                className="rainbow-m-vertical_x-large rainbow-p-horizontal_medium rainbow-m_auto"
                borderRadius="semi-rounded"
                style={inputStyles}
                size="large"
                value={password}
                onChange={() => this.handleChagePassword(window.event)}
                error={this.state.error.passwordError}
              />
            </form>
          </Modal>
        </div>
      </Application>
    );
  }
}

export default LoginModal;
