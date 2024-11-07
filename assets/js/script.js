var alturahead = document.getElementById("header")
var alturacont = document.getElementById("main")
var alturafoot = document.getElementById("footer")
var navbar = document.getElementById("navbar")
var principal = document.getElementById("conteudo")
var altnavfixa = document.querySelector(".navfixa")

navbar.offsetHeight = alturacont.offsetHeight

window.addEventListener("scroll", function(){
    if (window.scrollY >= alturahead.getBoundingClientRect().height + 15 && window.scrollY <= alturahead.getBoundingClientRect().height + alturacont.getBoundingClientRect().height - alturafoot.getBoundingClientRect().height){
        navbar.classList.add("navfixa");
        principal.classList.add("descriçao")}
    else{
        navbar.classList.remove("navfixa");
        principal.classList.remove("descriçao")}
});

var ContAtual = 'sobremim'

function sobremim(){
    var sobremim = `
<h1>Sobre Mim</h1>

<h2>Apresentação</h2>

<p>Meu nome é Fábio Hiromitsu Nawa, tenho 18 anos e estou fazendo minha graduação em Análise e Desenvolvimento de Sistemas na Fatec São José dos Campos.</p>

<h2>Objetivos</h2>

<p>Quero aprender a programar com C + +, pois duas das game engines que eu irei utilizar a usam como linguagem de programação. São elas: Unreal Engine, para criar jogos 3D e Unity, para criar jogos 2D.</p>

<h2>Hobbies</h2>

<ul>
    <li>Jogar videogame</li>
    <li>Assistir videos no Youtube</li>
</ul>
`

    document.getElementById("conteudo").innerHTML = sobremim
    document.getElementById(ContAtual).classList.remove("activated")
    document.getElementById("sobremim").classList.add("activated")
    ContAtual = 'sobremim'
    var curriculo = ""
    var projeto = ""
    var softskill = ""
    var hardskill = ""
    var curso = ""}

function curriculo(){
    var curriculo = `
<a href="assets/downloads/Currículo - Fábio H Nawa.pdf" download="" style="color: black;">Baixar pdf do currículo</a>
`
    document.getElementById("conteudo").innerHTML = curriculo
    document.getElementById(ContAtual).classList.remove("activated")
    document.getElementById("curriculo").classList.add("activated")
    ContAtual = 'curriculo'
    var sobremim = ""
    var projeto = ""
    var softskill = ""
    var hardskill = ""
    var curso = ""}

function projeto(){
    var projeto = `
<h1>Projetos</h1>
<p>Todos os projetos estão disponíveis no meu GitHub.</p>

<h2>API da Fatec - Grupo "Os Python On"</h2>
<p>A Fatec oferece aos alunos uma experiência similar ao mercado de trabalho, onde, a cada semestre, grupos de pelo menos cinco pessoas as desenvolvem. Essa proposta incentiva o aprendizado de metodologias ágeis, interação com clientes e trabalho em equipe.</p>
<p>obs: API = Aprendizado por Projeto Integrado</p>

<h3>Sobre o projeto</h3>
<p>A proposta deste semestre foi criar um site que ensine a metodologia Scrum, pois o cliente precisa melhorar a produtividade de seus funcionários. Este site exige um conteúdo simples, questionário no final para teste de conhecimento, exemplos práticos, etc.</p>

<h3>Minha contribuição</h3>
<ul>
    <li>Backlog da Sprint</li>
    <li>Backlog do Produto</li>
    <li>Elaboração do conteúdo do site</li>
    <li>MVP (Minimum Value Product)</li>
    <li>Apresentação da segunda Sprint Review</li>
</ul>

<h3>Meu aprendizado</h3>
<p>Eu fiquei responsável pelo cargo de PO (Product Owner) da equipe, ele é responsável por levantar os requisitos do cliente e organizá-los para que o time de desenvolvimento consiga entregar o produto de acordo com as exigências do cliente. Com isso eu aprendi bastante sobre comunicação, planejamento de entregas, organização e trabalho em equipe, me ajudando a trabalhar a minha timidez.</p>
<p>Além disso, adquiri conhecimento sobre as metodologias ágeis e consigo me comportar caso uma empresa a aplique. Melhorei algumas habilidades que eu já tinha e aprendi novas, como GitHub, HTML, CSS, JavaScript e Jira.</p>

<h2>Galeria de loja virtual no SENAI - Grupo Capirelos</h2>
<p>Assim como na Fatec, o grupo está utilizando a metodologia Scrum para a organização, contudo com uma estrutura diferente, pois o PO é o cliente e o Master é responsável por adquirir as informações e repassá-las ao time de desenvolvimento.</p>

<h3>Sobre o projeto</h3>
<p>No curso de Desenvolvimento Web/Mobile do SENAI eu estou desenvolvendo um site que será uma ponte para facilitar a venda de produtos das empresas parceiras ou vendedores independentes, disponibilizando-os no site. No brainstorm, o cliente requisitou 17 páginas para agrupar todos os recursos desejados.</p>

<h3>Minha contribuição</h3>
<ul>
    <li>Página Login</li>
    <li>Página Registro</li>
    <li>Página Parceiros</li>
    <li>Aulas sobre Git/GitHub</li>
    <li>organização de arquivos</li>
</ul>

<h3>Meu aprendizado</h3>
<p>Trabalhando como Dev Team (Time de desenvolvimento), eu consegui me aprofundar mais em criação de sites.</p>
<p>Como os meus parceiros ainda estavam tendo o primeiro contato com o Git e o GitHub, eu fui atrás para conhecer mais sobre suas funcionalidades.</p>
`

    document.getElementById("conteudo").innerHTML = projeto
    document.getElementById(ContAtual).classList.remove("activated")
    document.getElementById("projeto").classList.add("activated")
    ContAtual = 'projeto'
    var curriculo = ""
    var sobremim = ""
    var softskill = ""
    var hardskill = ""
    var curso = ""}

