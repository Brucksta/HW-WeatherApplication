<h1>Homework Assignment 6 - Weather Applciation</h1>
  
A deployed link to my application is here: https://brucksta.github.io/HW-WeatherApplication/
  
 This weeks assignment was to create a user friendly weather app, which displayed the current days weather information and then a future 4 day forecast to show users the upcoming weather. This used a third party api from OpenWeather, and required us to search through fetch querys to find the relevent information that we wanted to show.
 
To begin with I needed to create the HMTL and CSS to start my page and give me something to script to. I set up a bunch of boxes with boarders so I could get an idea of the layout and got a very basic wireframe look. Next I created some cards, which would be where my weather would be displayed, and set up divs of where I wanted to display the information.
I created a search input using tailwind and that was the final piece of layout before I could start scripting!

Next I got myself an API key from open weather and then picked the appropriate API, and create a sample fetch. 
I ran through the whole fetch and wrote down which parts I needed to query and then linked them up with classes in my divs.
I set some place holders to quick see how it would all style out, and then closed my P tags for future innerText manipulation.
Next I set up my query selectors, and gave them a place to look in the fetch call, to spit out the information I wanted. I then added text before and after as needed for it to create text that was readable.
I then linked the search button to the fetch call, so whatever the user searched for, it would add to the fetch so that it would come back with the correct information.

![image](https://user-images.githubusercontent.com/78789156/114557925-525a7c80-9ca9-11eb-98a4-001fcb85a5df.png)

I didnt end up getting the search query to save and then display as a button.
I also didnt end up getting the UV to display.
Im definitely hoping to come back to this in the future and add extra functionality aswell as make it look a lot prettier.
