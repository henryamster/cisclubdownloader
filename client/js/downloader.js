function passInfo(studentName, studentID, dlLink){
    //Handle information before passing to node
    
    //variables to hold information before in-browser error checking
var studentID = document.getElementById('studentID');
var studentName = document.getElementById('studentName');
var dlLink = document.getElementById('dlLink');
    //variable to hold error information for in-browser error checking
 var err=  document.getElementById('error');

//Check student ID length
if (studentID.length != 9){
  err.innerHTML('STUDENT NUMBER IS INCORRECT');
    }
//Check for valid name
if (studentName.length<2){
    err.innerHTML('STUDENT NAME IS NOT LONG ENOUGH');
}
//Check for valid download link

//RegExp for valid file extensions
var dlMatch = '(?<=href=").+?\.(.zip|.rar|.msi|.exe|.tar|.iso|)'
if (!dlLink.match(dlMatch)){
    err.innerHTML('IMPROPER DOWNLOAD FORMAT')
}


}

/*----
WARNING: Can't use form submission as this calls for a page reload upon
event firing. Need to switch to a button-click action or
asynchronous handling of errors- or use AJAX
*/

//On submission of the form, fire even handler function passInfo() to 
//push data onto Node for fs purposes
document.getElementById("dlForm").submit(passInfo());