const Comment = require('../Models/Comment');

const postComment = async (req, res) => {
    const { productId, comment, rating } = req.body;
    // const userId = req.user._id.toString();

    // console.log(productId, comment, rating, userId);
    try {
        const findComment = await Comment.findOne({ user: '64aeda6532d79a245be01e87' });
        if (findComment) {
            return res.status(400).json('you already in commneted')
        } else {
            const commentBody = new Comment({ user: '64aeda6532d79a245be01e87', productId: productId, comment: comment, rating: rating });
            await commentBody.save();
            return res.status(201).json(commentBody);
        }
    } catch (error) {
        return res.status(500).json(error);
    }
};

const getAllCommentsForProduct = async (req, res) => {
    const { id } = req.params

    const user_id = req.user
    console.log(user_id);
    try {
        const comments = await Comment.find({ productId: id }).populate('user', 'email')
        return res.status(200).json({ comments: comments });
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
