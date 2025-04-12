class SocialMediaController {
    constructor(apiIntegration) {
        this.apiIntegration = apiIntegration;
    }

    async createPost(req, res) {
        try {
            const { content, platform } = req.body;
            const response = await this.apiIntegration.postToPlatform(platform, content);
            res.status(201).json({ message: 'Post created successfully', data: response });
        } catch (error) {
            res.status(500).json({ message: 'Error creating post', error: error.message });
        }
    }

    async getPosts(req, res) {
        try {
            const { platform } = req.query;
            const posts = await this.apiIntegration.fetchPostsFromPlatform(platform);
            res.status(200).json({ message: 'Posts retrieved successfully', data: posts });
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving posts', error: error.message });
        }
    }

    async deletePost(req, res) {
        try {
            const { postId, platform } = req.params;
            await this.apiIntegration.deletePostFromPlatform(platform, postId);
            res.status(200).json({ message: 'Post deleted successfully' });
        } catch (error) {
            res.status(500).json({ message: 'Error deleting post', error: error.message });
        }
    }
}

module.exports = SocialMediaController;