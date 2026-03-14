function scanThumb(){

let result = document.getElementById("scanResult")

result.innerHTML = "Scanning thumb... ⏳"

// simulate thumb verification
let verified = Math.random() > 0.5   // randomly true or false

setTimeout(function(){

if(verified){

result.innerHTML = "Thumb verified 👍 Access granted"

document.getElementById("app").style.display = "block"

}

else{

result.innerHTML = `
❌ Thumb not verified. Access denied! <br><br>
<button onclick="scanThumb()">Retry Scan 🔄</button>
`

document.getElementById("app").style.display = "none"

}

},2000)

}



function detectMood() {

let input = document.getElementById("moodInput").value.toLowerCase();
let moodBox = document.getElementById("mood");
let musicBox = document.getElementById("music");

if(input === ""){
moodBox.innerHTML = "Please enter your mood!";
musicBox.innerHTML = "";
return;
}

let playlist = "";

if(input.includes("sad")){
moodBox.innerHTML = "You seem Sad 😢";
playlist = "https://open.spotify.com/embed/playlist/37i9dQZF1DWXtlo6ENS92N";
}

else if(input.includes("angry")){
moodBox.innerHTML = "You seem Angry 😡";
playlist = "https://open.spotify.com/embed/playlist/37i9dQZF1DX4WYpdgoIcn6";
}

else if(input.includes("tired")){
moodBox.innerHTML = "You seem Tired 😴";
playlist = "https://open.spotify.com/embed/playlist/37i9dQZF1DX0XUfTFmNBRM";
}

else if(input.includes("happy")){
moodBox.innerHTML = "You seem Happy 😄";
playlist = "https://open.spotify.com/embed/playlist/37i9dQZF1DX1BzILRveYHb"; // Bollywood Party Playlist
}

else{
moodBox.innerHTML = "Mood not detected 🙂";
musicBox.innerHTML = "";
return;
}

musicBox.innerHTML = `
<h3>Bollywood Music For You 🎧</h3>

<iframe style="border-radius:12px"
src="${playlist}"
width="300"
height="380"
frameBorder="0"
allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture">
</iframe>

<div style="margin-top:15px;">
<p>Did this music improve your mood?</p>

<button onclick="feelGood()">Yes, I feel better 😊</button>
<button onclick="notGood()">Not yet 😔</button>
</div>

<p id="feedback"></p>
`;

}

function feelGood(){
document.getElementById("feedback").innerHTML =
"Great! 😊 Glad the music helped you feel better.";
}

function notGood(){
document.getElementById("feedback").innerHTML =
"No worries 🙂 Try another playlist.";
}
