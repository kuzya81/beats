let myMap;

const init =() =>{
    myMap = new ymaps.Map("map",{
        center: [59.987945, 30.216766],
        zoom: 14
    });

    const coords = [
     [59.988211,30.212303],
     [59.987190,30.219337]
    
    ]
    const myCollection = new ymaps.GeoObjectCollection({},{
        draggable: false,
        iconLayout: 'default#imgage',
        iconImageHref: "./img/marker.png",
    
        
    })
    coords.forEach (coord =>{
        myCollection.add(new ymaps.Placemark(coord));
    })
    myMap.geoObjects.add(myCollection);
};
ymaps.ready(init);