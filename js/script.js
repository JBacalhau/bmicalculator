/***************************** script calcular bmi const ********************************/
const cm = document.querySelector('#cm');
const kg = document.querySelector('#kg');

const hft = document.querySelector('#ft');
const hin = document.querySelector('#in');
const wst = document.querySelector('#st');
const wlbs = document.querySelector('#lbs');

const painelAzulx = document.querySelector('.painel-azul-x');
const painelAzuly = document.querySelector('.painel-azul-y');
const resultBMI = document.querySelector('.result-bmi');

const infoResult = document.querySelector('.result-bmi h4 span');
const infoIndica = document.querySelector('.infoIndica');
const infoNencontra = document.querySelector('.infoNencontra');

/***************************** script calcular bmi Imperial ********************************/
painelAzuly.addEventListener('click', function () {

    if (hft.value !== '' && hin.value !== '' && wst.value !== '' && wlbs.value !== '') {

        let aft = parseFloat(hft.value);
        let ain = parseFloat(hin.value);
        let pst = parseFloat(wst.value);
        let plbs = parseFloat(wlbs.value);

        // Convertendo altura para polegadas
        let height = aft * 12 + ain;

        // Convertendo peso para libras
        let weight = pst * 14 + plbs;

        // Calculando BMI
        let res = (weight * 703) / (height * height);

        painelAzuly.classList.toggle('show');
        resultBMI.classList.toggle('show');
        painelAzuly.style.display = 'none';
        resultBMI.style.display = 'block';

        infoResult.innerHTML = ` ${res.toFixed(1)}`;

        let recomenda = getRecomenda(height);

        // Oculta ambas as mensagens inicialmente
        infoIndica.style.display = 'none';
        infoNencontra.style.display = 'none';

        if (recomenda) {
            console.log("Exibindo recomendação:", recomenda);
            infoIndica.innerHTML = `Your BMI suggests you’re a healthy weight. Your ideal weight is between ${recomenda}`;
            infoIndica.style.display = 'block'; // Exibe a recomendação
        } else {
            console.log("Não há recomendação válida");
            infoNencontra.style.display = 'block'; // Exibe a mensagem de não encontrada
        }
    } else {
        alert('Fill in all the fields!')
    }
});

/*************************Tabela do IMC***********************/
function getRecomenda(height) {

    if (height >= 58 && height < 59) {
        return '6st 7lbs - 8st 3lbs';

    }

    else if (height >= 59 && height < 60) {
        return '6st 7lbs - 8st 3lbs';

    }

    else if (height >= 60 && height < 61) {
        return '6st 10lbs - 8st 7lbs';

    }

    else if (height >= 61 && height < 62) {
        return '6st 13lbs - 8st 11lbs';

    }

    else if (height >= 62 && height < 63) {
        return '7st 2lbs - 9st 1lbs';

    }

    else if (height >= 63 && height < 64) {
        return '7st 6lbs - 9st 5lbs';

    }

    else if (height >= 64 && height < 65) {
        return '7st 9lbs - 9st 9lbs';

    }

    else if (height >= 65 && height < 66) {
        return '7st 12lbs - 10st 1lbs';

    }

    else if (height >= 66 && height < 67) {
        return '8st 2lbs - 10st 2lbs';

    }

    else if (height >= 67 && height < 68) {
        return '8st 6lbs - 10st 8lbs';

    }

    else if (height >= 68 && height < 69) {
        return '8st 9lbs - 10st 13lbs';

    }

    else if (height >= 69 && height < 70) {
        return '8st 13lbs - 11st 4lbs';

    }

    else if (height >= 70 && height < 71) {
        return '9st 2lbs - 11st 8lbs';

    }

    else if (height >= 71 && height < 72) {
        return '9st 6lbs - 11st 13lbs';

    }

    else if (height >= 72 && height < 73) {
        return '9st 10lbs - 12st 4lbs';

    }

    else if (height >= 73 && height < 74) {
        return '10st 1lbs - 12st 9lbs';

    }

    else if (height >= 74 && height < 75) {
        return '10st 4lbs - 13st 1lbs';

    }

    else if (height >= 75 && height < 76) {
        return '10st 8lbs - 13st 4lbs';

    }

    else if (height >= 76 && height <= 77) {
        return '10st 12lbs - 13st 10lbs';

    }

    else if (height >= 77 && height <= 78) {
        return '11st 2lbs - 14st 1lbs';


    }
    else {
        return null; // Retorna null se não houver recomendação
    }
}



