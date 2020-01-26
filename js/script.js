document.addEventListener('DOMContentLoaded', () => {
	"use strict";

	const orderTaxi = document.getElementById('order-taxi'),
	 blockTaxi = document.getElementById('block-taxi'),
	 btnExit = document.getElementById('btn-exit'),

	
	const orders = {
		name: '',
		tel: '',
		coment: ''
	};


	orderTaxi.addEventListener('click', () => {
		blockTaxi.style.display = 'block';
	});

	btnExit.addEventListener('click', () => {
		blockTaxi.style.display = '';
	});
});

