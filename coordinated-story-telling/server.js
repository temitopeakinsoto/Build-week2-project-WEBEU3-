const express = require('express');
const bodyParser = require('body-parser');
const CORS = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(CORS()); 

const stories = [
	{
		id: 0,
		title: 'My Lambda Experience',
		author: 'Temitope Akinsoto',
		myStory: "The client agrees that the operation of the account is subject to compliance by Lead Asset Management with all laws, regulations, administrative rules and orders which may from time to time be   authorized by the Federal Government of Nigeria and/or any other regulatory authorities in Nigeria.  b. 2 In consideration of Lead Asset Management allowing the client to operate the account from time to time, the client hereby undertakes to hold Lead Asset Management harmless and keep Lead Asset Management indemnified from all losses, costs, or damages Lead Asset Management may sustain or be put to. ",
	},
	{
		id: 1,
		title: 'How I learnt how to Invest',
		author: 'Femi Anjorin',
		myStory: "The client agrees that the operation of the account is subject to compliance by Lead Asset Management with all laws, regulations, administrative rules and orders which may from time to time be   authorized by the Federal Government of Nigeria and/or any other regulatory authorities in Nigeria.  b. 2 In consideration of Lead Asset Management allowing the client to operate the account from time to time, the client hereby undertakes to hold Lead Asset Management harmless and keep Lead Asset Management indemnified from all losses, costs, or damages Lead Asset Management may sustain or be put to. ",
	},
	{
		id: 2,
		title: 'How I learnt how to code',
		author: 'David Kuseh',
		myStory: "The client agrees that the operation of the account is subject to compliance by Lead Asset Management with all laws, regulations, administrative rules and orders which may from time to time be   authorized by the Federal Government of Nigeria and/or any other regulatory authorities in Nigeria.  b. 2 In consideration of Lead Asset Management allowing the client to operate the account from time to time, the client hereby undertakes to hold Lead Asset Management harmless and keep Lead Asset Management indemnified from all losses, costs, or damages Lead Asset Management may sustain or be put to. ",
	},
	{
		id: 3,
		title: 'Write a blog post today',
		author: 'Alison Ludick',
		myStory: "The client agrees that the operation of the account is subject to compliance by Lead Asset Management with all laws, regulations, administrative rules and orders which may from time to time be   authorized by the Federal Government of Nigeria and/or any other regulatory authorities in Nigeria.  b. 2 In consideration of Lead Asset Management allowing the client to operate the account from time to time, the client hereby undertakes to hold Lead Asset Management harmless and keep Lead Asset Management indemnified from all losses, costs, or damages Lead Asset Management may sustain or be put to. ",
	},
	{
		id: 4,
		title: 'How I made money trading online',
		author: 'Martin Twum Mensah',
		myStory: "The client agrees that the operation of the account is subject to compliance by Lead Asset Management with all laws, regulations, administrative rules and orders which may from time to time be   authorized by the Federal Government of Nigeria and/or any other regulatory authorities in Nigeria.  b. 2 In consideration of Lead Asset Management allowing the client to operate the account from time to time, the client hereby undertakes to hold Lead Asset Management harmless and keep Lead Asset Management indemnified from all losses, costs, or damages Lead Asset Management may sustain or be put to. ",
	},
	{
		id: 5,
		title: 'Learn React in 20 days',
		author: 'Justin Irabor',
		myStory: "The client agrees that the operation of the account is subject to compliance by Lead Asset Management with all laws, regulations, administrative rules and orders which may from time to time be   authorized by the Federal Government of Nigeria and/or any other regulatory authorities in Nigeria.  b. 2 In consideration of Lead Asset Management allowing the client to operate the account from time to time, the client hereby undertakes to hold Lead Asset Management harmless and keep Lead Asset Management indemnified from all losses, costs, or damages Lead Asset Management may sustain or be put to. ",
	},
];

app.get('/api/stories', (req, res) => {
	res.send(stories);
});

app.get('/api/stories/:id', (req, res) => {
	const story = stories.filter(story => story.id.toString() === req.params.id)[0];
	res.status(200).json(story);
});

app.listen(5000, () => {
	console.log('Server listening on port 5000');
});
