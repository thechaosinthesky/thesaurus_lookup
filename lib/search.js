const dictionary = ["a","about","all","an","and","angel","are","as","at","be","but","by","can","do","dog","exchange","for","form","free","from","has","have","home","hope","if","in","info","information","is","it","life","more","my","new","no","not","of","on","one","or","other","our","page","search","that","the","this","to","us","was","we","will","with","you","your"]

const thesaurus = {search: ["find"], page: ["document"], exchange: ["switch", "swap"], life: ["living"]}

class WordSearch {

  search(term){
    const results = new Array();
    const thesaurusKeys = Object.keys(thesaurus);

    const synonyms = new Array();
    for(const key of thesaurusKeys){
      if (term.includes(key)) synonyms.push(key);
    }

    // let combinations = synonyms.reduce((currentArray, synonym, index, originalSynonyms) => {
    //   currentArray.push(new Array(synonym));
//
    //   for(const syn of originalSynonyms){
    //     if(synonym != syn){
    //       let newCombo = new Array(synonym, syn);
    //       newCombo.sort();
    //       if(!currentArray.includes(newCombo)) currentArray.push(newCombo);
    //     }
    //   }
    //
    //   return currentArray;
    // }, []);

    // let res = combinations.reduce((currentRes, combo, index, combinations) => {
    //   let newTerm = term.slice();
    //   for(const synonym of combo){
    //     let likeTerms = thesaurus[synonym];
    //     for(const related of likeTerms){
    //       newTerm = newTerm.replace(synonym, related);
    //     }
    //   }
    //   currentRes.push(newTerm);
    //   return currentRes;
    // }, []);

    let res = synonyms.reduce((currentRes, synonym, index, combinations) => {
      let newTerm = term.slice();
      // for(const synonym of combo){
        let likeTerms = thesaurus[synonym];
        for(const related of likeTerms){
          newTerm = newTerm.replace(synonym, related);
        }
      // }
      currentRes.push(newTerm);
      return currentRes;
    }, []);


    const resultSet = new Set(res);
    return resultSet
  }
}

const searchEngine = new WordSearch();

const searchResults = searchEngine.search("mysearchpage");
// searchEngine.search("mysearchpagelife")
// searchEngine.search("testingtesttest")
// searchEngine.search("lifepagesearch")
// searchEngine.search("")

console.log("RESULTS");
console.log(searchResults);
