import mongoose from 'mongoose'

const feedbackSchema = new mongoose.Schema({
	name: {
		type: String
	},
	feedback: {
		type: String
	},
	date: {
		type: String
	}
}, {
		timestamps: true
	});

const FeedBackModel = mongoose.model('feedbacks', feedbackSchema)

export default FeedBackModel