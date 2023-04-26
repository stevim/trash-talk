import mongoose from "mongoose"

const Schema = mongoose.Schema

const teamSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  logo: String
}, {
    timestamps: true
})


const Team = mongoose.model('Team', teamSchema)

export {
  Team
}