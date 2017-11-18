// program-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient')
  const { Schema } = mongooseClient
  const program = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String },
    accountable: { type: String },
    datetimestart: { type: Date },
    duration: { type: Number },
    meetingpoint: { type: String },
    location: { type: String },
    payment: { type: String },
    distance: { type: String },
    transport: { type: String },
    subscribermin: { type: Number },
    subscribermax: { type: Number },
    agemin: { type: Number },
    agemax: { type: Number },
    supervisor: { type: String },
    comment: { type: String },
    crewinfo: { type: String },
    mediainfo: { type: String },
    websiteinfo: { type: String },
    privacy: { type: String },
    status: { type: String }
  }, {
    timestamps: true
  })

  return mongooseClient.model('program', program)
}
