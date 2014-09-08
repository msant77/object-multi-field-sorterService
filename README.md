object-multi-field-sorterService
================================

This service sorts a data sample using a set of fields and order directions. The sample data is hardcoded within the class the service uses. 

To run the service just download all files at a directory with node.js enabled and execute the followin command:

    $ node sorterService.js
    
This will enable the service locally at port 3000. To run a query test just enter the following at a web browser, curl or other similar:

    http://localhost:3000/?year=desc&author=asc&title=asc


This solution has been created for being run at a node.js platform. It doens't use any further library than those that come with a standard node.js version 0.10.x installation.

The code and the documents were written using Sublime Text 2 Trial Version. Tests have been performed using a Terminal window on Mac OS 10.6.8 in English, and Google Chrome was the browser used to test the service. 

Further information can be found at the 'solution architecture.txt' file.
