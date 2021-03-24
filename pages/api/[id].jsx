export default async function dbHandler(req, res) {
  const quizId = req.query.id;
  const db = await import(`../../db/${quizId}.json`);

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');

  res.json(db);
}
