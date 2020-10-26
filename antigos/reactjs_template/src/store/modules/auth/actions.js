export function SignInRequest(inputName) {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: { inputName },
  };
}

export function SignInSuccess(message) {
  return {
    type: '@auth/SIGN_IN_SUCCESS',
    payload: { message },
  };
}

export function SignOut() {
  return {
    type: '@auth/SIGN_OUT',
  };
}
