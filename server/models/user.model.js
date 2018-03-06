// user-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient')
  const user = new mongooseClient.Schema({
    email: {type: String, unique: true},
    password: { type: String, required: true },

    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    phone: { type: String, required: true },
    birthday: { type: String, required: true },
    gender: { type: String, required: true },
    diet: { type: String, required: true },
    housing: { type: String, required: true },
    presence: { type: String, required: true },
    presenceDay: {
      wednesday: { type: Boolean, required: false },
      thursday: { type: Boolean, required: false },
      friday: { type: Boolean, required: false },
      saturday: { type: Boolean, required: false },
      sunday: { type: Boolean, required: false }
    },

    address: {
      street: { type: String, required: true },
      zip: { type: String, required: true },
      city: { type: String, required: true }
    },

    comment: { type: String, required: false },
    division: { type: String, required: false },
    workgroup: { type: String, required: false },
    assignment: {
      carpool: { type: Number, required: false },
      medic: { type: Number, required: false },
      homeSecurity: { type: Number, required: false },
      cafe: { type: Number, required: false },
      assistant: { type: Number, required: false },
      contest: { type: Number, required: false },
      catering: { type: Number, required: false },
      school: { type: Number, required: false },
      programSupport: { type: Number, required: false }
    },

    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
  })
  return mongooseClient.model('user', user)
}
