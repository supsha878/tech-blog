const createComment = async (event) => {
    event.preventDefault();

    const content = document.querySelector('#comment-content').value.trim();

    const splitPath = window.location.pathname.split('/');
    const postId = (splitPath[splitPath.length - 2]) * 1;

    if (content) {
        const response = await fetch(`/api/posts/${postId}/comment`, {
            method: 'POST',
            body: JSON.stringify({ content }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            document.location.replace(`/post/${postId}`);
        } else {
            alert(response.statusText);
        }
    }
};

document.querySelector('#create-comment').addEventListener('submit', createComment);