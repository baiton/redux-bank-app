export const USER_SELECTED = "USER_SELECTED";
export const ACCOUNT_SELECTED = "ACCOUNT_SELECTED";
export const WITHDRAW_FUNDS = "WITHDRAW_FUNDS";

export const selectUser = function (userInfo) {
  return {
    type: USER_SELECTED,
    payload: userInfo
  };
}

export const selectAccount = function (accountInfo) {
  return{
    type: ACCOUNT_SELECTED,
    payload: accountInfo
  };
}

/************************************

You will need to create a selectAccount
action creator here, it will take a type, and
payload: accountId

************************************/

export function withdrawFunds(amount) {
  return {
    type: WITHDRAW_FUNDS,
    //need to change the amount to an integer value
    payload: amount
  }
}
