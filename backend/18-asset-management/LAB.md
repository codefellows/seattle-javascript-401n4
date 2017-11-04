![CF](https://camo.githubusercontent.com/70edab54bba80edb7493cad3135e9606781cbb6b/687474703a2f2f692e696d6775722e636f6d2f377635415363382e706e67) 18: Image Uploads w/ AWS S3
===

## Submission Instructions
  * fork this repository & create a new branch for your work
  * write all of your code in a directory named `lab-` + `<your name>` **e.g.** `lab-susan`
  * push to your repository
  * submit a pull request to this repository
  * submit a link to your PR in canvas
  * write a question and observation on canvas

## Learning Objectives  
* students will be able to upload static assets to AWS S3
* students will be able to retrieve a cdn url that contains the previously uploaded static asset
* students will be able to work with secret and public access keys

## Requirements
#### Configuration
* `package.json`
* `.eslintrc`
* `.gitignore`
* `README.md`

#### Description
* create an AWS account
* create an AWS Access Key and Secret
  * add the Access Key and Secret to your `.env` file
* create a new model that represents a file type that you want to store on AWS S3
  * ex: `.mp3`, `.mp4`, `.png`, etc
* create a test that uploads one of these files to your route
* use the `aws-sdk` to assist with uploading
* use `multer` to parse the file upload request

#### Server Endpoint
* `POST` - `/api/resource/:resourceID/new-resource`

#### Tests
* `POST` - **200** - test that the upload worked and a resource object is returned

#### Bonus
* `DELETE` route - `/api/resource/:resourceID/new-resource/:new-resourceID`
* Test: `DELETE` - **204** - test to ensure the object was deleted from s3

#### Bonus: 3pts
* try using the `deleteObject` method provided by the `aws-sdk` to delete an object *(file)* from S3
  * you will need to pass in a `params` object that contains the associated Bucket and AWS object key in order to delete the object from s3
  * ex:
  ``` javascript
  var params = {
    Bucket: 's3-bucket-name',
    Key: 'object-filename'
  }
  s3.deleteObject(params)
  ```
* don't forget to remove the resource from the DB
