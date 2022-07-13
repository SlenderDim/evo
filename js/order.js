const btnOrder = document.getElementById('btnOrder')
const order = document.getElementById('order')
const body = document.getElementById('body')
const closeBtn = document.getElementById('closeBtn')

btnOrder.addEventListener('click', e => {
    order.classList.add('show')
    body.classList.add('fixed')
})

order.addEventListener('click', e => {
    const target = e.target


    console.log(target);
    

    if (target.matches('.order') || target.matches('#closeBtn')) {
        order.classList.remove('show')
        body.classList.remove('fixed')
    }
})