async function getPrevisao () {
    const lat = document.getElementById('latitude').value;
    const lon = document.getElementById('longitude').value;
    try{
      const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m`);
      const data = await response.json();
      console.log(data);
      document.getElementById('resposta').innerHTML = "";
      for (let index= 0; index < 1; index++){
        document.getElementById('resposta').innerHTML += `<div> Previsão de tempo de acordo com a região: ${Math.floor(data.hourly.temperature_2m[0])}° C</div>`;
      }
    } catch (error) {
      aler(error.message);
    }
  }