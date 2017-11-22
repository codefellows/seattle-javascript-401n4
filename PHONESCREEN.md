General
-------

 - What version control systems have you used? 
 - What is your preferred development environment? (OS, Editor, Browsers, Tools etc.) 
 - Can you describe your workflow when you create a web page? 
 - Can you describe the difference between progressive enhancement and graceful degradation? 
 - What does "minification" do?
 - If you have 8 different stylesheets for a given design, how would you integrate them into the site? 
 - What tools do you use to test your code's performance? 
 - If you could master one technology this year, what would it be? 
 - Ways to decrease page load time. 
 - Ways to decrease perceived interface slowness. 
 - Explain the importance of standards.

**What industry sites and blogs do you read regularly?**
This question can give you an idea of how in-tune they are with the latest industry trends and technologies, as well as how passionate they are about webdev. It'll help separate the people who do it as a career AS WELL as a hobby from those who might simply be in it for the big developer paychecks.

**Do you prefer to work alone or on a team?**
This is an important question to ask depending on the work environment. If your project is going to require close interaction with other developers it's very handy to have someone who has had that kind of experience. On the other hand, many developers thrive while going solo.  Try to find a developer that fits your needs.

**In previous positions, describe how you worked with back-end developers?**
The goal here is to gauge the candidate's experience in working and cooperating with back-end developers. Do they go back and forth with a BE-dev throughout a project or do they tend to take data/code provided by the BE-dev and go off and do their thing?

**How comfortable are you with writing HTML entirely by hand? (+exercise)**
Although their resume may state that they're an HTML expert, often times many developers can't actually write an HTML document from top to bottom.  They rely on an external publisher or have to constantly flip back to a reference manual.  Any developer worth a damn should at least be able to write a simple HTML document without relying on external resources. A possible exercise is to draw up a fake website and ask them to write the HTML for it. Keep it simple and just make sure they have the basics down - watch for mistakes like forgetting the <head> </head> tags or serious misuse of certain elements.  If they write something like: <image src="/some/image.gif">, it might be a good hint to wrap things up and call the next interviewee.

**What is the w3c?**
Standards compliance in web development is where everything is (hopefully?) going. Don't ask them to recite the w3c's mission statement or anything, but they should at least have a general idea of who they are.

**Can you write table-less XHTML?  Do you validate your code?**
Weed out the old-school table-driven design junkies! Find a developer who uses HTML elements for what they were actually intended. Also, many developers will say they can go table-less, but when actually building sites they still use tables out of habit and/or convenience. Possibly draw up a quick navigation menu or article and have them write the markup for it. To be tricky, you could draw up tabular data - give them bonus points if they point out that a table should be used in that scenario :)

**What are a few of your favorite development tools and why?**

**Describe/demonstrate your level of competence in a *nix shell environment**
See how well they work without their precious GUI. Ask some basic questions like how they would recursively copy a directory from one place to another, or how you'd make a file only readable by the owner. Find out what OSs they have experience with.

**What skills and technologies are you the most interested in improving upon or learning?**
Find out if their future interests match the direction of the position (or the company in general).

**What sized websites have you worked on in the past?**
Find a developer that has experience similar in size to the project you're putting together. Developers with high traffic, large scale site expertise may offer skills that smaller-sized developers don't, such as fine tuning apache or optimizing heavily hit SQL queries. On the other hand, developers who typically build smaller sites may have an eye for things that large scale developers don't, such as offering a greater level of visual creativity.

**I just pulled up the website you built and the browser is displaying a blank page.  Walk me through the steps you'd take to troubleshoot the problem.**
This is a great question to determine how well rounded their abilites are. It tests everything from basic support skills all the way up to troubleshooting the webserver itself.

**What's your favorite development language and why?  What other features (if any) do you wish you could add to this language?**
Asking about feature additions is a particularly valuable question - it can reveal if they're skilled in programming in general or if their skillset is pigeonholed into their language of choice.

**Do you find any particular languages or technologies intimidating?**
I've often felt that the more I learn, the less I feel like I know. Solving one mystery opens up ten others. Having the interviewee tell you their faults can reveal a lot about what they know.

**What are a few personal web projects you've got going on?**
Almost all developers have personal web projects they like to plug away at in their spare time. This is another question that can help differentiate the passionate developers from the clock-punchers. It's also a good question to end an interview with, as it's usually easy (and fun) for them to answer.


HTML
----

 - What's a doctype do? Which one do you usually use?
 - What's the difference between standards mode and quirks mode?
 - What are data- attributes good for?
 - Explain what "Semantic HTML" means.


CSS
---

 - Describe what a "reset" CSS file does and how it's useful.
 - Describe Floats and how they work.
 - How many ways can you clear a float?
 - How many different ways can you lay elements out horizontally?
 - - Looking for float, inline-block, flexbox, css grid
 - Explain CSS sprites, and how you would implement them on a page or site.
 - What are the differences between the IE box model and the W3C box model?
 - CSS property hacks, conditionally included .css files, or... something else?
 - What are the different ways to visually hide content (and make it available only for screenreaders)?
 - Have you ever used a grid system, and if so, what do you prefer?
 - Have you used or implement media queries or mobile specific layouts/CSS?
 - How do you optimize your webpages for print?
 - What are some of the "gotchas" for writing efficient CSS?
 - Do you use LESS? or SASS ... what are the differences/advantages of each
 - How would you implement a web design comp that uses non-standard fonts?
 - Explain how a browser determines what elements match a CSS selector?
 - In detail, tell me how CSS Specificity works


Javascript
----------

 - Which JavaScript libraries have you used?
 - What are undefined and undeclared variables?
 - What is a closure, and how/why would you use one?
 - What's a typical use case for anonymous functions?
 - Explain the "JavaScript module pattern" and when you'd use it. Bonus points for mentioning clean namespacing.
 - What's the difference between host objects and native objects?
 - Difference between: javascript function Person(){} var person = Person() var person = new Person()
 - What's the difference between .call and .apply?
 - When do you optimize your code?
 - When would you use document.write()?
 - What's the difference between feature detection, feature inference, and using the UA string
 - Explain AJAX in as much detail as possible
 - Explain how JSONP works (and how it's not really AJAX)
 - Have you ever used JavaScript templating, and if so, what/how?
 - Explain "hoisting".
 - What is FOUC? How do you avoid FOUC?
 - Describe event bubbling.
 - What's the difference between an "attribute" and a "property"?
 - Why is extending built in JavaScript objects not a good idea?
 - Difference between document load event and document ready event?
 - What is the difference between == and ===?
 - Explain how you would get a query string parameter from the browser window's URL.
 - Explain the same-origin policy with regards to JavaScript.
 - Explain event delegation.
 - Describe inheritance patterns in JavaScript.
 - Describe a strategy for memoization (avoiding calculation repetition) in JavaScript. 
 - What does the spread operator do when used as a function param?
 - What does the spread operator do when used in object assigment (ie. let object = {...otherobject})
 - What is a pure function?
 - What differentiates an arrow function from a "normal" function
 - What is the difference between a JS module based object and a JS Class?
 

jQuery
------

 - Explain "chaining".
 - What does .end() do?
 - What is the difference between .get(), [], and .eq()?
 - What is the difference between .bind(), .live(), and .delegate()?
 - How would you find elements with at least one of a set of classes? With all of the classes?
 - Best ways to select / filter elements? What is fastest?
 

Frameworks
------

 - How does React update the DOM?
 - Explain transpiling
 - Give me an example of the Javascript code that JSX compiles down into
 - How are React and Vue different from Angular?