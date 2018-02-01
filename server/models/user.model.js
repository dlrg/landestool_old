// user-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient')
  const user = new mongooseClient.Schema({
    email: {type: String, unique: true},
    password: { type: String },

    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    phone: { type: String, required: true },
    birthday: { type: String, required: true },
    gender: { type: String, required: true },
    diet: { type: String, required: true },

    address: {
      street: { type: String, required: true },
      zip: { type: String, required: true },
      city: { type: String, required: true }
    },

    comment: { type: String, required: false },
    division: { type: String, required: false },
    workgroup: { type: String, required: false },

    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
  })
  return mongooseClient.model('user', user)
}
