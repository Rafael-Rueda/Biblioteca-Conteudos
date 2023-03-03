useEffect(() => {

    const ml_m01a_button = document.querySelector(`.ml_m01a`)?.firstElementChild?.firstElementChild?.nextElementSibling as HTMLElement;
    const ml_m01a_nav = document.querySelector('.ml_m01a') as HTMLElement;
    let ml_m01a_aberto = true;
    if (ml_m01a_button) {
        ml_m01a_button.addEventListener('mouseover', () => {
            if (ml_m01a_aberto) {
                (ml_m01a_button?.firstElementChild?.firstElementChild?.nextElementSibling as HTMLElement).style.display = 'none';
                (ml_m01a_button?.firstElementChild?.firstElementChild as HTMLElement).style.cssText = 'transform: rotate(-45deg); width: 20px;';
                (ml_m01a_button?.firstElementChild?.lastElementChild as HTMLElement).style.cssText = 'transform: rotate(45deg); width: 20px;';
            } else {
                (ml_m01a_button?.firstElementChild?.firstElementChild?.nextElementSibling as HTMLElement).style.display = 'none';
                (ml_m01a_button?.firstElementChild?.firstElementChild as HTMLElement).style.cssText = 'transform: rotate(45deg); width: 20px;';
                (ml_m01a_button?.firstElementChild?.lastElementChild as HTMLElement).style.cssText = 'transform: rotate(-45deg); width: 20px;';
            }

        })

        ml_m01a_button.addEventListener('mouseout', () => {
            (ml_m01a_button?.firstElementChild?.firstElementChild?.nextElementSibling as HTMLElement).style.display = 'block';
            (ml_m01a_button?.firstElementChild?.firstElementChild as HTMLElement).style.cssText = 'transform: rotate(0deg); width: 30px; transition: none;';
            (ml_m01a_button?.firstElementChild?.lastElementChild as HTMLElement).style.cssText = 'transform: rotate(0deg); width: 30px; transition: none;';
        })

        ml_m01a_button.addEventListener('click', () => {
            if (ml_m01a_aberto) {
                ml_m01a_nav.style.cssText = 'transform: translate(-80%, 0);'
                ml_m01a_aberto = false;
            } else {
                ml_m01a_nav.style.cssText = 'transform: translate(0, 0);'
                ml_m01a_aberto = true;
            }
        })
    }

}, [])