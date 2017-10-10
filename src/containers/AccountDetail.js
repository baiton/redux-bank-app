import React, {Component} from 'react'

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {withdrawFunds} from '../actions/index';
import Transaction from './Transaction'

class AccoutDetail extends Component {
  render() {
    const {accountID} = this.props.match.params;
    console.log("props in account", this.props);
    console.log("this.props.account.accountType", this.props.account.accountType);
    let account = this.props.user.accounts

    return (
      <div className="col-md-6">
        <div className="card">
          <div className="card-block pl-3">
            <h4 className="card-title">Account Information</h4>
            <h6 className="card-subtitle mb-2 text-muted">{this.props.account.accountType}
              for {this.props.user.name}</h6>
            <div className="card-text">
              Balance: {this.props.account.balance}
            </div>
          </div>
          <Transaction/>
          <Link className="btn btn-primary m-3" to="/users">Back to List of Users</Link>
        </div>
      </div>

    )
  }
}

function mapStateToProps(state) {
  console.log("state.selectedAccount", state.selectedAccount);
  return {user: state.selectedUser, account: state.selectedAccount};
}

function mapDispatchToProps(dispatch) {
  return {
    withdrawFunds: function(amount) {
      dispatch(withdrawFunds(amount))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AccoutDetail);
