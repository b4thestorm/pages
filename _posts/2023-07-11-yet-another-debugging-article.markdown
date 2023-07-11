---
layout: post
title: 'yet another debugging article'
categories: programming
permalink: /yada
description: debugging mindset
---

The opinions expressed here are my own. No cats were hurt in the production of this article, just me. lol 

This article is about debugging. And I am going to say it's a general article and I have been meaning to
post this for a while. I wrote an article in this spirit some years ago, back when I was a young tech blogger. 
Last year when I was on staff slinging code for big money, I would have talks with my engineering manager every 
2 weeks. The talks were normally me expressing my wish to get better at general programming, and his responses 
were normally super insightful. Well one of those weeks, he expressed to me that the thing that was holding 
me back was my terrible debugging skills. He said his own skills heightened one day in an airport when he realized 
he didnt know how to setup his problems to define them to find solutions. He also said that one day, he doesn't know 
how, but I would probably realize how to setup and solve my own problems. 

Literally a few days later, after I was going to leave work for the day, he slacked me and asked if I had a minute. 
I said yes, and he asked me if I solved a bug I was working on, and I said no. He walked me through his mindset about 
debugging and asked me a question after he setup the problem scenario for me. I answered his question and after that, my eyes 
were open. A few months later and now I am writing this. 

If you've gotten this far, thanks for listening to my TED talk. And if you want more, here's the real article title:
<br>
<br>
<strong> How to DEFINE and SOLVE most problems on your own!</strong>

Ok so here's my speal: 
When you come to a point where you are faced with a problem, you have to get into the mindset that you've made some 
assumption some where and you need to figure it out and correct course. You have to understand very clearly for yourself 
and likely your mental sanity, that you generated the scenario in which the problem state exists. A problem I will loosely
define it as: "A state in which, what you would expect the behavior or look of something to be, is not the case.".
A problem manifests itself as a block in your expected experience. I posit here a way that you can percieve the block/problem 
you are facing, such that you can sanely identify and remove all blocks in your experience. 

Firstly, consider the block as a mysterious scenario. If you have a mystery before you, it is very helpful to define the
parameters of the mysterious scenario. That means it behooves you to take in account what you know to be the facts of the 
situation, and then you have to list creatively what you are assuming. If you are making assumptions, it is important 
that you list them out. Become clear about what your assumptions are. If you are using some tool that is making assumptions,
uncover what those assumptions are. Uncovering can be (reading github issues, reading documentation, reading the source code etc. ). Once you have made this list, consider this to be the state of the world. As in this list contains the details of the mysterious scenario or block. I find it helpful to think of this as your problem space. 

The next step is replicating the problem. In this step your goal is to be able to regenerate the mysterious scenario. 
That means that you want to be able to plainly say, "If I do X, I expect Y to occur". You can not solve the problem without a clear understanding of what the problem even is. Once you have a way to regenerate the problem, sit with it, ask questions about your original assumptions.  

```
EXAMPLE Problem Scenario:  
I want to send data to a specific url when I reroute, but for some reason I can't pass the arguments in a string. 
In this particular case, I am assuming that its important to send my data in a string. It could be 
likely that there is another way to achieve the same effect.

Where the effect I truly care about is that I want to have data sent or at some specific url when I go to it. 
```
 
It is very possible to define the "wrong assumptions implicit/explicit" and generate the right answer to the wrong question. So be careful. 

After you have regenerated the problem, I find it helpful to put in place a sanity check. Say to yourself, I have reduced this problem to this one expected thing. I can safely expect that if I do this one thing, then I can for sure expect this other thing to happen. And the thing that you expect to happen has to be dead simple. If that thing doesn't happen then, you have to make sure that your goal becomes to make your sanity check pass. Good thing to note here is that if your sanity check doesn't pass, it's a good sign you are on the right path. 

Once your sanity check passes, it's time to inspect/check your assumptions. This is in my view, the hardest part of problem 
solving. Because this is the part where you will find that you have gaps in your mental models. It can be disorienting to find that you do not understand the behavior of something. When you are faced with this, it often feels like the answer to your problems can exist in an infinite number of places. When you get to this part of the problem solving process, I find it 
helpful to plant three stakes in your mind. 

• I do not need to relearn everything , and if I feel that I need to relearn everything, its a sign i'm on the bad path. 
• I have already defined the problem space, my biggest task is to check my assumptions. (imagine turning rocks over)
• I am making assumptions, I made the problem, What am I assuming to make this problem. 

Keep in mind, it could be very likely that you are not actually FULLY listing your assumptions. Because you could in fact 
be in possession of a incomplete mental model of a problem. But this is very helpful to become aware of very quickly. Once you have this list its either time to uncover the problem or take a break. Because another aspect of problem solving is letting your unconscious mind do some of the work for you. Take a shower, walk through the park, take a smoke break, get a coffee, walk your dog, etc. A rested mind can generate some new assumptions and you can add those new ideas to your assumptions to check list. 

Ok thats it. Problem solving is hard, and kind of an art form. But it can be bested and as you solve more and more problems
you get an intuition , and eventually it becomes a pleasuable experience. You will eventually learn to love bugs. LOL alright
later love bugs. (pun intended).  