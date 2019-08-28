---
layout: post
title: 'Ruby Clone Issue'
categories: programming
permalink: /ruby-clone-issue
description: Deep cloning objects in ruby
---

Today, I was tasked with a problem. The challenge proposed to me was to transpose a matrix in ruby. Ruby comes with a standard library, which includes a Matrix class. One of the methods in the Matrix class is the Matrix#transpose method. I had to avoid using that method, so the following details some of the issue I ran across when dealing with this problem.

### What is a Matrix:
<img src="{{site.baseurl}}/assets/images/1_R7IahWysmNvBf37a96c7Dg.gif">


Alright, the above is a glamorous picture of a Matrix.

### How do you transpose a Matrix:
<img src="{{site.baseurl}}/assets/images/1_eUxasDyZ9SegXzXEFjD6Sw.png">

A matrix is transposed when the row becomes the columns and the columns become the rows.

### Performing the transpose method in Ruby

Naturally, you will have to represent a matrix in ruby as an array of arrays. You navigate the matrix, like this:
```ruby
matrix[row_index][column_index]
```

Second you create a copy of the matrix:
```ruby
    new_matrix = matrix.dup
```

Third, you will have to iterate through the Matrix. This calls for us to nest our iteration blocks. Then access the copy matrix with the index numbers of the columns and rows. If all goes well, we will see that it does not work.
<img src="{{site.baseurl}}/assets/images/1_-Kb8W8CokhFgmVrsvSmhzA.png">

<img src="{{ site.baseurl}}/assets/images/1_MuA_3c2TnCS2cBWholJr_A.png">


As you can see, something funky is going on. Seems like it worked for the first row and then started overwriting and deleting values and returning a new Matrix. This is caused by the dup method and how it functions. Dup creates a shallow copy of an object. This means that if you have a nested object, such as an array of arrays. The outside arrays will be proper copy’s but the objects within the arrays will reference the same objects in memory as the original objects. Thus, you will get the above: erroneous output.

The answer to the issue of the shallowly copied object, is to create a deep copy of the object. In this case, you can create a deep copy, by iterating through the array of arrays and dup’ing each object and returning a new array of arrays with the copied objects. See the revision here:

<img src="{{site.baseurl}}/assets/images/1_A2hAziLYPTweqdtd16FaBw.png">

Running this will give you the properly transposed matrix.
<img src="{{site.baseurl}}/assets/images/1_GHMOKkBwkHFCT4fm5MI52Q.png">

Moral of the story, use dup , and clone with caution.
