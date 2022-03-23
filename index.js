// Code your solutions in this file
function writeCards(guests, giftType) {
    const thankYouMessages = [];
    for (const guest of guests) {
        const thankYouMessage = `Thank you, ${guest}, for the wonderful ${giftType} gift!`;
        thankYouMessages.push(thankYouMessage);
    }
    return thankYouMessages;
}

function countDown(number) {
    while(number>=0) {
        console.log(number);
        number--
    }
}