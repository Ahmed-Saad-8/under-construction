const category = document.querySelector(".category");
const categoryOnHover = document.querySelector(".category-on-hover");
const addingClothes = document.querySelector(".add-clothes");
const addingFootwear = document.querySelector(".add-footwear");
const addingJewellery = document.querySelector(".add-jewellery");
const addingPerfume = document.querySelector(".add-perfume");
const addingCosmatecs = document.querySelector(".add-cosmatecs");
const addingGlasses = document.querySelector(".add-glasses");
const addiingBags = document.querySelector(".add-bags");
const clothesDiv = document.querySelector(".adding-clothes");
const footwearDiv = document.querySelector(".adding-footwear");
const jewelleryDiv = document.querySelector(".adding-jewellery");
const perfumeDiv = document.querySelector(".adding-perfume");
const cosmatecsDiv = document.querySelector(".adding-cosmatecs");
const glassesDiv = document.querySelector(".adding-glasses");
const bagsDiv = document.querySelector(".adding-bags");
const clothes = document.querySelector(".trending-section-clothes")
const footwear = document.querySelector(".trending-section-footwear");
const jewellery = document.querySelector(".trending-section-jewellery");
const perfume = document.querySelector(".trending-section-perfume");
const cosmatecs = document.querySelector(".trending-section-cosmatecs");
const glasses = document.querySelector(".trending-section-glasses");
const bags = document.querySelector(".trending-section-bags");


function reset() {
    clothes.style.transform = "translateY(0)";
    footwear.style.transform = "translateY(0)";
    jewellery.style.transform = "translateY(0)";
    perfume.style.transform = "translateY(0)";
    cosmatecs.style.transform = "translateY(0)";
    glasses.style.transform = "translateY(0)";
    bags.style.transform = "translateY(0)";
    addingClothes.innerText="+";
    addingFootwear.innerText="+";
    addingJewellery.innerText="+"
    addingPerfume.innerText = "+";
    addingCosmatecs.innerText = "+";
    addingGlasses.innerText = "+";
    addiingBags.innerText = "+";

    

}
category.onmouseover = ()=>{
    categoryOnHover.style.display = "flex";
   categoryOnHover.style.animation = "coco 250ms linear forwards";
}

categoryOnHover.onmouseenter = ()=>{
    categoryOnHover.style.display = "flex";
   categoryOnHover.style.animation = "coco 250ms linear forwards";
}

category.onmouseleave = ()=>{
    categoryOnHover.style.display = "none";
    categoryOnHover.style.animation = "";
}

categoryOnHover.onmouseleave = ()=>{
    categoryOnHover.style.display = "none";
    categoryOnHover.style.animation = "";
}

addingClothes.onclick = ()=>{
    if (addingFootwear.innerText=="-" || addingJewellery.innerText=="-" || addingPerfume.innerText=="-"
         || addingCosmatecs.innerText=="-" || addingGlasses.innerText=="-" || addiingBags.innerText=="-"
         ) {
            reset();
    }
    if (addingClothes.innerText=="+") {
        footwearDiv.style.opacity = "0";
        jewelleryDiv.style.opacity = "0";
        perfumeDiv.style.opacity = "0";
        cosmatecsDiv.style.opacity = "0";
        glassesDiv.style.opacity = "0";
        bagsDiv.style.opacity = "0";
        clothesDiv.style.opacity = "1";
        footwear.style.transform = "translateY(6rem)";
        jewellery.style.transform = "translateY(6rem)";
        perfume.style.transform = "translateY(6rem)";
        cosmatecs.style.transform = "translateY(6rem)";
        glasses.style.transform = "translateY(6rem)";
        bags.style.transform = "translateY(6rem)";
        
        addingClothes.innerText = "-";
        
    }
    
      else {
        footwear.style.transform = "translateY(0)";
        jewellery.style.transform = "translateY(0)";
        perfume.style.transform = "translateY(0)";
        cosmatecs.style.transform = "translateY(0)";
        glasses.style.transform = "translateY(0)";
        bags.style.transform = "translateY(0)";
        addingClothes.innerText = "+";
        
        setTimeout(reset,500);
    }
}

