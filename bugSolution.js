const unsubscribe = onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in
    console.log('User logged in with UID:', user.uid);
  } else {
    // User is signed out
    console.log('User is signed out');
  }
});

useEffect(() => {
  // Cleanup function to unsubscribe when component unmounts
  return () => {
    unsubscribe();
  };
}, []);