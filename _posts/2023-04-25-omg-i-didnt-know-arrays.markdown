---
layout: post
title: 'OMG I didnt know Arrays'
categories: musings
permalink: /OMG-I-didnt-know-Arrays
description: learning software engineering at any cost
---

This past year I went back to school to complete a Bachelors in computer science. Yesterday in my Intro to Programming class, my professor started chatting about Arrays. Personally, I've been dealing with Arrays in many languages for a number of years now. I really thought I had it all covered. It's a fundamental data type in most of the methods I write. But yesterday the professor schooled me about Arrays in Java. And let me know I have alot to learn about about Arrays. 

Arrays are generally speaking a 0 indexed data container. You would add things to an array 
and it would take the 0th position, and then the 1st position going to the kth position. If you want to get something out of an array, the access takes the form of array_name[index position]. All of this is true in Java, but Java works with arrays differently than I know other languages to work with them.

In Java, Arrays are instantiated by stating explicitly how many elements you would need to store inside of it. And you can't go over that limit without the JVM complaining that the maximum limit has been exceeded. To add more elements to it, you will need to resize the array or allocate more memory to the array before it overflows.

```
int [] container = new int[5];
container[2] = 3;
container[3] = 3;
container[4] = 3;
container[5] = 3; // this blows up

```

If you've worked with other languages, you may think this is strange behavior. I come from ruby and python and in those languages, you can add an infinite amount of items to an array. 
The need to resize an array is not necessary. However I have come to think that this is syntatic sugar that I've been grossly unaware of. I'm guessing that resizing of arrays does happen in those languages as well but its just abstracted away from the programmer. 

There was another thing the professor went over about Arrays in Java that threw me for a loop. He said that in Java, when you are passing an array to a function, you are not actually passing the
array, you are passing a list of addresses in memory to the function. This means that 
when you modify the array in one function, the same array being accessed anywhere else 
will be modified as well. This is known as pass by reference. I noticed that this had some interesting effects on how one would actually read the code. Check it out:

```
public class MyClass {
    public static void addOne (int [] a) {
        for (int i = 0; i < a.length; i++ ) {
            a[i] += 1;
        }
    }

    public static void main(String args[]) {
        int [] container = new int[5]; //instantiate here (0 at each position)
     
        addOne(container); //call here

        System.out.println(container[1]); //get shocked here
    }
}
```

If you notice, there is a function called addOne that takes an array. But it does not return an array. 
In fact it doesn't return anything. But when you call container[1], it will for sure return a modified 
array. What the heck? That shocked me. I started thinking of all of the mayhem that will likely take 
place in a heavy Java code base. It's not really so obvious. So that took me by suprise. 


The last thing that blew my mind, wasnt really about Arrays but more about computational complexity. The professor made a function called reverseArray. And this functions goal was to reverse the elements in an array passed to it. It was very standard stuff. But in this loop, we instantiated a new array, set to the same number of elements that we passed to the function. The goal was to set the elements of the old array into the appropriate positions for the new array. It was simple to implement. After implementing it, the professor asked what was wrong with this approach. I was shocked. I couldnt see anything wrong with the loop.

```
public static int [] reverseArray (int[] a) {
    int [] container = new int[a.length];
    int i, j;
    for (i = 0, j = a.length - 1; i < a.length; i++, j--) {
        container[i] = a[j];
    }
    return container;
} 

```

After a few minutes and a few bad guesses, he said it was wasting space. Suppose we get an array of 1000 elements, we will be using 2000 memory units in order to process the array. This is double the space we actually need. And as the space goes up, the slower the program will be to run. There is a better way. You can use one variable and swap the elements from the last space to the first space of the array and save 1000 units of memory by simply using 1 variable instead. 

```
public static void reverseArray (int[] a) {
    for (int i = 0; i < a.length/2; i++) {
        int temp = a[i];
        a[i] = a[a.length - 1 - i];
        a[a.length - 1 - i] = temp;
    }
}
```

This no longer uses up double the space, and it runs in half the time to compute the final array.
All in all, the professor wanted me to get more familiar with thinking in terms of process efficiency.
He further stated that we will be good with this kind of thinking by CMP 238. Which is my next coursse in the fall. I'm excited to learn more.



