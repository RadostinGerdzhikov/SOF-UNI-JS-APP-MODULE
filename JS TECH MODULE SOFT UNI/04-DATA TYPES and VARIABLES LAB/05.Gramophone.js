function gramophone(album,name,song) {
 let duration = album.length * name.length * (song.length/2);
   let result = Math.ceil(duration / 2.5);
   console.log(`The plate was rotated ${result} times.`);
}

gramophone('Black Sabbath', 'Paranoid', 'War Pigs');

