---
layout: archive
permalink: /
title: ""
---



<div class="tiles">
{% for post in site.posts %}
	{% include post-grid.html %}
{% endfor %}
</div><!-- /.tiles -->

<div class = 'container'>
	<div class='profile'>
		<img src="images/profile.jpg" style="width:420 px;height:540px;">
	</div>

	<div class = 'bio'>
		<p> <b> Hi </b>, my name is <b> Jashandeep Sudan</b>, Jashan for short. 
		I study <b> Computing at Queen's University</b> (Class of 2017), with a specialization in <b> Computer Science.</b>
		I've played on computers since I was a kid, and now I have the pleasure to
		work with them all the time!
		</p>

		<p>
		A few things I like to do in my free time include; weightlifting, skiing, golfing, eating, cooking and most recently drawing!
		</p>

		<p>
		Anyways, thank you for stopping by my site, take a look around and throw me
		some feedback on how I could improve anything.
		</p>

		<p class = "signature">
		<b>      -Jashandeep Sudan</b>
		</p>

		<p class= "contact">
			If you want to contact me, or see some of my work, look below!
		</p>

		<div class = "hype">
			<div class = "icons special">
			<img class = "inside"  src="images/github.png">
			</div>
			<div class = "icons">
			<img class = "inside" src="images/linkedin.svg">
			</div>
			<div class = "icons">
			<img class = "inside" src="images/email.png" >
			</div>
		</div>

	</div>
</div>