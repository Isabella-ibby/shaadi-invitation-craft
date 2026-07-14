const fs = require('fs');
const https = require('https');

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
      response.pipe(file);
      file.on('finish', () => {
        file.close(resolve);
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => reject(err));
    });
  });
}

(async () => {
  try {
    await download('https://upload.wikimedia.org/wikipedia/commons/e/ec/Virat_Kohli_and_Anushka_Sharma_at_Vogue_Beauty_Awards_2015_%28cropped%29.jpg', 'public/photos/hero.jpg');
    await download('https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/The_Prime_Minister%2C_Shri_Narendra_Modi_with_the_newly_married_couple_Virat_Kohli_and_Anushka_Sharma%2C_in_New_Delhi_on_December_20%2C_2017.jpg/800px-The_Prime_Minister%2C_Shri_Narendra_Modi_with_the_newly_married_couple_Virat_Kohli_and_Anushka_Sharma%2C_in_New_Delhi_on_December_20%2C_2017.jpg', 'public/photos/couple.jpg');
    
    // Copy for story and family to have some images
    fs.copyFileSync('public/photos/hero.jpg', 'public/photos/story/first-meeting.jpg');
    fs.copyFileSync('public/photos/hero.jpg', 'public/photos/story/first-date.jpg');
    fs.copyFileSync('public/photos/hero.jpg', 'public/photos/story/adventures.jpg');
    fs.copyFileSync('public/photos/couple.jpg', 'public/photos/story/proposal.jpg');
    fs.copyFileSync('public/photos/couple.jpg', 'public/photos/story/wedding.jpg');
    
    console.log("Images downloaded and copied successfully!");
  } catch (e) {
    console.error(e);
  }
})();
