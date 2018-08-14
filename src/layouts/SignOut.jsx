import React from 'react';

import { auth } from '../firebase/firebase';


const signOut = () => {
    auth.signOut().then(() => {
        console.log('sucess');
    }).catch(()=> {
        console.log('fail to ');
    })
}
const SignOutButton = () =>
  <button
    type="button"
    onClick={signOut}
  >
    Sign Out
  </button>

export default SignOutButton;