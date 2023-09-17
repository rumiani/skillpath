// import { toast } from "react-toastify";

// export const conterntWithRemovedImg = (editor, html) =>{
//     const contentArray = editor.getContents().ops;
//     const images = contentArray.filter( each => each.insert.image) 

    
//     if(images.length > 1 ){
//         toast.error(`You can upload only one image to the editor.`, {position: toast.POSITION.TOP_RIGHT})
//     }
//     if( images.length === 1  ){
//         const base64 = images[0].insert.image.split(',')[1];
//         const binarySize = atob(base64).length / 1024 ;
//         if(binarySize > 2024){
//             toast.error(`Please upload images less than 2 m.`, {position: toast.POSITION.TOP_RIGHT})
//         }else{
//             return html
//         }
//     }
//     for (let i = contentArray.length - 1; i >= 0; i--) {
//         if (contentArray[i].insert && contentArray[i].insert.image) {
//             const parser = new DOMParser();
//             const doc = parser.parseFromString(html, 'text/html');            
//             const lastImage = doc.querySelector(`img[src='${contentArray[i].insert.image}']`); 
//             lastImage?.remove(); 
//             html = new XMLSerializer().serializeToString(doc);

//             return html
//         }
//       }
// }



