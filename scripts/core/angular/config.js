var extention = ".php/"; 
var host = "https://ndu-systems.net/guliwe/api/";
var isLocal = true;

if(isLocal){ 
    host = "http://localhost:8080/git.goliwe/api/"; 
}  
function GetApiUrl(serviceName) {

    var url = host + serviceName + extention;
    return url;
}

function GetApiUrlForID(serviceName) {

    var url = host + serviceName;
    return url;
}
function GetHost(data) {
    return host + "" + data;
}
function getDate() {
    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date + ' ' + time;
    return dateTime;
}
// email tempates 


function SendMail(emailFrom,to,name,subject,msg){
	$.post(mail,
    {
        emailFrom: emailFrom,
        to: to,
        name: name,
        subject: subject,
        msg: msg,
    },
    function(data, status){
		console.log(data);
    });
}

