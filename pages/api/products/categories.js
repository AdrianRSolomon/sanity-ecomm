import nc from 'next-connect';

const handler = nc();

handler.get(async (req, res) => {
  const categories = ['Headphones', 'Earbuds', 'Watch'];
  res.send(categories);
});

export default handler;
