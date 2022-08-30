class Formatter {
  //add static methods here
  static capitalize(str){
    return str.charAt(0).toUpperCase()+str.slice(1);
  }

  static sanitize(str){
    const sanitzed = str.replace(/[^''a-z0-9 -]/gi,"")
    return sanitzed;
  }

  static titleize(str){
    let words = str.split(" ");
    const nWords = ["the","a","but","of","and","for","at","by", "from"];

    const titleizedWords = words.map((word) => {
      if(word === "the" || word==="a" || word==="an" || word==="but" || word==="of" || word==="and" || word==="for" || word=== "at" || word==="by" || word==="from" || word==="a"){
        if(word === words[0]){
          return word.charAt(0).toUpperCase()+word.slice(1);
        }else{
          return word.slice();
        }
      }else{
        return word.charAt(0).toUpperCase()+word.slice(1);
      }
    })
    return titleizedWords.join(" ");
  }
}