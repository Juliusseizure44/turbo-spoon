const express = require('express');
const path = require('path');
const app = express();

app.set('views',path.join(__dirname,'views'));
app.set('view engine', 'pug');

app.get('/', (req, res) => {
	let 
	res.render('index', {
		title: 'Candy'
	});
});
app.get('/page', (req, res) => {
	res.render('page', {
		title: 'Page'
	});
});
app.listen('3000', () => {
	console.log('server has begun hacking');
});