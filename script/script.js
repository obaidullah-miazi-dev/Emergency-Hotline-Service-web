function getId(id) {
    return document.getElementById(id);
}

const cardBox = getId('card-box');
const callBtn = document.getElementsByClassName('call-btn')
const coin = getId('coin')




// call button functionality
cardBox.addEventListener('click', function (e) {
    if (e.target.className.includes('call-btn')) {
        const callBtn = e.target
        const cardTitle = callBtn.parentNode.parentNode.children[1].innerText
        const cardSubTitle = callBtn.parentNode.parentNode.children[2].innerText
        const cardNumber = callBtn.parentNode.parentNode.children[3].innerText
        const localTime = new Date().toLocaleTimeString()
        const coinNumber = Number(coin.innerText)
        const callCharge = 20
        const currentCoinNum = coinNumber - callCharge;
        if (currentCoinNum < 0) {
            alert('You dont have enough coins! You need at least 20 coins to make a call')
            return;
        }
        coin.innerText = currentCoinNum
        alert('📞 Calling  ' + cardSubTitle + ' '+ cardNumber + '...')

        const historyBox = getId('history')

        const newHistory = document.createElement('div')
        newHistory.innerHTML = `
            <div class="flex justify-between items-center bg-[#5c5c5c09] p-3 rounded-lg mt-4">
                            <div>
                                <h1 class="font-bold">${cardTitle}</h1>
                                <p>${cardNumber}</p>
                            </div>
                            <p>${localTime}</p>
                        </div>
        `

        historyBox.append(newHistory)

    }
})




// heart icon functionality
const heartIcon = document.getElementsByClassName('fa-heart')
const heartCount = getId('heart-count')

cardBox.addEventListener('click',function(e){
    if(e.target.className.includes('fa-heart')){
        const heartNum = Number(heartCount.innerText)
        const favList = heartNum+1
        heartCount.innerText= favList
        e.target.style.color = '#ff0000'  
    }
})



// clear button functionality
getId('clear-btn').addEventListener('click',function(){
    const historyBox = getId('history')
    historyBox.innerHTML=''
})



// copy button functionality 
const copyBtn = document.getElementsByClassName('copy-btn')
const copyCount= getId('copy-count');

cardBox.addEventListener('click',function(e){
    if(e.target.className.includes('copy-btn')){
        const copyBtn= e.target
        const copyNum= Number(copyCount.innerText)+1
        copyCount.innerText= copyNum

        const cardNumber = copyBtn.parentNode.parentNode.children[3].innerText
        navigator.clipboard.writeText(cardNumber)
        alert('copied : ' + cardNumber)

    }
})