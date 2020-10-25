const toggle = document.querySelector('.pricing__switch input');
const price = document.querySelectorAll('.card__price-value');
const monthPlans = ['19.99', '24.99', '39.99'];
const annualPlans = ['199.99', '249.99', '399.99'];

const changePrice = (pricePlan) => {
    for (let i = 0; i < price.length; i++) {
        price[i].textContent = pricePlan[i]
    }
}

const switchPlan = () => {
    toggle.toggleAttribute('checked');
    if (toggle.hasAttribute('checked')) {
        changePrice(monthPlans)
    } else {
        changePrice(annualPlans)
    }
};

toggle.addEventListener('click', switchPlan);
