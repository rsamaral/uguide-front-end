import React, { Component } from "react";
import { FormCadastro, InputCadastro, BtnCadastro, MainContainer, Header, ErrorMessage } from "./styles";
import { isEmail } from "validator";
import { connect } from "react-redux";
import { cadastro } from "../../actions/auth-actions/auth";

const required = (value) => {
  if (!value) {
    return (
      <ErrorMessage>
        Este campo é obrigatório!
      </ErrorMessage>
    );
  }
};

const email = (value) => {
  if (!isEmail(value)) {
    return (
      <ErrorMessage>
        Este não é e-mail válido!.
      </ErrorMessage>
    );
  }
};

const vFullname = (value) => {
  if (value.length < 3 || value.length > 50) {
    return (
      <div>
        The Fullname must be between 3 and 50 characters.
      </div>
    );
  }
};

const vCellphone = (value) => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div>
        The username must be between 3 and 20 characters.
      </div>
    );
  }
};

const vCountry = (value) => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div>
        The username must be between 3 and 20 characters.
      </div>
    );
  }
};

const vPassword = (value) => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div>
        The password must be between 6 and 40 characters.
      </div>
    );
  }
};

const vRole= (value) => {
  if (value == 0) {
    return (
      <div>
        You must inform your role.
      </div>
    );
  }
};

class Cadastro extends Component {
  constructor(props) {
    super(props);
    this.handleCadastro = this.handleCadastro.bind(this);
    this.onChangeFullname = this.onChangeFullname.bind(this);
    this.onChangeCellphone = this.onChangeCellphone.bind(this);
    this.onChangeCountry = this.onChangeCountry.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeRole = this.onChangeRole.bind(this);

    this.state = {
      fullname: "",
      cellphone: "",
      country: "",
      email: "",
      password: "",
      roles: "",
      successful: false,
    };
  }

  onChangeFullname(e) {
    this.setState({
      fullname: e.target.value,
    });
  }

  onChangeCellphone(e) {
    this.setState({
      cellphone: e.target.value,
    });
  }

  onChangeCountry(e) {
    this.setState({
      country: e.target.value,
    });
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }

  onChangeRole(e) {
    this.setState({
      roles: e.target.value,
    });
  }

  handleCadastro(e) {
    e.preventDefault();

    this.setState({
      successful: false,
    });

    this.form.validateAll();

    if (this.checkBtn.context._errors.length === 0) {
      this.props
        .dispatch(
          cadastro(this.state.fullname, this.state.cellphone, this.state.country, this.state.email, this.state.password, this.state.roles)
        )
        .then(() => {
          this.setState({
            successful: true,
          });
        })
        .catch(() => {
          this.setState({
            successful: false,
          });
        });
    }
  }

  render() {
    const { message } = this.props

    return (
      <MainContainer>
        <Header>
          Cadastro
        </Header>
        <FormCadastro
          onSubmit={this.handleCadastro}
          ref={(c) => {
            this.form = c;
          }}
        >
        {!this.state.successful && (
          <div>
            <div>
              <InputCadastro
                placeholder="Nome Completo"
                type="text"
                className="form-control"
                name="fullname"
                value={this.state.fullname}
                onChange={this.onChangeFullname}
                validations={[required, vFullname]}
              />
            </div>

            <div>
              <InputCadastro
                placeholder="Telefone"
                type="text"
                className="form-control"
                name="cellphone"
                value={this.state.cellphone}
                onChange={this.onChangeCellphone}
                validations={[required, vCellphone]}
              />
            </div>

            <div>
              <InputCadastro
                placeholder="País"
                type="text"
                className="form-control"
                name="country"
                value={this.state.country}
                onChange={this.onChangeCountry}
                validations={[required, vCountry]}
              />
            </div>

            <div>
              <InputCadastro
                placeholder="E-mail"
                type="text"
                className="form-control"
                name="email"
                value={this.state.email}
                onChange={this.onChangeEmail}
                validations={[required, email]}
              />
            </div>

            <div>
              <InputCadastro
                placeholder="Senha"
                type="password"
                className="form-control"
                name="password"
                value={this.state.password}
                onChange={this.onChangePassword}
                validations={[required, vPassword]}
              />
            </div>

            <div>
              <InputCadastro
                placeholder="Usuário"
                type="text"
                className="form-control"
                name="roles"
                value={this.state.roles}
                onChange={this.onChangeRole}
                validations={[required, vRole]}
              />
            </div>

            <div>
              <BtnCadastro>
                Cadastrar
              </BtnCadastro>
            </div>
          </div>
        )}
        <BtnCadastro
          style={{ display: "none" }}
          ref={(c) => {
            this.checkBtn = c;
          }}
        />
        
         {message && (
          <div>
            <div className={ this.state.successful ? "alert alert-success" : "alert alert-danger" } role="alert">
              {message}
            </div>
          </div>
        )}
      </FormCadastro>
    </MainContainer>
    );
  }
}

function mapStateToProps(state) {
  const { message } = state.message;
  return {
    message,
  };
}

export default connect(mapStateToProps)(Cadastro);