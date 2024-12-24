# Northcoders News API

***Notice: This project is currently undergoing a re-design. While some elements may not be in their final state, all pages and functionality are fully accessible and available for exploration. Feedback and contributions are welcome during this process!***

**Hello, Welcome to the NC-News Frontend Web Application repository!** 

The live site can be found here: https://all-quiet-on-the-western-frontend.netlify.app/ - *Please wait up to a minute for the articles to load.*

Made for the Northcoders Frontend Review Project, this repository is a frontend interface that provides an interactive, user-friendly experience allowing the user to view and manage the data in the Backend API Project found here: https://github.com/benedict-robinson/NC-News-Backend.

With a focus on functionality, UI/UX, error handling, and styling, this site is easy to navigate and use, with users being able to view and sort a list of articles, vote and comment on individual articles, create new topics and even write new articles.

The current user, Tom "tickle123" Tickle, is hardcoded in for ease of use, but the site is designed to feel realistic.

**Features**
* Responsive design for desktop and mobile
* Dynamic and interactive user dashboard
* Seamless data handling through API calls
* Intuitive and accessible UI/UX


**Getting Started**

Here is some guidance on how to get a copy of the project running in your local environment.


**Prerequisites**
* Backend repo: https://github.com/benedict-robinson/NC-News-Backend
* Node.js (version 22.7.0 or higher)
* npm (or yarn) for dependencies
* date-nfs (for data formatting)
* axios
* React and "react-router-dom"


**Installation**

(all instructions written for bash in your linux or ios terminal)

Clone the repo with the link

```
git clone https://github.com/benedict-robinson/NC-News-Frontend
```

Install dependencies

```
npm install
```

Run the application

```
npm run dev
```

This command starts the development server. The app will be accessible at http://localhost:5173.



**Example Endpoints**

* / - Homepage: shows all articles
* /articles/:article_id - Shows a specific article with comments and voting capabilities
* /topics - Shows a list of available topics
* /user - Shows the user currently signed in (hardcoded)
* /:topic_slug/articles - Shows a list of comments under this topic category
* /* - error: shows error page denoting type of error



**Contact**

For enquires or support, general or specific, please contact:

Name: Benedict Robinson <br />
Email: benedict.r1713@gmail.com <br />
GitHub: benedict-robinson <br />


**Thank you for your interest in the NC-News Frontend Web Application repository!**


--- 

This portfolio project was created as part of a Digital Skills Bootcamp in Software Engineering provided by [Northcoders](https://northcoders.com/)

