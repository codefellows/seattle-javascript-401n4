For a Quick and dirty simple and static web server that will serve up a "website" using the files in the directory you start from, there are 2 really simple options:

For Mac Users:
	In any folder, just run the command "python -m SimpleHTTPServer 8000"

For all others, use a node app called "live server"
	Install Live Server Globally:
	npm install -g live-server
	In any folder, just run the command "live-server"



In either case, idex.html is the default file and you can easily change your port number

Note that live-server has many more options for handling cors, authentication, etc.
