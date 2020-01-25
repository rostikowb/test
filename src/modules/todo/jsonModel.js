import {Schema, model} from 'mongoose';

const todoSchema = Schema(
  {
      _id: Schema.Types.ObjectId,
      "OKPOCode": {type: String, required: true},
      "carrierName": {type: String, required: true},
      "licStatus": {type: String},
      "licIssueDate": {type: Schema.Types.Mixed},
      "licStartDate": {type: String},
      "licEndDate": {type: Schema.Types.Mixed},
      "vhclNum": {type: String},
      "vhclType": {type: String},
      "vhclStatus": {type: String},
      "vhclVendorID": {type: String},
      "vhclModel": {type: String},
      "vhclWt": {type: Number, required: true},
      "loadCap": {type: Number, required: true},
      "vchlManufYear": {type: Number, required: true},
      "vchlNumSeats": {type: Schema.Types.Mixed},
      "vchlVIN": {type: String, required: true},
      "certTypeID": {type: String, required: true},
      "vhclSerie": {type: String, required: true},
      "docNum": {type: String, required: true},
      "certSeries": {type: String},
      "certNum": {type: Schema.Types.Mixed},
      "certDateFrom": {type: Schema.Types.Mixed},
      "certDateTo": {type: Schema.Types.Mixed},
      "taxMark": {type: Schema.Types.Mixed},
      "taxType": {type: Schema.Types.Mixed},
      "taxSeries": {type: Schema.Types.Mixed},
  },
  // { timestamps: {} },
);

export default model('Todo', todoSchema);
