let arr=[
  
  
   
    
   
]
arr.push(  {
    song_name:"Excuses",
    singer:"AP Dhillon ft. Gurinder Gill",
    language:"Punjabi"

})
arr.push(   {
    song_name:"Titliaan",
    singer:"Afsana Khan ft. Harrdy Sandhu",
    language:"Punjabi"

})
arr.push(    {
    song_name:"Kesariya",
    singer:"Arijit Singh (from Brahmāstra)",
    language:"Hindi"

})
arr.push(  {
    song_name:"Tujhe Kitna Chahne Lage",
    singer:"Arijit Singh (from Kabir Singh)",
    language:"Hindi"

})
arr.push(   {
    song_name:"Perfect",
    singer:"Ed Sheeran",
    language:"English"

})

for(let i=0;i<arr.length;i++){
  
        console.log("Song Name:",arr[i].song_name);
        console.log("Singer:",arr[i].singer);
        console.log("Language:",arr[i].language);
        
        
   
}
console.log("song at location 3",arr[3].song_name);

