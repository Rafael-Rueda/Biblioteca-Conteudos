function $initializeAnimationFlower1() {
    
    corolla_l1 = document.getElementById('frame-id02').firstElementChild.nextElementSibling
    corolla_l1.style.cssText = 'z-index: 3;'

    for(c = 1; c <= corolla_l1.children.length ;c++) {
        corolla_l1.children[c - 1].style.animation = `corolla_l1_petal_${c} 1s ease-in-out forwards`
    }

    corolla_l1.style.animation = 'corolla_l1_spin 1s ease-in-out forwards'
    setTimeout(() => {
        corolla_l1.style.cssText = 'z-index: 2;'
    },1000)
}

$initializeAnimationFlower1()