// variaveis
const button = document.querySelector('button');
//convertando pra array usando spreed [...]
const erros = [...document.querySelectorAll('small')];

// Convertendo um array
// const errosArray = Array.from(erros)

// Funcões
function validadadeForm() {
  const nome = document.querySelector('.nome').value;
  const senha = document.querySelector('.senha').value;

  // Metodo de forEach para percorrer o array 
  erros.forEach((erro) => {
    // Condicao
    if (nome !== '' && senha !== '') {
      erro.classList.remove('erro')
    }else{
      erro.classList.add('erro')
    }
  });
}

// Eventos              // Callback(me liga de volta)  
button.addEventListener('click', validadadeForm);
