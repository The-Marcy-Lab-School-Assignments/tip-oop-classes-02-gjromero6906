/**
 * Song Class
 * 
 * A class to manage songs with title, artist, play count, and rating.
 */

class Song {
  //write your code here
  static playlist = [];
  #playCount = 0;
  #rating = 0;
  constructor(title,artist){
    this.title =title;
    this.artist =artist;
  }
  get playCount(){
    return this.#playCount;
  }
  get rating(){
    return this.#rating;
  }
  play(){
    this.#playCount++;
    console.log(`Now playing: ${this.title} by ${this.artist}`)
  }
  rate(stars){
    if(stars >=1 && stars<=5){
      this.#rating = stars;
      console.log(`You rated ${title} ${stars} stars`);
    }
  }
  isPopular(){
    return this.#playCount>=10?true:false;
  }
  static getTotalSongs(){
    return this.playlist.length;
  }
  static findByTitle(title){
    return this.playlist.find(title);
  }
}

// Export the Song class for testing
module.exports = { Song };
