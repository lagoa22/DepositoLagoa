var titulo = document.getElementById('titulo');
titulo.addEventListener('mouseover', function() {
    titulo.innerHTML = 'Ao Depósito Lagoa';
});
titulo.addEventListener('mouseout', function() {
    titulo.innerHTML = 'seja bem-vindo';
});
const textoElement = document.getElementById('tramontina');
const textosElement = document.getElementById('cimento');
const textosvElement = document.getElementById('arga_massa_aciii');
const carbonoElement = document.getElementById('carbono');
const tigreElement = document.getElementById('tigre');
const vedalitElement = document.getElementById('vedalit');

textoElement.textContent = 'Forte e resistente para qualquer obra';
textosElement.textContent = 'não pode faltar na sua obra';
textosvElement.textContent = 'pode ser usado para varias situações com qualidade';
carbonoElement.textContent = 'acabou o seu carvão da sua maquina?';
tigreElement.textContent = 'Produtos Tigre na area!';
vedalitElement.textContent = 'Produtos Vedalit';