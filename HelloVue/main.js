let pageData = {
    productName:"Book a Cruise to the Moon",
    productDescription:"Cruise to the moon in our luxurious shuttle. Watch the astronauts working outside the International Space Station.",
    imageSrc:[
        "HelloVue/images/asteroid.jpg",
        "HelloVue/images/fantasy.jpg",
        "HelloVue/images/space.jpg",
        "HelloVue/images/spaceship.jpg"

    ],
    h2ClassController:{
        centered:true,
        colorFont:false
    },
    pStyleController:{
        'margin-left':'50px',
        color:'blue',
        'font-size':'20px',
        'font-style':'italic'
    },
    imageStyleController:{
        margin:'auto',
        display:'block',
        width:'50%'
    },
    imageAlt:"Photo from Space"
};

const App = Vue.createApp({
    data(){
        return pageData;
    }
});

App.mount("#app");