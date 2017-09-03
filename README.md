# s3BigUpload

S3 can handle streamed uploads, this example shows how, in Node/JavaScript.

### The story

I'm working on an app that upstreams files from the user's desktop to a location on S3. 

I wondered if Amazon's API can do streamed uploads, and found that it can, but I couldn't get the <a href="https://aws.amazon.com/blogs/developer/announcing-the-amazon-s3-managed-uploader-in-the-aws-sdk-for-javascript/">example code</a> to correctly upload files. I worked on it and this is the result. 

So, as I like to do, I prepared a <i>hello world</i> type app that has been tested, and works, and is complete. 

### How to

1. <a href="https://github.com/scripting/s3BigUpload/archive/master.zip">Download</a> the folder, open it in your terminal app, cd into the folder.

2. Make sure your Amazon credentials are accessible, following the <a href="http://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/setting-credentials.html">instructions</a> on the AWS site. 

3. Change the value of s3bucket and s3path to point to the location you want the file to be uploaded to.

4. `node uploadbigfile.js`

### Questions, comments

Post an <a href="https://github.com/scripting/s3BigUpload/issues">issue</a> here. I can't support S3, but if you spot a problem I want to know about it.

Dave Winer, September 2017