/***************************** script calcular bmi Metric ********************************/
//console.log
painelAzulx.addEventListener('click', function () {
    if (cm.value !== '' && kg.value !== '') {
        let valorPeso = parseFloat(kg.value);
        let altura = parseFloat(cm.value);
        let result = valorPeso / ((altura * altura) / (100 * 100));

        painelAzulx.classList.toggle('show');
        resultBMI.classList.toggle('show');
        painelAzulx.style.display = 'none';
        resultBMI.style.display = 'block';

        infoResult.innerHTML = ` ${result.toFixed(1)}`;

        let recomendacao = getRecomendacao(altura);

        // Oculta ambas as mensagens inicialmente
        infoIndica.style.display = 'none';
        infoNencontra.style.display = 'none';

        if (recomendacao) {
            
            infoIndica.innerHTML = `Your BMI suggests you’re a healthy weight. Your ideal weight is between ${recomendacao}`;
            infoIndica.style.display = 'block'; // Exibe a recomendação
        } else {
            
            infoNencontra.style.display = 'block'; // Exibe a mensagem de não encontrada
        }

    } else {
        alert('Fill in all the fields!')
    }
});


/*************************Tabela do IMC***********************/
function getRecomendacao(altura) {

    if (altura >= 147.0 && altura < 149.9) {
        return '40.2kgs - 52.0kgs';

    }

    else if (altura >= 150 && altura < 151.9) {
        return '41.5kgs - 54.0kgs';

    }

    else if (altura >= 152.0 && altura < 154.9) {
        return '45.5kgs - 56.8kgs';

    }

    else if (altura >= 155.0 && altura < 157.9) {
        return '45.5kgs - 59.1kgs';

    }

    else if (altura >= 158.0 && altura < 159.9) {
        return '47.7kgs - 61.4kgs';

    }

    else if (altura >= 160.0 && altura < 162.9) {
        return '47.7kgs - 63.6kgs';

    }

    else if (altura >= 163.0 && altura < 164.9) {
        return '50.0kgs - 65.9kgs';

    }

    else if (altura >= 165.0 && altura < 167.9) {
        return '52.3kgs - 65.9kgs';

    }

    else if (altura >= 168.0 && altura < 170.9) {
        return '52.3kgs - 68.2kgs';

    }

    else if (altura >= 171.0 && altura < 172.9) {
        return '54.5kgs - 70.5kgs';

    }

    else if (altura >= 173.0 && altura < 175.9) {
        return '56.8kgs - 72.7kgs';

    }

    else if (altura >= 176.0 && altura < 177.9) {
        return '59.1kgs - 75.0kgs';

    }

    else if (altura >= 178.0 && altura < 180.9) {
        return '59.1kgs - 77.3kgs';

    }

    else if (altura >= 181.0 && altura < 182.9) {
        return '61.4kgs - 79.5kgs';

    }

    else if (altura >= 183.0 && altura < 185.9) {
        return '63.6kgs - 81.8kgs';

    }

    else if (altura >= 186.0 && altura < 187.9) {
        return '63.6kgs - 84.1kgs';

    }

    else if (altura >= 188.0 && altura < 190.9) {
        return '65.9kgs - 86.4kgs';

    }

    else if (altura >= 191.0 && altura < 192.9) {
        return '68.2kgs - 88.6kgs';

    }

    else if (altura >= 193.0 && altura <= 193.9) {
        return '70.5kgs - 90.9kgs';

    }
    else {
        return null; // Retorna null se não houver recomendação
    }
}



/************************ Reset ****************************/

resultBMI.addEventListener('click', function () {
    painelAzuly.classList.add('show')
    painelAzulx.classList.add('show');
    resultBMI.classList.remove('show');
    painelAzulx.style.display = 'block';
    painelAzuly.style.display = 'block';
    resultBMI.style.display = 'none';

    peso.value = '';
    altura.value = '';

    hft.value = '';
    hin.value = '';
    wst.value = '';
    wlbs.value = '';


})

/************************ Botão radio ***************************************/

const metric = document.querySelector('#metric');
const imperial = document.querySelector('#imperial');
const btnM = document.querySelector('#btn-m');
const btnI = document.querySelector('#btn-i');

btnM.addEventListener('click', function () {
    metric.classList.add('show');
    imperial.classList.remove('show');
    metric.style.display = 'block'; // Garante que a seção métrica seja exibida
    imperial.style.display = 'none'; // Oculta explicitamente a seção imperial
    btnM.classList.add('active-tec'); // Adiciona a classe ao botão Metric
    btnI.classList.remove('active-tec');

    /************************ Reset ****************************/
    painelAzuly.classList.add('show')
    painelAzulx.classList.add('show');
    resultBMI.classList.remove('show');
    painelAzulx.style.display = 'block';
    painelAzuly.style.display = 'block';
    resultBMI.style.display = 'none';

    peso.value = '';
    altura.value = '';

    hft.value = '';
    hin.value = '';
    wst.value = '';
    wlbs.value = '';




});

