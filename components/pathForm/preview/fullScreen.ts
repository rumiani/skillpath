export const fullScreen = (element)=>{
    console.log(element);
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
      } else if (document.exitFullscreen) {
        document.exitFullscreen();
      }
}
export const exitFullScreen = (element) =>{
  if (document.fullscreenElement)
    document.exitFullscreen();
}