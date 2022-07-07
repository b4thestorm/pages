---
layout: post
title: 'features from start to finish'
categories: musings
permalink: /features-from-start-to-finish
description: learning software engineering at any cost
---

Normally when you pick a ticket, the first step is ticket estimation.  Ticket estimation's
will vary based on your experience.

Grabbing a new ticket
---------------------

When picking it up, you should get clarity on what the context of the ticket is about.
First step would be to clarify with your client/Pm, what is required from the ticket.
What does the final implementation of the ticket look like. If you have a
design, design to spec. If not, get a design. Demand one (the alternative may burn you.)

There are many different configurations of difficulties that can arise when dealing with
new tickets.

Some that come to mind:
• your environment may not be setup for the conditions the ticket
requires.
• you are not familiar with the technology the ticket requires

Some of these things you will know before you pick up the ticket. Some of these things
will reveal themselves, after you have started the ticket. These and a host of other
considerations should be factored into your estimation of a new ticket. If you know
ahead of time what is required from a ticket, you can estimate n + 1 points to handle the
ticket. Where n is your first guess at an estimation. This may be survivors bias
but I'd say, if you know the work involved in a ticket but it's dealing with front end
and back end, then plan for chaos. I would say over estimate the ticket, even if you think
it'd be simple. Better to be safe, than sorry.

Starting the Work
-----------------
There is a big difference in the estimation of time required to complete a feature, if it's
your show, vs. if it's not. If it's your show, you get to choose the architecture and
tools required. You set the standards. But if it's not your show, then you need to work
with the preset standards. If you have to have specific standards in mind, then you should
look at the project with a eye for patterns. Patterns of how things are already implemented.
This will actually add some time to the estimation, because unless you are already familiar
with the patterns, you will likely have to clean it up, after you make it work.

That being said, this attention to already implemented patterns helps keep consistency.
Which leads to better maintenance over a projects lifespan. Deviations from standards
should only happen if there is no other choice.

After you get a mind for what should be in a project, then you can begin your work.
One thing I didn't mention was that if there is a senior on the project with you, then a
good life hack you should consider, would be to discuss a feature implementation
before even looking at any code. Having a clear direction of what you want to potentially do,
can help shave time off the completion of a feature. The alternative choice would be to
imagine your own implementation. This is fun (trust me, figuring it out is amazing) but
if you don't know what could potentially bite you down the road, you may end up doing
double work. Bad architectural decisions can lead you into a wall and become hard to
maintain. So you should seek to plan ahead in the beginning.

Completing Work
---------------
Work complete is a special thing. Because ideally, you would like your work to work
across multiple different environments as expected. If on a large project, there is a
pipeline for deployments across different environments (staging, production).  You naturally
will feel complete after deploying to a staging server. But you have to really be vigilante
that it works on a staging server. You may feel that it works after working on staging and
then deploying it to production. But again, you need to check that it works on production.
If you make something work in one environment, it's not likely that it will automatically work
in another. So you have to make sure that it works in each environment as you deploy.