btnI.addEventListener('click', function () {
    imperial.classList.add('show');
    metric.classList.remove('show');
    metric.style.display = 'none'; // Oculta explicitamente a seção métrica
    imperial.style.display = 'block'; // Garante que a seção imperial seja exibida
    btnI.classList.add('active-tec'); // Adiciona a classe ao botão Imperial
    btnM.classList.remove('active-tec');

    /************************ Reset ****************************/
    painelAzuly.classList.add('show')
    painelAzulx.classList.add('show');
    resultBMI.classList.remove('show');
    painelAzulx.style.display = 'block';
    painelAzuly.style.display = 'block';
    resultBMI.style.display = 'none';

    peso.value = '';
    altura.value = '';

    hft.value = '';
    hin.value = '';
    wst.value = '';
    wlbs.value = '';
});


//*************************************limitação no input do peso**********************************

const peso = document.getElementById('kg');

peso.addEventListener('input', function () {
    // Remove todos os caracteres que não são dígitos, vírgula ou ponto
    let sanitizedValue = this.value.replace(/[^\d,.]/g, '');

    // Limita o comprimento máximo do valor a 5 caracteres (4 dígitos + 1 para a vírgula/ponto)
    if (sanitizedValue.length > 5) {
        sanitizedValue = sanitizedValue.slice(0, 5);
    }

    // Substitui vírgulas por pontos para garantir um formato numérico válido
    sanitizedValue = sanitizedValue.replace(',', '.');

    // Verifica se há mais de uma casa decimal e remove os excedentes
    const decimalIndex = sanitizedValue.indexOf('.');
    if (decimalIndex !== -1 && sanitizedValue.length - decimalIndex > 2) {
        sanitizedValue = sanitizedValue.slice(0, decimalIndex + 2);
    }

    // Atualiza o valor do campo de entrada
    this.value = sanitizedValue;
});

//**************************************limitação no input da altura*********************************

const altura = document.getElementById('cm');

altura.addEventListener('input', function () {
    // Remove todos os caracteres que não são dígitos
    let sanitizedValue = this.value.replace(/\D/g, '');

    // Limita o comprimento máximo do valor a 3 caracteres
    if (sanitizedValue.length > 3) {
        sanitizedValue = sanitizedValue.slice(0, 3);
    }

    // Atualiza o valor do campo de entrada
    this.value = sanitizedValue;
});

//**************************************limitação no input do Imperial*********************************

//const hft
//const hin 
//const wst 
//const wlbs 

hft.addEventListener('input', function () {
    // Remove todos os caracteres que não são dígitos
    let sanitizedValue = this.value.replace(/\D/g, '');

    // Limita o comprimento máximo do valor a 3 caracteres
    if (sanitizedValue.length > 2) {
        sanitizedValue = sanitizedValue.slice(0, 2);
    }

    // Atualiza o valor do campo de entrada
    this.value = sanitizedValue;
});

hin.addEventListener('input', function () {
    // Remove todos os caracteres que não são dígitos
    let sanitizedValue = this.value.replace(/\D/g, '');

    // Limita o comprimento máximo do valor a 3 caracteres
    if (sanitizedValue.length > 2) {
        sanitizedValue = sanitizedValue.slice(0, 2);
    }

    // Atualiza o valor do campo de entrada
    this.value = sanitizedValue;
});

wst.addEventListener('input', function () {
    // Remove todos os caracteres que não são dígitos
    let sanitizedValue = this.value.replace(/\D/g, '');

    // Limita o comprimento máximo do valor a 3 caracteres
    if (sanitizedValue.length > 2) {
        sanitizedValue = sanitizedValue.slice(0, 2);
    }

    // Atualiza o valor do campo de entrada
    this.value = sanitizedValue;
});

wlbs.addEventListener('input', function () {
    // Remove todos os caracteres que não são dígitos
    let sanitizedValue = this.value.replace(/\D/g, '');

    // Limita o comprimento máximo do valor a 3 caracteres
    if (sanitizedValue.length > 2) {
        sanitizedValue = sanitizedValue.slice(0, 2);
    }

    // Atualiza o valor do campo de entrada
    this.value = sanitizedValue;
});
