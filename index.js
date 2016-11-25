const episodes = [
  { id: 's06e01', title: 'The Red Woman' },
  { id: 's06e02', title: 'Home' },
  { id: 's06e03', title: 'Oathbreaker' },
  { id: 's06e04', title: 'Book of the Stranger' },
  { id: 's06e05', title: 'The Door' },
  { id: 's06e06', title: 'Blood of My Blood' },
  { id: 's06e07', title: 'The Broken Man' },
  { id: 's06e08', title: 'No One' },
  { id: 's06e09', title: 'Battle of the Bastards' },
];

const finaleEpisode = { id: 's06e10', title: 'The Winds of Winter' };

function addToPlaylist(playlist, episode){
  return playlist.concat(episode);
}

function removeFromPlaylist(playlist, episode){
  var array = [...playlist];
  var index = array.indexOf(episode);
  array.splice(index, 1);
  return array;
}

function getNextEpisodeInPlaylist(playlist){
  return playlist.slice(0,1)[0];
}

function bingeWatch(playlist){
  if (playlist.length > 0 ){
    playlist.shift();
    bingeWatch(playlist);
  } 
    return 'Please let there be more!'
}