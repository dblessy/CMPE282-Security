const AWS = require('aws-sdk');

// Set the region and credentials for the SDK
AWS.config.update({
    region: '   Region name',
    accessKeyId: '',
    secretAccessKey: ''
});

// Create an S3 instance
const s3 = new AWS.S3();

// Set the name of the bucket you want to read objects from
const bucketName = '';

// List all objects in the bucket
s3.listObjects({ Bucket: bucketName }, function(err, data) {
    if (err) {
        console.log('Error listing objects:', err);
    } else {
        console.log('Objects in bucket:', data.Contents);
        // Loop through the objects and read their contents
        data.Contents.forEach(function(object) {
            s3.getObject({ Bucket: bucketName, Key: object.Key }, function(err, data) {
                if (err) {
                    console.log('Error reading object:', err);
                } else {
                    console.log('Success reading object');
                }
            });
        });
    }
});
