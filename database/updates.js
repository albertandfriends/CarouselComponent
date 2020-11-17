 const db = require("./index.js");

 db.connection.query("update images set urlLink = 'https://myfecimages.s3-us-west-1.amazonaws.com/winchester+pictures/WinchesterHouse_PChang-4330.0.1484336386.jpg' where imageID = 1");
 db.connection.query("update images set urlLink = 'https:myfecimages.s3-us-west-1.amazonaws.com/winchester+pictures/the-winchester-mystery.jpg' where imageID = 2");
 db.connection.query("update images set urlLink = 'https://myfecimages.s3-us-west-1.amazonaws.com/winchester+pictures/smokey-shapes-not-visible.jpg' where imageID = 3");
 db.connection.query("update images set urlLink = 'https://myfecimages.s3-us-west-1.amazonaws.com/winchester+pictures/orbs-of-light-floating.jpg' where imageID = 4");
 db.connection.query("update images set urlLink = 'https://myfecimages.s3-us-west-1.amazonaws.com/winchester+pictures/santana-row.jpg' where imageID = 5");