addingFootwear.onclick = ()=>{
    if (addingClothes.innerText=="-" || addingJewellery.innerText=="-"  || addingPerfume.innerText=="-"
        || addingCosmatecs.innerText=="-" || addingGlasses.innerText=="-" || addiingBags.innerText=="-") {
        reset();
        
    }
    if (addingFootwear.innerText=="+") {
        
        clothesDiv.style.opacity="0";
        jewelleryDiv.style.opacity = "0";
        perfumeDiv.style.opacity = "0";
        cosmatecsDiv.style.opacity = "0";
        footwearDiv.style.opacity = "1";
        
        jewellery.style.transform = "translateY(6rem)";
        perfume.style.transform = "translateY(6rem)";
        cosmatecs.style.transform = "translateY(6rem)";
        glasses.style.transform = "translateY(6rem)";
        bags.style.transform = "translateY(6rem)";
        addingFootwear.innerText = "-";
        
    }

    else  {
        clothes.style.transform = "translateY(0)";
        jewellery.style.transform = "translateY(0)";
        perfume.style.transform = "translateY(0)";
        cosmatecs.style.transform = "translateY(0)";
        glasses.style.transform = "translateY(0)";
        bags.style.transform = "translateY(0)";
        addingFootwear.innerText = "+";
        setTimeout(reset,500);
    }
    
   
}

addingJewellery.onclick = ()=>{
    if (addingFootwear.innerText=="-" || addingClothes.innerText == "-"  || addingPerfume.innerText=="-"
        || addingCosmatecs.innerText=="-" || addingGlasses.innerText=="-" || addiingBags.innerText=="-") {
        reset();
    }
    if (addingJewellery.innerText=="+") {
        clothesDiv.style.opacity = "0";
        footwearDiv.style.opacity = "0";
        perfumeDiv.style.opacity = "0";
        cosmatecsDiv.style.opacity = "0";
        jewelleryDiv.style.opacity = "1";
        perfume.style.transform = "translateY(6rem)";
        cosmatecs.style.transform = "translateY(6rem)";
        glasses.style.transform = "translateY(6rem)";
        bags.style.transform = "translateY(6rem)";
        addingJewellery.innerText = "-";
        
    }

    else  {
        
        clothes.style.transform = "translateY(0)";
        footwear.style.transform = "translateY(0)";
        perfume.style.transform = "translateY(0)";
        cosmatecs.style.transform = "translateY(0)";
        glasses.style.transform = "translateY(0)";
        bags.style.transform = "translateY(0)";
        addingJewellery.innerText = "+";
        setTimeout(reset,500);
    }
    
     
}

addingPerfume.onclick = ()=>{
    if (addingFootwear.innerText=="-" || addingJewellery.innerText=="-" || addingClothes.innerText=="-" 
        || addingCosmatecs.innerText=="-" || addingGlasses.innerText=="-" || addiingBags.innerText=="-") {
        reset();
    }
    if (addingPerfume.innerText=="+") {
        clothesDiv.style.opacity = "0";
        footwearDiv.style.opacity = "0";
        
        cosmatecsDiv.style.opacity = "0";
        jewelleryDiv.style.opacity = "0";
        perfumeDiv.style.opacity = "1";
        
        
        cosmatecs.style.transform = "translateY(6rem)";
        glasses.style.transform = "translateY(6rem)";
        bags.style.transform = "translateY(6rem)";
        addingPerfume.innerText = "-";
        
    }
    
      else  {
        
        footwear.style.transform = "translateY(0)";
        jewellery.style.transform = "translateY(0)";
        clothes.style.transform = "translateY(0)";
        cosmatecs.style.transform = "translateY(0)";
        glasses.style.transform = "translateY(0)";
        bags.style.transform = "translateY(0)";
        addingPerfume.innerText = "+";
        setTimeout(reset,500);
    }
}

