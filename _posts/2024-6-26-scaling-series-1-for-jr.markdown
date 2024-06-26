---
layout: post
title: 'Scaling Web Applications - Part 1 Notes'
categories: programming
permalink: /scale-series-pt1
---

Note, this is the blog post I needed for sooo long now. So I have to write it for my younger self. This post will 
detail the notes I've taken on a seriously awesome book called "Scalability for Startup Engineers". After reading this 
first chapters notes, you could do well to stroll over to amazon and simply buy the man's masterworks. I want you 
to know, I wrote this blog post as a labor of love, to both you and I. I was on a train going back and forth for over 
4 hours, encoding and cramming this information into the 3lb grey matter in my head. This is part 1, I plan on doing 
4 more deep dives. 

<strong>What is Scalability?</strong>
Scalability means to adjust the capacity of your system to cost efficiently fulfill demands. 
When scaling you want to handle more users, clients, devices, data, transactions or requests without effecting user experience.

• Scalability means to be able to scale up, or scale down. Scale up to increase capacity to handle the above. You scale down 
to avoid wasting resources and save money where necessary. 

<strong>Scaling normally takes into account 3 dimensions:</strong>

<strong>• to Handle more data </strong>
1.  data needs to be searched efficiently (imagine you make a request and it returns everything in your database just to give you one row of data.)

2.  data needs to be stored to disk (imagine it takes 12 mins to write form data into your db)

3.  data need  to be read from disk 

<strong>• to handle big concurrency demands</strong>
    
1.  consider how many customers, devices etc can make a successful request to your application (imagine a server handling 100 connections only, but you have 200 customers requesting.)

<strong>• to handle high interactions</strong>

1.  rates of interactions between your system and app users/clients. 


<strong>PERFORMANCE VS SCALABILITY</strong>

performance is how long something takes to occur.
scalability refers to how much resources can be grown or shrunk. 

If you have 100 users and each user is sending a request every 5 seconds, then you have a throughput  of 20 requests per second. Basically you divide 100 requests /5 seconds. This means your server 
would be handling 20 requests per second.

and when you know this, you want to consider the performance of your requests.
• A performance question you would ask is:  How much time would it take to serve each request?

If you want to scale to more requests per second, then you want to ask some scaling questions.
• How many requests can you process before user experience is negatively impacted. 
• How many more users can you handle?

To answer these questions, you will need to consider that perhaps your system has some architectural design limitations on it. 

<strong>Here is a typical single server setup: </strong>

Your entire app rus on a single server - (this means all traffic for all user requests is handled by one single server)
This is typically a setup for a small blog (insert my blog), product catalogs, self serve web applications, your dev server etc. 

A host provider may make available a VPS - Virtual Private Server (think Amazon EC2 instance, digital ocean droplet). 
VPNS are hosted with other VPS's on a single shared host machine. (VPS is a digital representation of a physical server, its not the full rack itself.)
These are good to start with. They can be cheap and can be upgraded in terms of RAM and CPU at anytime, with the click of a button. 

low traffic sites can work well with a single server setup.
high traffice sites can not work well with a single server setup.

