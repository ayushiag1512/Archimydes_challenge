# Archimydes_challenge

This Challenge consists of 3 screens:
1) The User-Detail Screen
2) The Create User Screen
3) The Update User Screen

In the first screen along with the details an action column is present which allows us to delete the particular record of a user.
Above the table containing the information there is a create button which naviates us to the Create User Screen.

Since i am a newbie in ReactJS the Trash icon on the first page is responsive but is unable to delete the required record and similarly the create button navigates the user to the Create User Screen but on clicking the Create Button beneath the cancel button, a new record is not being created.
On pressing the Cancel Button the user navigates back to the User-Detail-Screen.

On clicking the names the User navigates to the Update User Screen.

The information contained in the various files are as follows:
index.css: Contains the css for the entire project
main.js: contains the functionality,layout and content of the User-Detail Screen
create.js: contains the functionality,layout and content of the Create User Screen
update.js: contains the functionality,layout and content of the Update User Screen

For Running the project the following steps should be followed:
1) install nodejs 
2) open gitCMD(if you dont have one install it)
3) After opening gitCMD write npm install
4) After that write the name of the drive in which you have to create the project folder in my case it was D drive so I wrote D: and my current directory changed to D:\>
5) after this write npx create-react-app archimydes(or any name which you wish to give) : you will get a response as "Creating a new React app in D:\archimydes" along with important packages getting installed.
6) After everything gets installed make your project folder as current directory for eg: cd archimydes
7) After this write npm i react-router-dom --save
8) After the installation of above package is complete write npm start
9) After this your development server will get started
10) Now open vs code->open folder->click on main.js this will be the webpage that will be displayed in the browser. Navigate between the screens as and when required.
