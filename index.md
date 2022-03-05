---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: jekyll-theme-minimal
---
<head>
<meta name="viewport" content="initial-scale=1, maximum-scale=1">
<link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@1,500&display=swap" rel="stylesheet">
<script async src="https://www.googletagmanager.com/gtag/js?id=G-GTLELQLE4F"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-GTLELQLE4F');
</script>
</head>
<style>
 .container {
    display: flex;
    height: 100%;
    width: 800px;
    margin: auto;
  }

  #main-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    border-left: 2px solid #ff00f0;
    border-right: 2px solid #ff00f0;
  }

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
    flex-direction: row;
    left: -50;
  }

  .topic {
    color: #ff00f0;
    font-family: 'Raleway', sans-serif;
    margin: auto;
    margin-bottom: 20px;
  }

  li {
    font-size: 24px;
  }

  li > a {
    color: black;
    text-decoration: none;
  }

  li > a:hover {
    color: #ff00f0;
  }

  #slide-1 {
    margin-bottom: 50;
  }

  #slide-2 {
    margin-left: 10px;
    margin-bottom: 50;
  }

  #fancy-design {
      position: absolute;
      top: 50%;
      opacity: .1;
      width: 100%;
      height: 50%;
      background-color: #add8e6;
      clip-path: polygon(0 0, 0 4%, 100% 50%, 100% 100%, 0 100%, 0% 50%);
  }

  #hero {
    display: flex;
    background-color: #fff;
    margin-right: auto;
    margin-left: auto;

  }

  #hero p {
  font-family: 'Raleway', sans-serif;
  font-weight: 700;
  font-size: 50px;
  display: inline-block;
  }

  #overlay {
    clip-path: polygon(0 100%, 0 0, 100% 0, 30% 50)
  }

  #twitter {
    position: relative;
    top: 10;
  }

  #list {
    list-style: none;
    margin: auto;
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
<div class="container">
  <div id='fancy-design'>
  </div>
  <div id='main-container'>
    <div id='hero'>
        <p>Hi, I'm Arnold.<span><a href="https://twitter.com/Arnold_SandersR">
        <img src="https://b4thestorm.github.io/pages/assets/images/twitter-logo@logotyp.us.svg" width="50px;" id="twitter"></a></span></p>
    </div>
    <div id="resource-container" style="z-index: 1">
    <h1 class="topic">Projects</h1>
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
      <h1 class="topic">Blog</h1>
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
