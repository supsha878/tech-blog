const logoutHandler = async () => {
    // log out as existing user request
    const response = await fetch('/api/users/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'applocation/json' }
    });

    // redirect to homepage
    if (response.ok) {
        document.location.replace('/');
    } else {
        alert(response.statusText);
    }
};

const logoutE = document.querySelector('#logout')

// if logout button is present add event listener
if (logoutE) {
    logoutE.addEventListener('click', logoutHandler);
}