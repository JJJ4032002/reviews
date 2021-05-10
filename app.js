const reviews = [{
    img : "https://images.pexels.com/photos/6311541/pexels-photo-6311541.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    ,
    h3 : "Marin"
    ,
    p : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt et hic fuga odio exercitationem sunt obcaecati maxime optio, tenetur iusto blanditiis cum inventore praesentium suscipit? Non deserunt sit officia hic."
},{
    img : "https://images.pexels.com/photos/6311505/pexels-photo-6311505.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    h3 : "John"
    ,
    p : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed quaerat soluta nam hic non animi blanditiis eaque quis, atque pariatur in. Exercitationem tempora nesciunt odit, sed ducimus ipsum nostrum? Veritatis."},{
        img : "https://images.pexels.com/photos/6311547/pexels-photo-6311547.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        ,
        h3 : "Joanna",
        p : " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem ex, assumenda tempora quo debitis saepe animi incidunt rerum hic in culpa voluptatibus illo accusantium fuga dolore libero atque magni soluta."
    }];

    const img = document.body.querySelector("#img1");
    const h3 = document.body.querySelector("h3");
    const para = document.body.querySelector("p");
    const prev = document.body.querySelector("#previous");
    const nex = document.body.querySelector("#next");


    let count = 0;
window.addEventListener("DOMContentLoaded",()=>{
    change(count);
})


    nex.addEventListener("click",()=>{
       count++;
       if(count > reviews.length-1){
           count = 0;
       }
       change(count);

    });

    prev.addEventListener("click",()=>{
        count--;
        if(count < 0){
            count = 2;
        }
        change(count);
    })

    function change (e){
        img.src = reviews[e].img;
        h3.textContent = reviews[e].h3;
        para.textContent = reviews[e].p;

    }