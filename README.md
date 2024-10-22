# Auxy6858.github.io
## What?
This is a rewrite of my old portfolio which I wrote in blazor and lazily ported over to GitHub pages.
This isn't just a port of the old site, it's a complete rewrite from the ground up,
utilising several web technologies on top of blazor, such as 
[Sass](https://github.com/sass/sass)
and JavaScript.

## Why?

I wanted to update my old portfolio, however I ran into issues as the codebase was an unmaintainable mess.
If you want to witness it for yourself you can 
[here](https://github.com/Auxy6858/Auxy6858.github.io/tree/old).
Due to my new experience with web development and a better understanding, I decided it was better to rewrite the site from the ground up.

## How?

The whole reason the site was never published as the source code to begin with was because I didn't know how to get GitHub pages to host a blazor site,
The new approach uses 2 branches, one for the source code, and another for the compiled version of the site. 
Whenever there is a push made to the source code of the branch, GitHub actions builds the page using .NET and pushes the compiled site to the ```gh-pages``` branch.
I do not need to compile the SASS files using GitHub actions as of current, as my IDE compiles them on the fly. However, I may change this in the future.
