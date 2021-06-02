/* For Gallery Images */
const galleryItems = document.querySelectorAll(".image-item");
const totalImageItems = galleryItems.length;

/* For Lightbox */
const lightbox = document.querySelector(".lightbox");
const lightboxImage = lightbox.querySelector(".lightbox-img");
const lightboxText = lightbox.querySelector(".caption-text");
const lightboxCounter = lightbox.querySelector(".caption-counter");
let itemIndex = 0;

for(let i=0; i<totalImageItems; i++)
{
      galleryItems[i].addEventListener('click', function()
      {
            itemIndex = i;
            changeItem();
            toggleLightbox();
      });
}

function changeItem()
{
      imgSrc = galleryItems[itemIndex].querySelector(".imgBox img").getAttribute("src");
      lightboxImage.src = imgSrc;
      lightboxText.innerHTML = galleryItems[itemIndex].querySelector("p").innerHTML;
      lightboxCounter.innerHTML = (itemIndex + 1) + " of " + totalImageItems;
}

function toggleLightbox()
{
      lightbox.classList.toggle("open");
}

function prevItem()
{  
      if(itemIndex === 0)
      {
            itemIndex = totalImageItems - 1;
      }
      else
      {
            itemIndex--;
      }
      changeItem();
}

function nextItem()
{  
      if(itemIndex === totalImageItems-1)
      {
            itemIndex = 0;
      }
      else
      {
            itemIndex++;
      }
      changeItem();
}

/* For Close Lightbox */
const lightboxClose = lightbox.querySelector(".lightbox-close");
lightbox.addEventListener('click', function()
{
    if(event.target === lightboxClose || event.target === lightbox)
    {
        toggleLightbox();
    }
})