---
layout: post
title: 'Navigating Chaos'
categories: musings
---

I was tasked with writing a script to interact with private api in Java. I am
a rubyist by nature and a JS author by proximity. The experience tore me a new one. Here is a
breakdown of my learnings in the 24 hour period of my learning Java.

I found a github library on Quora, that led me to the Java enabled api.

I read the readme and was perplexed by what I was reading. The first thing I noticed
was what is called a JAR file. I did not know what it was, but I figured it was the package
that I would include in my Java file that would allow me to use the private api.

Then I remember thinking ok, how do I include it? What is Maven? What is Gradle? I have
ruby experience, so I think, hmm maybe this is a Package Manager. Fantastic, ok what is next? Then I think, Ok I need to setup my Java environment. I head over to youtube and search: 'how to setup java environment?'.

I head over to Oracle. I create an account. I download Java 8. I download Eclipse. I add a path
for Java in my /.bash_profile path. I Then go back to youtube and I find a video on how to run "hello world"
in Java. After I successfully compile my Java file and run it. I go back to github for the
private api. I then read the Read Me again. I decide, ok I need to go to youtube and figure out how to
get Gradle. The videos were too long and complicated. I decided I needed a better solution. I'm sure Gradle is an excellent way to manage dependencies in the system. However, I am not a Java developer, I only need
these packages in this one script I am writing. So I head over to Youtube. I search: 'how do I add Jar file IN Eclipse'. Eureka, I get many hits. I look at 2 videos to see if they have anything in common, and loe and behold there are commonalities in how to install. So I pick the shortest video and begin to follow the
process to add my first JAR file.

No issue there. Then I import the file into my hello world script. Error after error begins to precede.
I do not know JAVA so now I am presented with a choice - "Do I continue?", or "Do I stop? (Classic new developer issue). If you know anything about development, you learn very quickly, errors are your friend. I go forward to StackOverflow with each error. After enough errors, I start to get a sense of what the errors are generally indicating. Even if the language of the error message does not make sense. Which is especially true of Java, because the Eclipse IDE throws errors for every little thing.

I look at the read me and copy and paste the example script into my Java file.

ok, but what is this error:
"Private API cannot be resolved to a type."

What does that mean? Luckily for me, Eclipse is a blessing because if you hover over the error it is presenting, it pretty much gives you suggestions.I figured ok let's import this class. I clicked the import and then the error went away. Eureka, it worked. I followed this pattern of importing class after class, adding JAR after JAR until the API began working for me.

I learned fundamental things: how to setup a java dev environment, how to set a variable, how to include a jar,
how to start a loop, how to import classes. These are rudimentary, but critical dev pain points.

My biggest takeaway from this experience was the realization that I could start from the end to learn the components of Java. This is just one language, but it is quite amazing that in only 10 hours I was able to become comfortable with looking at and writing Java. You could go to school forever and never become comfortable and I was able to pull it off in a matter of a few super focused hours, with the simple direction of having a problem I wanted/needed to solve. Traditionally, we are taught component by component and then we are off to the races. But this experience taught me something very interesting. That learning component by component is cool, but navigating chaos (unfamiliar territory) is faster and more efficient if you're aim is to learn. So I just wanted to share that takeaway. 
