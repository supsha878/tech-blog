// import dependencies and models
const router = require('express').Router();
const { Post, Comment } = require('../../models');

// create a new post
router.post('/', async (req, res) => {
    try {
        req.body.user_id = req.session.user_id;
        const postData = await Post.create(req.body);
        res.status(200).json(postData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// update an existing post
router.put('/:id', async (req, res) => {
    try {
        const postData = await Post.findByPk(req.params.id);

        if (!postData) {
            res.status(404).json({ message: 'No post found with id'});
            return;
        }

        const updatedPostData = await Post.update({
                title: req.body.title,
                content: req.body.content
            },
            { 
                where: {
                    id: req.params.id,
                    user_id: req.session.user_id
                }
            }
        );
        res.status(200).json(updatedPostData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// delete an existing post
router.delete('/:id', async (req, res) => {
    try {
        const response = await Post.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id
            }
        });

        if (!response) {
            res.status(404).json({ message: 'No post found with id'});
        }
        res.status(200).json(response);
    } catch (err) {
        res.status(500).json(err);
    }
});

// create a new comment on a post
router.post('/:id/comment', async (req, res) => {
    try {
        req.body.user_id = req.session.user_id;
        req.body.post_id = req.params.id;

        const commentData = await Comment.create(req.body);
        res.status(200).json(commentData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// export routes
module.exports = router;