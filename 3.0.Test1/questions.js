/**
 * Exercice sur les chaines de caractères.
 * Trouvez la façon de faire la plus optimal.
 * Il peut y avoir plusieur façon de faire.
 */
let tailleString = (texte) => {
    return texte.length;
}
let remplaceECar = (texte) => {
    let a = texte.indexOf("e")
    let text =  texte.substr(" ", a) + " " +texte.substr(a + 1 , texte.length);
    return text;
}
let concatString = (texte1, texte2) => {
    return texte1.concat(texte2)

}
let afficherCar5 =  (texte) => {
    let index = 4
    return texte.charAt(index)

}
let afficher9Car =  (texte) => {
    return texte.slice(0,9)

}
let majusculeString =  (texte) => {
    return texte.toUpperCase();

}
let minusculeString =  (texte) => {
    return texte.toLowerCase();

}
let SupprEspaceString =  (texte) => {
    return texte.trim();

}
let IsString =  (texte) => {
    return texte.includes("");

}

let AfficherExtensionString =  (texte) => {
    return texte.slice((texte.lastIndexOf('.') - 1 >>> 0) + 2);

}
let NombreEspaceString =  (texte) => {
    return texte.split(" ").length-1
    

}
let InverseString =  (texte) => {
    return texte.split('').reverse().join('');
    /* Transforme la chaine en tableau, inverse les éléments du tableau puis retransforme le tableau en string*/
   

}

/**
 * Exercices sur les nombres et les caluls mathématiques
 */
let calculPuissance =  (x, y) => {
    return Math.pow(x, y);


}
let valeurAbsolue =  (nombre) => {
    return Math.abs(nombre);

}
let valeurAbsolueArray =  (array) => {
    let string = array.map(function(i){
        return Math.abs(i)
    })
    return string
    
    
}


let sufaceCercle =  (rayon) => {
    return Math.round(Math.PI * (rayon * rayon))
}

let hypothenuse =  (ab, ac) => {
    return Math.hypot(ab, ac);

}
let calculIMC =  (poids, taille) => {

    let imc = (poids/(taille*taille))
    return Math.round(imc*100)/100;

}
