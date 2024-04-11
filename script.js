var timeout;
const scroll = new LocomotiveScroll({ /*locomotive js ka github pr under smooth sec of js copy*/
    el: document.querySelector('#main'), /*pura main ka andr website h to pura pr lagao*/
    smooth: true
});

function firstpageAnim(){ /*first hero page ki text animation*/
  var t1=gsap.timeline(); /*create a timeline t1*/
  t1.from("#nav",{ /*navbar ka text upar sa neecha(From)*/
    y: "-10", /*y ka alomh -10 neecha aao*/
    opacity: 0,
    duration: 1.5, /*take 1.5sec*/
    ease: Expo.easeInOut,

  })

 .to(".bounding-elem", { /*beech ka block text neecha sa upar(to)*/
    y: 0,
    ease: Expo.easeInOut,
    duration: 2,
    delay: -1, 
    stagger: 0.2, /*ek ek krke aya*/
  })
  .from("#herofooter", { /*footer ka text upar sa neecha(From)*/
    y: -10,
    opacity: 0, /*initially not visible*/
    duration: 1.5,
    delay: -1,
    ease: Expo.easeInOut,
  });
}
function pointerFollower(){ /*to make circle follow the ptr*/
    window.addEventListener("mousemove",function(dets){ /*on mouse move event on the window call this fun*/
    /*select the circle and keep on changing(transform)its coordinates(translate in x y) with the movement(clientx,y milta ha as prop on moving mouse)*/
       document.querySelector("#mini-circle").style.transform=`translate(${dets.clientX}px,${dets.clientY}px)`
    })
}

pointerFollower();
firstpageAnim();

/*to get img on mousemove over text on sec page*/

// teeno element ko sleect karo, uske baad teeno par ek mousemove lagao, jab mousemove ho to ye pata karo ki mouse kaha par hai, jiska matlab hai mouse ki x and y position pata karo, ab mouse ki x y position ke badle us image ko show karo and us image ko move karo, move karte waqt rotate karo, and jaise jaise mouse tez chale waise waise rotation bhi tez ho jaye

document.querySelectorAll(".elem").forEach(function(elem){ /*elem ka andr image h so select all elems and apply for each coz teeno pr apply krna h*/
 var rotate=0;  //to rotate img when moving mouse
 var diffrot=0; //purani position ka res ma nyi position ka diff

elem.addEventListener("mouseleave", function (dets) {
  gsap.to(elem.querySelector("img"), {
    opacity: 0,
    ease: Power3,
    duration: 0.5,
  });
});

elem.addEventListener("mousemove",function(dets){ /*on moving mouse over elem apply this fun*/
    var diff=dets.clientY-elem.getBoundingClientRect().top; /*us elem ka respect ma top sa distance nikalo, client y(puri screen ka res ma pointer ka y distance)-getbounding elem(gets distance of pointer from top of that elem)*/
    diffrot=dets.clientX-rotate; //diff in rot is new ptr location - purani loc
    rotate=dets.clientX; //curr position in x dir
    gsap.to(elem.querySelector("img"),{  /*from elem select img and apply these gsap effects*/
    opacity:1, /*0 sa 1 krdo(visible)*/
    ease:Power3,
    top:diff+"px", /*top sa dis is diff*/
    left:dets.clientX+"px", /*left sa dis of img is clientx*/
    rotate:gsap.utils.clamp(-20,20,diffrot*0.5), //max rotation left ya right ka 20 aur diffrot jitna h utna rotate
  });
    });
});

