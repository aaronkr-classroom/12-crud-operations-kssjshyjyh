// models/Course.js
"use strict";

/**
 * Listing 17.6 (p. 249)
 * 새로운 스키마와 모델의 생성
 */
const mongoose = require("mongoose"),
  courseSchema = mongoose.Schema({
    _id: {
      type: String,
      required: true,
      unique: true
    },
    title: {
      type: String,
      required: true,
      unique: true
    },
    description: {
      type: String,
      requierd: true
    },
    price: {
      type: Number,
      requierd: true,
      min: 0
    },
    courseImg: {
      type: String
    },
    items: []
  });

// methods

courseSchema.methods.getInfo = function() {
  return `Title: ${this.title} Description ${this.description}`;
};

// find same price

courseSchema.methods.findSamePrice = function() {
  return this.model("Course")
    .find({price: this.price})
    .exec();
};

// find lower price

courseSchema.methods.findLowerPrice = function() {
  return this.model("Course")
    .find({price: {$lt: price}})
    .exec();
};

// give discount (ex)

courseSchema.methods.discount = function() {
  const discount = this.price * ((100 - price)/100);
  return callback(null, discount); //check
};

// connect data

courseSchema.virtual("subscribers", {
  ref: "Subscriber",
  localField: "_id",
  foreignField: "courses"
});

// set object and JSON virtuals

courseSchema.set("toObject", {virtuals: true});
courseSchema.set("toJSON", {virtuals: true});


module.exports = mongoose.model("Course", courseSchema);
