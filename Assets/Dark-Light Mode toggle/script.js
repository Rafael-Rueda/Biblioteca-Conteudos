$frame = document.getElementById('frame-id01') 
$circle = $frame.firstElementChild
$sun = $circle.firstElementChild
$moon = $sun.nextElementSibling
$sky = $moon.nextElementSibling
$ground = $sky.nextElementSibling

function $day() {
    $sun.style.animation = 'cicle_sun_reverse .5s ease-in-out forwards'
    $sky.style.backgroundColor = 'skyblue'
    $ground.style.backgroundColor = 'palegoldenrod'
    $moon.style.animation = 'cicle_moon_reverse .5s ease-in-out forwards' 
}

function $night() {
    $sun.style.animation = 'cicle_sun .5s ease-in-out forwards'
    $sky.style.backgroundColor = '#1a1c29'
    $ground.style.backgroundColor = '#3d3c2d'
    $moon.style.animation = 'cicle_moon .5s ease-in-out forwards' 
}

let $toggleStateId01 = 0

$circle.addEventListener('click', () => {
    if ($toggleStateId01 === 0) {
        $night()
        $toggleStateId01 = 1
    } else {
        $day()
        $toggleStateId01 = 0
    }
    
})