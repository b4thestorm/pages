---
layout: post
title: 'A retrospective on Problem Solving'
categories: musings
permalink: /retrospective-on-problem-solving
description: learning from hours of failure
---

The first thing that struck me as a developer earlier on in my career was stumbling
into blocks in development. Technical blocks present some of the most challenging times
for any developer. It's stressful, mentally. You can view some code and think you know
exactly how it should work, but when you run it, it perhaps does not run or runs in an
unexpected way. Then depending on your level of experience with the problem space, you
can either intuit a resolution quickly or you can toil with the unknown for an unknown
amount of time. And thus, resolution speed in these moments is what seperates the intermediates
from the seniors of the world. Senior's have a larger knowledge of problem spaces, whereas
intermediates are aware that they can come to a resolution but may not always have a
solution in hand.

For instance,  I was working on building a feature that spawns a window in js and waits
for the window to load and then manipulates the dom of the child window. The method of attack
I chose to use was a double nested setInterval and setTimeout combination. I figured that
I'd do my loop with the setInterval and then timeout in the child window. However this did not
work as expected. When the load happened in the child window and the dom emerged the popup I
had been waiting for, all of a sudden the window closed. I began thinking about the problem
I was experiencing and since I am not familiar with async programming in JS, I immediately
assumed that I was in over my head. About 6 hours into reading stack overflow questions/answers
and trying out answers in my code, I'd just about completely learned how to work with promises /
async/await. All of this learning and still an answer had not emerged. After reading my 51 answer
on stackoverflow, I had discovered my understanding of how setInterval and setTimeout was faulty.
Turns out, I had moved my manipulate the dom code in the setTimeout but after setTimeout ends
setInterval is run again. I simply needed to move my manipulate the dom code down by one line
out of the setTimeout function and then it would run. 6 hours of my life, gone because my
understanding of setTimout/ setInterval had not been up to part. This is how I initially wrote the
code.

```js
//wrong way to use setTimeout
var interval = setInterval(function(){
    //check that the button says 'Following'
     var grabButton = win.document.querySelector('button:hksud')

       var startTimeout= setTimeout(function(){
         win.document.querySelector("body > div.RnEpo.Yx5HN > div > div > div.mt3GC > button.aOOlW.-Cab_").click()
          alert('was successful');
       }, 100);
       clearTimeout(startTimeout)
     //moves on at 61secs
     win.location = base + handles[i];
     if (i++ > 2) {
       clearInterval(interval);
     }  
   }, 60000)
```

This is what worked for me in the end:

```js
//correct way to use setTimeout
var interval = setIntervalfunction(){
    //check that the button says 'Following'
     var grabButton = win.document.querySelector('button:hksud')

       var startTimeout= setTimeout(function(){
          alert('was successful');
       }, 100);
       clearTimeout(startTimeout)
    //clicks at 61 secs
     win.document.querySelector("body > div.RnEpo.Yx5HN > div > div > div.mt3GC > button.aOOlW.-Cab_").click()

     win.location = base + handles[i];
     if (i++ > 2) {
       clearInterval(interval);
     }
   }, 60000)
```

This blog post is actually my attempt on going over perhaps a system that I could employ for the
next time I face a technical block, where my knowledge of a system is simply not up to part. If there
was anything I would do differently the next time, I'd say there is probably a few takebacks in
researching the problem space that I'd want to consider doing next time. Here is my few items:

• define the effects I am witnessing

• clarify what I know 100% - in terms of all functions involved

• clarify what I do not know 100% - in terms of all functions involved

• get skeptical if I intuit that I will have to learn an entire new space in programming

• create a thought experiment replicating the success case of the function/method in question

• use pencil/paper to write down all solution attempts

• know that I will solve it - no matter what

I'll probably write more as I solve more and more problems. But the purpose of writing this
is to get a feel for the meta process that we go through while solving our way through these
development stumbling blocks. I think the process is probably 90% of problem solving in development
and the other 10% is domain specific knowledge.
