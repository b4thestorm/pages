---
layout: post
title: 'Writing secure methods'
categories: programming
permalink: /secure-programs
---

Writing code that is secure.

{% highlight python %}
def add_message(request, level, message, extra_tags="", fail_silently=False):
    """
    Attempt to add a message to the request using the 'messages' app.
    """
    try:
        messages = request._messages
    except AttributeError:
        if not hasattr(request, "META"):
            raise TypeError(
                "add_message() argument must be an HttpRequest object, not "
                "'%s'." % request.__class__.__name__
            )
        if not fail_silently:
            raise MessageFailure(
                "You cannot add messages without installing "
                "django.contrib.messages.middleware.MessageMiddleware"
            )
    else:
        return messages.add(level, message, extra_tags)
{% endhighlight %}

What makes this piece of code secure. 

It's a simple thing. This code is secure because it acknowledges the possibility of a failure.

It then handles different scenarios of the specific failure types. checkout lines 8-17.

The signature of this method accepts 4 parameters and establishes two default parameter arguments. 

It properly documents what the method is used for. checkout lines 2-4.

It then properly addresses a possible failure by simply utilizing a Try/Except block. checkout lines 5-7.

The try tells the program, "hey, this may or may not work, but lets try it."
The except tells the program, "It failed in this way, and then runs code normally to alert the system admins".
The else in this case, runs the code we know would not fail but is dependent on the code in the try block.

The alternative would be to do this: 

{% highlight python %}
def add_message(request, level, message, extra_tags="", fail_silently=False):
    """
    Attempt to add a message to the request using the 'messages' app.
    """
    try:
        messages = request._messages
        return messages.add(level, message, extra_tags)
    except AttributeError:
            ...
{% endhighlight%}


And while this would work, it reads in a confusing way. You can't tell which part of the try block is the dangerous
code. This particular style of structuring the method in the try/except/else block is called look before you leap. 
It's a good programming practice to enhance readability and allow maintainers to trace control flow more reliably.

Lastly, checkout the raise method calls. Those are really good for enhancing observability and handling unexpected 
values passed to the method. It halts the function and passes some message to the top level of the program with information about what has occurred. Which is good for observability. Say you wrote this instead:

{% highlight python %}
def add_message(request, level, message, extra_tags="", fail_silently=False):
    """
    Attempt to add a message to the request using the 'messages' app.
    """
    try:
        messages = request._messages
        return messages.add(level, message, extra_tags)
    except AttributeError:
        if not hasattr(request, "META"):
            print(f"add_message() argument must be an HttpRequest object, not "${request.__class__.__name__}")
{% endhighlight%}

While this also works, it has the downside of not reporting anything to the error logs for your application. Imagine this error keeps happening, it'll be hard to find this in your server logs, which would be printed to STDOUT. 
You'll have to go splunking to find this message in your server logs.

All in all, don't write this:
{% highlight python %}
def add_message(request, level, message, extra_tags="", fail_silently=False):
    try:
        messages = request._messages
        return messages.add(level, message, extra_tags)
    except AttributeError:
        if not hasattr(request, "META"):
            print(f"add_message() argument must be an HttpRequest object, not {request.__class__.__name__}")
        if not fail_silently:
            print(f"You cannot add messages without installing django.contrib.messages.middleware.MessageMiddleware")
{% endhighlight%}

Aim to write this: 

{% highlight python %}
def add_message(request, level, message, extra_tags="", fail_silently=False):
    """
    Attempt to add a message to the request using the 'messages' app.
    """
    try:
        messages = request._messages
    except AttributeError:
        if not hasattr(request, "META"):
            raise TypeError(
                "add_message() argument must be an HttpRequest object, not "
                "'%s'." % request.__class__.__name__
            )
        if not fail_silently:
            raise MessageFailure(
                "You cannot add messages without installing "
                "django.contrib.messages.middleware.MessageMiddleware"
            )
    else:
        return messages.add(level, message, extra_tags)
{% endhighlight%}

This promotes reliability, observability and maintainability. The latter does not.