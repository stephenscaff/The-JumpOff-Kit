# The Jumpoff Kit
A Codekit project starter and front-end framework of sorts.

It contains all them common ui elements, a proportional grid & typographic system, some js stuff I use a good bit, SCSS configs and mixins, and so on. More than that, The Jumpoff contains a project structure of scss, js, and shared include files that I've found works well in CodeKit and beyond.


## Dependencies
- CodeKit: for minification, linting, and js + html includes (more on that below).
- Autoprefixer: For CSS prefixes
- Jquery: for js

## Project Structre
Codekit allows you to rock html includes for shared elements (header, footer, etc). It also enables importing of js files, which is great for organization. The JumpOff takes advantage of this, using a 'working' and 'build' setup. 

## Kit Folder
All authorship occurs in the 'kit' folder, like an 'src' directory, which compiles/builds out to root folders of corresponding names. For example files in 'kit/assets' will compile/build to the root 'assets' folder.

## HTML Files
All working page files (index, about, etc) inside 'kit/pages' use the '.kit' extensions. these files to .html files in the root. For example, kit/pages/index.kit will build out to index.html. But as '.kit' files, we can use CodeKit's ability to rock html includes for common project partials like headers and footers. Store global includes at 'kit/pages/includes'


## Codekit and SCSS/JS Structre
```
|-- assets/                   # The Build folder
|   |-- css/      
|       |-- app.min.scss      # all styles minified
|       |-- fonts.min.scss    # minified base64 font-face
|
|   |-- js 
|       |-- app.min.js        # all minified scripts
|       |-- jquery.min.js  
|
|-- kit/                      # Working files
|   |-- assets/               # scss and js
|       |-- scss/             # scss files
|           |-- app.scss      # main scss imports
|           |-- fonts.scss    # font base64 imports
|      
|           |--tools/
|               |--- _config.scss # master config and sass vars 
|               |--- _mixins.scss # global mixins
|               |--- _extends.scss # global extends and themes
|           |-- fonts/
|           |-- base/
|               |--  _typography.scss    
|               |--- _media.scss # global mixins
|               |--- _colors.scss
|               |--  _decor.scss  
|               |--  _forms.scss       
|           |--components/  
|               |-- _buttons.scss      
|               |-- _feeds.scss    
|               |-- _ctas.scss    
|               |-- _folio.scss    
|               |-- _intros.scss  
|               |-- _jobs.scss    
|               |-- etc...  
|           |--regions/
|               |-- _header.scss
|               |-- _header-menu.scss
|               |-- _footer.scss            
|           |--utils/
|               |-- _grid.scss      
|               |-- _helpers.scss  
|               |-- _animations.scss   
|               |-- etc... 
|           |-- vendor/ 
|               |-- _normalizer.scss 
|
|       |-- js/               # js files
|           |-- jquery.js     # yep... still rocking jquery
|           |-- app.js        # script appends/prepends/includes
|           |-- _init.js      # inits
|           |-- vendor/       # vendor libs
|           |-- components/   # js components
|
```
