Hey all lochan (aka lichen) here. The created user interface "enlighten me" is a real time tech news and discoveries web app thats updated every instance of time. Live URL : https://lochanelectron.github.io/enlighten-me/ . It fetches real time tech and discoveries news, it also gets rid of duplicate articles in cases when same articles is published by different writers/editors. It uses Gnews as its API.

Working :
When a user clicks on "enlighten me" button, application sends request to the news API, where data is processessed & filtered, cloned/duplicate articles are removed and available articles are displayed. If no new articles are present(published) at the time of request then place holders are shown.

How can you run this ? :
Download the three files in this main repositories. In your desktop, create a folder and name it anything you wish, move the downloaded files into the newly created folder. Open up gnews.io , register and collect your unique API key. Then in the script.js file, replace the API key with one you got (coz daily limit is 100 lol T-T). Now click open the index.html file on browser and Voila you are ready to go.

Things to keep in mind :
1. Dont use browsers with vpn and privacy extensions, it may block the requests or result in CORS (cross origin requests) error in console.
2. API reuests are limited i.e 100/day, might restrict frequent use. Also please use your own API key.
3. Preferably use VS code, or any other code editor with which you're comfortable works too.

Tech used :
1. HTML5 (Web Page)
2. CSS3 (UI Design)
3. Java scrips (To fetch API)
4. Gnews API (News)
5. GitHub pages (Hosting)
6. Chat GPT (Vibe coding + fixing CORS error)

Credits :
Developed by - Lochan (Lichen)
AI Assistant - ChatGPT
