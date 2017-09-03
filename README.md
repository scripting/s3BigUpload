# s3BigUpload

S3 can handle streamed uploads, this example shows how, in JavaScript for Node

### The story

I'm working on an app that upstreams files from the user's desktop to a location on S3. 

I wondered if after all this time, Amazon had given the basic API the ability to handle streamed uploads, and found that they had, but the example code was missing some obvious things, and also didn't work (which was a problem of course). 

So, as I like to do, I prepared a hello world type app that has been tested, and works, and is complete. 

### How to

1. Download the folder, open it in your terminal app, cd into the folder.

2. Make sure your Amazon credentials are accessible, following the instruction on the AWS site. 

3. Change the value of s3bucket and s3path to point to the location you want the file to be uploaded to.

4. node uploadbigfile.js. 

### Questions, comments

Post an issue here. I can't support S3, but if you spot a problem I want to know about it.

Dave Winer, September 2017