addingCosmatecs.onclick = ()=>{
    if (addingFootwear.innerText=="-" || addingJewellery.innerText=="-" || addingPerfume.innerText=="-"
         || addingClothes.innerText=="-" || addingGlasses.innerText=="-" || addiingBags.innerText=="-"
         ) {
            reset();
    }
    if (addingCosmatecs.innerText=="+") {
        footwearDiv.style.opacity = "0";
        jewelleryDiv.style.opacity = "0";
        perfumeDiv.style.opacity = "0";
        cosmatecsDiv.style.opacity = "1";
        glassesDiv.style.opacity = "0";
        bagsDiv.style.opacity = "0";
        clothesDiv.style.opacity = "0";
        
        glasses.style.transform = "translateY(6rem)";
        bags.style.transform = "translateY(6rem)";
        
        addingCosmatecs.innerText = "-";
        
    }
    
      else {
        footwear.style.transform = "translateY(0)";
        jewellery.style.transform = "translateY(0)";
        perfume.style.transform = "translateY(0)";
        clothes.style.transform = "translateY(0)";
        glasses.style.transform = "translateY(0)";
        bags.style.transform = "translateY(0)";
        addingCosmatecs.innerText = "+";
        
        setTimeout(reset,500);
    }
}

addingGlasses.onclick = ()=>{
    if (addingFootwear.innerText=="-" || addingJewellery.innerText=="-" || addingPerfume.innerText=="-"
         || addingCosmatecs.innerText=="-" || addingClothes.innerText=="-" || addiingBags.innerText=="-"
         ) {
            reset();
    }
    if (addingGlasses.innerText=="+") {
        footwearDiv.style.opacity = "0";
        jewelleryDiv.style.opacity = "0";
        perfumeDiv.style.opacity = "0";
        cosmatecsDiv.style.opacity = "0";
        glassesDiv.style.opacity = "1";
        bagsDiv.style.opacity = "0";
        clothesDiv.style.opacity = "0";
        
        bags.style.transform = "translateY(6rem)";
        
        addingGlasses.innerText = "-";
        
    }
    
      else {
        footwear.style.transform = "translateY(0)";
        jewellery.style.transform = "translateY(0)";
        perfume.style.transform = "translateY(0)";
        cosmatecs.style.transform = "translateY(0)";
        clothes.style.transform = "translateY(0)";
        bags.style.transform = "translateY(0)";
        addingGlasses.innerText = "+";
        
        setTimeout(reset,500);
    }
}

addiingBags.onclick = ()=>{
    if (addingFootwear.innerText=="-" || addingJewellery.innerText=="-" || addingPerfume.innerText=="-"
         || addingCosmatecs.innerText=="-" || addingGlasses.innerText=="-" || addingClothes.innerText=="-"
         ) {
            reset();
    }
    if (addiingBags.innerText=="+") {
        footwearDiv.style.opacity = "0";
        jewelleryDiv.style.opacity = "0";
        perfumeDiv.style.opacity = "0";
        cosmatecsDiv.style.opacity = "0";
        glassesDiv.style.opacity = "0";
        bagsDiv.style.opacity = "1";
        clothesDiv.style.opacity = "0";
        
        
        
        addiingBags.innerText = "-";
        
    }
    
      else {
        footwear.style.transform = "translateY(0)";
        jewellery.style.transform = "translateY(0)";
        perfume.style.transform = "translateY(0)";
        cosmatecs.style.transform = "translateY(0)";
        glasses.style.transform = "translateY(0)";
        clothes.style.transform = "translateY(0)";
        bags.style.transform = "translateY(0)";
        addiingBags.innerText = "+";
        bagsDiv.style.opacity = "0";
        setTimeout(reset,500);
    }
}














