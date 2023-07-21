async function getPageData(page, pageSize = 30) {
  try {
    const res = await fetch(`http://localhost:4000/Games?page=${page}&pageSize=${pageSize}`);

    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }

    return res.json();
  } catch (err) {
    console.log(err);
  }
}

export default getPageData;