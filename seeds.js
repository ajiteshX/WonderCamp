var mongoose    = require("mongoose");
var Campground  = require("./models/campground");
var Comment     = require("./models/comment");

var data = [
    {
        name: "dark", 
        image:"https://pixabay.com/get/gf74f4434941d95ddf52cdb5c2b61e1d6ad63e46bf8cf623558ec3b789db6b99049a4d82fd466dda606cb80afc98f57ae_340.jpg",
        description: "this is dark"
    },
    {
        name: "dark2", 
        image:"https://pixabay.com/get/g3e556cb5ea7987441889645a0f0df350e688ea254dd89311506505a21352b23ef864aa39b8b6ab4542d342cbef972258_340.jpg",
        description: "this is dark2"
    },
    {
        name: "dark3", 
        image:"https://pixabay.com/get/g1fa6bbc5a1b99dc2a7b0dcc733650081a437914780eb4ce56e5af21cd8c4bc3e15d8b23f06174fcd85535f56fb1d597f_340.jpg",
        description: "this is dark3"
    }
]

function seedDB()
{
    // REMOVE ALL CAMPGROUNDS
    Campground.remove({}, function(err)
    {
        if(err){
            console.log(err);
        }
        console.log("removed!");
        // ADD FEW CAMPGROUNDS
        data.forEach(function(seed)
        {
            Campground.create(seed, function(err, campground)
            {
                if(err)
                {
                    console.log(err);
                }
                else
                {
                    console.log("added a campground");
                    // CREATE A COMMENT
                    Comment.create({
                        text: "this is good place",
                        author: "anonymous" 
                    }, function(err, comment)
                    {
                        if(err)
                        {
                            console.log(err);
                        }
                        else
                        {
                            // campground.comments.push(comment);
                            campground.comments.push(comment);
                            campground.save();
                            console.log("created new comment");
                        }
                    });
                }
            });
        }); 
    });
}

module.exports = seedDB;