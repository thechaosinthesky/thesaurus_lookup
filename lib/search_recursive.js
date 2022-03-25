const dictionary = ["a","about","all","an","and","angel","are","as","at","be","but","by","can","do","dog","exchange","for","form","free","from","has","have","home","hope","if","in","info","information","is","it","life","more","my","new","no","not","of","on","one","or","other","our","page","search","that","the","this","to","us","was","we","will","with","you","your"]

const thesaurus = {search: ["find"], page: ["document"], exchange: ["switch", "swap"], life: ["living"]}

class WordSearch {

  search(term){
    const results = new Array();
    const thesaurusKeys = Object.keys(thesaurus);
    const synonyms = thesaurusKeys.filter((key) => { return term.includes(key) });

    function generateSuggestion(searchTerm, synonym){
      let likeTerms = thesaurus[synonym];
      let newTerm = searchTerm;
      for(const related of likeTerms){
        newTerm = newTerm.replace(synonym, related);
      }
      results.push(newTerm);
      return newTerm;
    }

    function generateSuggestions(searchTerm, foundSynonyms){
      let synonym = foundSynonyms.shift();
      let suggestion = generateSuggestion(searchTerm, synonym);
      for(const synonym of synonyms){
        generateSuggestion(suggestion, synonym);
      }

      if(foundSynonyms.length > 0){
        generateSuggestions(searchTerm, foundSynonyms)
      }
    }

    generateSuggestions(term, synonyms.slice())

    const resultSet = new Set(results);
    return resultSet
  }
}

const searchEngine = new WordSearch();

// const searchResults = searchEngine.search("mysearchpage");
const searchResults = searchEngine.search("mysearchpagelife")
// searchEngine.search("testingtesttest")
// searchEngine.search("lifepagesearch")
// searchEngine.search("")

console.log("RESULTS");
console.log(searchResults);
