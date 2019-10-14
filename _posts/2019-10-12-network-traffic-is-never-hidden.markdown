---
layout: post
title: 'Inspecting network traffic'
categories: networking
permalink: /network-traffic
description: Inspecting router activity
---

Today I had a question that needed some answering. I needed to use a gem to login to an
account so that I could do some work automatically. I git cloned the gem - [instabot](https://github.com/eVanilla/instabot.rb).
I was excited to be using it. I immediately created a test file, hopped into the terminal
bundle installed, required it in my test file and was off to a great start.

Immediately after running I was informed I was logged in (Success 200). Then I was informed
that I had 404'd and the gem quit. Later I'd find out, I passed the wrong type of data
into the method (perhaps they should detect that and provide an error). However, the HTTP
status was 404. Thats easy to understand, the wrong url was requested. I jumped into the Gem and
located this line:
```ruby
  url = "https://www.instagram.com/web/friendships/#{user_id}/follow/"
```

Ok, if this is giving me a 404, then what url should I be using? I asked myself the question - what url is the mobile instagram app using? Wait up, how do you find out the url that a mobile app is requesting? No idea.
But the question is clear so perhaps google could help. I learned about Man in the Middle. I look at my wifi router, then find the url to the Router logs. I login to Verizon's router gateway. I see a bunch of data being processed using something called DHCP. Whats that? I see a bunch of ip addresses accessing and being accessed by every device on my network - is this what the internet is? Ultimately, everything was gibberish.

Because it was gibberish I needed to try again. I do a search and find some information about Proxy servers. I install a program in my terminal called [mitmproxy](https://mitmproxy.org/). I run `iconfig` and find my router's ip address. I go to my iphone and then I click on my homes wifi network (I could be anywhere - a starbucks or other public place) and then I click manual and plug in the router address and port I will be listening on.
<img src="https://b4thestorm.github.io/pages/assets/images/IMG_5916.jpeg">
I open mitmproxy, and then visit mitm.it/ I click on apple. Walla, I am able to download a CA cert. Install it on my phone, all of a sudden my browsing log for every app I am using on my phone is visible on my computer. What??
<img src="https://b4thestorm.github.io/pages/assets/images/proxy_request_urls.png">

Yup, I intercepted my mobile phones url requests to my router through a Proxy server. I am specifically
looking for one url. I start opening up apps on my phone and Boom, my internet goes down. Later I find out, not every site is blocked, what is going on?

The CA cert is not being accepted everywhere. Essentially my clients request is being hijacked by
the proxy server and it is sending out a ca cert that is not accepted everywhere. The security measurement
is happening on every large and highly populated site. Facebook, Google, Instagram, Yahoo. It's called
Certificate Pinning. It's a rule baked into these apps, that says, I only accept one type of CA CERT for this device.
Any type other than what I expect, will not be granted access. So ultimately, I didn't get to see the
url that I was looking for. But, in the process, I learned that if you go into a cafe and you are connecting to
the wifi (someone else's router) without a VPN or Proxy Server, you will be wide open to get spyed on. PS, there are actually ways around certificate pinning.
