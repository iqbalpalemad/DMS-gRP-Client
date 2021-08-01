# DMS-gRP-Client

This repository contains a nodejs client application that communicate with gRCP server project (https://github.com/iqbalpalemad/DMS-gRP) 

## Local development

* Clone the repository 
* Run `$ npm install` inside the repository to install the required dependencies
* Copy the sample configuration file and edit it to match your configuration.
  `$ cp .env.sample .env`
 * Replace following environment variables in .env file:
 
    GRPC_HOST   : ip:port of running grpc server
    
    
  * Run  `$ npm start` to run the application
  
  ## Docker setup
  
  * Please builde the docker container using the Dockerfile provided here
  * Run The docker container with port 5005 (specified in HOST in .env) map to local host 5000 port
  
  
  ## API LIST
  * Signup
  
    `/auth/signup`
    
    method     : `POST`
    
    parameters : `{username,password}`
    
  * Login
  
    `/auth/login`
    
      method     : `POST`
    
      parameters : `{username,password}`
    
  * Get all user 
  
      `/user`
    
      method     : `GET`
    
      Header     : `{jwt_token}`
    
    
   * Delete a user 
   
     `/user/{userId}`
    
      method     : `DELETE`
    
      Header     : `{jwt_token}`
    
    
   * Create a folder
  
      `/folder`
    
      method     : `POST`
    
      parameters : `{name,parentFolderId}`
    
      Header     : `{jwt_token}`
    
    
   * Update a folder
  
      `/folder/{folderId}`
    
      method     : `PUT`
    
      parameters : `{name,parentFolderId}`
    
      Header     : `{jwt_token}`
    
    
    
   * move a folder
  
      `/move/{folderId}/{parentFolderId}`
    
      method     : `POST`
    
      Header     : `{jwt_token}`
    
    
   * Delete a folder
  
      `/folder/{folderId}`
    
      method     : `DELET`
    
      Header     : `{jwt_token}`
    
   * Get folder details
  
      `/folder/{folderId}`
    
      method     : `GET`
    
      Header     : `{jwt_token}`
    
    
   * Get contents in  a folder
  
      `/folder/{folderId}/content/{type}`
    
      method     : `GET`
    
      type : `{"all","file","folder"}`
    
      Header     : `{jwt_token}`
    
   * creat a file
  
      `/file`
    
      method     : `POST`
    
      parameters : `{name,parentFolderId,content}`
    
      Header     : `{jwt_token}`
 
   * Update a file
  
      `/file/{fileId}`
    
      method     : `PUT`
    
      parameters : `{name,parentFolderId,content}`
    
      Header     : `{jwt_token}`
    
   * Move a file
  
      `/file/move/{fileId}/{parentFolderId}`
    
      method     : `POST`
    
      Header     : `{jwt_token}`
    
  * Get file details
  
      `/file/{fileId}`
    
      method     : `GET`
    
      Header     : `{jwt_token}`
    
    
  * Delete a file details
  
      `/file/{fileId}`
    
      method     : `DELETE`
    
      Header     : `{jwt_token}`
      
      
   ##### NOTE : For all api expect signup and login , jwt toke returned when login is to be passed in the header 
      
              eg : `{"key":"authorization","value":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMDY5YzRlNzFkMzM4MmM3ODBiZWUwNyIsImlhdCI6MTYyNzgyMzE4OSwiZXhwIjoxNjI3OTA5NTg5fQ.mv0dkhOC1KMvOLYT93DH-iZKsIJVyTg9Cn3vpgLWy7o"}`
 
    
    
  ## Testing 
  
  
  test_username   = test@test.com
  
  test_password   = testpassword
  
  test_folder_id  = 61069c4f71d3382c780bee09
  
