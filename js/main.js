const orderidArray = [];
const orderItemsArray = [];
const orderPriceArray = [];
const orderArray = [];
const orderImageArray = [];

let i = 0;

function orderBasket(itemName, itemPrice, itemImage) {

    orderidArray.push(i);
    orderItemsArray.push(itemName);
    orderPriceArray.push(itemPrice);
    orderImageArray.push(itemImage)
    orderArray.push(itemName, itemPrice, itemImage);

    let orderList = document.getElementById('orderlist');

    //  create  the Li tag
    const orderItem = document.createElement('li');
    orderItem.className = 'd-flex justify-content-between alighn-items-center shadow-sm bg-body rounded-custom p-3 mb-2';



    //  create  the Li tag
    const orderItemPriceSpan = document.createElement('span');


    // add a text to li
    const orderItemName = document.createTextNode(itemName);
    const orderItemPrice = document.createTextNode('  $' + itemPrice);

    // Adjust text Color to text-denger

    orderItemPriceSpan.className = 'text-danger fw-bold ms-4 '
    orderItemPriceSpan.appendChild(orderItemPrice);

    const deleteButton = document.createElement('button');
    const deleteButtonText = document.createTextNode('X');
    deleteButton.appendChild(deleteButtonText);
    deleteButton.className = 'btn custom-btn '
    deleteButton.setAttribute('onclick', 'deleteItem(' + i + ', this )');



    // image section
    // Add image text
    const orderImageTag = document.createElement('img');
    orderImageTag.src = itemImage;
    orderImageTag.className = 'w-25 shadow-sm  rounded me-4';
    const orderItemLeftSide = document.createElement('span');

    // Combine this
    orderItemLeftSide.appendChild(orderImageTag);
    orderItemLeftSide.appendChild(orderItemName);
    orderItemLeftSide.appendChild(orderItemPriceSpan);


    // End Combine this


    orderItem.appendChild(orderItemLeftSide);
    orderItem.appendChild(deleteButton);
    orderList.appendChild(orderItem);
    totalItems()
    constItem()

    i++;
}

function totalItems() {
    document.getElementById('totalItems').innerText = orderItemsArray.length;

}

function constItem() {
    if (orderPriceArray.length === 0) {
        document.getElementById('totalConst').innerText = 0;
    } else {
        document.getElementById('totalConst').innerText = orderPriceArray.reduce(sumArray).toFixed(2);
        document.getElementById('amount').value = orderPriceArray.reduce(sumArray).toFixed(2);

        function sumArray(total, num) {
            return total + num;
        };
    }

};

function totalAmount() {

}

function orderBasketClear() {

    let orderList = document.getElementById('orderlist');
    document.getElementById('amount').value = 0;
    orderList.innerHTML = '';
    orderArray.length = 0;
    orderItemsArray.length = 0;
    orderPriceArray.length = 0;
    orderidArray.length = 0;
    orderImageArray.length = 0;
    i = 0;
    totalItems();
    constItem();
}

function deleteItem(orderId, button) {
    let orderList = document.getElementById('orderlist');
    const indexnum = orderidArray.indexOf(orderId);
    orderidArray.splice(indexnum, 1);
    orderItemsArray.splice(indexnum, 1);
    orderPriceArray.splice(indexnum, 1);
    orderImageArray.splice(indexnum, 1);
    totalItems();
    constItem();
    orderList.removeChild(button.parentElement)

}