function softskill(){
    var softskill = `
<h1>Softskills</h1>

<ul>
    <li>Determinado</li>
    <li>Dedicado</li>
    <li>Pontual</li>
    <li>Amigável</li>
    <li>Obstinado</li>
</ul>

<img src="assets/img/swotFabio.png" alt="" style="width: 80%;">
`

    document.getElementById("conteudo").innerHTML = softskill
    document.getElementById(ContAtual).classList.remove("activated")
    document.getElementById("softskill").classList.add("activated")
    ContAtual = 'softskill'
    var curriculo = ""
    var projeto = ""
    var sobremim = ""
    var hardskill = ""
    var curso = ""}

function hardskill(){
    var hardskill = `
<h1>Hardskills</h1>
<ul>
    <li>HTML e CSS</li>
    <li>Python</li>
    <li>Linux</li>
    <li>Git/GitHub Básico</li>
</ul>
                
<h2>Idiomas</h2>
<ul>
    <li>Inglês Intermediário (B1)</li>
</ul>
                
<h2>Histórico Escolar</h2>
                
<h3>Ensino Médio Técnico - Concluido</h3>
<p style="margin-bottom: 10px;"><strong>Local: </strong>Senac São José dos Campos</p>
<p style="margin-bottom: 10px;"><strong>Área: </strong>Tecnologia da Informação</p>
<p><strong>Data de conclusão: </strong>Dezembro de 2023</p>
                
<h3>Graduação - Em andamento</h3>
<p style="margin-bottom: 10px;"><strong>Local: </strong>Fatec São José dos Campos</p>
<p style="margin-bottom: 10px;"><strong>Área: </strong>Análise e Desenvolvimento de Sistemas</p>
<p><strong>Data de conclusão prevista: </strong>Julho de 2027</p>
`

    document.getElementById("conteudo").innerHTML = hardskill
    document.getElementById(ContAtual).classList.remove("activated")
    document.getElementById("hardskill").classList.add("activated")
    ContAtual = 'hardskill'
    var curriculo = ""
    var projeto = ""
    var softskill = ""
    var sobremim = ""
    var curso = ""}

function curso(){
    var curso = `
    <h1>Cursos</h1>
    
    <h2>Power BI - Básico</h2>
    <p style="margin-bottom: 10px;"><strong>Local: </strong>SENAI São José dos Campos</p>
    <p style="margin-bottom: 10px;"><strong>Duração: </strong>20 horas</p>
    <p><strong>Data de conclusão: </strong>Julho de 2023</p>
                    
    <h2>Linux Unhatched</h2>
    <p style="margin-bottom: 10px;"><strong>Local: </strong>Cisco</p>
    <p><strong>Data de conclusão: </strong>Setembro de 2024</p>
                    
    <h2>IT Essentials</h2>
    <p style="margin-bottom: 10px;"><strong>Local: </strong>Cisco</p>
    <p><strong>Data de conclusão: </strong>Dezembro de 2024</p>
                    
    <h2>Desenvolvimento Web/Mobile</h2>
    <p style="margin-bottom: 10px;"><strong>Local: </strong>SENAI São José dos Campos</p>
    <p style="margin-bottom: 10px;"><strong>Duração: </strong>120 horas</p>
    <p><strong>Data de conclusão: </strong>Novembro de 2024</p>
                    
    <h2>Práticas e comportamentos do mercado de trabalho</h2>
    <p style="margin-bottom: 10px;"><strong>Local: </strong>SENAI São José dos Campos</p>
    <p style="margin-bottom: 10px;"><strong>Duração: </strong>12  horas</p>
    <p><strong>Data de conclusão: </strong>Novembro de 2024</p>
    `

    document.getElementById("conteudo").innerHTML = curso
    document.getElementById(ContAtual).classList.remove("activated")
    document.getElementById("curso").classList.add("activated")
    ContAtual = 'curso'
    var curriculo = ""
    var projeto = ""
    var softskill = ""
    var hardskill = ""
    var sobremim = ""}

function mouse(x){
    x.classList.add("mouse");}

function mouseout(x){
    x.classList.remove("mouse")}