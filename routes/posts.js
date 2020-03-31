const express = require ('express');
const router = express.Router();
const Post = require('../models/Post');

//list all the posts on page
router.get('/', async (req,res)=> {
    // res.send('we are at posts');
try {
    const posts = await Post.find();  // list all posts. check out other
    res.json(posts);
} catch (err){
    res.json({ message : err });
}
});


//List specific post by using its ID
router.get('/:postId',async( req , res ) => {
    // res.send('we are at specific posts');
try{
    const post = await Post.findById(req.params.postId);
    res.json(post);
} catch(err){
    res.json({ message : err });

}
});

//Delete a post by using its ID
router.delete('/:postId',async( req , res ) => {
    // res.send('we are at specific posts');
try{
    const removedPost = await Post.deleteOne({_id:req.params.postId});
    res.json(removedPost);
} catch(err){
    res.json({ message : err });

}
});


//Update/Patch a post by looking up from its ID and changing its title
router.patch('/:postId',async( req , res ) => {
    // res.send('we are at specific posts');
try{
    const updatedPost = await Post.updateOne(
    {_id:req.params.postId},
    { $set : { title : req.body.title } }   //This is another object which is used for updating
    );
    res.json(updatedPost);
} catch(err){
    res.json({ message : err });

}
});



//Post data to the DB based on the schema and save to DB and catch any error.// parse the request into required fields
router.post('/',async (req,res)=>{
// console.log(req.body);

    const post = new Post({
    title : req.body.title,
    description : req.body.description
}); 
try {
    const savedPost = await post.save();        
    res.json(savedPost);
}catch (err){
    res.json({message:err});
}
});
module.exports = router;
