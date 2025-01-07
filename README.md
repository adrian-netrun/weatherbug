This serves as a basic project description and dairy of my learnings

    IMPORTANT

Please generate your own api key on https://www.weatherapi.com/, it is free, and it will offer you a 3-day subscription to
PRO features IIRC. These features will fall away automatically and default to the base free tier service. None of the PRO
features were used for the project

Create a .env file and include the following URL: http://api.weatherapi.com/v1/current.json, with variable name 'VITE_URL_PARTIAL'.
Then create a second environment variable named 'VITE_API_KEY'. My project uses Vite meta environment variables and it
should work without any hassles.

    PROJECT DESCRIPTION AND INFORMATION

This is a basic 'app' that merely allows a user to search a city or town and basic weather information will be returned
I used https://www.weatherapi.com/ as the backend and implemented the frontend with HTML, CSS, React using vanilla JavaScript

Something to note with the above-mentioned API is that it is actually quite in accurate and it varies from day to day. 
This must be something to do with which weather base stations the provider is getting data from. Secondly the API seems
to have an optimistic approach to handling search queries. 

If you search for a City/Town name in which the user input is incomplete, eg: if user searches 'Bright Star' the API will
return date for a town called Brightstar in Wisconsin, USA. The only time the API will return an error is total gibberish is 
passed to it or a string of numbers. 

This project was never built and deployed, which was never my intention. To run the project simply copy from source and use 
Vite's local development server. 

Load times are OK. Due to the poor nature of the structure load times seem to run at 0.5 seconds
or lower. The initial load is longest. 

If the project had more CSS content, I can foresee longer load times. 
An important thing to note is that this project is for learning how React works and how to perform basic API calls 
and how to implement basic CSS layouts.

See below a summary of what my learnings are. 

    LEARNINGS  

I did not fully document the entire process of this build, which is OK for now. So I will use this time to document my
learnings and lessons. 

    REACT STATE MANAGEMENT AND STRUCTURE IS TRICKY 

State management can become a bane to most React devs from what I have read, I can see why. If you nest components more 
than 3 levels deep it creates issues with the render tree and also how state is propagated down & up the component tree

Something I noticed which I would love to tackle one day is managing controlled inputs better. 
Right now controlled inputs remove normal HTML behaviour eg: A text input clearing after the search button is clicked, 
this must be done by managing form state manually by using setState() after the form is submitted.

I am going to make the assumption that programming languages like C/C++ where memory is managed have a similar behaviour
when you have variables are often reused. This has triggered my curiosity into learning lower level languages and how 
they interact with computer memory

React is a module framework/library which is extremely powerful; I enjoy using it. Structuring a project is very -
important and I have a long way to go in terms of getting that right or developing my own methodology for project structures

    HTML, HTML NAMING AND CSS

I am going to be honest, as someone who is working towards proper design and implementation. I should have learned 
Semantic HTML and CSS BEM(Block Element Model) this would have made it easier to design and control CSS files

The way I name component classes right now is not obvious and intuitive - see above comment on using BEM. Reading through
https://getbem.com/introduction/ and why it can be useful has made me realise that I should be very careful with buying 
into technologies like Tailwind & SCSS without a good understanding of vanilla CSS, project structure and the amount of 
functionality basic HTML has to offer. 

    JAVASCRIPT

An interesting programming language. It really is a hammer in a world where every problem is a nail. 
I am going to continue to endeavor to study JS. Contemporarily most people use Functional Programming styles with JS 
these days - which I find limiting. My learning going forward I will attempt to solve problems using more OOP structures
and I will be sure to use TypeScript in order to get a handle on that. 

    ESLINT & Prettier

I should have set up and started using ESLint and Prettier immediately as it is challenging to add to a complete project. 'Nuff said. 

    CONCLUSION 

I have a long way to go when it comes to programming and expanding my own knowledge in this field.
It will take discipline and focus to grow and become proficient. Reading documentation and personal projects will be a 
cornerstone in my development and growth. 



Thank you for taking time to view this project
AJ Viljoen





