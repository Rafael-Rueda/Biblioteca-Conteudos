function $initializeAnimationFlower2() {
    frame = document.getElementById('frame-id03')
    corolla_l1 = frame.firstElementChild.nextElementSibling

    for(c = 1; c <= corolla_l1.children.length; c++) {
        corolla_l1.children[c - 1].style.animation = `id03_corolla_l1_petal_${c} 1s .${c}s ease-out forwards`
    }

    setTimeout(() => {
        frame.firstElementChild.style.animation = 'id03_expand_core 1s ease-out forwards'}
        ,1000)
}

$initializeAnimationFlower2()