Reasons: 
user base grows, more traffic comes, more concurrent requests need to be handled by the server. 
This means there will be less available cpu resources, less ram, less I/O (ngl, I'm gonna have to learn more about I/O before I can go forward on talking about it)

<strong>WAYS YOU CAN SCALE:</strong>

<strong>• Vertical Scaling</strong>
Limits are reached because of traffic increases, data processes grows, concurrency levels become too much. 
Vertical scaling means you upgrade hardware. This is easy to do because you don't have to consider architectural changes.

You can increase I/O capacity of your DB by adding a RAID array server.
As per the author:  Main bottlenecks in a DB are I/O throughput, disk saturation. 
You can spread reads and writes through more devices by adding more RAID Array servers. Turn that 🐛 into a 🚀.  
Improve I/O access time by adding SSD drives. 
Reduce I/O operations by increasing RAM.
Improve network throughput (remember this means roughly, requests per second) by upgrading your network connection. 
You can do all of this by switching to higher power servers with more processors or virtual cores. The more CPU's and Threads you add
the more processes that can be executing at the same time.

All of this can become really expensive really fast. 😮‍💨💰💰
Vertical scaling is a good option for short term fixes or small applications. Costs are high but it doesn't require rearchitecting. 
Vertical scaling has some hard physical limits that can go beyond costs. Meaning you can reach a limit in adding high powered servers where it will not add more 
capacity to handle your application. Lock contention in databases are one of those instances. (Lock contention means you me and your grandma are all fighting to
update the same row in your db.)

<strong>• Isolation of Services</strong>
This is where you move each service into it's own servers. 
This is a good start at adding more capacity to handle scaling, however it's not great because it's hard to grow. 


<strong>• Horizontal</strong>
This is a bit hard to explain as neatly as Vertical scaling. I'd say it's a combination of both vertical scaling and Isolating services, where you add more servers, but these 
things are highly specialized and optimized to perform very specific functions that would give your application more scale.

First Tool:  
    • CDN'S - a cdn is hosted service that takes care of global distribution of static files like images, javascript, css and videos. 
    A client will request the contents from a CDN before your application and if the CDN doesn't have the content, it will request it from your servers and then it will cache the response. 

    CDN's are globally available normally. It reduces load on your servers. It also reduces the number of web servers you need because content will come from the CDN and not your servers.
    With CDN's they handle the optimal performance of handling content request. This frees you (the developer) up, by allowing you to scale using a third party system. This means you can handle 
    more requests. 

Systems that are truly horizontal do not need strong servers. But it requires significant development effort (think AWS Lambda, AWS DYNAMODB, CELERY, Temporal etc) you have to become proficient with 
setting these things up, to get the most out of them. You will kind of run each service on it's own servers but you can get by with cheap commodity servers. 

A bonus with horizontal scaling is that you will not reach a hard limit on scalability, like you can with vertical scaling. 
With horizontal scaling you avoid high prices of buying more hardware. You can opt to use VPS's and add more compute, then you pay for the compute and as you scale the costs can go up and then down.

Second Tool: 
    • Round Robin DNS server feature. This can enable a single domain to map to any number of IP Addresses. The IP Addresses map to single machines and there can be many of them all connected to a single domain. 

Third Tool:
    Once you have a global audience, you can't host your application from a single data center. This will cause clients around the Planet Earth to have a downgraded user experience.
    Introducing the GeoDNS service. Its a DNS service that enables domain names to be resolved on a location basis. A benefit of having multiple data centers handling requests is redundancy.
    If one goes down, the traffic can be routed to another, to keep service going everywhere. 💸💸💸

    ex:  You can be in Europe and request Yahoo, and it's GeoDNS will route your requests to a datacenter near you in Europe. If you are in Africa and request Yahoo, it can know this and route your requests to 
    a datacenter in Africa. Everyone will have low latency requests, and a great user experience because if the requests is handled closer, it will finish responding faster. 


Fourth Tool: 
   On the topic of reducing network latency, you can throw in a Edge Cache server for a little razzle dazzle. 
   This server allows you to reduce network latency on a global scale. Edge cache servers act as reverse proxy server caching entire pages. 
   An EDGE cache server is a HTTP cache server located near a customer, allowing a customer to partically cache the http traffic. 
   Requests go to the edge cache server , the server can decide to serve the full page from cache, or make background requests to your server
   to serve missing pieces of a page, or it can pass the full requests back to your servers to make sure your server handles the full resource
   distribution as it may deem the page request uncacheable.


The flow at this point is: A request can go to a GeoDNS server, it will resolve the domain to an IP Address of a Edge Cache Server located near rhe customer and the main  data center 
can resolve resources from the closest Edge Cache Server to the customer. By having data centers close to your customers, you save on latency and network costs. 

The front line, these tools are considered the FrontLine and they normally shouldnt contain business logic. Their main purpose is to increase capacity and scalability. 

These Front line resources can be load balancers, CDN's and or reverse proxy servers. 

Aload balancer is a software component, or hardware that distributes traffic to a single IP Address over multiple servers. And this allows the dynamic adddition or removal of machines. 

The second layer is the web application layer. Web App servers, responsible for generating the actual html of the app and handling client requests. It handles user interactions, by pushing business logic
to web services. This allows more reuse and reduce the number of changes needed to your app. 
Web application servers should be stateless. This makes it easier to scale. Remember scale means to grow or shrink resources. If your don't have to manage state, its easier to add new app servers.
Scaling could be as simple as adding more load balancers to a load balancer pool. 

Frontend servers, should be simple and free of application logic. This is to decouple the presentation layer from the business logic. This means you can have a web catalog service and a user profile service 
and they can specialize in their own functionality and be scaled seperately. Remember that scaling means to grow or shrink resources. 

This was my favorite part of this whole thing. I have an interest in using Queues in the background, so I give you this with love. 

Since frontend should be stateless, they are often deployed with additional components. These could be object caches and message queues. 
MESSAGE QUEUES are used to postpone some of the processing to later stages and to pass work off to queue worker machines. 
Web applications sometimes have clusters of batch processing servers or jobs running on schedule. These guys are not responsible for providing responses to client requests. 
They are offline job processing servers providing features like asynchronous notifications, sending emails, order fulfillment and other high latency functions. 

This layered structure to system design is supposed to use faster components to support the function of slower components. 

Adding new technology increases complexity and also maintenance costs. Application architecture should not revolve around a framework or any particular technology. 

OK so thats pretty much it for me. Hope this helps you understand how to take your small server setup and expand it vertically or horizontally to support more clients using your awesome technology solution. 
Stay Tuned for my next blog post. It will be a continuation of scaling methods.










