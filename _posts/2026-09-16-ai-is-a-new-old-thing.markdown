---
layout: post
title: "AI is the new coworker"
categories: programming
permalink: /ai-and-me
---

Recently, I was given a task in engineering by my friend, a staff-level CTO hailing from UPenn, the Recurse Center, and Startup La La Land. He introduced me to my first senior-level engineering task, and his requirement for me was that I use AI to do it. As I've always been told, engineering levels are determined through impact. Working alongside a staff-level CTO will quickly introduce you to impact. TLDR: Levels are still determined by impact, even in this AI era.



### What's Impact?

Impact is where a change in an organization's business offering gets realized through a change in code. A change in a button's color is not impactful. Yes, it has an effect on a business, but it is not statistically meaningful. A client may see the change and think, ok that's different. But it hardly ups the bottom line.

One example of a statistically meaningful change that would come from a button could be, maybe, Amazon's one-click buy button. The engineers who worked on that button may have needed to make a series of changes to the Data Model Layer, the Order Checkout process, the way that payments resolve themselves, the way shipping locations are sensibly discovered for optimal time pricing, etc. All of this so that when a client clicks the one-click buy button, they can easily place an order. It took many engineers and many business people to reimagine the architecture of how the Amazon system used users' data for ordering. The result of a seemingly simple change in UI, a 'BUTTON', was that Amazon's system dropped the friction of intent to purchase so low that the whole e-commerce industry forever changed its way of thinking about payments. This is what you would call Impact.


### You didn't make Amazon's one-click buy button, so what's it to you?

No, I didn't, but I was introduced to my first architectural change that affected the way a business presented itself. And it was pure genius. Formerly, I was effectively a task rabbit on software. I would focus on smaller things, like: here is some data, build a table, build this form, here is an integration need, build it. Integrations are actually big business offerings, but I digress. I was far removed from more business bottom-line kind of tasks such as this one I'm going to explain. Formerly, refactoring to me was solely a job that we used to increase the maintainability of the software we built. The algorithm was simple: spot some complexity, iron it out. In my last software engineering task, I was tasked with changing the way clients can relate to practices in this system. It was genius, and I can't go at length about it, but I have a few takeaways that showed me how refactoring architectural changes can deeply impact a business quietly and all at once. 



### Here is my quick drive-through of a major architectural change:

•  Updated the client table to relate a single user to multiple clients - no change observed client side. 

•  Changed the way clients were found throughout the system by wrapping a client search in a function - no change observed client-side.

•  Pass in default arguments to the client search functions to keep client attribution untouched - no change observed client side.

•  Changed the api to include extra data to hydrate the client side - no change observed client side. - All stacked PR's

•  Added a flag, client-side, that would tell the backend, hey, start returning the specific client. - Stacked PR's

Did a few more PR's but this was all merged, and there was no observed changes client-side on any of this.
Won't give all the secret sauce here, but the point is, there was a lot of refactoring going on. Updating old access patterns to refab them with extra data by default, where at some point later in development, new data was sent via the frontend, middleware and other inputs such that it gave the system the ability to relate single users with multiple clients relating them to multiple practices. It was a real update that in a past scenario, would've taken many months and multiple people, whereas in this new day, it only took 4 weeks and one person.


### Ok cool, this is all good, but what does AI have to do with all this?

I made all of these changes, and none of it was done by hand. An AI named Claude Opus 4.5 did it all. I would meticulously read this design spec. Envision what I thought it would do, write a few prompts to check that it would do what I thought, attempt to understand what it was going to do, and then kick it off. I let it go off into the source code and make all of these edits. One slice of work would go off and edit 85 call sites and 21 files in 32 minutes. It would use the Harness (Context) that the codebase was wrapped in in-order to tell the AI where to make a change and how to make the change. It would adhere to test gates before it would bring anything back to me. And it had a very meticulously built-out CI/CD pipeline it would go through before anything could be pushed to GitHub.


