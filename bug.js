const unsubscribe = onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/auth/web/user-properties
    const uid = user.uid;
    console.log('User logged in with UID:', uid);
    // ...
  } else {
    // User is signed out
    // ...
    console.log('User is signed out');
  }
});

// unsubscribe from onAuthStateChanged when component unmounts
return () => unsubscribe();