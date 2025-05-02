function index(req , res) {
    const title = "Express Js Course"
    const posts = ["Post Title 01" , "Post Title 02" , "Post Title 03"]
    res.render('pages/index.ejs' , {title , posts})
}

module.exports = {
    index
}

