const cards = document.querySelectorAll(".profile-card")


cards.forEach(card => {
    const btn = card.querySelector("#follow-btn");
    let flag = 0;
    btn.addEventListener("click" , function(){
    if(flag === 0)
    {
        btn.innerHTML = "Following";
            btn.style.backgroundColor = "black";
            flag = 1;
        }
        else if (flag === 1)
        {
            btn.innerHTML = "Follow";
            btn.style.backgroundColor = "black";
            flag = 0;
        }
    
    });



    // heart script
    const heartBtn = card.querySelector(".heart");
    const imageView = card.querySelector("#image");

    imageView.addEventListener("click" ,(event) =>{
        console.log("hello");
        heartBtn.style.transform = "translate(-50%,-50%) scale(3)"
        heartBtn.style.opacity = 3;
        setTimeout(() => {
            heartBtn.opacity = 0;
        }, 1000);
        setTimeout(() => {
            heartBtn.style.transform = "translate(-50%,-50%) scale(0)"
        }, 2000);
    })
    
});


//  script for heart
