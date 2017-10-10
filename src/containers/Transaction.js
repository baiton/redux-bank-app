import React, {Component} from 'react'

import ReactDOM from 'react-dom';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Label,
  Form,
  FormGroup
} from 'reactstrap';
import {connect} from 'react-redux';
import {withdrawFunds} from '../actions/index';

class Transaction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      backdrop: true
    };

    this.toggle = this.toggle.bind(this);
    this.toggleAndTransact = this.toggleAndTransact.bind(this);
    // this.changeBackdrop = this.changeBackdrop.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  toggleAndTransact(amount) {
    console.log("amount", amount);
    this.setState({
      modal: !this.state.modal
    });
    this.props.withdrawFunds(amount)
  }

  render() {
    console.log("this.state", this.state);
    return (
      <div className="pl-3">
          <Button color="danger" onClick={this.toggle}>Withdraw Funds</Button>
          <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
            <ModalHeader toggle={this.toggle}>Make A Withdrawl</ModalHeader>
            <ModalBody>
              Please pick an ammount to withdraw from your {this.props.account.accountType} account. Your current balance is: {this.props.account.balance}
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={() => this.toggleAndTransact(5)}>$5</Button>
              <Button color="success" onClick={() => this.toggleAndTransact(10)}>$10</Button>
              <Button color="info" onClick={() => this.toggleAndTransact(20)}>$20</Button>
              <Button color="danger" onClick={this.toggle}>Cancel</Button>
            </ModalFooter>
          </Modal>
      </div>
    )
  }
}

function mapStateToProps(state) {
  console.log("state", state);
  return {user: state.selectedUser, account: state.selectedAccount, balance: state.balance};
}

function mapDispatchToProps(dispatch) {
  return {
    withdrawFunds: function(amount) {
      dispatch(withdrawFunds(amount))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Transaction)

{/* <Modal
  isOpen={this.state.modalIsOpen}
  onAfterOpen={this.afterOpenModal}
  onRequestClose={this.closeModal}
  style={customStyles}
  contentLabel="Example Modal"
>

  <h2 ref={subtitle => this.subtitle = subtitle}>Make A Withdrawl</h2>
  <div>Please pick an ammount to withdraw from your ACCOUNT-TYPE account.  Your current balance is: </div>
  <form>
    <button onClick={() => this.props.withdrawFunds(this.target.value)} value="5" className="btn btn-primary">$5</button>
    <button onClick={() => this.props.withdrawFunds(this.target.value)} value="10" className="btn btn-success">$10</button>
    <button onClick={() => this.props.withdrawFunds(this.target.value)} value="20" className="btn btn-info">$20</button>
    <button value="" className="btn btn-danger" onClick={this.closeModal}>close</button>
  </form>
</Modal> */
}
