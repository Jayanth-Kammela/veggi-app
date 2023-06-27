const Comment = require('../Models/Comment');

const postComment = async (req, res) => {
    const { productId, comment, rating } = req.body;
    const user_id = req.user
    console.log(productId, comment, rating, user_id);
    try {
        const commentBody = new Comment({ user: user_id, productId: productId, comment: comment, rating: rating });
        await commentBody.save();
        return res.status(201).json(commentBody);
    } catch (error) {
        return res.status(500).json(error);
    }
};

const getAllCommentsForProduct = async (req, res) => {
    const { id } = req.params
    try {
        const comments = await Comment.find({ productId: id }).populate('user','email')
        return res.status(200).json(comments);
    } catch (error) {
        return res.status(500).json(error);
    }
};

const updateCommentById = async (req, res) => {
    const { id } = req.params
    try {
        const comment = await Comment.findByIdAndUpdate({ _id: id }, req.body, { new: true });
        if (!comment) {
            return res.status(404).json(error);
        }
        return res.status(200).json(comment);
    } catch (error) {
        return res.status(500).json(error);
    }
};

const deleteCommentById = async (req, res) => {
    const { id } = req.params
    try {
        const comment = await Comment.findByIdAndDelete({ _id: id });
        if (!comment) {
            return res.status(404).json(error);
        }
        return res.status(200).json('Comment deleted successfully');
    } catch (error) {
        return res.status(500).json(error);
    }
};

module.exports = { postComment, updateCommentById, deleteCommentById, getAllCommentsForProduct };
