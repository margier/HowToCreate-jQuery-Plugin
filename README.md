##HowToCreate-jQuery-Plugin##
This is a short step by step instruction on how to create a simple jQuery plugin. The object is to show
the steps necessary to do this. 

This plugin simply highlights the text inside the <span></span> tags within the body text.

####How to Notes###
1. For simplicity, I have the styles and javascript all inside the HTML page making it easier to see what I'm doing.
2. When $ is used, it returns a jQuery object.
   - That object contains all methods that work with the selector.
   - These methods get that from the function object $.fn.
   - We need to make $.fn aware of my new plugin.
   - We can do this by adding the function to the $.fn and that makes it available to use through the $ function
3. To make this more organized, the new plugin is inside the newPlugin folder.
---
