function loaderAnimation() {
    const tl = gsap.timeline();

    tl.to(".yellow1", {
        top: "-100%",
        delay: 0.5,
        duration: 0.5,
        ease: "expo.out"
    })

    tl.from(".yellow2", {
        top: "100%",
        delay: 0.5,
        duration: 0.5,
        ease: "expo.out"
    }, 'loader')
    tl.to(".loader h1", {
        color: "#000",
        delay: 0.5,
        duration: 0.5
    }, 'loader')

    tl.to('.loader', {
        opacity: 0,
        display:"none"
    })
}

function locoScroll(){
    const scroll = new LocomotiveScroll({
        el: document.querySelector('#main'),
        smooth: true
    });
    
    document.querySelector('.footer p').addEventListener('click',()=>{
        scroll.scrollTo(0);
    })
    
}

loaderAnimation()
locoScroll();


const elems=document.querySelectorAll(".elem");
const page2=document.querySelector(".page2");

elems.forEach(elem=>{
    elem.addEventListener('mouseenter',()=>{
        const bgImgUrl=elem.getAttribute('data-img');
        page2.style.backgroundImage=`url(${bgImgUrl})`
    })
})