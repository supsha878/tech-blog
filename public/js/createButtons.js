const redirectCreatePost = (event) => {
    event.preventDefault();

    // redirect to create post page
    document.location.replace('/create');
};

const redirectCreateComment = (event) => {
    event.preventDefault();

    // get post id
    const splitPath = window.location.pathname.split('/');
    const postId = (splitPath[splitPath.length - 1]) * 1;

    // redirects to create comment page
    document.location.replace(`/post/${postId}/comment`);
};

const createPostE = document.querySelector('#create-post');
const createCommentE = document.querySelector('#create-comment');

// if elements exist, add event listeners
if (createPostE) {
    createPostE.addEventListener('click', redirectCreatePost);
}

if (createCommentE) {
    createCommentE.addEventListener('click', redirectCreateComment);
}