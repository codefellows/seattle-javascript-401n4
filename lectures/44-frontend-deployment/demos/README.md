#### Deployment Demos
Although these are shown here as 2 folders, they must actually live as 2 separate git repos, and then deployed independently to separate Heroku dynos.

Make sure you ...

* Enter your ENV variables correctly into Heroku, using the Heroku URLs not your locals.
* Update your google credentials to reflect these new URLs
* Setup a real domain and map it to heroku (using a DNS Alias) if you want your auth cookies to "stick"