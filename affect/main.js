
  // array of objects
  var songs = [{
        'name': ' Love The Way You Lie',
        'artist': ' Rihanna, Eminem',
        'album': ' Loud',
        'duration': '4:51',
       'fileName': 'song1.mp3',
       'image' : 'song1.jpg'
    },
    {
        'name': 'Shape of You',
        'artist': ' Ed Sheeran',
        'album': 'Unknown',
        'duration': '3:53',
        'fileName': 'song2.mp3',
         'image' : 'song2.jpg'
    },
    {
        'name': 'Heart Attack',
        'artist': ' Enrique Iglesias',
        'album': 'Sex and Love',
        'duration': '2:50',
        'fileName': 'song3.mp3',
         'image' : 'song3.jpg'
    },
    {
        'name': ' Stereo Love',
        'artist': 'Edward Maya, Vika Jigulina',
        'album': ' The Stereo Love Show',
        'duration': '4:08',
        'fileName': 'song4.mp3',
         'image' : 'song4.jpg'
    }]


function toggleSong() {
  var song = document.querySelector('audio');
  if(song.paused == true) {
  console.log('Playing');
  $('.play-icon').removeClass('fa-play').addClass('fa-pause');
  song.play();
  }
  else {
  console.log('Pausing');
  $('.play-icon').removeClass('fa-pause').addClass('fa-play');
  song.pause();
  }
  }


function fancyTimeFormat(time)
{
// Hours, minutes and seconds
var hrs = ~~(time / 3600);
var mins = ~~((time % 3600) / 60);
var secs = time % 60;

// Output like "1:01" or "4:03:59" or "123:03:59"
var ret = "";

if (hrs > 0) {
    ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
}

ret += "" + mins + ":" + (secs < 10 ? "0" : "");
ret += "" + secs;
return ret;
}
$('.welcome-screen button').on('click', function() {
    var name = $('#name-input').val();
    if (name.length > 2) {
        var message = "Welcome, " + name;
        $('.main .user-name').text(message);
        $('.main').removeClass('hidden');
        console.log('hey hey');
        $('.welcome-screen').addClass('hidden');
    } else {
        $('#name-input').addClass('error');
    }
});


function updateCurrentTime() {
  var song = document.querySelector('audio');
  //console.log(song.currentTime);
  //console.log(song.duration);
  var currentTime = Math.floor(song.currentTime);
  currentTime = fancyTimeFormat(currentTime);
  var duration = Math.floor(song.duration);
   duration = fancyTimeFormat(duration);
  $('.time-elapsed').text(currentTime);
  $('.song-duration').text(duration);
  }



  function changeCurrentSongDetails(songObj) {
      $('.current-song-image').attr('src','img/' + songObj.image)
      $('.current-song-name').text(songObj.name)
      $('.current-song-album').text(songObj.album)
  }


  function addSongNameClickEvent(songObj,position) {
    var songName = songObj.fileName; // New Variable
        var id = '#song' + position;
        $(id).click(function() {
            var audio = document.querySelector('audio');
            var currentSong = audio.src;
            if(currentSong.search(songName) != -1)
            {
              toggleSong();
            }
            else {
              audio.src = songName;
              toggleSong();
              changeCurrentSongDetails(songObj); // Function Call
              currentSongNumber = position;
            }
        });
    }

// <!---------------------------------------------------window onload ------------------------------->
  window.onload = function() {

  changeCurrentSongDetails(songs[0]);


   for(var i =0; i < songs.length;i++) {
       var obj = songs[i];
       var name = '#song' + (i+1);
       var song = $(name);
       song.find('.song-name').text(obj.name);
       song.find('.song-artist').text(obj.artist);
       song.find('.song-album').text(obj.album);
       song.find('.song-length').text(obj.duration);
       addSongNameClickEvent(obj,i+1);
     }

     $('#songs').DataTable({
           paging: false

       });

  updateCurrentTime();
  setInterval(function() {
  updateCurrentTime();
},1000);

  }




$('.play-icon').on('click', function() {
   toggleSong();
});

$('body').on('keypress', function(event) {
  // console.log(event);
            var target = event.target;
            if (event.keyCode == 32  && target.tagName !='INPUT') {
                toggleSong();
            }
        });
        function move() {
            var elem = document.getElementById("myBar");
            var width = 1;
            var id = setInterval(frame, 10);
            function frame() {
                if (width >= 100) {
                    clearInterval(id);
                } else {
                    width++;
                    elem.style.width = width + '%';
                }
            }
        }
        function myFunction() {
            var x = document.createElement("INPUT");
            x.setAttribute("type", "range");
            document.body.appendChild(x);
        }
        var x = document.getElementById("song-list");

        function getVolume() {
            alert(x.volume);
        }

        function setHalfVolume() {
            x.volume = 0.2;
        }

        function setFullVolume() {
            x.volume = 1.0;
        }
