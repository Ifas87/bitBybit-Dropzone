console.log("bleep");

var fileInput = document.querySelector(".filesInput");
var switchInput = document.querySelector("#switch");
var Name = document.querySelector("#nameLabel");
var input = document.querySelector("#inputLabel");
var existingFileData = $('#my-data').data();
var formElement = document.querySelector("#mainform");
var message = " will be tracked using the version control software, Please add a description of changes.";
var fileList = document.querySelector(".allFilelList");

console.log( (existingFileData)["other"] );

$(document).ready(function() {
    Name.style.visibility = "hidden";
    input.style.visibility = "hidden";

    switchInput.addEventListener('change', function(){
        if (this.checked){
            input.setAttribute('required', '');
            
            Name.style.visibility = "Visible";
            input.style.visibility = "Visible";

            document.querySelector(".versionControlLogs").style.visibility = "Hidden";
        }
        else{
            Name.style.visibility = "hidden";
            input.style.visibility = "hidden";

            input.removeAttribute('required', '');
            document.querySelector(".versionControlLogs").style.visibility = "Visible";
        }
    });
});

