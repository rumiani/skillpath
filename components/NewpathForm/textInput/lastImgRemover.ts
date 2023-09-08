import { toast } from "react-toastify";

export const conterntWithRemovedImg = (editor, html) =>{
    const contentArray = editor.getContents().ops;
    const images = contentArray.filter( each => each.insert.image)    
    if(images.length < 2 ) return html

    console.log(contentArray);
    

    for (let i = contentArray.length - 1; i >= 0; i--) {
        if (contentArray[i].insert && contentArray[i].insert.image) {
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, 'text/html');
            console.log(i);
            
            const lastImage = doc.querySelector(`img[src='${contentArray[i].insert.image}']`); 
            lastImage?.remove(); 
            html = new XMLSerializer().serializeToString(doc);
            toast.error(`You can upload only one image to the editor.`, {position: toast.POSITION.TOP_RIGHT})

            return html
        }
      }
}



