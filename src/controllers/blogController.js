const blogModel = require("..models/blogModel.js")

const createBlogDoc = async () => {
    let blogdoc = req.body
    let author_id = blogdoc.author_id

    let blogDoccreate= await blogModel.create(blogdoc)
     res.send({data:blogDoccreate})

    let author = await blogModel.findById({ author_id });

    if (author) {
        return res.status(201).send({ msg: "author data" })
    }
    else {
        return res.status(400).send({ msg: "Not a a valid author id " })
    }
}

module.exports.createBlogDoc = createBlogDoc