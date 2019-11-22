let CreationTableauLangages =  () => {
    let langages = new Array('Html', 'CSS', 'Java', 'PHP')
    return langages

}

let CreationTableauNombres =  () => {
    let nombres = new Array(0,1,2,3,4,5)
    return nombres

}

let RemplacementElement =  (langages) => {
     langages.splice(2, 1, 'Javascript')
     return langages
}

let AjoutElementLangages =  (langages) => {
    langages.push("Ruby", "Python")
    return langages

}

let AjoutElementNombres =  (nombres) => {
    nombres.unshift(-2, -1)
    return nombres

}

let SuppressionPremierElement =  (langages) => {
    langages.shift(0)
    return langages

}

let SuppressionDernierElement =  (langages) => {
    langages.pop(3)
    return langages

}

let ConversionChaineTableau =  (reseaux_sociaux_chaine) => {
    
}

let ConversionTableauChaine =  (langages) => {

}

let TriTableau =  (reseaux_sociaux) => {

}

let InversionTableau =  (reseaux_sociaux) =>{

}
