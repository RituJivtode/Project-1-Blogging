


const allBlog = async function (req, res) {
try{
    let id = req.query.author_Id
    let category = req.query.category
    let tag = req.query.tags
    let sub = req.query.subCategory
    let blogList = await blogModel.find({ isDeleted: false, isPublished: true })
    if (!blogList.length) 
    { res.status(404).send({ status: false, msg: "blogs Missing!" }) 

    }    
    else if {
        let allList = await blogModel.find({ $or: [{ author_Id: id }, { category: category }, { tags: tag }, { subCategory: sub }] })
        if (!allList.length) {
            res.status(404).send({ status: false, msg: "blogs Missing" })
        }

        else { res.status(200).send({ status: true, data: list }) }
    }

    catch(error){
        res.status(500).send({msg: "Error", error: error.message})
      }
    

}

module.exports.allBlog = allBlog;