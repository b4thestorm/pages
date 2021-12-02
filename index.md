---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: jekyll-theme-minimal
---
<head>
<link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@1,500&display=swap" rel="stylesheet">
</head>
<style>
  #blog-container {
    display: flex;
    flex-direction: column;
  }

  #resource-container {
      display: flex;
      flex-direction: column;
  }

  #project-container {
    display: flex;
    flex-direction: 'row';
    left: -50;
  }

  .header {
    font-family: 'Raleway', sans-serif;
  }

  li {
    font-size: 24px;
  }

  li > a {
    color: black;
    text-decoration: underline solid red;
  }

  #slide-1 {
    margin-bottom: 50;
  }

  #slide-2 {
    margin-left: 10px;
    margin-bottom: 50;
  }

  #main-container {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }

  #hero {
    width: 100%;
    height: 50%;
    background-color: #fff;
    padding: 10px;
  }

  #hero p {
  font-family: 'Raleway', sans-serif;
  font-weight: 700;
  font-size: 50px;
  }

  #twitter {
    position: relative;
    top: 10;
  }

  #list {
    list-style: none;
  }

  @media only screen
  and (min-device-width: 375px)
  and (max-device-width: 667px)
  and (-webkit-min-device-pixel-ratio: 2) {
   .hero {
     margin-bottom: 100px;
   }
 }



</style>
<div id='hero'>
  <p>Hi, I'm Arnold. I specialize in web development and making connections. I aim to create memorable digital experiences and provide fast and reliable service to all of my clients.<span><a href="https://twitter.com/Arnold_SandersR">
    <img src="https://b4thestorm.github.io/pages/assets/images/twitter-logo@logotyp.us.svg" width="50px;" id="twitter"></a></span></p>
  <div id='main-container'>
    <img src="../pages/assets/images/ME.jpg" height="500px">
    <div id="resource-container">
    <h1 class="header">Projects</h1>
    <div id="project-container">
      <div class="overlay">
        <div id="slide-1">
          <img src="../pages/assets/images/InstaGarden-LOGO-A.jpg" height="305px"/>
        </div>
      </div>
      <div id="slide-2">
        <img src="../pages/assets/images/proj1_a.png" width="150px;"/>
        <img src="../pages/assets/images/proj1_b.png" height="303px" width="150px;"/>
      </div>
    </div>
    <div id="blog-container">
      <h1 class="header">Blog</h1>
      <ul id='list'>
        {% for post in site.posts %}
          <li>
            <a href="../pages/{{ post.url }}" id='list-item'>{{ post.title }}</a>
          </li>
        {% endfor %}
      </ul>
    </div>
  </div>
  </div>
</div>
