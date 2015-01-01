# This deploy script only works if you have credentials for the appropriate S3 Bucket
aws s3 cp js s3://riskroll/js --recursive --acl public-read --profile eric
aws s3 cp index.html s3://riskroll/index.html --acl public-read --profile eric