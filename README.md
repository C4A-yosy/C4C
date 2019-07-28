# Call for Code 2019
# Relief materials search in Okazaki
  
0. Related URL  
 (1) Open data Viewer  
     https://k-hiruta1987.github.io/okazakidisasterkitmap/  
 (2) Kintone Database  
     https://github.com/K-Hiruta1987/okazakidisasterkitmap  
 (3) Watson Assistant  
     https://github.com/YoshiokaMitsuyoshi/C4C/tree/master/WatsonAssistant  
 (4) Web service control  
     https://github.com/YoshiokaMitsuyoshi/C4C  
  
1. Environment  
 (1) OS: Windows10  
 (2) Database: web database Kintone  
  
2. How to Install and Setup  
 (1) Install Node.js  
     https://nodejs.org/en/download/  
 (2) Initialize npm  
     npm init  
 (3) Install ejs  
     npm install -g ejs    
 (4) Install express  
     npm install -g express  
     npm install -g express-generator  
 (5) Install IBM Watson  
     npm install -g ibm-watson  
     npm link ibm-watson   
 (6) Setup Web Server  
     express myapp  
     cd myapp  
     npm install  
     copy files from this site  
  
 3. How to Execute this system (Web Server) in local environment.  
     cd myapp  
     npm start  
  
 4. How to Access  
     http://localhost:3000/form/  
  
 5. What is this system  
We made relief materials search system in Okazaki city, Aichi Prefecture, Japan.
It enables us to search relief materials by natural language.
Details will be explained bellow.  
(1) Importance  
In the first place, we don't know what kind of materials there are in the shelters of Okazaki City.
Though is it, you appoint a right search word, and may you search it?
Only we know is what we are annoyed. So, it is very important to search by these problems in natural language.  
(2) What we made  
Okazaki city published the open data of relief materials in the shelters.
First, we made web database (using Kintone) which had these open data.
And then, we made a new search system (using node).
This system can be searched by natural language what we annoyed (using Watson assistant).
For example, "I am in trouble with my baby".
Then, this system can return for infant related materials at each shelter by this search term.
For example, the number of powdered milks, water, baby bottle, disposable diapers, etc.
Watson Assistant is very useful because it converts various synonym expressions into keywords.
With these keywords, this system selects query, searches the web database, and returns the results.  
(3) What kind of problem is solved  
This system is practical because we use the open data of Okazaki City.
You know, the purpose of this system is to solve evacuees' problems 
by means of relevant materials search results in the disaster.
By using Watson Assistant, you can minimize opportunity loss.
