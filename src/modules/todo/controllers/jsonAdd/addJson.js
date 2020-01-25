import mongoose from 'mongoose';
import Json from '../../jsonModel';

export default function todoCreate(req, res) {

    // Record the id
    const _id = new mongoose.Types.ObjectId();

    // Checking file availability
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
    }

    // Parse file
    let json = JSON.parse(req.files.json.data.toString());

    // Check whether it has an identical object in the database
    Json.find({OKPOCode: json.OKPOCode}).then(result => {
        if (result.length !== 1) {

            // Record and send data to the database
            const json = new Json({
                _id,
                "OKPOCode": json.OKPOCode,
                "carrierName": json.carrierName,
                "licStatus": json.licStatus,
                "licIssueDate": json.licIssueDate,
                "licStartDate": json.licStartDate,
                "licEndDate": json.licEndDate,
                "vhclNum": json.vhclNum,
                "vhclType": json.vhclType,
                "vhclStatus": json.vhclStatus,
                "vhclVendorID": json.vhclVendorID,
                "vhclModel": json.vhclModel,
                "vhclWt": json.vhclWt,
                "loadCap": json.loadCap,
                "vchlManufYear": json.vchlManufYear,
                "vchlNumSeats": json.vchlNumSeats,
                "vchlVIN": json.vchlVIN,
                "certTypeID": json.certTypeID,
                "vhclSerie": json.vhclSerie,
                "docNum": json.docNum,
                "certSeries": json.certSeries,
                "certNum": json.certNum,
                "certDateFrom": json.certDateFrom,
                "certDateTo": json.certDateTo,
                "taxMark": json.taxMark,
                "taxType": json.taxType,
                "taxSeries": json.taxSeries
            });

            json
                .save()
                .then(() => {
                    res.status(201).json('Todo created');
                })
                .catch(err => {
                    res.status(500).json(err);
                });
        }
    });
}
