const updatePost = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#post-title').value.trim();
    const content = document.querySelector('#post-content').value.trim();

    // get post id
    const splitPath = window.location.pathname.split('/');
    const postId = (splitPath[splitPath.length - 2]) * 1;

    // update existing post request
    if (title && content) {
        const response = await fetch(`/api/posts/${postId}`, {
            method: 'PUT',
            body: JSON.stringify({ title, content }),
            headers: { 'Content-Type': 'application/json' }
        });

        // redirect to dashboard page
        if (response.ok) {
            document.location.replace(`/dashboard`);
        } else {
            alert(response.statusText);
        }
    }
};

const deletePost = async (event) => {

    // get post id
    const splitPath = window.location.pathname.split('/');
    const postId = (splitPath[splitPath.length - 2]) * 1;

    // delete existing post request
    const response = await fetch(`/api/posts/${postId}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
    });

    // redirect to dashboard page
    if(response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }
};

document.querySelector('#update-post').addEventListener('click', updatePost);
document.querySelector('#delete-post').addEventListener('click', deletePost);