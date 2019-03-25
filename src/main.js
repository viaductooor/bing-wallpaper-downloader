document.addEventListener("click",e=>{
    var element = e.target
    if(element instanceof HTMLImageElement){
        if(element.getAttribute("role")=="presentation"){
            var parent = element.parentElement;
            var originalUrl = element.getAttribute("src");
            var re = /_\d+x\d+\./;
            var newUrl = originalUrl.replace(re,'_1920x1080.');
            parent.setAttribute("href",newUrl);
        }
    }
});