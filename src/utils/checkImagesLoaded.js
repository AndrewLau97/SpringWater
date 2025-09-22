const checkImagesLoaded=(images,setLoading)=>{
    let loadedCount=0;
    images.forEach((src)=>{
        const img=new Image();
        img.src=src;
        img.onload=()=>{
            loadedCount+=1;
            if(loadedCount===images.length){
                setLoading(false)
            }
        }
    })
}


export default checkImagesLoaded