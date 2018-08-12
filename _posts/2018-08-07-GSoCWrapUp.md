---
layout: post
title: It is just a beginning
subtitle: GSoC Wrap Up
image: /img/gsoc.png
bigimg: /img/menuBackground.jpg
js: [/js/github-buttons.js, /js/required.js]
ext-js: https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js
css: [/css/required.css, /css/github-buttons.css]
tags: [GSoC, Terasology, Oreons]
---
This post serves as a central reference for all the work done during an highly eventful summer, to say the least. It has been a wonderful experience, as it involved working on an exciting gameplay scenario development and at the same time helped me learn a lot about how to write quality
code when dealing with a deadline and also that "upgradation" is not really a word :D.  
This post consists of links to all PRs opened and the work done during the summer. There have been a total of about *15000 lines of code* across multiple modules and the engine of the game. Not surprisingly this boosted my github stats to a whole new level.
<figure>
<img src="/img/calendar.png" align="centre">
</figure>
## Final Product
The final result of my 3 month contribution is a brand new gameplay scenario called the *Master Of Oreon*. This takes you to another world where you control creatures called the Oreons. There are three types of Oreons, the _King_, _Guard_ and the _Builder_. The player can 
 them work on tasks like building new structures, guarding the storage, planting crops, harvesting those crops etc.
All this work makes the Oreons lose health and develop hunger, now to replenish this health and satisfy their hunger the Oreons have to visit a Diner and Hospital. The Oreons can also train a myriad of attributes through various buildings like the Gym and Classroom, which they subtly 
request for if not present in the village. The player also needs to collect resources and put them into chests of buildings which requre them. For eg: the Diner requires a `Cookie Crop` block to be present in its chest in order to serve an Oreon. The player can also drop blocks inside the 
Storage building which adds them to the storage chest. This helps in the case where a missing block for a task can be fetched by the Oreons _automagically_ and subsequently perform the original task. The module is currently at a minimal stage in terms of content. 
 There are only three buildings -- _Diner_, _Laboratory_ and _Storage_ -- and only one can be upgraded; and there is a single type of resource and single _Research_ task.  However, adding new content is a simple matter of defining a prefab file for the _Books_ with a research
 recipe or defining a _StructureTemplate_ for a new building.

#### List of PRs opened
Here is a [link](https://github.com/pulls?utf8=%E2%9C%93&q=is%3Apr+created%3A%3E2018-05-05+author%3ANaman-sopho) to a list of PRs opened during the GSoC work period.
<div class="collapsiblecontainer">
<div id="BTs" class="collapsibleheader">

+ Click here for a list of PRs opened

</div>
<div class="collapsiblecontent">
<b> MOO PRs </b><br>
<div class="github-button" url="https://github.com/Terasology/MasterOfOreon/pull/5"></div>
<div class="github-button" url="https://github.com/Terasology/MasterOfOreon/pull/6"></div>
<div class="github-button" url="https://github.com/Terasology/MasterOfOreon/pull/7"></div>
<div class="github-button" url="https://github.com/Terasology/MasterOfOreon/pull/8"></div>
<div class="github-button" url="https://github.com/Terasology/MasterOfOreon/pull/9"></div>
<div class="github-button" url="https://github.com/Terasology/MasterOfOreon/pull/10"></div>
<div class="github-button" url="https://github.com/Terasology/MasterOfOreon/pull/11"></div>
<div class="github-button" url="https://github.com/Terasology/MasterOfOreon/pull/19"></div>
<div class="github-button" url="https://github.com/Terasology/MasterOfOreon/pull/20"></div>
<div class="github-button" url="https://github.com/Terasology/MasterOfOreon/pull/21"></div>
<div class="github-button" url="https://github.com/Terasology/MasterOfOreon/pull/22"></div>
<div class="github-button" url="https://github.com/Terasology/MasterOfOreon/pull/23"></div>
<div class="github-button" url="https://github.com/Terasology/MasterOfOreon/pull/24"></div>
<div class="github-button" url="https://github.com/Terasology/MasterOfOreon/pull/25"></div>
<div class="github-button" url="https://github.com/Terasology/MasterOfOreon/pull/26"></div>
<div class="github-button" url="https://github.com/Terasology/MasterOfOreon/pull/27"></div>
<b>Engine PRs</b><br>
<div class="github-button" url="https://github.com/MovingBlocks/Terasology/pull/3410"></div>
<div class="github-button" url="https://github.com/MovingBlocks/Terasology/pull/3401"></div>
<b>Other Repositories</b><br>
<div class="github-button" url="https://github.com/Terasology/StructureTemplates/pull/27"></div>
<div class="github-button" url="https://github.com/Terasology/Oreons/pull/3"></div>
<div class="github-button" url="https://github.com/Terasology/Oreons/pull/4"></div>
<div class="github-button" url="https://github.com/Terasology/DynamicCities/pull/32"></div>
<div class="github-button" url="https://github.com/Terasology/CombatSystem/pull/35"></div>
<div class="github-button" url="https://github.com/Terasology/Books/pull/16"></div>
<div class="github-button" url="https://github.com/Terasology/ChangingBlocks/pull/3"></div>
<div class="github-button" url="https://github.com/Terasology/Behaviors/pull/14"></div>
</div>
</div>

#### List of Blog Posts
Click [here](https://naman-sopho.github.io/tags#GSoC) for a list of blog posts I made during the summer and [here](https://forum.terasology.org/threads/gsoc-2018-renovation-of-masteroforeon.2171/) for a thread of the project on Terasology's forum.