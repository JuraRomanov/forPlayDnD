
const BASE_URL = 'https://www.dnd5eapi.co'



export async function getAllRaces() {
    const classIndexes = await fetch(BASE_URL + "/api/races").then((response) =>
      response.json()
    );
    return Promise.all(
      classIndexes.results.map((index) =>
        fetch(BASE_URL + index.url).then((response) => response.json())
      )
    );
  }

export async function getAllClasses() {
    const classIndexes = await fetch(BASE_URL + "/api/classes").then((response) =>
      response.json()
    );
    return Promise.all(
      classIndexes.results.map((index) =>
        fetch(BASE_URL + index.url).then((response) => response.json())
      )
    );
  }
