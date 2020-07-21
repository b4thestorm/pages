---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: jekyll-theme-minimal
---
<head>
<link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@1,500&display=swap" rel="stylesheet">
</head>
<style>
  li > a {
    color: black;
  }

  #hero {
    width: 100%;
    height: 50%;
    transition: background-color .75s ease;
    background-color: #fff;
    padding: 10px;
  }

  #hero:hover{
   background-color: #fc0;
   color: white;
  }

  #hero p {
  font-family: 'Raleway', sans-serif;
  font-weight: 700;
  font-size: 50px;
  }

  #twitter {
    position: relative;
    left: 90%;
    top: 120px;
    visibility: hidden;
  }

  #hero:hover > a > #twitter {
    visibility: visible;
  }

  @media only screen
  and (min-device-width: 375px)
  and (max-device-width: 667px)
  and (-webkit-min-device-pixel-ratio: 2) {
   .hero {
     margin-bottom: 50px;
   }   
 }



</style>
<div id='hero'>
  <p>Hi, I'm Arnold. I build things rapidly. I specialize in rapid prototype iteration, web design and making connections. I aim to create memorable digital experiences and provide fast and reliable service to all of my clients.</p>
  <a href="https://twitter.com/Arnold_SandersR">
  <img src="https://b4thestorm.github.io/pages/assets/images/twitter-logo@logotyp.us.svg" width="50px;" id="twitter"></a>
</div>
<center>
<h1 style="font-family: 'Raleway', sans-serif;">Blog</h1>
<ul style="list-style: none;">
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}" style="text-decoration-color: red;">{{ post.title }}</a>
    </li>
  {% endfor %}
</ul>
</center>