I spent a large bulk of my time reviewing code and testing that things actually worked when the AI brought back its implementation. If you've read any of my other writings, you would know that I have never used AI in my work before this. I was a mid-level developer who wrote all of my code by hand. I was struggling with edge cases, trying not to get caught by code exceptions that a user of my code would hit randomly. Very much focused on the craft of hand-engineering code. I was dreaming silently of this day, when I would get to the point where someone would call me a senior engineer. 


### Ok, so now what?

I'm going along with the industry on this one. Hand engineering is probably going to go cold in a short while (if it hasn't already). The work of engineering has moved up an abstraction layer. It's all high-level abstractions now, because English or whatever language a human speaks is the new code. I just finished a BA in Computer Science and, to be honest, none of it was about code.

Sure, it taught about code and edge cases, but this was and is really all just a means to an end. We as humans want what code can give us, not the code in and of itself. We want rate limiters, we want idempotency, we want servers, we want subdomains, we want DNS servers, we want DKIM security, we want k-nearest neighbor algorithm effects. The work going into all of that is not what we want; we just want the effects. And that's what Comp Sci actually teaches: give me the abstraction and make it as optimized as possible. Notice what you need to notice and give me the end product.

Surprisingly, this was always the focus of business too. Business people do not care about the product's implementation; they only care about the product. And now they just get their products as fast as you can write English prose. It's actually pretty insane, to be honest, because now the speed of implementation is giving us all whiplash. Even though work is done faster now, I don't think speed is what people should be optimizing on. Because what you gain in implementation actually gets drained in review. 

Think about it. What happens when you don't need to think about speed anymore? You have to now make sure what you get back from the AI is actually what you want to put back into your product. That's not easy to discern, IMO. Because it's still requires discovery and reasoning.
Sure, a test can catch a regression, and a well-thought-out test bed can make sure a product doesn't fall in a goofy way when you go to merge. AI is not infallible, and it can make mistakes. I think it's on the human guiding it to actually sign off and own what the AI decides should be the implementation step. Like the code itself, the way that it works should be the human's job still. Anthropic at this moment and I also believe Spotify are having a fully autonomous workforce of agents building and also auto deploying 
to it's products. And those are incredibly complex products, so maybe I'm bugging. We will see. However, notwithstanding all the agent mania, There was a real person always in 
charge of shipping the product.

### Who did this before? The senior engineers and the Engineering managers.

They always did this. Nothing could make it into any product without the engineering manager signing off on it. One wrong LGTM today could be a client yelling at you tomorrow. So stress and paranoia was always present in the engineer's mind, about what looks good to ship. It's an insane premise to think that anyone would concede that AI eliminates this feeling. To me, I call bullshit. I think AI is amazing, and to be honest, I think it's an Alien technology and a business playing-field leveler, and I think people taking it to the extreme will eventually get the AGI they are yearning for. But for now, it's still a human's mind that will own what the AI puts out. It's not exactly a free lunch scenario. We still gotta be paranoid.   

I did alot more, but this is my engineering blog. I talk about engineering here. If you like this post, email me: arnoldsander@gmail.com 

P.S: I’m looking for customer support engineering jobs now. AI is dope, but I love humans and interacting with them mostly.   

I had been originally tasked with doing Customer Support Engineering. Which was simply to investigate issues and come up with 
root cause analysis,and circle back with customers with either a fix or set expectations for when they can expect a fix.
I worked alongside an AI that wouldb also pull tickets from the exact same linear log that I would, and then go on and write it's
own fix for those issues, when it could and defer to me when it couldn't. The only thing the AI didn't do that I would do, would
be to respond to clients as a human and hop on calls with them to figure out exactly what they were experiencing. But I would 
often go and see that the AI I was working with, was actually resolving issues with high precision. So maybe this job may go
the way of the dinosaurs too, but.. For now I still trust that humans can rule the human to human part of things. Even if it's 
AI assisted. 






