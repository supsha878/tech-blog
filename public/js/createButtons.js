const redirectCreatePost = (event) => {
    event.preventDefault();

    document.location.replace('/create');
};

const redirectCreateComment = (event) => {
    event.preventDefault();

    const splitPath = window.location.pathname.split('/');
    const postId = (splitPath[splitPath.length - 1]) * 1;

    document.location.replace(`/post/${postId}/comment`);
};

const createPostE = document.querySelector('#create-post');
const createCommentE = document.querySelector('#create-comment');

if (createPostE) {
    createPostE.addEventListener('click', redirectCreatePost);
}

if (createCommentE) {
    createCommentE.addEventListener('click', redirectCreateComment);
}