const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    userId: { 
        type: String,
        require: true,
    },
    desc: {
        type:String,
        max: 500
    },
    img: {
        type:String
    },
    imgmut: {
        type:Array
    },
    likes: {
        type: Array,
        default:[]
    },
    retweet: {
        type: Array,
        default:[]
    },
    share: {
        type: Array,
        default:[]
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", PostSchema);
