// helper-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient')
  const { Schema } = mongooseClient
  const helper = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'user' },
    time: {
      start: { type: Date },
      end: { type: Date }
    }
  }, {
    timestamps: true
  })

  return mongooseClient.model('helper', helper)
}
