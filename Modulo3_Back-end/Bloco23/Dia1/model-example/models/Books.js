const connection = require('./connection');
const Authors = require('./Authors');

const getByAuthorId = async (name) => {
  console.log(name);
  
 const [search] = connection.execute('SELECT B.title, CONCAT(A.first_name, " ", A.last_name) FROM model_example.books AS B INNER JOIN model_example.authors AS A ON A.id = B.author_id WHERE A.first_name LIKE ? ;', [`%${name}%`]);

 return search;
}

const allBooks = async () => {
  const [books] = await connection.execute('SELECT * FROM model_example.books;');

  return books;
}

const findId = async (id) => {
  const query = 'SELECT * FROM model_example.books WHERE id = ?'

  const [selectedBook] = await connection.execute(query, [id]);

  return selectedBook;
}

const bookIsValid = async (title, authorId) => {
	if (!title || typeof title !== 'string'|| title.length < 3) return false;
	if (!authorId || typeof authorId !== 'number' || !await Authors.findById(authorId)) return false;

	return true;
};

const create = async (title, authorId) => connection.execute(
  'INSERT INTO model_example.books (title, author_id) VALUES (?,?)',
  [title, authorId],
  );

module.exports = { allBooks, getByAuthorId, findId, bookIsValid, create };