# Gallery of My Life
This application is designed to help you create a gallery page to share pictures of things that are important to you. Visitors can click on an image to see a description and use a button to "like" an image.

## Interface
<img width="1341" alt="Screen Shot 2023-04-30 at 6 13 52 PM" src="https://user-images.githubusercontent.com/111030402/235380442-f4d73877-7f7b-4155-85bc-d7dfda9c6b02.png">

## Setup
1. Add a few images to the public/images folder.
2. Modify the server/modules/data.js to include an id, title, description, and path for each of your images.  3. Each id should be a unique number (e.g. 1, 2, 3...).
4. Install nodemon globally with npm install nodemon --global.
5. Run npm install to install project dependencies.
6. Run npm run server to start the server.
7. In a new terminal tab, run npm run client to start the React client app.

Note: Because we're using nodemon, both our client-side and server-side will automatically spin back up when changes are made!

## Usage Build
1. Move the data into a database (PostgreSQL).
2. Name your database react_gallery.
3. Include a database.sql file documenting your database tables.
4. Add a form (new component) that allows a user to POST a new gallery item.
5. Client-side form (use absolute URL for images).
6. Server-side route for posting an image.
7. Ability to delete a gallery item.

## Usage for App
1. Input title of image.
2. Input Description of image.
3. Input image URL. 
4. Add to Gallery. 

## Technologies Used
HTML5
CSS3
JavaScript
React.js
Node.js
Express.js
PostgreSQL

## Credits
This web application was created as a coding exercise by Seth Woodson.
