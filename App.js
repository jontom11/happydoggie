let zach = 'https://vetstreet.brightspotcdn.com/dims4/default/13c68ee/2147483647/crop/0x0%2B0%2B0/resize/645x380/quality/90/?url=https%3A%2F%2Fvetstreet-brightspot.s3.amazonaws.com%2F45%2F9a60c0a8bf11e0a0d50050568d634f%2Ffile%2Fmalitpoo-3-645mk070111.jpg';
let skippy = 'https://media.mnn.com/assets/images/2016/04/bichon-frise.jpg.696x0_q80_crop-smart.jpg';
let roxy = 'https://i.pinimg.com/736x/0e/cf/79/0ecf79c0760b3d0e591fd4e05db7b8e5--maltese-poodle-mix-poodle-puppies.jpg';
let butter = 'https://www.pets4homes.co.uk/images/classifieds/2015/08/20/1058388/large/wanted-female-puppy-maltipoo-white-55d65d8b74ceb.jpg';
let dog1 = 'http://acidcow.com/pics/20100611/cute_puppies_46.jpg';
let dog2 ='http://usercontent.packdog.com/bg/9147d463a1e276a8a44e0a16b1344ff7f9e05eef.jpg';
let dog3 ='https://s-media-cache-ak0.pinimg.com/originals/96/03/49/960349bae1540420bb4297409d6fc99a.jpg';
let dog4 ='http://cdn.akc.org/content/article-body-image/pwc_cute_puppies.jpg';
let dog5 ='http://cdn1-www.dogtime.com/assets/uploads/gallery/national-puppy-day/national-puppy-day-5.jpg';
let dog6 = 'https://i.pinimg.com/736x/40/81/f6/4081f63fbbb7f9841bde7f0060af5213--golden-retriever-puppy-cute-golden-puppy.jpg';
let dog7 = 'https://s-media-cache-ak0.pinimg.com/originals/a6/8d/b4/a68db40d98d5255f4daf87ffa24e1e86.png';
let dog8 = 'https://s-media-cache-ak0.pinimg.com/736x/93/18/8b/93188b5d72a9d004724937886687dbb6.jpg';
let dog9 = 'http://stories.barkpost.com/wp-content/uploads/2015/01/corgi2.jpg';


let dogs = [zach, skippy, roxy, butter, dog1, dog2, dog3, dog4, dog5, dog6, dog7, dog8, dog9];
let puppyViewer = document.getElementById('puppyViewer');
console.log(puppyViewer)

let timeout = (url, i)=> setTimeout(( ()=>puppyViewer.src=url ), i * 1000);

dogs.forEach( (val, i) => timeout(dogs[i], i+1) );
setInterval(() => {
  dogs.forEach( (val, i) => timeout(dogs[i], i+1) )}
  , dogs.length * 1000
  )

console.log('hello')