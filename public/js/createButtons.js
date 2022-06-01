const redirectCreatePost = (event) => {
    event.preventDefault();

    document.location.replace('/create');
};

document.querySelector('#create-post').addEventListener('click', redirectCreatePost);