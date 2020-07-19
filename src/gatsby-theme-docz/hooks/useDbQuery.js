import { useStaticQuery, graphql } from 'gatsby'

export const useDbQuery = () => {
  try {
    const data = useStaticQuery(graphql`
      query {
        doczDb {
          id
          db
        }
      }
    `)

    const result = JSON.parse(data.doczDb.db);
    const rootReadme = result.entries.find((element) => element.key === 'README.md');
    rootReadme.value.name = 'Accueil';
    rootReadme.value.route = '/';
    return result;
  } catch (err) {
    console.error(err)
    console.error('Error when parsing docz database')
    return {}
  }
}
