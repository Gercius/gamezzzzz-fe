async function getGameData(id) {
  try {
    const res = await fetch(`http://localhost:4000/Games/${id}`);

    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }

    return res.json();
  } catch (err) {
    console.log(err);
  }
}

export default getGameData;