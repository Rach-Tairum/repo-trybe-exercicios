const express = require('express');

const app = express();
app.use(express.json());
const Authors = require('./models/Authors');
const { allBooks, getByAuthorId, findId } = require('./models/Books');

app.get('/authors', async (_req, res) => {
  const authors = await Authors.getAll();

  res.status(200).json(authors);
});

app.get('/authors/:id', async (req, res) => {
	const { id } = req.params;

	const author = await Authors.findById(id);

	if (!author) return res.status(404).json({ message: 'Not found' });

	res.status(200).json(author);
});

app.post('/authors', async (req, res) => {
	const { first_name, middle_name, last_name } = req.body;

	if (!Authors.isValid(first_name, middle_name, last_name)) {
		return res.status(400).json({ message: 'Dados inválidos' });
	}

	await Authors.create(first_name, middle_name, last_name);

	res.status(201).json({ message: 'Autor criado com sucesso! '});
});

app.get('/books', async (_req, res) => {
  
  const books = await allBooks();

  res.status(200).json(books);
});

app.get('/books/search', async (req, res) => {
  const { name } = req.query;

  const authorsBooks = await getByAuthorId(name);

  res.status(200).json(authorsBooks);
});

app.get('/books/:id', async (req, res) => {
	const { id } = req.params;

	const book = await findId(id);

	if (!book) return res.status(404).json({ message: 'Not found' });

	res.status(200).json(book);
});

app.post('/books', async (req, res) => {
	const { title, author_id } = req.body;

	if (!bookIsValid(title, author_id)) {
		return res.status(400).json({ message: 'Dados inválidos' });
	}

	await create(title, author_id);

	res.status(201).json({ message: 'Autor criado com sucesso! '});
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
	console.log(`Ouvindo a porta ${PORT}`);
});