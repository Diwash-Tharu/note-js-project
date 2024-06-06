import mongoose, {Schema} from 'mongoose';
import  mongoosePaginate from 'mongoose-paginate-v2';


const videoSchema = new Schema({
    videoFiile:{
        type : string,
        required : true

    },
    thumbnail:{
        type : string,
        required : true
    },
    title:{
        type : string,
        required : true
    },
    description:{
        type : string,
        required : true
    },
    duration:{
        type : Number,
        required : true
    },
    views:{
        type : Number,
        default : 0,
        required : true
    },
    isPublished:{
        type : Boolean,
        default : true,
        required : true
    },
    ownwee:{
        type : Schema.Types.ObjectId,
        ref : 'User',
        required : true
    },
    
},
{
    timestamps:true    
})
// this is the advance of the aggrageet of the code
videoSchema.plugin(mongoosePaginate);

export const video = mongoose.model('Video', videoSchema);