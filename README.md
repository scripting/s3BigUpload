# s3BigUpload

S3 can handle streamed uploads, this example shows how, in Node

### The story

I'm working on an app that upstreams files from the user's desktop to a location on S3. 

I wondered if Amazon's API can do streamed uploads, and found that it can, but the example code wasn't complete, and I couldn't get it to correctly upload files. 

So, as I like to do, I prepared a <i>hello world</i> type app that has been tested, and works, and is complete. 

### How to

1. <a href="https://github.com/scripting/s3BigUpload/archive/master.zip">Download</a> the folder, open it in your terminal app, cd into the folder.

2. Make sure your Amazon credentials are accessible, following the instruction on the AWS site. 

3. Change the value of s3bucket and s3path to point to the location you want the file to be uploaded to.

4. node uploadbigfile.js. 

### Questions, comments

Post an <a href="https://github.com/scripting/s3BigUpload/issues">issue</a> here. I can't support S3, but if you spot a problem I want to know about it.

Dave Winer, September 2017

