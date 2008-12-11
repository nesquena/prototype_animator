# Name

Animator.js Animation Framework created by Bernie.

# Description

Basic idea is that you can easily setup complex animations by morphing easily between classes. Yes scriptaculous has this but try actually morphing between multiple classes and having it work smoothly. Here it works very easily with no hassle.

Animate element based on classes:

    element.animate(<classesToSet>)
  
Animate element by swapping set of classes for another:

    element.animateSwap(<classesToRemove>, <classesToAdd>)
  
In a nutshell, any element within the DOM can be seamlessly transitioned from having one set of css classes applied to having any others. This means that you can create fluid animations with no extra work by simply switching an element from one class to another.

# Usage

    #  style.css
    .blue  { background-color: blue; }
    .red   { background-color: red;  }
    .short { width: 200px; }
    .long  { width: 400px; }
  
    # index.html
    <head>
      <script charset="utf-8" type="text/javascript" src="prototype.js"></script>
      <script charset="utf-8" type="text/javascript" src="animator.js"></script>
      <script charset="utf-8" type="text/javascript" src="prototype_animator.js"></script>
    </head>
    </body>
      <div id='one short'></div>
      <a id='some-link' href='#'>Click</a>
    </body>
  
    # application.js
    document.observe('dom:ready', function(){
      $('one').animateSwap('blue', 'red', { duration : '3000' });
    });

    $('some-link').observe('click', function() {
      $('one').animateSwap('red short', 'green long');
    });

This will change the element one from having a blue background to a red one with an animation over 1 second. 

On the click, the rectangle will change from a red backround and a 200px width to a green background and a 400px width.

Please read the GitHub wiki for more information about how this library works. The basics are very simple and you can start building complex animations based purely on css classes in no time.

# Credit

This animation framework was not created by me. The framework was created by Bernie from http://www.berniecode.com/writing/animator.html

I have modified the code to support a more robust ability to transition between css classes seamlessly and added prototype specific extensions.

Modified by Nathan Esquenazi in 2008