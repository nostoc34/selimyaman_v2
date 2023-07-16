import Blog from "../../models/blog/blog.js";

//POST
export const postBlog = async (req, res) => {
	try {
		const {
			title,
			content,
			mainPicture,
			contentPicture1,
			contentPicture2,
			link,
		} = req.body;
		const newPost = new Blog({
			title,
			content,
			mainPicture,
			contentPicture1,
			contentPicture2,
			link,
		});
		await newPost.save();
		res.status(200).json(newPost);
	} catch(err) {
		res.status(404).json({ message: err.message });
	}
};

//GET
export const getBlog = async (req, res) => {
	try {
		const blog = await Blog.findById(req.params.id);
		res.status(200).json(blog);
	} catch(err) {
		res.status(404).json({ message: err.message });
	}
};

export const getAllBlogs = async (req, res) => {
	try {
		const blogs = await Blog.find({});
		res.status(200).json(blogs);
	} catch(err) {
		res.status(404).json({ message: err.message });
	}
};

//PUT
export const updateBlog = async (req, res) => {
	try {
		const blog = await Blog.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
		});
		res.status(200).json(blog);
	} catch(err) {
		res.status(404).json({ message: err.message });
	}
};

//DELETE
export const deleteBlog = async (req, res) => {
	try {
		await Blog.findByIdAndDelete(req.params.id);
		res.status(200).json({ id: req.params.id });
	} catch(err) {
		res.status(404).json({ message: err.message });
	}
};
