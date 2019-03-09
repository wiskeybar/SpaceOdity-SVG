

document.querySelectorAll('.skeleton').forEach(skeleton => skeleton.style.animationDuration =
    `${(Math.random() * 15) + 5}s`)
document.querySelectorAll('.container').forEach(container => container.style.animationDuration =
    `${(Math.random() * 15) + 5}s`)


const ship = document.querySelector('.container__ship'),
    shipStyle = window.getComputedStyle(ship),
    planets = document.querySelectorAll('.skeleton'),
    shipSVG = document.querySelector('.ship');


planets.forEach(planet => planet.addEventListener('click', (e) => {
    e.target.getBoundingClientRect()
    ship.style.top = `${e.target.getBoundingClientRect().y}px`
    ship.style.left = `${e.target.getBoundingClientRect().x + (e.target.getBoundingClientRect().width) / 3}px`


    const clicked = e.target.getBoundingClientRect();
    const vertical = (window.innerHeight / 2);
    const horizontal = (window.innerWidth / 2);
    const shipTop = shipStyle.getPropertyValue("top").replace("px", "");
    const shipLeft = shipStyle.getPropertyValue("left").replace("px", "");



    // ship bottom right
    if ((shipLeft > horizontal) && (shipTop > vertical) && (clicked.x > horizontal) && (clicked.y < vertical)) {
        shipSVG.style.transform = 'rotateZ(110deg)'
    }
    if ((shipLeft > horizontal) && (shipTop > vertical) && (clicked.x < horizontal) && (clicked.y < vertical)) {
        shipSVG.style.transform = 'rotateZ(90deg)'
    }
    if ((shipLeft > horizontal) && (shipTop > vertical) && (clicked.x < horizontal) && (clicked.y > vertical)) {
        shipSVG.style.transform = 'rotateZ(40deg)'
    }
    if ((shipLeft > horizontal) && (shipTop > vertical) && (clicked.x > horizontal) && (clicked.y > vertical)) {
        shipSVG.style.transform = 'rotateZ(20deg)'
    }
    // 

    // ship top right

    if ((shipLeft > horizontal) && (shipTop < vertical) && (clicked.x > horizontal) && (clicked.y > vertical)) {
        shipSVG.style.transform = 'rotateZ(-40deg)'
    }
    if ((shipLeft > horizontal) && (shipTop < vertical) && (clicked.x < horizontal) && (clicked.y < vertical)) {
        shipSVG.style.transform = 'rotateZ(40deg)'
    }

    if ((shipLeft > horizontal) && (shipTop < vertical) && (clicked.x < horizontal) && (clicked.y > vertical)) {
        shipSVG.style.transform = 'rotateZ(-25deg)'
    }

    if ((shipLeft > horizontal) && (shipTop < vertical) && (clicked.x > horizontal) && (clicked.x < shipLeft)) {
        shipSVG.style.transform = 'rotateZ(100deg)'
    }

    // 

    // ship top left 

    if ((shipLeft < horizontal) && (shipTop < vertical) && (clicked.x > horizontal) && (clicked.y < vertical)) {
        shipSVG.style.transform = 'rotateZ(185deg)'
    }

    if ((shipLeft < horizontal) && (shipTop < vertical) && (clicked.x > horizontal) && (clicked.y > vertical)) {
        shipSVG.style.transform = 'rotateZ(235deg)'
    }
    if ((shipLeft < horizontal) && (shipTop < vertical) && (clicked.x < horizontal) && (clicked.y > vertical)) {
        shipSVG.style.transform = 'rotateZ(300deg)'
    }
    if ((shipLeft < horizontal) && (shipTop < vertical) && (clicked.x < horizontal) && (clicked.y < vertical)) {
        shipSVG.style.transform = 'rotateZ(90deg)'
    }
    if ((shipLeft < horizontal) && (shipTop < vertical) && (clicked.x < horizontal) && (clicked.x > shipLeft)) {
        shipSVG.style.transform = 'rotateZ(130deg)'
    }

    // 

    // ship bottom left

    if ((shipLeft < horizontal) && (shipTop > vertical) && (clicked.x > horizontal) && (clicked.y > vertical)) {
        shipSVG.style.transform = 'rotateZ(200deg)'
    }

    if ((shipLeft < horizontal) && (shipTop > vertical) && (clicked.x > horizontal) && (clicked.y < vertical)) {
        shipSVG.style.transform = 'rotateZ(160deg)'
    }

    if ((shipLeft < horizontal) && (shipTop > vertical) && (clicked.x < horizontal) && (clicked.y < vertical)) {
        shipSVG.style.transform = 'rotateZ(100deg)'
    }

    if ((shipLeft < horizontal) && (shipTop > vertical) && (clicked.x < horizontal) && (clicked.x > shipLeft)) {
        shipSVG.style.transform = 'rotateZ(130deg)'
    }

}))


class PlanetName {
    constructor(name, target) {
        this.name = name;
        this.target = target;
    }
    giveName() {
        const gradientColor1 = this.target.querySelector(`.offset1`).style.stopColor
        const gradientColor2 = this.target.querySelector('.offset2').style.stopColor
        this.target.querySelector(`.${this.name}Text`).style.opacity = "1";
        document.documentElement.style.setProperty('--var-gradient-first', gradientColor1);
        document.documentElement.style.setProperty('--var-gradient-second', gradientColor2)
    }
    removeName() {
        this.target.querySelector(`.${this.name}Text`).style.opacity = "0"
    }


}


planets.forEach(planet => {
    planet.addEventListener('mouseover', (e) => {
        let thisPlanet = new PlanetName(e.target.parentNode.dataset.planet, e.target.parentNode)
        thisPlanet.giveName()
    })
    planet.addEventListener('mouseout', (e) => {
        let thisPlanet = new PlanetName(e.target.parentNode.dataset.planet, e.target.parentNode)
        thisPlanet.removeName()
    })
})