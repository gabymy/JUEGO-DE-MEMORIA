document.addEventListener('DOMContentLoaded', () => {
	const cardArray = [
		{
			name: 'ARBOL',
			img: 'img/ARBOL.png'
		},
		{
			name: 'BOLA DE NIEVE',
			img: 'img/BOLA DE NIEVE.png'
		},
		{
			name: 'BOLSA',
			img: 'img/BOLSA.png'
		},
		{
			name: 'PAPA NOEL',
			img: 'img/PAPA NOEL.png'
		},
		{
			name: 'PUERTA',
			img: 'img/PUERTA.png'
		},
		{
			name: 'VELA',
			img: 'img/VELA.png'
		},
		{
			name: 'CAMAPANA',
			img: 'img/CAMPANA.png'
		},
		{
			name: 'CUTE',
			img: 'img/CUTE.png'
		},
		{
			name: 'GORRO',
			img: 'img/GORRO.png'
		}
        {
			name: 'ARBOL',
			img: 'img/ARBOL.png'
		},
		{
			name: 'BOLA DE NIEVE',
			img: 'img/BOLA DE NIEVE.png'
		},
		{
			name: 'BOLSA',
			img: 'img/BOLSA.png'
		},
		{
			name: 'PAPA NOEL',
			img: 'img/PAPA NOEL.png'
		},
		{
			name: 'PUERTA',
			img: 'img/PUERTA.png'
		},
		{
			name: 'VELA',
			img: 'img/VELA.png'
		},
		{
			name: 'CAMAPANA',
			img: 'img/CAMPANA.png'
		},
		{
			name: 'CUTE',
			img: 'img/CUTE.png'
		},
		{
			name: 'GORRO',
			img: 'img/GORRO.png'
		}
		
	]	

	cardArray.sort(() => 0.5 - Math.random())

	const grid = document.querySelector('.grid')
	var cardsChosen = []
	var cardsChosenId = []
	const cardsWon = []
	const resultDisplay = document.querySelector('#score')

	function createBoard(){
		for(let i = 0; i<cardArray.length; i++){
			var card = 	document.createElement('img')
			card.setAttribute('src', 'images/back.jpg')
			card.setAttribute('data-id', i)
			card.addEventListener('click', flipCard)
			grid.appendChild(card)
		}
	}
	function checkForMatch(){
		var cards = document.querySelectorAll('img')
		const optionOneId = cardsChosenId[0]
		const optionTwoId = cardsChosenId[1]

		if(optionOneId==optionTwoId){
			cards[optionOneId].setAttribute('src', 'images/back.jpg')
			cards[optionTwoId].setAttribute('src', 'images/back.jpg')
			alert('Hey! estas dandole click a la misma carta')
		}
		else if(cardsChosen[0]===cardsChosen[1]){
			alert('Encontraste un par, ¡genial!')
			cards[optionOneId].setAttribute('src', 'images/blank.png')
			cards[optionTwoId].setAttribute('src', 'images/blank.png')
			cards[optionOneId].removeEventListener('click', flipCard)
			cards[optionTwoId].removeEventListener('click', flipCard)
			cardsWon.push(cardsChosen)
		}
		else{
			cards[optionOneId].setAttribute('src', 'images/back.jpg')
			cards[optionTwoId].setAttribute('src', 'images/back.jpg')
			alert('intenta de nuevo')
		}
		cardsChosen=[]
		cardsChosenId = []
		resultDisplay.textContent = cardsWon.length
		if(cardsWon.length===cardArray.length/2){
			resultDisplay.textContent = "Felicidades, encontraste todos los pares."
		}
	}
	function flipCard(){
		var cardId = this.getAttribute('data-id')
		cardsChosen.push(cardArray[cardId].name)
		cardsChosenId.push(cardId)
		this.setAttribute('src', cardArray[cardId].img)
		if(cardsChosen.length === 2){
			setTimeout(checkForMatch, 500)
		}
		
	}

	createBoard()


})