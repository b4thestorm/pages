---
layout: post
title: 'Interesting implementation of the Factory Pattern'
categories: programming
permalink: /factory-pattern-in-rails
description: Walk through of an interesting Factory pattern in rails
---

In this blog post I will point out an interesting factory pattern I recently discovered
while diving through the internals of a popular rails engine named [Administrate](https://github.com/thoughtbot/administrate).

A rails engine at its core is a rails app that can be used to extend your rails app.
It adds controllers / routes / views to your rails app and modules for including/extending
functions in your main app. Administrate gives you a full on Admin dashboard very similar
to ActiveAdmin except using a different build methodology.

Administrate opted to not build a dashboard by way of creating a flexible DSL. They instead opted
to make it even simpler than that. A developer can simply include Administrate, it will read in
the tables and relationships automatically and generate a dashboard model file. In which you would simply
declare new form field types by passing in key-value pairs to the appropriate dashboard view hash.

<img src="https://b4thestorm.github.io/pages/assets/images/viewhash.png">

Notice how the `ATTRIBUTES_HASH` neatly maps the column names to data type models.
This article will go over how rails can help us achieve this automatically.

Rails engines come with a generator api. Generators create templates. A template is what is
customized in the main rails app. In Administrate, the generator file is like a master model file. It
creates the templated model files that get pulled into the main rails app. In Administrate, it begins with
this method:

<img src="https://b4thestorm.github.io/pages/assets/images/dashboarddefinition.png">

the template method being invoked in the `create_dashboard_definition` method takes a source file name and destination path. The source file inherits the methods from the generator and at the same time expresses
itself as a customizable model file in the main rails app. The `ATTRIBUTES_HASH` that gets created in the
main rails app, is actually generated in the main generator file by way of this block of ruby code.

<img src="https://b4thestorm.github.io/pages/assets/images/attributeread.png">

This expresses itself in the Main rails app as this:

<img src="https://b4thestorm.github.io/pages/assets/images/viewhash.png">

As you can see, the keys represent table columns and the values themselves represent the datatypes. Notice that these datatypes are actually just PORO's. This is the Factory pattern that we are interested in.

Each Field PORO comes with a public method called `to_s`. The `to_s` methods will categorically just
return the data that is supposed to be represented in each column as `data`. Much like you would with any implementation of `to_s` on any model. There is also more magic being implemented where each hash maps
to a specific partial that gets represented in the dashboard in the form that would be expected of the datatype. We won't go over this but it's cool side note.

the actual reading in of the Rails columns are being handled roughly via this method:
```ruby
  def attributes
    klass.reflections.keys +
    klass.columns.map(&:name) -
    redundant_attributes
  end
```
So for each model/table the activerecord reflections method is called and it reads in the column
names and is being mapped in the main attributes hash. There is more being done to correctly build and sanitize the names of the fields that it is pulling in, but this simple method is the kick off point
for how the attributes are being generated.

`klass` is any model file, and `reflections` is the name of all models connected to the class and `klass.columns` is the name of all of the attributes of the `klass` table.

Lastly the field types are being mapped to the correct PORO field type via this method:

```ruby
  def field_type(attribute)
    type = column_type_for_attribute(attribute.to_s)

    if type
      ATTRIBUTE_TYPE_MAPPING.fetch(type, DEFAULT_FIELD_TYPE) +
        options_string(ATTRIBUTE_OPTIONS_MAPPING.fetch(type, {}))
    else
      association_type(attribute)
    end
  end
```

Where the general return value of this method `field_type` are actually denoted in this hash:

```ruby
  ATTRIBUTE_TYPE_MAPPING = {
    boolean: "Field::Boolean",
    date: "Field::DateTime",
    datetime: "Field::DateTime",
    enum: "Field::String",
    float: "Field::Number",
    integer: "Field::Number",
    time: "Field::Time",
    text: "Field::Text",
    string: "Field::String",
  }
```

This pattern is not specific to generators in rails engines. It can actually be used in any
case where you would like to represent attribute types and maybe even custom data types in a
flexible way. Where flexible means, you want to have a public interface for representing data types
to be stored in your db in a custom way.
