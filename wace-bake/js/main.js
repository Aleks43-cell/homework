(function () {

    //Бургер
    document.addEventListener('click', burgerInit)

    function burgerInit(e) {
        const burgerIcon = e.target.closest('.burger-icon')
        const burgerNavLik = e.target.closest('.nav__link')

        if (!burgerIcon && !burgerNavLik) return

        if (document.documentElement.clientWidth > 900) return

        if (!document.body.classList.contains('body--opened-menu')) {
            document.body.classList.add('body--opened-menu')
        } else {
            document.body.classList.remove('body--opened-menu')
        }
    }

    // Модалка

    const modal = document.querySelector('.modal')
    const modalButton = document.querySelector('.about__img-button')

    modalButton.addEventListener('click', openModal)
    modal.addEventListener('click', closeModal)

    function openModal(e) {
        e.preventDefault()
        document.body.classList.toggle('body--opened-modal')
    }

    function closeModal(e) {
        e.preventDefault()

        const target = e.target

        if (target.closest('.modal__cancel') || target.classList.contains('modal')) {
            document.body.classList.remove('body--opened-modal')
        }
    }

    // Табы

    const tabControls = document.querySelector('.tab-conrols')

    tabControls.addEventListener('cliсk', toggleTab)

    function toggleTab(e) {

        const tabControl = e.target.closest('.tab-conrols__link')

        if (!tabControl) return

        e.preventDefault()

        const tabContentID = tabControl.getAttribute('href')

        document.querySelector(tabContentID).classList.add('tab-content--show')

    }
})()

