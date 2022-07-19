function shoppingCart(item, cost, balance)
{
    if (cost < balance){
        return `Yes you can buy ${item}.`
    }
    else{
        return `You don't have suffcient balance.Item costs £ ${cost} and available balance is £ ${balance}.`
    }
}
console.log(shoppingCart('abc',140,50))