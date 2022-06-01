const router = require('express').Router();
const { Post } = require('../../models');

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

module.exports = router;