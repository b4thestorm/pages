---
layout: post
title: 'Scaling Web Applications - Part 3 (Scaling Asynchronous Process)'
categories: programming
permalink: /scale-series-pt3
---


Scaling via Asynchronous processing. In synchronous processing, execution happens one after another. 
This is called blocking execution.

For example: if you need to send an email and it takes 100ms and you need to update a database and it takes 
20ms. Overall, the execution time would be 120ms. 

In asynchronous processing, callers do not wait for execution to finish to begin the next execution. This is 
known as non blocking execution. 

Asynchronous processing doesn't have to strictly be fire and forget. The results of asynchronous calls can be
consumed via callbacks. 

Callbacks are a construct of asynchronous programming, where a caller is not blocked while waiting on the result 
of an operation. It provides a way to be notified once the operation is finished. It's a function that gets invoked
when a call completes. It allows slow tasks to execute in the background parallel to other operations. 

Another tool enabling asynchronous processing is message queues. Producers on it's own thread or in its own  process, 
will send messages , tasks to a queue and a consumer would be responsible for picking up and processing the message off 
of a queue. 

A benefit of seperation of processes is that no blocking will occur. Producers do not need to wait on consumers to add 
more items to the queue. This makes work fast because it can now scale independently. 

Producers could be implemented in any technology as long as it can locate the message qeue and add a valid message to it 
in either JSON or XML. XML and JSON are platform agnostic data types. 

Brokers usually do not require any custom code, they mostly need configuration. (CELERY i see you <3). Message brokers are
optimized for high concurrency and high throughput. 

Adding messages also require consuming messages. There are 2 tyoes of consumption. 

<strong>Cron Type Consumer</strong>:
pull model where a consumer connects periodically to a queue. 

<strong>Daemon Type Consumer</strong>:
push model where a consumer is permanently connected to a queue and is always looking for a message to be pushed to it. 

<strong>Direct Worker Queue Method</strong>: messages are coded directly to a queue. Each message is routed to one consumer. 
<strong>PubSub Method</strong>: producers publish mesages to a topic. Messages are then cloned to each consumer that is 
subscribed to the topic. pub/sub is a general pattern known as an Observer. 

<strong>Routing</strong>
Some message brokers may support custom routing rules. Where a consumer can decide where a message can be routed to in it's queue. 

<strong>Example<strong>:
You can create a logger queue that accepts all log messages and an alert qeueu that recieves copies of all critical errors and all
severity level 1 support tickets. 

The purpose of custom routing is to increase fexibility of what message, consumers can subscribe to. 
(There may be some common routing patterns that companies out there may follow. I have to research more about this.)

<strong>Different Protocols for handling messages</strong>

A message protocol defines how client libraries can connect to a message broker and how messages are transmitted. 
Protocols can be lightweight or highly detailed. 

<strong>AMQP</strong> - advanced messaging queueing protocol - this is industry standard. It offers reliables messaging, delivery guarantees, transactions and more. 

<strong>STOMP</strong>- streaming text oriented messaging protocol - lightweight messaging protocol, low overhead. But not standardized. Less interoperability. 

<strong>JMS</strong>- java messaging service 

Message queue systems are usually accessible from both front end and backend systems. 
You usually produce messages from the frontend and then consume them on the backend. It is not limited to just this workflow however. 

<strong>Queue Workers</strong>:
Servers solely dedicated to message consuming. It's whole job is to perform work based on queue messages. 
Queue Worker machines should be stateless. They should get all of their data from the Queue and external persistence stores. This way 
machine failures won't be an issue. 

If your queue worker is stateless you can easily scale it by adding more queue workers machines!! - Increase Throughput!

<strong>Message Brokers</strong>: 
Tools like Celery. usually provide some built in functionality for horizontal scaling. Each broker however has it's own gotchas and scalibility
limitations. There are definitely limitations on the total throughput of a single queue. As long as your application is able to distribute messages across 
multiple queues using simple application level sharding, you should be able to scale message brokers horizonally by simply adding more message broker servers. 


If you require throughput of thousands or tens of thousands of messages per second, RabbitMQ, ActiveMQ should work fine out of the box. If you need 
hundreds of thoudsands per second, you will likely need to add custom sharding mechanisms into your application. 

Never assume infinite scalability. Before committing to a messaging solution always check current pricing, required infrastructure and out of the box scalbility
guarantees. 

In order to decide which broker to choose and whether you really have to worry about the brokers scalability in the first place, prepare the following metrics
for your application: 

1. number of messages published per second
2. Average message size
3. number of messages consumed per second
4. number of concurrent publishers
5. number of concurrent consumers 
6. if message persistence is needed?
7. if message acknowledgement is needed? 


With these metrics, you  should be able to have an informed conversation to discuss your scalability needs with vendors. 

<strong>Benefits of Message Queues</strong>

• Enables Asynchronous processing

• Easier scalability 

• Evens out traffic spikes 

• Isolates failures and self healing 

• Message  Queues give the ability to defer processing of time consuming tasks. 

• Low value processing on the critical path 

Resource intensive work - most cpu or i/o hungry processing like transcoding video, resizing images and building PDF's become possible to do with Message queues. 

Overall if you need to scale out to do a high amount of processing, then you can enable this with tools like Message Queues. 
There is alot more to know about message queues, but this is a brief overview on some benefits an engineer may gain by adding a message Queue or Broker to their system. 







