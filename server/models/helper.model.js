// helper-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient')
  const { Schema } = mongooseClient
  const helper = new Schema({
    user: { type: String, required: false },
    time: {
      date: { type: Date, required: true },
      start: { type: Date },
      end: { type: Date }
    },
    count: { type: Number, required: false },
    status: { type: String, required: false },
  }, {
    timestamps: true
  })

  return mongooseClient.model('helper', helper)
}
