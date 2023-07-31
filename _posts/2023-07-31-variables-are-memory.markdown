---
layout: post
title: 'variables are memory'
categories: programming
permalink: /variables-are-memory
description: different way to percieve variables
---


So I've kind of always thought of variables as memory, but I always talked about it as:

<em><strong>"set x equal to y"</strong></em>. Or when I leveled up, I described it as <em><strong>"assign x equal to y"</strong></em>. 
These are faster shorthand ways to describe the process of setting a variable to some piece of memory. Recently in class, I got my head beat in when I said to my professor: <em><strong>"assign x equal to y"</strong></em>. He looked 
at me and said: 'not complete'. A variable is either referencing some object in memory or
a primitive data type. If it's referencing an object, its likely to reference a memory address
to some data you want and if its a primitive, it's the actual value you are looking for.
In either case, it's better to think of this as: <em><strong>"x references y"</strong></em>. This very simple statement 
is leading me to a more algorithmic future. Mostly because I am not expecting a variable 
to hold what I want at any point in time, but more than likely a pointer to what I really want. 

now why is this important to the tune of having to write a blog post about it. 
Well, because of this:

```ruby
x = new Object(attribute: 12) # (a new object is made in memory and x references to it at [memory address 1000])

y = x # (y references to [memory address 1000] -  which holds the object x is pointing to)

x = 'aaas' # (x is re-referenced to new memory address 1002 - which holds a string primitive)

y ---> # is still referencing memory address 1000 - which still holds the reference to the object

x ---> # is now referencing memory address 1002 - which holds the string

and then if you make y = null

y ----> # is now no longer referencing [memory address 1000 ] it now points to Null 

#However if you do something like:

ObjectSpace._id2ref([memory address 1000]) ---> memory address 1000 will still be holding Object(attribute: 12)
```

Essentially the variables are only pointing to spaces in memory. And when those references are removed, things are garbage collected. It is my belief that simply switching how you read this:

```ruby 
x = new Object(attribute: 12)
```

From saying, in human language: <em><strong>x is assigned to a new object.</strong></em>
To saying, in human language:  <em><strong>x references a new object.</strong></em>
Just that simple change in language can lead to saner coding experiences. 






