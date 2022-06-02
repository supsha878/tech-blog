const createComment = async (event) => {
    event.preventDefault();

    const content = document.querySelector('#comment-content').value.trim();

    // get post id
    const splitPath = window.location.pathname.split('/');
    const postId = (splitPath[splitPath.length - 2]) * 1;

    // create new comment request
    if (content) {
        const response = await fetch(`/api/posts/${postId}/comment`, {
            method: 'POST',
            body: JSON.stringify({ content }),
            headers: { 'Content-Type': 'application/json' }
        });

        // redirect to individual post page
        if (response.ok) {
            document.location.replace(`/post/${postId}`);
        } else {
            alert(response.statusText);
        }
    }
};

document.querySelector('#create-comment').addEventListener('submit', createComment);