function techList(techs, nomes) {
    let alfabetica = [];
    alfabetica = techs.sort();

    let enteresses = [];
  
    if (alfabetica.length !== 0) {
        for (let i = 0; i < alfabetica.length; i+= 1){
            enteresses.push ({
              tech: alfabetica[i],
              name: nomes,
            },);
        }
        
        return enteresses;
    } 
    
    return 'Vazio!';
  }

  module.exports = techList;