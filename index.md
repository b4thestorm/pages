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
<link rel="stylesheet" href="https://unpkg.com/@glidejs/glide@3.3.0/dist/css/glide.core.min.css">
<script src="https://unpkg.com/@glidejs/glide@3.3.0/dist/glide.min.js"></script>
<title>Arnold's Blog</title>
</head>
<style>
  p , h1 {
    font-family: 'Raleway';
    -webkit-font-smoothing: subpixel-antialiased
  }

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
    justify-content: center;
  }

  .glide {
    margin-bottom: 40px;
  }
  .glide__slide {
    display: flex;
    justify-content: center;
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

  .glide__bullets {
    display: flex;
    justify-content: center;
    align-items: center;
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

  @keyframes slide-in {
    from {
      transform: translateX(-100%);
      opacity: 0;
    }
    to {
      transform: translateX(0%);
      opacity: 1;
    }
  }

   @keyframes fade-in {
    from {
      transform: translateY(-100%);
      opacity: 0;
    }
    to {
      transform: translateY(0%);
      opacity: 1;
    }
  }

   @keyframes grow-fast {
    from {
      transform: scale(.75);
    }
    to {
      transform: scale(1.5);
    }
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
  animation: fade-in 2000ms;
  }

  #twitter {
    position: relative;
    display: inline-block;
    top: 10;
  }

  #twitter:hover {
    animation: grow-fast 2000ms infinite;
  }

  .about-me {
    width: 50%;
    align-self: center;
    animation: slide-in 2000ms;
  }

::selection {
  background: yellow;
}

  #list {
    list-style: none;
    margin: auto;
  }

  @media only screen
  and (min-device-width: 375px)
  and (max-device-width: 667px)
  and (-webkit-min-device-pixel-ratio: 2) {
  .container {
      width: 400px;
    }

   .hero {
     margin-bottom: 100px;
   }
 }



</style>
<div class="container">
  <div id='main-container'>
    <div id='hero'>
        <p class='hero-name'>Hi, I'm Arnold.</p>
    </div>
    <div id="resource-container" style="z-index: 1">
    <div class='about-me'>
    <p>
      My name is Arnold Sanders. I am a full stack developer specializing in crafting witty solutions to
      business problems using modern web technology. At the moment I'm just breaking out on my own, but
      follow my blog for daily inspiration and work. 
    </p>
    </div>
    <div id="blog-container">
      <h1 class="topic">Projects</h1>
    </div>
    <div id="blog-container">
      <h1 class="topic">Blog</h1>
      <ul id='list'>
        {% for post in site.posts %}
          <li>
            <a href="/pages{{ post.url }}" id='list-item'>{{ post.title }}</a>
          </li>
        {% endfor %}
      </ul>
    </div>
  </div>
  </div>
</div>
<script>
  new Glide('.glide', {
     perView: 1
  }).mount()
</script>
