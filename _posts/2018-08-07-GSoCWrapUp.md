---
layout: post
title: It is just a beginning
subtitle: GSoC Wrap Up
image: /img/gsoc.png
bigimage: /img/gsocbig.jpeg
js: [/js/github-buttons.js, /js/required.js]
ext-js: https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js
css: [/css/required.css, /css/github-buttons.css]
---
This post serves as a central reference for all the work done during an highly eventful summer, to say the least. It has been a wonderful experience, as it involved working on an exciting gameplay scenario development and at the same time helped me learn a lot about how to write quality
code when dealing with a deadline and also that "upgradation" is not really a word :D.  
This post consists of links to all PRs and the work done during the summer. There have been a total of about *15000 lines of code* across multiple modules and the engine of the game. Not surprisingly this boosted my github stats to a whole new level.
<figure>
<img src="/img/calendar.png" align="centre">
</figure>
## Final Product
The final result of my 3 month contribution is a brand new gameplay scenario called the *Master Of Oreon*. This takes you to another world where you control creatures called the Oreons. There are three types make them work on tasks like building new structures, guarding the storage, planting crops, harvesting those crops etc.
All this work makes the Oreons lose health and develop hunger, now to replenish this health and satisfy their hunger the Oreons have to visit a Diner and Hospital. The Oreons can also train a myriad of attributes through various buildings like the Gym and Classroom, which they subtly 
request for if not present in the village. The player also needs to collect resources and put them into chests of buildings which requre them for eg: the Diner requires a `Cookie Crop` block to be present in its chest in order to serve an Oreon. The player can also drop blocks inside the 
Storage building which adds them to the storage chest, this helps in the case where a missing block for a task can be fetched by the Oreons _automagically_ and subsequently perform the original task. Though the module is currently at its minimal stage in terms of content i.e. only two
buildings *Diner*, *Laboratory* and *Storage*, out of which only one can be upgraded, a single type of resource and *Research* task, but the adding such things is as simple as defining a prefab file for the _Books_ with a research recipe and a _StructureTemplate_ for a new building.

#### List of repositories contributed to
#### List of PRs opened
Here is a [list of PRs](https://github.com/pulls?utf8=%E2%9C%93&q=is%3Apr+created%3A%3E2018-05-05+author%3ANaman-sopho) opened during the GSoC work period.