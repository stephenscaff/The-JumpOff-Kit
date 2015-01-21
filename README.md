# The Jumpoff
A Codekit project starter and front-end framework


## What's That Now?
Oh, just a little project starter I use for basic front-end work. It contains all them common ui elements, a proportional grid & typographic system, some js stuff I use a good bit, SCSS configs and mixins (with Bourbon), and so on. More than that, The Jumpoff contains a project structure of scss, js, and shared include files that I've found works well in CodeKit and beyond.


## You Gonna Document It Proper Like?
Maybe one of these days. This is more for me.

## Project Structre
Code kit allows you to rock includes for shared elements, like a header and footer. It also enables importing of js files, which is great for organization. So, I structre my projects with a working and build folders. The working folders make use of .kit files for html, and scss & js folders that compress and output to a similarly named build assets folder. Looks like this:


|-- assets/                   # The Build folder
|   |-- css/      
|       |-- app.min.scss      # all styles minified
|       |-- fonts.min.scss    # minified base64 font-face
|
|   |-- js 
|       |-- plugins.min.js    # all minified plugins
|       |-- scripts.min.js    # minified init and one off scripts
|       |-- jquery.min.js  
|       |-- modernizr.js   
|
|-- kit/                      # Working files
|   |-- assets/               # scss and js
|       |-- scss/             # scss files
|           |-- app.scss      # main scss imports
|           |-- fonts.scss    # font base64 imports
|
|           |-- fonts/
|               |--- _iconfont.scss
|               |--- _base64starter.scss
|           |--modules/  
|               |-- _animations.scss  
|               |-- _buttons.scss      
|               |-- _code.scss  
|               |-- _colors.scss 
|               |-- _forms.scss  
|               |-- _grid.scss 
|               |-- _typography.scss      
|               |-- etc...  
|           |--partials/
|               |-- _header.scss
|               |-- _footer.scss       
|               |-- _sections.scss     
|           |--pages/
|               |-- _home.scss      
|               |-- _about.scss  
|               |-- _etc...  
|           |--settings/     
|               |-- _config.scss   
|               |-- _mixins.scss 
|           |-- vendor/ 
|               |-- _normalize.scss 
|
|       |-- js/             # js files
|           |-- scripts.js  # working scripts
|           |-- plugins.js  # imported plugins
|           |-- plugins/    # plugin import files
|               |-- _easings.js   
|               |-- _tabs.js
|               |-- _etc...   
|
|   |-- pages/              # working .kit pages
|       |-- includes/       # shared include files
|           |-- _header.kit   
|           |-- _footer.kit   
|       |-- home.kit        # .kit files that compile to html
|       |-- about.kit
|       |-- etc...
