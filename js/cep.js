async function getAdressByCep () {
    const cep = document.getElementById('cep').value;
    try{
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data = await response.json();
      console.log(data);
      document.getElementById('rua').innerHTML = `<p>${data.logradouro}</p>`
      document.getElementById('bairro').innerHTML = `<p>${data.bairro}</p>`
      document.getElementById('cidade').innerHTML = `<p>${data.localidade}</p>`
    } catch (error) {
      aler(error.message);
    }
  }