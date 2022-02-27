---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: jekyll-theme-minimal
---
<head>
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
    width: 100%;
    height: 50%;
    background-color: #fff;
    padding: 10px;
  }

  #overlay {
    clip-path: polygon(0 100%, 0 0, 100% 0, 30% 50)
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
  <p>Hi, I'm Arnold. These are my thoughts.<span><a href="https://twitter.com/Arnold_SandersR">
    <img src="https://b4thestorm.github.io/pages/assets/images/twitter-logo@logotyp.us.svg" width="50px;" id="twitter"></a></span></p>
  <div id='fancy-design'>
  </div>
  <div id='main-container'>
    <img src="../pages/assets/images/ME.jpg" height="500px">
    <div id="resource-container" style="z-index: 1">
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
