import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";

const lightbox = new PhotoSwipeLightbox({
  gallery: "#diploma-gallery",
  children: "a",
  pswpModule: () => import("photoswipe")
});

export default lightbox;
