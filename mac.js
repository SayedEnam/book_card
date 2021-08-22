// variable declare
let memory = 0;
let storage = 0;
let delivery = 0;
let grandTotal;
const subTotal = document.getElementById('sub-total');

// function of upgrade memory
function upgradeMemory(upgrade){
    const extraMemoryField = document.getElementById('extra-memory-cost');
    if(upgrade){
        extraMemoryField.innerText = 0;
        memory = 0;
    }else{
        extraMemoryField.innerText = 180;
        memory = 180;
    }
    calculateTotal();
}
// unified memory
document.getElementById('default-memory').addEventListener('click', function(){
    upgradeMemory(true);
})
document.getElementById('unified-memory').addEventListener('click', function(){
    upgradeMemory(false);
})

// storage
document.getElementById('default-storage').addEventListener('click', function(){
    const extraStorageField = document.getElementById('extra-storage-cost');
    extraStorageField.innerText = 0;
    storage = 0;
    calculateTotal();
})

document.getElementById('gb-storage').addEventListener('click', function(){
    const extraStorageField = document.getElementById('extra-storage-cost');
    extraStorageField.innerText = 100;
    storage = 100;
    calculateTotal();
})

document.getElementById('tb-storage').addEventListener('click', function(){
    const extraStorageField = document.getElementById('extra-storage-cost');
    extraStorageField.innerText = 180;
    storage = 180;
    calculateTotal();
})

// function of delivery option
function deliveryOption(charge){
    const deliveryField = document.getElementById('delivery-cost');
    if(charge){
        deliveryField.innerText = 0;
        delivery = 0;
    }else{
        deliveryField.innerText = 20;
        delivery = 20;
    }
    calculateTotal();
}
// delivery option
document.getElementById('free-delivery').addEventListener('click', function(){
    deliveryOption(true);
})
document.getElementById('delivery-charge').addEventListener('click', function(){
    deliveryOption(false);
})

// function of sub total
function calculateTotal(){
    subTotal.innerText = memory + storage + delivery + 1299;
    calculateGrandTotal();
}

// function of grade total
function calculateGrandTotal(){
    const promoField = document.getElementById('promo-field');
    if(promoField.value == 'stevekaku'){
        discount = parseFloat(subTotal.innerText) * 0.2;
        grandTotal = parseFloat(subTotal.innerText) - discount;
    }else{
        grandTotal = parseFloat(subTotal.innerText);
    }
    document.getElementById('grand-total').innerText = grandTotal;
    promoField.value = '';
}
// grade total price
document.getElementById('apply-button').addEventListener('click', calculateGrandTotal);
// ----------------finished------------------