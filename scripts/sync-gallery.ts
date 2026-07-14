import fs from 'fs';
import path from 'path';

// Directories
const publicGalleryDir = path.join(process.cwd(), 'public', 'gallery');
const dataFile = path.join(process.cwd(), 'src', 'data', 'gallery.json');

// Supported extensions
const validExtensions = ['.jpg', '.jpeg', '.png', '.webp', '.avif'];

function syncGallery() {
  console.log('Syncing gallery images...');
  
  if (!fs.existsSync(publicGalleryDir)) {
    console.error(`Gallery directory not found at ${publicGalleryDir}`);
    fs.mkdirSync(publicGalleryDir, { recursive: true });
    console.log('Created empty gallery directory.');
    fs.writeFileSync(dataFile, JSON.stringify([], null, 2));
    return;
  }

  const images: any[] = [];
  
  // Read all files/folders recursively
  function readDir(dir: string, category: string = 'all') {
    const files = fs.readdirSync(dir);
    
    for (const file of files) {
      const fullPath = path.join(dir, file);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Use folder name as category
        readDir(fullPath, file.toLowerCase());
      } else {
        const ext = path.extname(file).toLowerCase();
        if (validExtensions.includes(ext)) {
          // Path relative to public folder (e.g. /gallery/file.jpg or /gallery/couple/file.jpg)
          const relPath = fullPath.replace(path.join(process.cwd(), 'public'), '').replace(/\\/g, '/');
          
          images.push({
            src: relPath,
            alt: file.replace(ext, '').replace(/-/g, ' '),
            category: category === 'all' ? 'uncategorized' : category,
            width: 1200, // Default fallback, ideally read with an image library
            height: 800, // Default fallback
          });
        }
      }
    }
  }

  readDir(publicGalleryDir);

  // Read existing data to preserve custom dimensions if any
  let existingData: any[] = [];
  try {
    if (fs.existsSync(dataFile)) {
      existingData = JSON.parse(fs.readFileSync(dataFile, 'utf-8'));
    }
  } catch (e) {
    console.log('Could not read existing gallery.json, starting fresh.');
  }

  // Merge (preferring new files, but keeping old dimensions)
  const mergedImages = images.map(newImg => {
    const existing = existingData.find(e => e.src === newImg.src);
    if (existing) {
      return { ...newImg, width: existing.width, height: existing.height, alt: existing.alt };
    }
    return newImg;
  });

  fs.writeFileSync(dataFile, JSON.stringify(mergedImages, null, 2));
  console.log(`Successfully synced ${mergedImages.length} images to ${dataFile}`);
}

syncGallery();
