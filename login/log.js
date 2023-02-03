
function passCheck(){
    //name and password
    var username=document.getElementById("Name").value;
    var userpass=document.getElementById("password").value;
    if(username=="kutty" && userpass=="kutty"){
        alert("Wellcome my Queen");
        window.location.href=""
        window.location.href="Chat/chat.html"
        return false;
    }else{
        window.location.href="test.html"
        alert("Password Wrong Not Allowed....");
        freeze(5);
        
        
    }
}
function freeze(secs) { 
    var waituntil = performance.now() + secs*1000; 
    while(performance.now() < waituntil); 
}
function saa(url){
    var audio=new Audio(url);
    audio.play();
}

