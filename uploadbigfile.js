const myProductName = "s3BigUpload", myVersion = "0.4.1";   

const fs = require ("fs");
const AWS = require ("aws-sdk");
const s3 = new AWS.S3 ();

const localFilePath = "myBigFile.mp3", filetype = "audio/mpeg", acl = "public-read"; //fill in your own values here
const s3bucket = "publicfolder.io", s3path = "testing/myBigFile.mp3"; //fill in your own values here

function s3UploadBigFile (f, s3bucket, s3path, type, acl, callback) {
	let theStream = fs.createReadStream (f);
	let myParams = {
		Bucket: s3bucket,
		Key: s3path,
		ContentType: type, 
		ACL: acl
		};
	
	let s3obj = new AWS.S3 ({params: myParams});
	s3obj.upload ({Body: theStream}, function (err, data) {
		if (callback !== undefined) {
			callback (err, data);
			}
		});
	}

console.log ("\n" + myProductName + " v" + myVersion + ".\n");

s3UploadBigFile (localFilePath, s3bucket, s3path, filetype, acl, function (err, data) {
	if (err) {
		console.log ("s3UploadBigFile returned err.message == " + err.message);
		}
	else {
		console.log ("s3UploadBigFile returned == " + JSON.stringify (data, undefined, 4)); 
		}
	});
