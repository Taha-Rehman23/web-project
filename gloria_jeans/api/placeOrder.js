export async function placeOrder(cart) {    
    const response = await fetch('http://localhost:80/gloria_jeans/php/placeOrder.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(cart)
    });
    const data = await response.json();
    return data;    
}
    
