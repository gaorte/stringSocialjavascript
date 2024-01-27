const username='g@orte'
const fullName='Julio Ortega'
const age='35'
const isStudent=true
const address={street:'Privada de Quinta Independencia',city:'Etla',state:'Oaxaca',zipCode:26569}
const hobbies=['programar','modelar en Blender','y animar en Unreal Engine']
const personalizedBio=`Hola soy${fullName}.
tengo ${age} años de edad
vivo en ${address.city}.
lo que mas amo es ${hobbies.join(', ')}.
sigueme en esta aventura de aprender en platzi`
console.log(personalizedBio)
document.getElementById("template").innerHTML = personalizedBio;