const logoutHandler = async () => {
    const response = await fetch('/api/users/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'applocation/json' }
    });

    if (response.ok) {
        document.location.replace('/');
    } else {
        alert(response.statusText);
    }
};

const logoutE = document.querySelector('#logout')

if (logoutE) {
    logoutE.addEventListener('click', logoutHandler);
}