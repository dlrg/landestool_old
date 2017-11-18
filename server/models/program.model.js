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
    status: { type: String },
    category: { type: String },
    privacy: { type: String },
    dates: {
      start: { type: Date },
      end: { type: Date },
      deadline: { type: Date },
      duration: { type: Number }
    },
    person: {
      accountable: {type: String},
      supervisor: {type: String},
      subscribermin: {type: Number},
      subscribermax: {type: Number},
      agemin: {type: Number},
      agemax: {type: Number}
    },
    location: {
      local: { type: Boolean },
      room: { type: String },
      zip: { type: Number },
      town: { type: String },
      street: { type: String },
      streetnr: { type: String },
      distance: { type: String },
      transport: { type: String },
      meetingpoint: { type: String },
      comment: { type: String }
    },
    finance: {
      payment: { type: String },
      prices: [{
        count: { type: Number },
        price: { type: Number }
      }],
      deadline: { type: Date }
    },
    info: {
      crewinfo: { type: String },
      mediainfo: { type: String },
      websiteinfo: { type: String },
      comment: { type: String }
    }
  }, {
    timestamps: true
  })

  return mongooseClient.model('program', program)
}
