---
layout: archive
permalink: /
title: ""
---
<head>
	<script src = "../pace.min.js"> </script>
	<link href= "../minimalLoad.css" rel = "stylesheet" />

</head>


<script>
paceOptions = {
  // Configuration goes here.
  elements: false,
  restartOnPushState: false,
  restartOnRequestAfter: false
}
</script>

<div class="tiles">
{% for post in site.posts %}
	{% include post-grid.html %}
{% endfor %}
</div><!-- /.tiles -->

<div class = 'container'>
	<div class='profile'>
		<img src="images/profile.png" style="width:420 px;height:540px;">
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
				<a  class = "inside" href = "https://github.com/jashansudan">
			<img src="images/github.png">
				</a>
			</div>
			<div class = "icons">
				<a class = "inside" href = "https://ca.linkedin.com/in/jashansudan">
			<img src="images/linkedin.svg">
				</a>
			</div>
			<div class = "icons">
				<a class = "inside" href="mailto:jashansudan@gmail.com">
			<img src="images/email.png" >
				</a>
			</div>
		</div>

	</div>
</div>