// === Efeito máquina de escrever (interação à escolha) ===
function efeitoMaquinaDeEscrever(elemento, velocidade = 150) {
    if (!elemento) 
    {
        return
    };
    const textoOriginal = elemento.textContent; // Escopo local
    elemento.textContent = "";
    let indice = 0;
    const intervalo = setInterval(() => {
        if (indice < textoOriginal.length) 
        {
            elemento.textContent += textoOriginal.charAt(indice);
            indice++;
        } 
        else 
        {
            clearInterval(intervalo);
        }
    }, velocidade);
}
//Aplica a função da máquina de escrever a todos os títulos
const todosTitulosH1 = document.querySelectorAll("h1");
todosTitulosH1.forEach((h1) => efeitoMaquinaDeEscrever(h1));

// === trabalhos em arrays de objetos ===

// Trabalho de cada integrante
const TRABALHOS_ALUNOS = [
    // CORDÉIS
    {
        id: 1,
        tipo: "cordel",
        aluno: "Kauã Henrique",
        titulo: "Cordel do Direito à Educação",
        descricao: "Um cordel abordando o tema direitos humanos",
        imagem: "cordelKaua.jpg",
        alt: "Varias pessoas coloridas e unidas",
        legenda: "A diversidade também é abordada em temas como esse",
        conteudo: `
            <p>A educação é um direito,</p>
            <p>Que devemos respeitar,</p>
            <p>Pois através do conhecimento,</p>
            <p>Nosso futuro podemos mudar.</p>
            <p>É direito de toda criança,</p>
            <p>Aprender com esperança,</p>
            <p>E um mundo melhor conquistar!</p>
        `
    },
    {
        id: 2,
        tipo: "cordel",
        aluno: "Vitor",
        titulo: "A jornada do herói",
        descricao: "'Num sertão de terra seca, Onde o sol brilhava forte, Vivia um jovem valente, Que desafiava a própria sorte. Sonhava mudar o mundo, Mesmo temendo a morte.'",
        imagem: "cordelVitor.jpg",
        alt: "Foto do sertão",
        legenda: "O sertão",
        conteudo: `<p>Num sert&atilde;o de terra seca, Onde o sol brilhava forte, Vivia um jovem valente, Que desafiava a pr&oacute;pria sorte. Sonhava mudar o mundo, Mesmo temendo a morte.</p>
<p>Certo dia, um mensageiro Trouxe uma grande miss&atilde;o: Salvar o povoado inteiro De uma terr&iacute;vel maldi&ccedil;&atilde;o. O rapaz sentiu no peito Bater forte o cora&ccedil;&atilde;o.</p>
<p>Preparou sua mochila, P&ocirc;s coragem no embornal, Despediu-se de sua gente, Enfrentando o temporal. Pois sabia que o destino Lhe guardava algo especial.</p>
<p>Pelas matas caminhou, Enfrentou frio e calor, Viu perigos pelo caminho, Sentiu tristeza e temor. Mas aprendeu que a coragem &Eacute; mais forte que a dor.</p>
<p>Encontrou um velho s&aacute;bio, Que lhe deu orienta&ccedil;&atilde;o: &ldquo;N&atilde;o confie s&oacute; na for&ccedil;a, Nem se entregue &agrave; ambi&ccedil;&atilde;o. Quem conhece a si mesmo Vence qualquer prova&ccedil;&atilde;o.&rdquo;</p>
<p>Quando chegou ao castelo, Viu o mal a dominar, Um drag&atilde;o feroz e enorme Que impedia a paz voltar. Com a espada em sua m&atilde;o, Decidiu lutar e enfrentar.</p>
<p>Foi uma luta demorada, De coragem e afli&ccedil;&atilde;o, Mas o jovem persistiu, Sem perder a dire&ccedil;&atilde;o. E venceu aquela fera Com bravura e cora&ccedil;&atilde;o.</p>
<p>Ao voltar para sua terra, Foi recebido com louvor, Trouxe paz &agrave; sua gente, Espalhando esperan&ccedil;a e amor. J&aacute; n&atilde;o era o mesmo jovem: Era um homem vencedor.</p>
<p>E assim termina a hist&oacute;ria, Que nos deixa uma li&ccedil;&atilde;o: O her&oacute;i n&atilde;o &eacute; quem n&atilde;o teme, Mas quem enfrenta o seu ch&atilde;o. Pois a maior das vit&oacute;rias &Eacute; vencer a pr&oacute;pria escurid&atilde;o.</p>`
    },
    {
        id: 3,
        tipo: "cordel",
        aluno: "Julia Sophia",
        titulo: "O sol e a lua",
        descricao: "vejo as estrelas, brilhando contigo, e eu aqui a admirar",
        imagem: "cordelJulia.png",
        alt: "Homem e mulher se encarando",
        legenda: "",
        conteudo: `<p>quando eu te vejo<br />l&aacute; no c&eacute;u brilhando<br />cintilante no luar</p><p>voc&ecirc; &eacute; divina<br />mas tem tantas fases<br />t&atilde;o dif&iacute;ceis de explicar</p><p>vejo as estrelas&nbsp;<br />brilhando contigo<br />e eu aqui a admirar</p><p>princesa das noites<br />lua, a mais linda&nbsp;<br />com voc&ecirc; quero dan&ccedil;ar</p><p>- Julieta~</p>`
    },
    {
        id: 4,
        tipo: "cordel",
        aluno: "Lavínnia",
        titulo: "Minhas asas",
        descricao: "Inspirado no Artigo 13 - garante a liberdade de locomoção e de residência. Cordel que retrata a angústia de ter o direito de moradia violado. Na perspectiva de um refugiado de guerra que perdeu tudo que tinha.",
        imagem: "cordelLavinnia.jpg",
        alt: "Refugiado andando em meio a tendas, carregando pertences",
        legenda: "'cortaram nossas asas'",
        conteudo: `<p>Ao pisar nesse ch&atilde;o&nbsp;<br />Fantasmas eles ver&atilde;o&nbsp;<br />N&oacute;s dan&ccedil;&aacute;vamos aqui &nbsp;<br />Sem medo de olhar para o c&eacute;u&nbsp;<br />E a vida era um clar&atilde;o&nbsp;</p>
<p>Andarei por espectros&nbsp;<br />Quem eu fui observa os outros&nbsp;<br />Todos comigo, sem rumo&nbsp;<br />H&aacute; mesmo vida depois daqui?&nbsp;<br />Perguntam para seus monstros&nbsp;</p>
<p>P&aacute;ssaros v&atilde;o voar<br />Mas n&atilde;o queremos notar<br />N&atilde;o queremos ver as penas<br />Dos que desfrutam a liberdade&nbsp;<br />E sabe onde v&atilde;o acabar</p>
<p>Cortaram nossas asas&nbsp;</p>`
    },
    // CONTOS
    {
        id: 5,
        tipo: "conto",
        aluno: "Kauã Henrique",
        titulo: "A fuga de Jajá",
        descricao: "Um conto baseado no  livro hibisco roxo.",
        imagem: "contoKaua.jpg",
        alt: "Foto de uma flor de hibisco roxo",
        legenda: "Flor de hibisco roxo",
        conteudo: `<p>Mais uma noite comum na casa de Eugene. Kambili se encontrava no seu quarto isolada com seu boletim em suas m&atilde;os, Jaj&aacute; mais uma vez ficou em primeiro em sua turma.<br />Eugene ficou muito orgulhoso de Jaj&aacute; como sempre, passou longos minutos longos minutos no quarto de Jaj&aacute;, entretanto Kambili acabou ficando em segundo lugar, o que pra muitos seria uma nota muito boa, mas pra Eugene, nada al&eacute;m do primeiro lugar importava e quando foi no quarto de Kambili o pior aconteceu, Kambili apanhou &nbsp;muito nesta noite.<br />No &nbsp;dia seguinte, &nbsp;Jaj&aacute; viu os machucados de Kambili, suas m&atilde;os em vermelho carmesim, na lateral de sua coxa marcas roxas, e Jaj&aacute; come&ccedil;a a interrogar Kambili para descobrir o que aconteceu na &uacute;ltima noite. Kambili conta ao Jaj&aacute; com certa relut&acirc;ncia sobre o que Eugene teria feito &agrave; ela.<br />Jaj&aacute; ao ver a situa&ccedil;&atilde;o deplor&aacute;vel de Kambili vai tirar satisfa&ccedil;&atilde;o com Eugene.</p>
<p>&nbsp;Papa eu entendo que a Kambili pode n&atilde;o ter ficado em primeiro lugar nas provas escolares, mas pra que tamanha maldade com ela, n&atilde;o passa de uma crian&ccedil;a em aprendizado, e mesmo assim o segundo lugar &eacute; uma posi&ccedil;&atilde;o digna dos Achike -Diz Jaj&aacute;.<br />Eugene olha com uma certa surpresa ao ver seu filho dizer isso.<br />A verdadeira posi&ccedil;&atilde;o digna dos Achike &eacute; apenas o primeiro lugar, quem fica em segundo lugar tem total capacidade de ficar em primeiro, Eu s&oacute; dei uma li&ccedil;&atilde;o &agrave; ela, talvez com isso ela estude mais da pr&oacute;xima vez.<br />Jaj&aacute; olha com desprezo para Eugene.<br />&Eacute; por causa dessa bosta de ideia que somos distante do senhor, se voc&ecirc; tivesse um pingo de no&ccedil;&atilde;o do que &eacute; ser um pai-<br />Eugene corta a fala de seu filho com um empurr&atilde;o que o derruba no ch&atilde;o.<br />V&aacute; j&aacute; para seu quarto Chukwuka Achike!<br />Jaj&aacute; se levanta&nbsp;<br />EU CANSEI DESSA P@#$% EUGENE!<br />Kambili se mete no meio para apaziguar a briga.<br />Jaj&aacute; vai esfriar a cabe&ccedil;a do lado de fora e Eugene vai para seu quarto onde sua esposa se encontrava dormindo.<br />Kambili foi para sua cama com seu boletim amassado em sua m&atilde;o.</p>
<h2>Um tempo se passa&hellip;</h2>
<p><br />10 da manh&atilde;<br />&nbsp;Jaja se levanta e vai para o quarto de kambili, silenciosamente jaja se dirige para perto de kambili e acorda ela.<br />Jaja &nbsp;&ndash; Ei kambili levanta, vamos embora.<br />kambili se levanta bocejando e pergunta ao jaja o que est&aacute; acontecendo&nbsp;<br />Ele explica que n&atilde;o aguenta mais esse jeito opressor de seu pai e que pretende se mandar dessa casa e procurar um lugar l&aacute; pra Kaduna.<br />Kambili vai tomar uma &aacute;gua e discute com o Jaja pra ver o que realmente seria feito naquela situa&ccedil;&atilde;o, acabam que entram em um consenso e v&atilde;o direto para o carro de papa na frente de casa.<br />Os dois saem de casa com o dinheiro da economia de Jaja, e v&atilde;o para a estrada ao som de House of the Rising Sun.<br />A viagem segue tranquila at&eacute; que acaba a gasolina do carro e eles seguem at&eacute; o posto mais pr&oacute;ximo, Kambili olha o celular dela, 14 chamadas perdidas de seu pai.<br />Chegando ao posto de gasolina, enchem o tanque, compram comida e seguem.<br />12 horas se passaram.<br />Jaja-<br />Ei kambili acorda, estamos quase chegando Kambili, vamos passar a noite aqui.<br />Kambili olha para a janela do carro e v&ecirc; um hotel feio, acabado, caindo aos peda&ccedil;os.<br />Eles saem do carro e v&atilde;o conversar com a recepcionista.<br />Recepcionista-<br />Boa noite, qual quarto o senhor gostaria? Temos o 342, 269, 192.<br />Jaja - Jaj&aacute; olha para a recepcionista.</p>
<p>Jaj&aacute;-<br />&mdash; Qual deles &eacute; o mais barato?</p>
<p>Recepcionista-<br />&mdash; O 192, senhor, mas n&atilde;o est&aacute; nas melhores condi&ccedil;&otilde;es.</p>
<p>Jaj&aacute;-<br />&mdash; Tudo bem, ficaremos com ele.</p>
<p>Recepcionista entrega a chave para Jaj&aacute; e aponta para as escadas.</p>
<p>Recepcionista-<br />&mdash; Segundo andar, corredor &agrave; esquerda.</p>
<p>Jaj&aacute; agradece e pega as malas, enquanto Kambili o acompanha at&eacute; o quarto.</p>
<p>Ao chegarem, Kambili olha para o estado deplor&aacute;vel do lugar, as paredes estavam descascando, o teto tinha algumas manchas de infiltra&ccedil;&atilde;o e a cama parecia estar prestes a desabar.</p>
<p>Kambili-<br />&mdash; Jaj&aacute;, voc&ecirc; tem certeza que isso &eacute; um hotel?</p>
<p>Jaj&aacute; olha ao redor.</p>
<p>Jaj&aacute;-<br />&mdash; N&atilde;o temos muitas op&ccedil;&otilde;es, Kambili.</p>
<p>Kambili-<br />&mdash; Acho que at&eacute; os ratos daqui querem se mudar.</p>
<p>Jaj&aacute; come&ccedil;a a rir da observa&ccedil;&atilde;o de sua irm&atilde;.</p>
<p>Jaj&aacute;-<br />&mdash; Pelo menos temos um teto sobre nossas cabe&ccedil;as.</p>
<p>Os dois deixam suas malas no canto do quarto e v&atilde;o tomar banho. Depois de alguns minutos, acabam pedindo alguma comida na recep&ccedil;&atilde;o e passam o restante da noite conversando.</p>
<p>23:47</p>
<p>Kambili estava deitada na cama mexendo em seu celular, enquanto Jaj&aacute; estava sentado em uma cadeira perto da janela.</p>
<p>Kambili olha para o celular de Jaj&aacute; e percebe que ele havia recebido diversas liga&ccedil;&otilde;es.</p>
<p>Kambili-<br />&mdash; Jaj&aacute;, Papa ligou novamente?</p>
<p>Jaj&aacute; olha para o aparelho.</p>
<p>Jaj&aacute;-<br />&mdash; Sim.</p>
<p>Kambili-<br />&mdash; Voc&ecirc; n&atilde;o vai atender?</p>
<p>Jaj&aacute;-<br />&mdash; N&atilde;o tenho nada para conversar com ele.</p>
<p>Kambili fica em sil&ecirc;ncio por alguns segundos.</p>
<p>Kambili-<br />&mdash; Voc&ecirc; acha que ele est&aacute; preocupado?</p>
<p>Jaj&aacute;-<br />&mdash; Provavelmente est&aacute; furioso.</p>
<p>Kambili-<br />&mdash; E se ele vier atr&aacute;s da gente?</p>
<p>Jaj&aacute; olha para sua irm&atilde;.</p>
<p>Jaj&aacute;-<br />&mdash; N&atilde;o vamos pensar nisso agora, Kambili. Precisamos descansar.</p>
<p>Kambili concorda com a cabe&ccedil;a e se ajeita na cama.</p>
<p>Alguns minutos depois, Jaj&aacute; percebe que sua irm&atilde; ainda estava acordada.</p>
<p>Jaj&aacute;-<br />&mdash; Kambili?</p>
<p>Kambili-<br />&mdash; Hm?</p>
<p>Jaj&aacute;-<br />&mdash; Voc&ecirc; est&aacute; bem?</p>
<p>Kambili-<br />&mdash; Estou.</p>
<p>Jaj&aacute; percebe que ela estava mentindo, mas decide n&atilde;o insistir.</p>
<p>Jaj&aacute;-<br />&mdash; Voc&ecirc; sabe que n&atilde;o precisa ter medo de mim, n&atilde;o &eacute;?</p>
<p>Kambili olha para o irm&atilde;o.</p>
<p>Kambili-<br />&mdash; Eu sei, Jaj&aacute;.</p>
<p>Jaj&aacute;-<br />&mdash; E tamb&eacute;m n&atilde;o precisa ficar com medo de tirar uma nota ruim. Voc&ecirc; n&atilde;o merece aquilo que Papa fez com voc&ecirc;.</p>
<p>Kambili abaixa a cabe&ccedil;a.</p>
<p>Kambili-<br />&mdash; Eu s&oacute; queria que ele ficasse orgulhoso de mim.</p>
<p>Jaj&aacute;-<br />&mdash; Eu tenho orgulho de voc&ecirc;, Kambili.</p>
<p>Kambili d&aacute; um pequeno sorriso e volta a se deitar.</p>
<p>Jaj&aacute; apaga a luz do quarto e os dois acabam dormindo.</p>
<p>Enquanto isso, na casa dos Achike...</p>
<p>Eugene estava sentado no sof&aacute; da sala, olhando constantemente para o celular. J&aacute; havia ligado in&uacute;meras vezes para Jaj&aacute; e Kambili, mas nenhum dos dois atendia.</p>
<p>Beatrice estava sentada pr&oacute;ximo dele, bastante preocupada com o desaparecimento dos filhos.</p>
<p>Beatrice-<br />&mdash; Eugene, precisamos fazer alguma coisa.</p>
<p>Eugene-<br />&mdash; O que voc&ecirc; sugere que eu fa&ccedil;a?</p>
<p>Beatrice-<br />&mdash; N&atilde;o sei, talvez ligar para a pol&iacute;cia.</p>
<p>Eugene-<br />&mdash; N&atilde;o seja rid&iacute;cula, Beatrice. Jaj&aacute; deve estar fazendo isso apenas para chamar minha aten&ccedil;&atilde;o.</p>
<p>Beatrice-<br />&mdash; E Kambili? Ela tamb&eacute;m est&aacute; fazendo isso para chamar sua aten&ccedil;&atilde;o?</p>
<p>Eugene fica em sil&ecirc;ncio.</p>
<p>Beatrice-<br />&mdash; Eugene, eles s&atilde;o nossos filhos.</p>
<p>Eugene-<br />&mdash; Eu sei muito bem quem s&atilde;o meus filhos!</p>
<p>Beatrice abaixa a cabe&ccedil;a e decide n&atilde;o continuar a discuss&atilde;o.</p>
<p>Dia seguinte &mdash; 08:15</p>
<p>Jaj&aacute; j&aacute; estava acordado h&aacute; algum tempo, sentado na cadeira pr&oacute;xima &agrave; janela. Ele olha para Kambili, que ainda dormia profundamente, e decide acord&aacute;-la.</p>
<p>Jaj&aacute;-<br />&mdash; Kambili, acorda.</p>
<p>Kambili se mexe na cama.</p>
<p>Kambili-<br />&mdash; S&oacute; mais cinco minutos...</p>
<p>Jaj&aacute;-<br />&mdash; Vamos, dorminhoca. Precisamos conversar sobre o que vamos fazer agora.</p>
<p>Kambili finalmente se levanta e esfrega os olhos.</p>
<p>Kambili-<br />&mdash; Que horas s&atilde;o?</p>
<p>Jaj&aacute;-<br />&mdash; Oito e quinze.</p>
<p>Kambili-<br />&mdash; Por que voc&ecirc; n&atilde;o me acordou antes?</p>
<p>Jaj&aacute;-<br />&mdash; Porque voc&ecirc; estava dormindo.</p>
<p>Kambili revira os olhos e come&ccedil;a a arrumar suas coisas.</p>
<p>Depois de alguns minutos, os dois descem para tomar caf&eacute; da manh&atilde;.</p>
<p>Jaj&aacute; pega seu pequeno caderno e come&ccedil;a a fazer algumas contas com o dinheiro que ainda possu&iacute;am.</p>
<p>Kambili-<br />&mdash; Quanto dinheiro temos?</p>
<p>Jaj&aacute;-<br />&mdash; O suficiente para alguns dias, mas precisamos economizar.</p>
<p>Kambili-<br />&mdash; E quando chegarmos em Kaduna?</p>
<p>Jaj&aacute;-<br />&mdash; Vou procurar algum emprego e depois tentamos encontrar uma casa para ficar.</p>
<p>Kambili-<br />&mdash; Voc&ecirc; acha que vai conseguir?</p>
<p>Jaj&aacute;-<br />&mdash; N&atilde;o sei, Kambili. Mas precisamos tentar.</p>
<p>Kambili fica olhando para o irm&atilde;o por alguns segundos.</p>
<p>Kambili-<br />&mdash; Jaj&aacute;?</p>
<p>Jaj&aacute;-<br />&mdash; O qu&ecirc;?</p>
<p>Kambili-<br />&mdash; Obrigada por ter me tirado daquela casa.</p>
<p>Jaj&aacute; olha para ela e d&aacute; um pequeno sorriso.</p>
<p>Jaj&aacute;-<br />&mdash; N&atilde;o precisa agradecer. Voc&ecirc; &eacute; minha irm&atilde;.</p>
<p>Os dois terminam o caf&eacute; da manh&atilde; e voltam para o quarto para pegar suas coisas.</p>
<p>Entretanto, o que Jaj&aacute; n&atilde;o sabia era que Eugene j&aacute; havia come&ccedil;ado a tomar provid&ecirc;ncias para encontrar seus filhos.</p>`
    },
    {
        id: 6,
        tipo: "conto",
        aluno: "Vitor",
        titulo: "Revolta",
        descricao: "Eu finalmente consegui, depois de tanto tempo, tanta dor, tanto sofrimento, depois de tudo, afinal, lá estava, bem na minha frente, meu passe só de ida para a liberdade. Mikael, com sua Harley-Davidson 1998 me esperava em frente de casa, exatamente como havíamos combinado, porém a discussão na sala ainda estava intensa, meu pai gritava palavras que meu cérebro apenas ignorava como já era de costume, era agora ou nunca.",
        imagem: "contoVitor.jpg",
        alt: "Foto de rua preto e branco, uma moto no fundo",
        legenda: "",
        conteudo: `<h2>Durante a fuga</h2><p>Eu finalmente consegui, depois de tanto tempo, tanta dor, tanto sofrimento, depois de tudo, afinal, l&aacute; estava, bem na minha frente, meu passe s&oacute; de ida para a liberdade. Mikael, com sua Harley-Davidson 1998 me esperava em frente de casa, exatamente como hav&iacute;amos combinado, por&eacute;m a discuss&atilde;o na sala ainda estava intensa, meu pai gritava palavras que meu c&eacute;rebro apenas ignorava como j&aacute; era de costume, era agora ou nunca. Me apressei a subir as escadas, n&atilde;o olhei pra tr&aacute;s, qualquer d&uacute;vida nesse momento poderia estragar tudo. Corri at&eacute; meu quarto e peguei minha mochila, podia ouvir os passos pesados de meu pai subindo e se aproximando, joguei a mochila pela janela, que bateu numa &aacute;rvore antes de cair como eu havia imaginado, eu estava pronto em cima da cama prestes a pular e de repente ele aparece, aquele que me fez tanto mal, que me controlou por tanto tempo, eu queria gritar com ele, xinga-l&oacute;, humilha-l&oacute;, mas n&atilde;o tinha tempo para isso, s&oacute; pude o ouvir gritando palavras, um xingamento escapou de sua boca, eu n&atilde;o hesitei, mostrei um gigantesco dedo do meio para ele, era o m&aacute;ximo que podia fazer para expressar todo o meu &oacute;dio, joguei nele o papel que estava em cima da cama, o qual havia preparado mais cedo, a pequena faca que eu havia usado ainda estava na mesa de cabeceira, meu pulso ainda ardia por conta disso e o tom vermelho do papel havia se espalhado mais ainda.</p><p>Pulei, &nbsp;e durante os poucos segundos que fiquei no ar pude sentir um gostinho daquilo que eu tanto almejava, a liberdade, cai, amortecido pela &aacute;rvore e pela mochila,fiquei atordoado por uma fra&ccedil;&atilde;o de segundo mas me apressei, peguei a mochila e joguei pelo muro da casa, imediatamente pude ouvir o barulho da moto sendo ligada, subi o muro e olhei por uma &uacute;ltima vez aquele jardim que guardava tantas mem&oacute;rias, me pendurei na &aacute;rvore da rua e ent&atilde;o desci, peguei minha mochila novamente e vi Mikael me esperando com um rosto s&eacute;rio, ele me acenou com a cabe&ccedil;a, eu podia ouvir os gritos de meus pais se aproximando do port&atilde;o, subi na moto, o port&atilde;o abria, a moto emperrou, Mikael deu a partida novamente, me questionava o porqu&ecirc; que meu pai demorou tanto a descer, Mikael deu meia volta na rua e come&ccedil;amos a ir, ao mesmo tempo o port&atilde;o come&ccedil;ava a abrir eu olhava para tr&aacute;s, para aquela casa, tanto tempo, tanta dor, tanto sofrimento, tantas mem&oacute;rias, mas n&atilde;o importava mais, afinal, eu n&atilde;o vou desistir de quem eu sou para ser quem voc&ecirc; quer que eu seja, e ent&atilde;o eu o vi saindo pelo port&atilde;o, minha m&atilde;e atr&aacute;s dele segurando seu bra&ccedil;o gritando:<br />-Pare, por favor, ele n&atilde;o merece isso, por favor pare!!!<br />N&atilde;o conseguia entender o porqu&ecirc; dos gritos, at&eacute; que notei em sua m&atilde;o direita, seu rev&oacute;lver taurus que ele deixava escondido no arm&aacute;rio agora apontado em minha dire&ccedil;&atilde;o, ele puxou o gatilho e ent&atilde;o eu n&atilde;o vi mais nada.</p><h2>6 anos antes- O quarto escuro&nbsp;</h2><p>Eu estava voltando da escola, papai sempre exigia que eu fosse o melhor da turma, se eu tirasse um 9 sequer ele era capaz de me crucificar. Eu estava no carro voltando da escola, tinha acabado de receber meu boletim, eu estava ansioso, afinal, amanh&atilde; sairia a coloca&ccedil;&atilde;o da sala, do melhor aluno para o pior, eu me esforcei muito, passei semanas estudando, at&eacute; porque n&atilde;o havia mais oque fazer sob a vigil&acirc;ncia das c&acirc;meras que meu pai p&ocirc;s em casa para me vigiar, ent&atilde;o eu estava esperando que se com minhas notas, que eram sempre impec&aacute;veis, ter um pouco de liberdade, para poder sair com meus amigos ou jogar at&eacute; as 22:00 no meu videogame. Deviam faltar alguns minutos at&eacute; chegar em casa, ent&atilde;o eu abri meu boletim e vi, duas notas nove, para algu&eacute;m normal isso n&atilde;o teria o menor problema, mas n&atilde;o para mim, essas duas notas apesar de parecerem boas j&aacute; servem de motivo para que meu pai fa&ccedil;a coisas inimagin&aacute;veis, os minutos restantes at&eacute; em casa foram torturantes, podia sentir o suor escorrendo de minha testa, a cada esquina que o carro dobrava meu cora&ccedil;&atilde;o batia mais forte, o ar em minha volta ainda parece como uma pris&atilde;o, enfim chegamos em casa, e eu ainda estava apreensivo, nervoso, desesperado por ajuda mesmo que fosse um acaso sequer. Eu entrei pela porta, o clima era pesado, ao menos para mim era, meu pai estava sentado na poltrona me esperando e ent&atilde;o disse:</p><p><br />-Como foram suas notas?- Disse meu pai, olhando para minha cara que agora deveria estar t&atilde;o p&aacute;lida quanto uma folha de papel- Est&aacute; tudo bem? Aconteceu algo?- Disse se levantando e andando em minha dire&ccedil;&atilde;o, meu corpo como um reflexo autom&aacute;tico deu um pulinho para tr&aacute;s - Deixe-me ver seu boletim.- E ele pegou o boletim de minha m&atilde;o.</p><p>Eu estava completamente paralisado e sem rea&ccedil;&atilde;o, pude ver sua express&atilde;o indo de curiosidade a &nbsp;raiva em um instante.</p><p>- Que notas s&atilde;o essas?! V&aacute; para seu quarto agora!<br />&nbsp;</p><p>Meu c&eacute;rebro demorou um pouco para processar, e ent&atilde;o corri pelas escadas at&eacute; meu quarto e fiquei l&aacute; esperando. Ele abriu a porta e pude ver sua cinta de couro em sua m&atilde;o, eu gritei, corri para cima da cama, ele apenas me puxou pelo bra&ccedil;o e me fez virar com as costas para ele e come&ccedil;ou a bater em minhas costas, eu gritava, tentava me arrastar para longe na cama mas ele p&ocirc;s um joelho em minhas costas, fazendo com que eu ficasse sem ar durante alguns segundos, depois de um longo e torturante minuto ele parou, se levantou e com a voz levemente ofegante disse:</p><p>Se suas notas n&atilde;o forem as melhores da sala neste semestre, voc&ecirc; vai ficar as f&eacute;rias de julho inteiras trancado no quarto de visitas<br />Eu fiquei l&aacute;, deitado, olhando para a parede sem conseguir me mexer ou pensar direito at&eacute; que em algum momento eu ca&iacute; no sono. No dia seguinte eu acordei tomei meu caf&eacute; e me apressei para ir a escola, n&atilde;o queria ficar em casa muito tempo apesar de que meu pai ja tenha ido trabalhar, vesti meu moletom para esconder as marcas da noite anterior que haviam ficado em meu bra&ccedil;o e fui at&eacute; o carro, eu sempre chego cedo para poder estudar, meu pai n&atilde;o gosta que eu fique com as outras crian&ccedil;as fazendo coisas que ele dizia serem in&uacute;teis ent&atilde;o eu sempre me isolei, buscava n&atilde;o aparecer muito ou chamar aten&ccedil;&atilde;o, sempre que me chamavam pra algo eu inventava alguma desculpa, acho que o pessoal da sala me acha esquisito ou mesquinho, como se eu me achasse de uma ra&ccedil;a diferente, superior. As horas foram passando, as pessoas estavam chegando ent&atilde;o eu me sentei no refeit&oacute;rio para almo&ccedil;ar, de repente um grupo de pessoas da minha idade apareceu, um deles se aproximou e disse:<br />- Ai n&atilde;o quer vir andar com a gente n&atilde;o?<br />Eu prontamente neguei, sem sequer levantar o rosto, ele acenou com cabe&ccedil;a e voltou a andar, prontamente reconheci que era o representante de minha turma, imaginei que ele deveria ter feito isso porque era sua fun&ccedil;&atilde;o. O dia passava e o intervalo se aproximava, com ele as posi&ccedil;&otilde;es de turma, e ent&atilde;o eu me lembrei daquilo que meu pai havia me falado na noite anterior, e ent&atilde;o aquela ideia martelava na minha cabe&ccedil;a e n&atilde;o saia, eu tentava prestar aten&ccedil;&atilde;o nas aulas mas era como se o quadro, n&atilde;o, tudo, tudo desmoronava e ent&atilde;o ao meu redor se constru&iacute;am muros gigantescos, at&eacute; eu perceber que eu era s&oacute; mais um tijolo no muro, preso, incapaz de fazer nada al&eacute;m de aceitar seu destino, mas uma hora essa parede tem que se quebrar. O intervalo havia chegado, eu sai correndo pelos corredores em busca do bendito quadro de avisos, cheguei ao quadro e meus olhos ca&ccedil;avam pelo meu nome, e l&aacute; estava no segundo lugar , atr&aacute;s ironicamente de meu representante, eu sa&iacute; daquele lugar e me dirigi a parte de tr&aacute;s do gin&aacute;sio, onde sabia que n&atilde;o haveria ningu&eacute;m, no m&aacute;ximo algum casal se beijando na parte lateral, me sentei ali como era de costume e fiquei l&aacute;, olhando para cima at&eacute; que o intervalo acabasse, quando o intervalo acabou, me dirigi a minha sala, sentei na minha carteira e comecei a dormir sem querer, acordei s&oacute; na hora da sa&iacute;da, e como de praste peguei minhas coisas e corri para o carro onde l&aacute; aquela mesma sensa&ccedil;&atilde;o do dia anterior me afetava, eu fiquei l&aacute; em p&acirc;nico at&eacute; chegarmos em casa.&nbsp;<br />&nbsp;Chegando em casa n&atilde;o vi meu pai me esperando na poltrona como sempre, pra mim foi um al&iacute;vio por&eacute;m mal sabia eu o que me esperava, corri para meu quarto, joguei minha mochila pela porta e ent&atilde;o algo me puxou pelas costas, eu n&atilde;o tive rea&ccedil;&atilde;o, s&oacute; fui jogado no quarto escuro e pude ouvir a porta sendo trancada, eu tentava ligar a luz mas n&atilde;o funciona, porque algu&eacute;m havia removido a l&acirc;mpada dali, sem muito o que fazer, eu sentei no tapete em posi&ccedil;&atilde;o fetal e fiquei l&aacute; esperando. Depois de algumas horas, algu&eacute;m abriu a portinhola para cachorros que, por algum motivo existia e por algum outro motivo tinha uma tranca do lado de fora, deixou uma bandeja com comida e &aacute;gua e fechou a portinhola, eu bati na porta e gritei por ajuda, mas ningu&eacute;m veio, s&oacute; me restava comer, estranhamente, assim que eu terminei de comer algu&eacute;m abriu a porta e pegou a bandeja de volta, eu n&atilde;o entendi direito, assim se seguiram pelos pr&oacute;ximos dois dias at&eacute; que eu vi algo estranho um ponto vermelho acima do guarda roupa, mais alguns dias se passaram, eu j&aacute; havia perdido a conta e ent&atilde;o, no que me parecia ser durante a noite, n&atilde;o que mudasse muita coisa, eu vi, um par de olhos flutuando, olhando cada canto do quarto at&eacute; se fixarem em mim, eu sai correndo apavorado, entrei no guarda roupa me fechei ali e dormi ali mesmo, no dia seguinte eu acordei e logo vi mais uma bandeja com o que era meu caf&eacute; da manh&atilde;, quando eu vi os olhos ainda estavam l&aacute;, e agora eram mais do que apenas um par, haviam varios, nas paredes, embaixo da cama, at&eacute; que eu olhei para o teto e vi um gigantesco olho, terminei de comer rapida mente e voltei ao guarda roupa, n&atilde;o conseguia pensar direito.<br />Mais dias se passaram, mais olhos apareceram, eu ou&ccedil;o ratos nas paredes sussurrando meus segredos, meus dem&ocirc;nios sentem sede, eu vou desalinhar esse enredo, eu n&atilde;o pensava, quando sai do arm&aacute;rio para comer eu vi um gigantesco olho na minha frente me olhando, eu parti para cima dele como um louco e ent&atilde;o ele sumiu, eu estava insano. Eu vi aquele ponto vermelho em cima do guarda roupa e subi em cima dele peguei aquela coisa e a destrocei inteira at&eacute; me acalmar, ent&atilde;o eu notei que era uma c&acirc;mera e comecei a chutar a porta sem sucesso, ent&atilde;o eu comi entrei no guarda roupa e fiquei l&aacute;, foram assim por mais dias, eu n&atilde;o sabia, j&aacute; havia perdido a conta h&aacute; tempos.</p><h2>2 anos antes- Os amantes</h2><p>E l&aacute; estava eu, primeiro dia do ensino m&eacute;dio, escola nova, mesmas regras por&eacute;m, e n&atilde;o h&aacute; nada que eu possa fazer, ao menos, n&atilde;o desde meu s&eacute;timo ano, tenho arrepios s&oacute; de lembrar.<br />Parado em frente ao port&atilde;o respirei fundo, e fui adentrando o lugar, e enquanto observava os arredores do campus um pensamento me ocorreu, &ldquo;Ser&aacute; que meu pai conseguiria ter a mesma influ&ecirc;ncia nessa nova escola, que na minha antiga?&rdquo;, debatendo mentalmente sobre, dois argumentos conflitavam entre si; primeiro: n&atilde;o, afinal se tratava de uma institui&ccedil;&atilde;o p&uacute;blica de prest&iacute;gio, onde s&oacute; os melhores conseguem passar pelo seu processo seletivo, logo, n&atilde;o deveria ser suscet&iacute;vel ao poder e influ&ecirc;ncia de meu pai; e opostamente, o segunda argumento surgiu: sim, justamente por ser uma institui&ccedil;&atilde;o P&Uacute;BLICA FEDERAL que estava mais suscet&iacute;vel &agrave; corrup&ccedil;&atilde;o, afinal, &eacute; assim que as coisas funcionam no nosso pa&iacute;s (e no mundo inteiro), ent&atilde;o segui pensando sobre.&nbsp;<br />Subi a grande rampa para onde estavam direcionando-nos at&eacute; o audit&oacute;rio, e, no meio do caminho, olhei para um corredor e vi, um homem de meia idade, careca, barba rala e grisalha por fazer, e vi, aquele maldito cracha da empresa do meu pai, imediatamente desviei o olhar, segui de cabe&ccedil;a baixa pensando, &ldquo;N&atilde;o, n&atilde;o &eacute; possivel&rdquo;, entrei no audit&oacute;rio, os veteranos nos indicavam a ficar no ch&atilde;o, sentei num canto escondido buscando n&atilde;o chamar aten&ccedil;&atilde;o, alguns minutos se passaram e ent&atilde;o come&ccedil;ou o trote, eles chamaram alguns calouros, (ou bichos como eles falam), para se apresentar, fizeram algumas prendas e etc, e eu estava indo bem, consegui passar despercebido, at&eacute; que enquanto olhava ao redor uma garota olhou para mim e ao mesmo tempo eu olhei para ela, nos olhos se encontraram num olhar, timido eu diria, eu imediatamente disfarcei o olhar e me arrastei uma pouco para o lado.<br />Logo eles nos separaram em grupos, e l&aacute; estava eu, mais uns 2 veteranos, e uns 4 ou 5 &ldquo;bichos&rdquo;, dentre eles dois me chamaram aten&ccedil;&atilde;o, um rapaz baixo, uns 1,70 mais ou menos, vestia uma cal&ccedil;a larga, camisa de alguma banda de rock que eu n&atilde;o conhe&ccedil;o, e cabelo grande, acho que moicano, definitivamente o tipo de pessoa que meu pai chamaria de &ldquo;marginal&rdquo; ou algo do tipo, e ela, a mesma garota de mais cedo, que at&eacute; hoje, n&atilde;o tenho palavras para descrev&ecirc;-la, &eacute; simplesmente, a menina mais bonita de toda a exist&ecirc;ncia, e que, apesar deu n&atilde;o saber, ela se tornaria o motivo de eu seguir em frente. Ela olhou para mim por um instante, percebi e disfarcei, me perguntava, &ldquo;Ser&aacute; que minha roupa est&aacute; esquisita, ou meu cabelo desarrumado?&rdquo;, logo ouvi uma voz:<br />Oi, eu te vi mais cedo, qual seu nome?<br />E ali come&ccedil;aria algo que eu n&atilde;o poderia imaginar, respondi e ela disse:<br />Prazer, voc&ecirc; parece meio desconfort&aacute;vel aqui, t&aacute; tudo bem com voc&ecirc;?<br />Eu n&atilde;o demorei a responder, nem um segundo, j&aacute; era uma resposta autom&aacute;tica, por&eacute;m dessa vez foi diferente, dentro da minha cabe&ccedil;a, nesse intervalo de menos que um segundo, eu entrei num limbo de pensamentos, ningu&eacute;m nunca havia se preocupado comigo desse jeito, eu n&atilde;o conseguia entender, e naquele m&iacute;nimo intervalo, considerei dizer a verdade, mas repensei, seria estranho, nunca havia visto-a na vida, logo dei uma desculpa esfarrapada, mas a conversa n&atilde;o acabou a&iacute;, ficamos juntos o dia inteiro, descobrimos que t&iacute;nhamos muito em comum, at&eacute; que chegou o que os veteranos tratavam como um &ldquo;ritual de inicia&ccedil;&atilde;o&rdquo; o verdadeiro trote, nos avisaram para trocarmos de roupa, e ent&atilde;o nos levariam para a quadra, eu por motivos &oacute;bvios n&atilde;o iria, apesar de ter levado comigo uma roupa reserva escondido pensando nesse momento, mas ainda em d&uacute;vida, at&eacute; que, enquanto eu estava deitado no mato, olhando as nuvens, ela veio at&eacute; mim tampando o sol como um eclipse e ao mesmo tempo, ficando com uma aura quase celestial ao redor de si, e ent&atilde;o me estendeu a m&atilde;o, eu n&atilde;o entendi de cara e ent&atilde;o ela disse:<br />U&eacute;, voc&ecirc; n&atilde;o vem?<br />Dessa vez demorei mais do que um segundo para responder, aquele limbo havia me atingido novamente, e por um momento, enquanto mais uma das respostas autom&aacute;ticas tentava me afligir novamente, eu parei, e ent&atilde;o repensei, mas por qu&ecirc; eu tinha que seguir esse enredo de sempre, logo, pela primeira vez, eu me permitiria viver, respondi:<br />&Oacute;bvio, eu s&oacute; tava aproveitando a vista.<br />E naquele momento, senti que me faltou coragem para soltar um elogio, algo do tipo &ldquo;que ali&aacute;s, acabou de melhorar&rdquo;, enfim tive que guardar para mim por enquanto, prontamente segurei sua m&atilde;o e me levantei, e ent&atilde;o, ela n&atilde;o soltou minha m&atilde;o enquanto &iacute;amos at&eacute; a quadra, e eu sem perceber, talvez por estar pensando idiotamente sobre o que falaria para meu pai mais tarde, tamb&eacute;m n&atilde;o soltei a dela, e assim fomos, quando me dei conta, n&atilde;o fiz nada, na nuance do sil&ecirc;ncio daquele breve momento, entramos num acordo silencioso de justamente ficarmos em sil&ecirc;ncio, eu podia perceber alguns veteranos e bicho olhando para n&oacute;s mas me manti em sil&Ecirc;ncio, era o acordo, e assim se foi, j&aacute; na quadra, ficamos juntos a todo o tempo, nos fizeram pular na lama, nos jogaram &aacute;gua (com a desculpa de nos limpar da lama), farinha e tinta, um verdadeiro caos, por um momento a perdi de vista, mas logo a vi, no exato momento em que jogaram &aacute;gua nela, e l&aacute; estava ela, rindo como um anjo, e naquele breve intervalo de segundo eu tive a realiza&ccedil;&atilde;o de que ela era aquilo que eu mais almejava ser, livre, n&atilde;o pude fazer nada al&eacute;m de admir&aacute;-la.&nbsp;<br />Logo, um breve questionamento me atingiu de s&uacute;bito, &ldquo;porqu&ecirc;, porqu&ecirc; eu n&atilde;o poderia ser livre tamb&eacute;m?&rdquo;, mas deixei isso de lado, afinal, tinha algo melhor para me preocupar no momento, que no caso era tentar desviar do balde de &aacute;gua que escapou da m&atilde;o de um dos veteranos e agora vinha em minha dire&ccedil;&atilde;o, e honestamente, eu quase consegui, mas ainda sim, o balde havia acertado minha cabe&ccedil;a, eu escorreguei e ca&iacute; de bunda no ch&atilde;o na mesma hora, alguns veteranos e bichos se reuniram ao meu redor, eu n&atilde;o entendia o porqu&ecirc;, at&eacute; que ela veio at&eacute; mim, se agachou em minha frente exclamando:<br />- &nbsp;O que aconteceu ?!?! Voc&ecirc; t&aacute; bem?!?! - Ela disse, colocando a m&atilde;o em minha testa, mais preocupada que todos.&nbsp;<br />Passei a m&atilde;o na testa e s&oacute; ent&atilde;o entendi toda a preocupa&ccedil;&atilde;o, minha m&atilde;o estava manchada num tom de vermelho, pouco, mas estava, eu comecei a gargalhar n&atilde;o de nervosismo, mas sim de euforia, pela primeira vez, eu estava me sentindo vivo. As pessoas ao meu redor riram tamb&eacute;m por&eacute;m uma boa parte ainda preocupada, e eu vi, a express&atilde;o de seu belo rosto passar de preocupa&ccedil;&atilde;o para raiva, e ent&atilde;o disse:<br />&Eacute; s&eacute;rio isso!!!<br />&nbsp;Eu soltei uma pequena risada, ela ficou extremamente fofa &nbsp;brava, logo, aquele mesmo rapaz de mais cedo me acompanhou at&eacute; a enfermaria, ele era do segundo ano e os veteranos confiavam nele. E l&aacute; fui eu, o corte era pequeno como eu esperava, por isso estava t&atilde;o despreocupado, n&atilde;o demorou muito, a enfermeira limpou e fez um curativo simples com algod&atilde;o e um band-aid, disse que era s&oacute; at&eacute; o sangue estancar e que quando eu fosse tomar banho j&aacute; poderia tirar, ela me deu uma band-aid para eu usar at&eacute; chegar em casa e disse que daqui a dois dias j&aacute; teria cicatrizado.<br />&nbsp;Sa&iacute; da enfermaria e l&aacute; estava ela me esperando, quando me viu, tentou disfar&ccedil;ar seu rosto de preocupa&ccedil;&atilde;o com uma cara emburrada que no fim s&oacute; era fofa, eu dei uma risadinha, ela olhou para o lado, estendeu a m&atilde;o e disse:<br />&nbsp;- Eu peguei sua bolsa, voc&ecirc; deixou l&aacute; no mato desde aquela hora.<br />&nbsp;- Obrigado!<br />&nbsp;- J&aacute; acabaram as brincadeiras, eles est&atilde;o abrindo o gin&aacute;sio para quem quiser tomar banho. - Ela disse olhando para o lado ainda.<br />&nbsp;- Entendi, j&aacute; vou indo l&aacute;.- Dei alguns passos, olhei para tr&aacute;s e disse:<br />- U&eacute; voc&ecirc; n&atilde;o vem? - Assim como ela havia me dito mais cedo<br />&nbsp;- Hm - Ela deu de bru&ccedil;os<br />&nbsp;- Sabe que essa sua postura de durona s&oacute; &eacute; fofa n&eacute;? - Provoquei-la<br />&nbsp;- Ah - Ela corou imediatamente - Idiota<br />&nbsp;- Hm - Senti como se a coragem que havia me faltado mais cedo, tivesse ascendido agora, talvez tenha sido a batida na cabe&ccedil;a.<br />&nbsp;Ela tornou-se a me acompanhar, olhando para baixo com o rosto ainda corado, andei um pouco e me dei conta de algo importante, n&atilde;o sabia onde era o gin&aacute;sio, parei no meio do corredor, virei lentamente para ela e disse:<br />Onde &eacute; o gin&aacute;sio mesmo?- Fiz uma careta enquanto falava<br />Bobo - Ela me puxou pela m&atilde;o e foi me levando, eu alonguei o passo para alcan&ccedil;ar ela e segurei sua m&atilde;o, ela me olhou, soltou minha m&atilde;o por um momento, com o rosto levemente corado, eu disse:<br />Sabe o que &eacute;, &eacute; que eu bati a cabe&ccedil;a rs.<br />&nbsp;Estranhamente isso funcionou, ela voltou a segurar minha m&atilde;o como da primeira vez, e como da primeira vez, voltamos ao silencioso acordo de ficar em sil&ecirc;ncio, pegamos a bolsa dela e fomos at&eacute; o gin&aacute;sio.<br />&nbsp;Me limpei, e fui at&eacute; a cantina, nunca havia me sentido t&atilde;o faminto (pensando melhor, j&aacute; sim), comprei um salgado com o dinheiro que meu pai havia me dado, me sentei num banco debaixo de uma &aacute;rvore, at&eacute; que ela aparece andando com algumas amigas, trocamos olhares r&aacute;pidos, e ela seguiu. Fiquei l&aacute;, meu lanche j&aacute; havia terminado, mas fiquei l&aacute;, olhando para as nuvens o dia j&aacute; come&ccedil;ava a querer escurecer e l&aacute; eu fiquei, de repente, ela apareceu, vindo do mesmo caminho de antes, mas dessa vez sozinha, eu fingi que n&atilde;o percebi, ela sentou-se ao meu lado, em sil&ecirc;ncio, e me perguntou:<br />E a&iacute;? Como voc&ecirc; vai embora?<br />E ent&atilde;o me dei conta, eu iria embora de &ocirc;nibus, meu pai me disse que iria de &ocirc;nibus agora no ensino m&eacute;dio porque eu j&aacute; &nbsp;n&atilde;o era crian&ccedil;a, e por que na &eacute;poca dele, ele ia a p&eacute; para escola sendo mais novo que eu, e eu, a contrario do que muitos poderiam imaginar, n&atilde;o reclamei, e pelo contr&aacute;rio, gostei disso, eu finalmente poderia ser um pouco livre, mas ent&atilde;o, qual o problema, o problema &eacute; que eu n&atilde;o fazia id&eacute;ia de qual &ocirc;nibus pegar, logo respondi:<br />&Ocirc;nibus, mas n&atilde;o tenho ideia de qual eu pego.<br />Ela riu e disse:<br />Tinha que ser, olha aqui.- Disse ela puxando o celular e abrindo um aplicativo de &ocirc;nibus.- Esse aqui &eacute; o que eu pego, mas d&aacute; para ver os outros tamb&eacute;m.<br />Lembrei que meu pai havia dito que eu deveria descer no terminal e ir para casa a p&eacute; j&aacute; que eu morava l&aacute; perto, logo percebi que &nbsp;aquele &ocirc;nibus parava no terminal:<br />Olha, esse serve para mim ir para casa.<br />Caramba, voc&ecirc; desse onde, eu paro l&aacute; no terminal e vou andando at&eacute; em casa e- Imediatamente a interrompi<br />EU TAMB&Eacute;M!<br />Imposs&iacute;vel, que coincid&ecirc;ncia, enfim o pr&oacute;ximo passa daqui a uma meia hora.- Ela parou, olhou para mim e disse - Voc&ecirc; n&atilde;o colocou o band-aid idiota?!?<br />&nbsp;Na hora me lembrei do band-aid e dei uma baita gargalhada, peguei o band-aid na bolsa e pedi para que colocasse para mim, ela colocou delicadamente, quando terminou, nossos olhos se cruzaram, e eu travei, quase hipnotizado, n&atilde;o sei quanto tempo ficamos nos olhando, sei que quando nos demos conta, disfar&ccedil;amos, pude perceber seu rosto corando, e o meu tamb&eacute;m, ficamos em sil&ecirc;ncio, olhando para cima...</p><p>- N&atilde;o acabado -</p>`
    },
    {
        id: 7,
        tipo: "conto",
        aluno: "Julia Sophia",
        titulo: "Florescendo como hibiscos",
        descricao: "Ela é mais resolvida com a identidade dela.  A cultura africana se tornou sua coroa e agora ela floresce como os hibiscos.",
        imagem: "contoJulia.jpg",
        alt: "Mulher com cabelo crespo solto e flor de hibisco na orelha",
        legenda: "Inspirada na capa original",
        conteudo: `<p>5 Anos depois&hellip;</p>
        <p>Eu cresci muito na vida e sou uma jovem mulher agora. minha tia Ifeomma me ajuda em tudo que eu preciso e posso me orgulhar de ter conseguido cuidar de tudo. Esqueci de dizer que tenho um filho. Do meu próprio ventre. Se papa estivesse aqui talvez nem eu e nem minha família estaria. Jaja saiu da cadeia e terminou uma faculdade na capital. meu noivo, Amaddi chega daqui á alguns minutos para tomar um café com a tia Ifeomma e eu. sim, o padre Amaddi se abdicou do cargo para assumir uma familia comigo. Minha tia me da um envelope fechado e empoeirado feito por mim mesma ha anos atras e eu o abro com um leve embrulho no estomago</p>
<p>&nbsp;Minha tia me da um envelope fechado e empoeirado feito por mim mesma ha anos atras e eu o abro com um leve embrulho no estomago.</p>
<h2>"Como posso come&ccedil;ar?</h2>
<p>Nesse exato momento estou com a tia Ifeomma na farm&aacute;cia, comprando uns rem&eacute;dios que n&atilde;o sei pra que servem. Mas a tia disse que melhorariam meus enjoos.</p>
<p>-Quando o &ldquo;padre&rdquo; Amaddi chegar n&oacute;s vamos conversar com muita calma sobre isso, ok?</p>
<p>-Tudo bem&hellip;</p>
<p>Ela fez uma enorme quest&atilde;o de colocar essas aspas em seus dedos.</p>
<p>Quando chegamos em casa, Amaddi estava esperando do lado de fora do jardim, tocando levemente as p&eacute;talas dos hibiscos como tocava meus l&aacute;bios. de forma serena enquanto me dava a comunh&atilde;o, ele estava cantarolando uma parte de &ldquo;Jesus meu guia &eacute;&rdquo; (a mesma m&uacute;sica que as vozes estrondosas do coral da igreja cantavam quando eu quis cair aos seus p&eacute;s. Quando olhou pra mim depois de abrir os belor olhos brutos, eles sorriam para os meus, e fiquei apenas admirando o abismo profundo desses lindos olhos.</p>
<p>-Como vai, minha flor?</p>
<p>-Bem&hellip; e voc&ecirc;?</p>
<p>-Melhor agora, vamos entrar?</p>
<p>Depois de me juntar a ele e entrar, sentamos no sof&aacute; com a tia e eles come&ccedil;aram a conversar da forma mais suave poss&iacute;vel, t&atilde;o suave que nem parecia que o assunto era eu estar gerando o filho dele&hellip;</p>
<p>Espero que as coisas fiquem melhores no futuro&hellip;</p>
<p>Ass: Kambilli &ldquo;</p>
<p>E ver que hoje em dia tudoisso passou de ser uma coisa ruim e hoje ser uma ben&ccedil;ao na forma do meu filho. Ravi. &Eacute; aliviante.</p>`
    },
    {
        id: 8,
        tipo: "conto",
        aluno: "Lavínnia",
        titulo: "Escritores serão escritores",
        descricao: "'Eugene leu toda a matéria revisada em meio ao escritório, era breve, mas bem objetiva. Toda a equipe ao seu redor veio consolá-lo, mas ele não fazia nada além de encarar o papel com os olhos vazios. Já era tarde, todos sabiam que ele estava morto até esse ponto.'",
        imagem: "contoLavinnia.jpg",
        alt: "Investigador andando em beco escuro em colagem de jornal",
        legenda: "Capa do conto com Samuel ilustrado",
        conteudo: `<h2>Cap&iacute;tulo 1 - JORNALISTA SAMUEL FLORENCE DESAPARECE</h2>
<p><br />&ldquo;Lamentamos informar o desaparecimento de Samuel Florence. O escritor n&atilde;o d&aacute; sinais de vida desde a tarde do &uacute;ltimo s&aacute;bado.<br />Samuel era um homem &iacute;ntegro e estava motivado a desenvolver uma mat&eacute;ria criticando o sistema educacional do pa&iacute;s e suas complica&ccedil;&otilde;es.<br />Um dos ministros do gabinete entrou em contato conosco. Afirmaram que eles o capturaram por seu artigo, dito difamat&oacute;rio. Eles, portanto, n&atilde;o estavam interessados em negociar, e qualquer contato foi recusado ap&oacute;s isso.<br />Queremos deixar claro o nosso rep&uacute;dio &agrave; atual lideran&ccedil;a do nosso pa&iacute;s e alertar o povo para n&atilde;o nos mantermos negligentes.&rdquo;<br />Eugene leu toda a mat&eacute;ria revisada em meio ao escrit&oacute;rio, era breve, mas bem objetiva. Toda a equipe ao seu redor veio consol&aacute;-lo, mas ele n&atilde;o fazia nada al&eacute;m de encarar o papel com os olhos vazios. J&aacute; era tarde, todos sabiam que ele estava morto at&eacute; esse ponto.<br />&ndash; E agora? O que fazemos?&nbsp;<br />&ndash; N&oacute;s lan&ccedil;amos sua mat&eacute;ria. &Eacute; apenas o que podemos fazer. &ndash; disse Ade Coker, um dos jornalistas renomados da equipe, enquanto afastava sua m&atilde;o do ombro de Eugene, podendo assim encar&aacute;-lo.<br />&ndash; Mas e se eles&hellip;<br />&ndash; N&oacute;s vamos mostrar a verdade, &eacute; isso que fazemos, Eugene. Principalmente pela mem&oacute;ria de um parceiro.&nbsp;<br />Eugene acena com a cabe&ccedil;a. Um jornal deve fazer o poss&iacute;vel para mostrar a verdade, e lutar contra todos que se op&otilde;em a isso.&nbsp;</p>
<h2>Cap&iacute;tulo 2 - O ambicioso</h2>
<p>&Eacute; uma cena engra&ccedil;ada pensar que um jornal &ldquo;underground&rdquo; significa v&aacute;rios jornalistas no subterr&acirc;neo, espremidos em lugares apertados apenas com suas m&aacute;quinas de escrever. Isso se torna ainda mais c&ocirc;mico quando me encontro andando pelos t&uacute;neis de esgoto abaixo da cidade.<br />Alguns pensam que esse trabalho n&atilde;o vale a pena s&oacute; para receber algumas informa&ccedil;&otilde;es. Mas n&atilde;o s&atilde;o s&oacute; informa&ccedil;&otilde;es, s&atilde;o a verdade. Verdade essa que, se ir para meu artigo, podem comover a popula&ccedil;&atilde;o nigeriana. Que podem me fazer ser respeitado, t&atilde;o respeitado quanto Ade Coker.&nbsp;<br />Evitando ao m&aacute;ximo encostar nas paredes sujas, me esgueirei at&eacute; um caminho sem sa&iacute;da. No final havia ele, um homem de apar&ecirc;ncia misteriosa. Bem, a apar&ecirc;ncia de suas vestes, j&aacute; que n&atilde;o era poss&iacute;vel ver seu rosto com o chap&eacute;u e a penumbra dominante do canto que estava.&nbsp;<br />&ndash; Bom te ver. &ndash; sua voz era t&atilde;o andr&oacute;gina quanto sua apar&ecirc;ncia, sendo imposs&iacute;vel decifrar seu g&ecirc;nero para quem o via pela primeira vez.<br />&ndash; S&oacute; porque eu pago bem.&nbsp;<br />&ndash; Que isso? N&atilde;o posso elogiar a visita de um conhecido? &ndash; dizia com voz maliciosa e brincalhona.<br />&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;As gotas caiam em um ritmo desacelerado, como se cada uma desse o tempo da outra ecoar pelo vasto corredor, para assim permitir-se escorrer.<br />&ndash; Isso n&atilde;o &eacute; uma &ldquo;visita&rdquo;.&nbsp;<br />&ndash; Tem raz&atilde;o&hellip; &ndash; ajeitou seu casaco em um gesto firme &ndash; Mas isso n&atilde;o significa que voc&ecirc; precise ficar t&atilde;o desanimado. Eu tenho um motivo melhor.<br />&ndash; Como assim?<br />&ndash; L&aacute; vamos n&oacute;s mergulhar no trabalho&hellip; Bem, pelo visto, &eacute; quase imposs&iacute;vel conseguir uma fofoca decente dessa universidade que n&atilde;o seja censurada, quem dir&aacute; provar.<br />&ndash; Ent&atilde;o&hellip; n&atilde;o achou nada? &ndash; A pausa foi mais longa do que eu gostaria.&nbsp;<br />&ndash; Calma amigo, eu disse quase imposs&iacute;vel. Acredito que seja poss&iacute;vel sim encontrar algo interessante, mas n&atilde;o vai ser por mim. Bem, n&atilde;o agora que estou todo enrolado com algumas coisas. Acredito que apenas em breve terei algo &uacute;til. At&eacute; l&aacute;, vale a pena conversar com os cidad&atilde;os de l&aacute;. Voc&ecirc; sabe, estudantes, professores&hellip;&nbsp;<br />&ndash; S&oacute; preciso esperar&hellip;<br />&ndash; Isso. Paci&ecirc;ncia &eacute; uma virtude! E voc&ecirc; definitivamente precisa de mais! &ndash; Parecia ter notado meu estresse, o tom se tornando mais positivo.<br />&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;N&atilde;o queria mais perder tempo. O agradeci e sa&iacute; antes que desmaiasse com o cheiro podre. Pelo visto s&oacute; preciso de uma reportagem por enquanto&hellip; mas onde eu vou achar algu&eacute;m qualificado?<br />&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Suspirei bem alto no meio da rua, j&aacute; tinha anoitecido. Precisava de um conselho, portanto, fui at&eacute; a imprensa.</p>
<h2>Cap&iacute;tulo 3 - A professora</h2>
<p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;A imprensa n&atilde;o era mais a mesma. Agora, precisava fazer um caminho muito incomum, s&oacute; para chegar no pr&eacute;dio pequeno onde ficamos enfurnados.<br />&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Bom, n&atilde;o &eacute; t&atilde;o diferente de ficar debaixo do solo. Dei uma leve risada nasal enquanto pensei nisso, assim que destranquei a porta. Quando cheguei na sala principal, notei v&aacute;rios editores reunidos. Me assustei imediatamente. Normalmente nesse hor&aacute;rio h&aacute; poucos, mas as mudan&ccedil;as fizeram com que tiv&eacute;ssemos ainda mais trabalho.&nbsp;<br />&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Passei por eles, tentando ignorar o alvoro&ccedil;o. Logo me deparei com Ade Coker, que parecia estar indo para casa.&nbsp;<br />&ndash; Ol&aacute; Samuel! Est&aacute; tudo bem? Nossa, que cheiro &eacute; esse? &ndash; ele cobre seu nariz com as palmas das m&atilde;os.<br />&ndash; Acho que sim, na medida do poss&iacute;vel, o cheiro &eacute; s&oacute; porque esbarrei em uma lixeira. &ndash; Eu digo, me controlando para ser o mais profissional o poss&iacute;vel. Ele tem um ar t&atilde;o calmo enquanto claramente percebe meu cansa&ccedil;o que me irrita &ndash; Na verdade&hellip; Preciso de ajuda com algo. Voc&ecirc; conhece alguma pessoa que frequente a universidade de Nsukka?<br />&ndash; Bom. Acho que o Eugene tem uma irm&atilde; que d&aacute; aula l&aacute;. Poderia ver com ele!<br />&ndash; Obrigada, ele est&aacute; aqui?<br />&ndash; N&atilde;o. Foi para casa. Se quiser posso ir l&aacute; junto de voc&ecirc;.&nbsp;<br />&ndash; Muita gentileza sua &ndash; N&atilde;o tinha gentileza, ele &eacute; s&oacute; um altru&iacute;sta.<br />&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Fomos at&eacute; a casa de Eugene. Tive que ouvir muita enche&ccedil;&atilde;o de saco dele por seu favoritinho. Mas logo sa&iacute; com o n&uacute;mero de Ifeoma, a professora. &Agrave; noite, quando cheguei em casa. Consegui marcar uma data para entrevist&aacute;-la, ela parecia bem animada.</p>
<h2>Cap&iacute;tulo 4 - Rebeldia&nbsp;</h2>
<p><br />&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;O ar da casa da professora Ifeoma &eacute; bem leve. Logo quando cheguei, uma pequena crian&ccedil;a de &oacute;culos abriu a porta e logo sorriu calorosamente.<br />&ndash; M&atilde;e, ele chegou! &ndash; chamou enquanto arrumava os &oacute;culos, que insistiam em ficar na ponta do nariz. Seguiu abrindo a porta para eu entrar.<br />&ndash; Seja bem vindo, Samuel! Venha c&aacute;!&nbsp;<br />&ndash; &Eacute; um prazer conhec&ecirc;-la, Senhorita Ifeoma.<br />&ndash; Ah, que isso! Pode me chamar s&oacute; de Ifeoma! &ndash; ela riu.&nbsp;<br />&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Aquilo realmente parecia um lar digno, por mais que se encontrasse em situa&ccedil;&atilde;o prec&aacute;ria, assim como o resto do bairro. Todos eram extremamente risonhos e acolhedores. Os seus tr&ecirc;s filhos j&aacute; estavam indo brincar na rua, parecia que algo interessante estava acontecendo, mas n&atilde;o perguntei, talvez estivesse distra&iacute;do demais com o sorriso belo da mulher.&nbsp;<br />&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Ela me levou at&eacute; a varanda, onde havia uma pequena mesa com duas cadeiras e, em cima, alguns lanches, copos descart&aacute;veis e uma jarra com suco. Havia uma prateleira no canto. Em cima, um incenso com cheiro de hibisco e tr&ecirc;s potinhos de cer&acirc;mica, pareciam esculpidos por iniciantes, v&aacute;rias falhas cobriram a argila, assim como tinta guache.<br />Ifeoma me pegou encarando o m&oacute;vel.<br />&ndash; &Eacute; uma gracinha, n&atilde;o? Meus filhos fizeram no fundamental, Chima nem tinha metade do tamanho de agora&hellip;<br />&ndash; S&atilde;o muito fofos. &ndash; Nunca acostumei-me com conversas casuais, quem dera se tivesse tempo e cabe&ccedil;a para isso todo dia.&nbsp;<br />Ifeoma fazia parecer t&atilde;o f&aacute;cil, leve e d&oacute;cil. Era dotada de uma forma encantadora de envolver os outros em conversas, usando-se dessas brincadeiras bobas. Aben&ccedil;oada, n&atilde;o de forma divina, e sim humana. Simples, e nunca conformada, sempre sonhadora. Estar ao seu lado era estar ao lado de um sol ambulante falando sobre seus filhos estrelinhas, sobre a beleza das outras gal&aacute;xias, sobre a grandeza de cada gr&atilde;o de poeira e sobre o preocupante v&aacute;cuo, no qual todos os distantes se sufocam.<br />&ndash; Est&aacute; tudo bem? &ndash; Serviu o suco e me ofereceu, seus olhos me compreendiam. Ela me compreendia.<br />&ndash; Ah, sim, sim&hellip; s&oacute; estava pensando. &ndash; peguei o copo, suco de caju. Faz tempo que n&atilde;o tomava um.<br />&ndash; Em que?<br />&ndash; Em nada interessante&hellip; &ndash; Meus olhos desviaram mecanicamente aos dela. Agora eu s&oacute; veria seu rosto por minha vis&atilde;o perif&eacute;rica.<br />&ndash; Ent&atilde;o tudo bem. &ndash; Pausou e serviu-se um pouco tamb&eacute;m. &ndash; Por&eacute;m, eu nunca vi algu&eacute;m entediado ter essa cara pensativa.&nbsp;<br />&ndash; Tudo tem uma primeira vez.&nbsp;<br />&ndash; Realmente.<br />Percebi que n&atilde;o tinha tratado de nenhum motivo dos quais vim por.&nbsp;<br />Limpei a garganta. &ndash; Mas ent&atilde;o&hellip; Ifeoma, gostaria de tratar dos assuntos aos quais vim.<br />&ndash; Sim, vamos mergulhar direto no trabalho! &ndash; Ela genuinamente riu em tom um pouco (e s&oacute; um pouco) mais baixo que o normal. &ndash; Desculpa, desculpa. Eugene j&aacute; havia avisado que voc&ecirc; &eacute; obcecado em seus artigos. Sinceramente, acho voc&ecirc; bem parecido com ele, tirando que voc&ecirc; n&atilde;o &eacute; t&atilde;o ap&aacute;tico e n&atilde;o d&aacute; serm&otilde;es cat&oacute;licos a cada segundo&hellip;&nbsp;<br />Voltei a olhar ela. Rindo do meu chefe estonteantemente e, pior, eu realmente entendia que tudo aquilo era bem racional. N&atilde;o planejava, mas nada naquele mundo me impediria de rir naquele momento tamb&eacute;m.<br />&ndash; Ent&atilde;o, bem&hellip; &ndash; Os risos dela tinham cessado mas eu ainda ria como um bobo. &ndash; pensei que n&atilde;o iria concordar tanto.<br />&ndash; Mais do que voc&ecirc; imagina.&nbsp;<br />Sorr&iacute;amos e nos olh&aacute;vamos com a confian&ccedil;a de que nenhum queria olhar para outro objeto existente. Isso at&eacute; uma mo&ccedil;a nova, aparentava ter 15 a 16 anos, interromper-nos. Acabara de derrubar alguns gravetos indo para os arbustos.<br />&ndash; Kambili, n&atilde;o precisa se esconder! &ndash; chamou &ndash; A gente j&aacute; viu voc&ecirc;, vem c&aacute;!<br />A jovem saiu, carregando a express&atilde;o totalmente envergonhada, por&eacute;m, n&atilde;o sua consci&ecirc;ncia, aparentemente.&nbsp;<br />&ndash; Esse &eacute; o Samuel, ele est&aacute; me entrevistando hoje.<br />&ndash; Bom dia, Kambili. &ndash; Estendi minha m&atilde;o e ela apertou fracamente.<br />Depois disso ela saiu em passos r&aacute;pidos. Agora era nossa vez de estar envergonhados.<br />&ndash; Ent&atilde;o&hellip; pode me perguntar o que quiser &ndash; ela baixou o volume da voz &ndash; senhor artigo.<br />&ndash; Est&aacute; bem. &ndash; Peguei meu bloco de anota&ccedil;&otilde;es. &ndash; Como descreveria o estado atual da universidade em geral?<br />&ndash; Para estarem quebrando tudo que v&ecirc;m a cada semana, com certeza n&atilde;o est&atilde;o satisfeitos. E n&atilde;o deveriam estar. N&atilde;o temos mais investimento. Sem investimento, sem recursos. Sem recursos, sem &aacute;gua, sem luz, sem materiais. Mas &eacute; claro que existe mais coisa nisso.<br />&ndash; O qu&ecirc; mais?<br />&ndash; Primeiramente, os professores. Antes j&aacute; era dif&iacute;cil, nunca deixaram de atrasar nosso sal&aacute;rio, sempre entr&aacute;vamos em greve. E agora, com o &ndash; ela faz aspas com os dedos &ndash; &ldquo;administrador &uacute;nico&rdquo;, estamos em constante persegui&ccedil;&atilde;o, principalmente os que n&atilde;o se conformam com as ideias impostas. Estou, a todo momento, amea&ccedil;ada de perder o emprego.&nbsp;<br />&ndash; E como voc&ecirc; acha que isso afeta os alunos?<br />&ndash; Bem, quando eles tem o prazer de estudar, sem greves, se perdem todos, em uma escola que n&atilde;o funciona! Alguns mal t&ecirc;m caneta para escrever, n&atilde;o d&aacute; para usar o banheiro, os projetores n&atilde;o ligam, nem luz. Uma de minhas alunas relatou que iria trancar o curso e tentar sobreviver de outra forma. Estava na metade do curso&hellip; e tinha tanta, mais muita dedica&ccedil;&atilde;o!&nbsp;<br />O ru&iacute;do ambiente nos rodeou, como a indiferen&ccedil;a da natureza sobre os sentimentos humanos. Ela voltou a dizer:<br />&ndash; Perd&atilde;o. Acho que me exaltei. &ndash; n&atilde;o estava mais rindo, em vez disso sua boca, silenciosa, comportou-se em um sorriso ir&ocirc;nico.<br />&ndash; N&atilde;o tem problema. Ali&aacute;s, eu tenho uma &uacute;ltima pergunta. N&atilde;o &eacute; preciso responder caso n&atilde;o queira&hellip; &ndash; fechei o bloco &ndash; Por que aceitou a entrevista?<br />&ndash; Voc&ecirc; acha que n&atilde;o deveria ter feito?<br />&ndash; Acho que existem v&aacute;rios desafios ao tomar essa atitude. Se precisar, a imprensa pode deixar como um relato an&ocirc;nimo.<br />&ndash; N&atilde;o sou de me esconder, por mais que esteja reconsiderando isso agora mesmo. Respondendo &agrave; sua pergunta, Samuel, aceitei pois penso ser o correto. Nada mais, nada menos.<br />S&oacute; o mundo afora parecia guerrear. Na casa dela, havia apenas a paz contrastante, de quem se deixa declarar luta contra todo o mundo, menos a pr&oacute;pria morada. Aquele era um porto-seguro para qualquer amigo que pisasse.<br />&ndash; Vieram alguns agentes, &ndash; ela interrompeu &ndash; sabe? Revirar minhas coisas&hellip;<br />&ndash; Sinto muito.<br />&ndash; S&oacute; pelas crian&ccedil;as, elas n&atilde;o sabiam muito bem o que fazer.<br />Ouvimos batidas ecoando na cal&ccedil;ada. Desritmadas e violentas. Ela levantou e me pareceu j&aacute; preparada para a situa&ccedil;&atilde;o, era uma das m&uacute;ltiplas vezes que vivia essa cena.<br />&ndash; Gra&ccedil;as a Deus que guardei tudo hoje. &ndash; Puxou meu bra&ccedil;o &ndash; Venha! Preciso mostrar do topo! E pegue sua c&acirc;mera! Voc&ecirc; tem uma na bolsa, certo? &ndash; fiz que sim &ndash; Perfeito.&nbsp;<br />Passamos pela sala de estar, onde eu catei minha c&acirc;mera. E subimos at&eacute; o &uacute;ltimo andar do pr&eacute;dio (ela subiu, eu fui mais arrastado, confesso).&nbsp;<br />Os prov&aacute;veis residentes do apartamento n&atilde;o se surpreenderam com nossa visita, mas me olharam confusos. N&atilde;o notei na hora, pois n&atilde;o foi chegar at&eacute; o final da sacada que a vista j&aacute; tinha se formado.<br />Um mutir&atilde;o, muita fuma&ccedil;a, mais chamas ainda, cacos de vidro, peda&ccedil;os de carros e canos, pessoas fugindo e se trancando.&nbsp;<br />N&oacute;s assistimos. Eu bem apressadamente tirei 14 fotos. Ap&oacute;s dissipar o borr&atilde;o da rebeldia, s&oacute; restou observar Ifeoma. Pendurada na sacada, com os olhos vazios, dois mares calmos da tarde, transbordaram.&nbsp;<br />Relato aqui que pensava ser p&eacute;ssimo em confortar as pessoas, mas ela fez parecer suficiente um abra&ccedil;o desajeitado e leve. N&oacute;s, pelo cansa&ccedil;o de sermos fortes, choramos.</p>
<h2>Cap&iacute;tulo 5 - Escritores ser&atilde;o escritores</h2>
<p>Ainda n&atilde;o era o suficiente. &Eacute; claro que eu precisava do relato e das fotos. Aquela ainda era a realidade e era dura, mas eu precisava de mais. Necessitava da hist&oacute;ria completa, de todos os segredos, ou pelo menos boa parte deles. Pois escritores ser&atilde;o escritores.<br />Estava verificando as fotos com a equipe Recontando a cena tr&aacute;gica e alguns de seus desanimadores detalhes, eu encontrei uma foto peculiar.<br />Atr&aacute;s, a rebeldia. Na extremidade esquerda, ela. Recostada na sacada e olhando tudo com melancolia.<br />Sem d&uacute;vida, aquilo era a maior preciosidade que j&aacute; tirei, e sem perceber. Mas n&atilde;o entreguei. Para eles, eu tirei 13 fotos, n&atilde;o sabiam que eu tirei tamb&eacute;m uma preciosidade. N&atilde;o iriam colocar de qualquer jeito.<br />&ndash; O que acha? &ndash; Perguntei para Eugene.<br />&ndash; As fotos s&atilde;o boas&hellip; &ndash; respondeu &ndash; mas recomendo substituir essa parte da entrevista&hellip; Sabe? Aquela em que ela come&ccedil;a a falar das amea&ccedil;as. N&atilde;o quero expor minha irm&atilde; a esse ponto, pretendo impedir o n&atilde;o anonimato dela.<br />&ndash; Ela disse que estava bem com isso.<br />&ndash; Eu sei que escritores ser&atilde;o sempre&hellip; escritores&hellip; Mas veja: eu entendo, &eacute; bem do feitio dela. Mesmo assim, vou faz&ecirc;-lo. Implemente o que quiser, mas retire essa parte.<br />Aquilo era metade da entrevista. Obviamente estressado, concordei.&nbsp;<br />Ao encerrar a conversa, meu chefe fez um coment&aacute;rio embara&ccedil;oso:<br />&ndash; Ali&aacute;s. Se voc&ecirc; pudesse, de vez em quando, se preocupar melhor por onde anda seria bom. &Eacute; que&hellip; seu cheiro&hellip; &agrave;s vezes n&atilde;o tr&aacute;s um ar profissional, entende?<br />&ndash; Sim, adeus. &ndash; derrotado, encostei a porta e fui &ndash; L&aacute; vamos n&oacute;s para o esgoto, de novo!&nbsp;<br />Sobre meu trabalho, n&atilde;o adiantava discutir com ele e mesmo que adiantasse, eu sou totalmente indisposto a me submeter a tal desafio. Prefiro mergulhar em outro desafio, um mais costumeiro.<br />Ent&atilde;o, um dia depois, ando pelos t&uacute;neis at&eacute; me encontrar com aquele &ldquo;cara&rdquo;. A esse ponto estou duvidando at&eacute; disso.<br />O mesmo caminho de sempre e minha mente se recusa a compreender. Sempre me perco conscientemente. Chego ao mesmo final, de qualquer forma.<br />Olhei para a &aacute;gua insalubre correndo na dire&ccedil;&atilde;o contr&aacute;ria a minha e decidi divagar da mesma forma. Assim, segui meus passos antigos, todos que me levaram aqui.<br />&hellip;<br />Aos olhos da nostalgia, toda inf&acirc;ncia &eacute; sens&iacute;vel. A minha foi bem apagada, gra&ccedil;as ao meu c&eacute;rebro. N&atilde;o guardo fotos dessa &eacute;poca, mas sei de alguma hist&oacute;ria por tr&aacute;s dela, por mais que seja igual a olhar as coisas por um vidro fosco. Demorei para falar, s&oacute; aos quatro anos. Eu era bom na escola, principalmente em matem&aacute;tica, mas p&eacute;ssimo em me expressar. Gostava de jogos de tabuleiro, ainda gosto de domin&oacute;.&nbsp;<br />Meus pais eram pessoas bem vistas e que claramente n&atilde;o deveriam estar juntas, mas estavam. N&atilde;o sei se isso era pior que sua aus&ecirc;ncia e n&atilde;o me impediu de desej&aacute;-la naquela &eacute;poca. Por&eacute;m, minha m&atilde;e era boa, sempre a admirei.<br />Tinha um ou outro amigo, mas nunca durava o bastante. Quest&otilde;es internas e externas sempre os levavam e eu me acostumei com a ideia de que, a minha amizade em espec&iacute;fico, era de curto prazo. Um porto seguro, uma parada na estrada. Inventei um racioc&iacute;nio po&eacute;tico para padronizar todas as minhas amizades, futuras e passadas: nos encontrar&iacute;amos, ser&iacute;amos felizes, aprender&iacute;amos um com o outro e, por fim, algo nos separaria.<br />Era melanc&oacute;lico. Depois aprendi a indiferen&ccedil;a da vida sobre o fato de nada durar eternamente. Um fato t&atilde;o simples.<br />Minha adolesc&ecirc;ncia foi ca&oacute;tica, era um punk. Vivia em manifesta&ccedil;&otilde;es, shows apertados ou s&oacute; por a&iacute;. Ouvia bandas que sofriam censura. Algumas escuto at&eacute; hoje, tenho CDs. Muitos odeiam essa parte da minha vida, eu a amo. O catalisador principal para eu ser um excelente escritor, como alegam, foi essa &eacute;poca.<br />Tive v&aacute;rios empregos curtos na minha rebeldia. E absolutamente nenhum relacionamento rom&acirc;ntico significante, sou covarde demais para isso, prefiro pensar em coisas est&uacute;pidas como renome.<br />Depois, peguei meu diploma em jornalismo. Demorou para ter o prazer de trabalhar com Eugene, e quando trabalhei, s&oacute; lembro de fumar, editar textos e ir para confer&ecirc;ncias que me estressam.<br />Tudo era estresse, uma grande parte dos meus desafios se resume a isso.&nbsp;<br />Depois, duas semanas atr&aacute;s, dei a ideia da mat&eacute;ria sobre a faculdade e o ensino em geral da regi&atilde;o, me entretendo com a investiga&ccedil;&atilde;o. Contudo, eu precisava de mais.<br />Ent&atilde;o, eu me levei para a situa&ccedil;&atilde;o atual.<br />Mas por que a investiga&ccedil;&atilde;o? Por que escolher essa mat&eacute;ria?<br />Perguntas que, como toneladas de outras perguntas, permaneceriam n&atilde;o respondidas, assim que tragicamente me interromperam.<br />&ndash; Bom te ver &ndash; Me virei e vi um grupo de pessoas, nenhuma delas era meu informante. Antes que eu pudesse responder ou, melhor, fugir, fui nocauteado.</p>
`
    },
    // RESENHAS 
    {
        id: 9,
        tipo: "resenha",
        aluno: "Kauã Henrique",
        titulo: "Pactos Mortais",
        descricao: "uma resenha dissertando sobre o livro 'kill for me, kill for you' do steve cavanagh.",
        imagem: "resenhaKaua.jpg",
        alt: "Capa do livro 'kill for me, kill for you'",
        legenda: "Foto do livro",
        conteudo: `<h2>T&iacute;tulo, dados do livro e autor</h2><p>T&iacute;tulo: Pactos Mortais</p><p>(T&iacute;tulo original: Kill for Me, Kill for You)</p>
        <p>Autor: Steve Cavanagh</p>
        <p>Editora brasileira: HarperCollins Brasil</p>
        <p>Ano da publica&ccedil;&atilde;o brasileira: 2025</p>
        <p>G&ecirc;nero: suspense psicol&oacute;gico / thriller</p>
        <p>P&aacute;ginas: 336 p&aacute;ginas na edi&ccedil;&atilde;o brasileira</p>
        <h2>Pequeno resumo do enredo</h2>
        <p>Pactos Mortais conta a hist&oacute;ria de Amanda e Wendy, duas mulheres que se conhecem em um grupo de apoio ao luto e descobrem que possuem algo em comum: ambas desejam vingan&ccedil;a contra homens que, segundo elas, destru&iacute;ram suas fam&iacute;lias. A partir disso, elas fazem um acordo: cada uma eliminaria o inimigo da outra, acreditando que assim seria mais dif&iacute;cil relacionar os crimes a elas.</p>
        <p>Paralelamente, a hist&oacute;ria acompanha Ruth, uma mulher que sofre um acontecimento traum&aacute;tico em sua pr&oacute;pria casa e passa a viver com medo e desconfian&ccedil;a. No come&ccedil;o, as duas hist&oacute;rias parecem n&atilde;o ter rela&ccedil;&atilde;o, mas, conforme a narrativa avan&ccedil;a, o leitor percebe que existe uma liga&ccedil;&atilde;o muito maior entre os personagens.</p>
        <p>O livro &eacute; constru&iacute;do com diferentes pontos de vista e v&aacute;rias reviravoltas, fazendo com que muitas informa&ccedil;&otilde;es apresentadas no in&iacute;cio ganhem um novo significado posteriormente.&nbsp;</p>
        <h2>Minha opini&atilde;o sobre o livro</h2>
        <p>Na minha opini&atilde;o, Pactos Mortais &eacute; um livro muito interessante porque consegue manter o suspense durante boa parte da hist&oacute;ria. O que mais gostei foi a maneira como o autor apresenta informa&ccedil;&otilde;es aos poucos, fazendo o leitor tentar descobrir como as hist&oacute;rias est&atilde;o conectadas.</p>
        <p>Tamb&eacute;m achei interessante o tema da vingan&ccedil;a. O livro mostra como uma pessoa pode tomar decis&otilde;es extremas quando sente que a justi&ccedil;a n&atilde;o foi feita. Isso faz o leitor pensar se a vingan&ccedil;a realmente consegue trazer paz ou se acaba criando novos problemas.</p>
        <p>Apesar de algumas partes poderem parecer mais lentas e algumas reviravoltas exigirem que o leitor aceite situa&ccedil;&otilde;es pouco prov&aacute;veis, considero que o suspense e as surpresas compensam esses pontos. Algumas resenhas tamb&eacute;m destacam justamente as reviravoltas e a constru&ccedil;&atilde;o das personagens como pontos fortes.</p>
        <h2>&nbsp;Personagem e minha opini&atilde;o sobre ela</h2>
        <p>A personagem que mais me chamou aten&ccedil;&atilde;o foi Amanda. Ela &eacute; uma mulher marcada pelo luto e pela sensa&ccedil;&atilde;o de que a justi&ccedil;a falhou com sua fam&iacute;lia. Por causa disso, ela passa a ser movida principalmente pelo desejo de vingan&ccedil;a.</p>
        <p>Eu considero Amanda uma personagem interessante porque ela n&atilde;o &eacute; simplesmente uma pessoa boa ou m&aacute;. Ela toma decis&otilde;es question&aacute;veis, mas &eacute; poss&iacute;vel entender os sentimentos que a levaram at&eacute; elas. Steve Cavanagh comentou que queria mostrar Amanda e Ruth como mulheres fortes e determinadas, e n&atilde;o apenas como v&iacute;timas de acontecimentos traum&aacute;ticos.</p>
        <h2>&nbsp;Algo que eu faria diferente no livro</h2>
        <p>Se eu pudesse mudar alguma coisa, faria com que algumas das conex&otilde;es entre as hist&oacute;rias fossem apresentadas um pouco antes. Em determinados momentos, a narrativa pode deixar o leitor confuso sobre a rela&ccedil;&atilde;o entre Amanda e Ruth.</p>
        <p>Por outro lado, entendo que essa escolha tamb&eacute;m faz parte do suspense, pois o autor quer que o leitor descubra as respostas aos poucos. Algumas resenhas tamb&eacute;m apontam que a hist&oacute;ria fica mais corrida pr&oacute;ximo do final.</p>
        <h2>Reflex&atilde;o do livro com a atualidade</h2>
        <p>O livro pode ser relacionado &agrave; atualidade porque aborda quest&otilde;es como luto, trauma, impunidade e confian&ccedil;a na justi&ccedil;a. Atualmente, muitas pessoas discutem a sensa&ccedil;&atilde;o de que o sistema de justi&ccedil;a nem sempre consegue solucionar todos os problemas ou punir quem comete crimes.</p>
        <p>A hist&oacute;ria mostra uma consequ&ecirc;ncia perigosa desse sentimento: quando algu&eacute;m acredita que a justi&ccedil;a n&atilde;o funcionar&aacute;, pode come&ccedil;ar a pensar em fazer justi&ccedil;a por conta pr&oacute;pria. O livro n&atilde;o apresenta isso como uma solu&ccedil;&atilde;o simples, mas faz o leitor refletir sobre os limites entre justi&ccedil;a e vingan&ccedil;a.</p>
        <h2>Identifica&ccedil;&atilde;o com a hist&oacute;ria ou personagem</h2>
        <p>Eu n&atilde;o me identifico diretamente com as situa&ccedil;&otilde;es vividas pelos personagens, mas consigo compreender alguns dos sentimentos apresentados na hist&oacute;ria, principalmente a sensa&ccedil;&atilde;o de querer encontrar respostas quando algo parece injusto.</p>
        <p>A hist&oacute;ria tamb&eacute;m mostra que nossas decis&otilde;es podem ser influenciadas pelas emo&ccedil;&otilde;es. Isso &eacute; algo com que qualquer pessoa pode se identificar em situa&ccedil;&otilde;es do cotidiano, mesmo que sejam problemas muito menores do que os enfrentados pelos personagens.</p>
        <h2>Recomenda&ccedil;&atilde;o</h2>
        <p>Eu recomendo Pactos Mortais para pessoas que gostam de suspense, mist&eacute;rio e hist&oacute;rias com reviravoltas. &Eacute; um livro que faz o leitor tentar descobrir o que est&aacute; acontecendo e juntar as pe&ccedil;as ao longo da narrativa.</p>
        <p>Eu daria 4,5 de 5 estrelas, principalmente pela criatividade da hist&oacute;ria, pelo suspense e pelas reviravoltas. &Eacute; uma leitura que consegue surpreender e fazer o leitor repensar acontecimentos que j&aacute; tinham acontecido.</p>`
    },
    {
        id: 10,
        tipo: "resenha",
        aluno: "Vitor",
        titulo: "O Anticristo",
        descricao: "Resenha do livro 'O Anticristo'",
        imagem: "resenhaVitor.jpg",
        alt: "Foto do livro 'O Anticristo'",
        legenda: "Capa do livro",
        conteudo: `<h2>Informa&ccedil;&otilde;es b&aacute;sicas</h2>
<p>- Autor: Friedrich Nietzsche &nbsp;<br />- T&iacute;tulo: O Anticristo&nbsp;<br />- Ano de publica&ccedil;&atilde;o: 1895, publicado postumamente &nbsp;<br />- G&ecirc;nero: Filosofia / Cr&iacute;tica &agrave; religi&atilde;o e &agrave; moral &nbsp;</p>
<h2>Pequeno resumo</h2>
<p>O Anticristo &eacute; uma das obras mais pol&ecirc;micas do fil&oacute;sofo alem&atilde;o Friedrich Nietzsche. No livro, o autor faz uma cr&iacute;tica intensa ao cristianismo e aos valores morais que, segundo ele, foram constru&iacute;dos a partir dessa religi&atilde;o.</p>
<p>Nietzsche questiona ideias como humildade, submiss&atilde;o, culpa e ren&uacute;ncia aos desejos pessoais. Para ele, a moral crist&atilde; valorizaria caracter&iacute;sticas que enfraquecem o ser humano, como a obedi&ecirc;ncia e a aceita&ccedil;&atilde;o do sofrimento, enquanto condenaria caracter&iacute;sticas ligadas &agrave; for&ccedil;a, &agrave; liberdade e &agrave; afirma&ccedil;&atilde;o da vida.</p>
<p>&Eacute; importante destacar que Nietzsche tamb&eacute;m faz uma diferen&ccedil;a entre a figura hist&oacute;rica de Jesus e a institui&ccedil;&atilde;o crist&atilde; que se desenvolveu posteriormente. Sua principal cr&iacute;tica &eacute; direcionada &agrave; religi&atilde;o organizada e &agrave; influ&ecirc;ncia que ela exerceu sobre a cultura e a moral do Ocidente.</p>
<h2>Opini&atilde;o sobre o livro</h2>
<p>Na minha opini&atilde;o, *O Anticristo* &eacute; um livro extremamente provocador e interessante, mas tamb&eacute;m pode ser dif&iacute;cil de compreender em alguns momentos. Nietzsche escreve de forma direta, agressiva e muitas vezes exagerada, justamente para causar impacto e fazer o leitor questionar ideias que normalmente s&atilde;o aceitas sem reflex&atilde;o.</p>
<p>Mesmo que o leitor n&atilde;o concorde com suas opini&otilde;es, o livro &eacute; importante porque incentiva o pensamento cr&iacute;tico. A obra faz com que reflitamos sobre de onde v&ecirc;m nossos valores, nossas cren&ccedil;as e nossas ideias sobre o que &eacute; certo ou errado.</p>
<p>Por outro lado, algumas cr&iacute;ticas de Nietzsche podem parecer radicais demais, principalmente pela forma como ele se posiciona contra o cristianismo e a moral tradicional.</p>
<h2>Recomenda&ccedil;&atilde;o</h2>
<p>Eu recomendo *O Anticristo* principalmente para pessoas que gostam de filosofia, debates sobre religi&atilde;o, moral e sociedade. N&atilde;o &eacute; um livro indicado para quem procura uma leitura leve, pois apresenta ideias complexas e bastante controversas.</p>
<p>Para aproveitar melhor a obra, &eacute; interessante conhecer um pouco sobre o pensamento de Nietzsche antes da leitura ou buscar explica&ccedil;&otilde;es sobre os principais conceitos apresentados no livro.</p>
<h2>Avalia&ccedil;&atilde;o</h2>
<p>**★★★★☆ &mdash; 4 de 5 estrelas**</p>
<p>A obra recebe uma avalia&ccedil;&atilde;o alta por sua import&acirc;ncia filos&oacute;fica, originalidade e capacidade de provocar reflex&otilde;es profundas. A estrela que falta est&aacute; relacionada &agrave; dificuldade da leitura e ao tom extremamente radical utilizado pelo autor, que pode afastar alguns leitores.</p>
<h2>Rela&ccedil;&atilde;o do livro com a atualidade</h2>
<p>Apesar de ter sido escrito no final do s&eacute;culo XIX, *O Anticristo* ainda pode ser relacionado com a atualidade. Atualmente, existem muitos debates sobre religi&atilde;o, liberdade individual, moralidade e a influ&ecirc;ncia das tradi&ccedil;&otilde;es na sociedade.</p>
<p>As cr&iacute;ticas de Nietzsche tamb&eacute;m podem ser associadas &agrave; import&acirc;ncia de questionar informa&ccedil;&otilde;es, valores e opini&otilde;es que recebemos da fam&iacute;lia, da religi&atilde;o, da sociedade ou das redes sociais. O fil&oacute;sofo defende, de certa forma, que o indiv&iacute;duo n&atilde;o deve simplesmente aceitar os valores impostos, mas refletir e construir sua pr&oacute;pria vis&atilde;o de mundo.</p>
<p>Assim, mesmo sendo uma obra pol&ecirc;mica, *O Anticristo* continua atual por incentivar o pensamento cr&iacute;tico e o questionamento sobre os valores que influenciam a sociedade e as escolhas individuais.</p>`
    },
    {
        id: 11,
        tipo: "resenha",
        aluno: "Julia Sophia",
        titulo: "A guardiã de pedras & O profeta de ferro",
        descricao: "Resenha sobre o livro 'A guardiã de pedras & O profeta de ferro'",
        imagem: "resenhaJulia.jpg",
        alt: "Capa de 'A guardiã de pedras & O profeta de ferro'",
        legenda: "Capa do livro",
        conteudo: `
<p>com minha humilde opini&atilde;o e spoilers</p>
<p>J&aacute; vou come&ccedil;ando a dizer minhas observa&ccedil;&otilde;es&hellip; Este livro &eacute; uma &ldquo;romantasia&rdquo; (romance com fantasia), e portanto&nbsp;<br />&eacute; um cl&aacute;ssico desse g&ecirc;nero voc&ecirc; ter que reler o par&aacute;grafo trinta vezes pra tentar entender a atrocidade que os personagens est&atilde;o vestindo kkkk&nbsp;</p>
<p>Boas observa&ccedil;&otilde;es a fazer&nbsp;</p>
<p>Numero 1 - A capa e o design</p>
<p>Cara! Olha que capas mais perfeitasssss. S&oacute; pela capa voc&ecirc; j&aacute; sabe que o livro &eacute; dahora! Uma curiosidade nos dois livros &eacute; que a capa &eacute; cont&iacute;nua. E tamb&eacute;m eles tem detalhes na borda das p&aacute;ginas e tals. muito bom. eles parecem enfeites essenciais da minha prateleira. &nbsp;<br />OBS: S&Atilde;O DE CAPA DURAAAAAAHHHH!!!&nbsp;</p>
<p>2. As refer&ecirc;ncias:</p>
<p>Eu achei &Eacute;PICO! &Eacute; uma vibe t&atilde;o &eacute;pica que eu recomendo ouvir Main Title de Game Of Thrones:<br />main title (game of thrones) | slowed &amp; reverb&nbsp;</p>
<p>Esse virou meu ritual. Eu coloco meus fones depois de pegar um lanche e ir pro meu quarto e fechar a porta, e abro o livro invocando a imagina&ccedil;&atilde;o liter&aacute;ria. E falando sobre o romance no ar rsrs&hellip; os hots podem durar entre 3 e 5 p&aacute;ginas. E tem a cena de &ldquo;S&oacute; tem uma cama&rdquo; rsrsrs, fora outros cl&aacute;ssicos rom&acirc;nticos. mas vai por mim rsrs tem uma parte em que o ardan me pegou direitinho rsrs. que homem!&nbsp;</p>`
    },
    {
        id: 12,
        tipo: "resenha",
        aluno: "Lavínnia",
        titulo: "Admirável mundo novo",
        descricao: "'Foi nosso primeiro encontro, pouco romântico. O primeiro era “Admirável mundo novo”, um livro que nunca deixou de me roubar atenção por dois motivos: ser aclamado pela crítica como um clássico e ser uma ficção científica distópica.'",
        imagem: "resenhaLavinnia.jpg",
        alt: "Foto do livro",
        legenda: "Capa do livro 'Admirável mundo novo'",
        conteudo: `
        <p>⋆&sdot;⋆&sdot;⋆&sdot;⋆&sdot;⋆&nbsp;</p><h2><br />Informa&ccedil;&otilde;es gerais:</h2><p><br />T&iacute;tulo: Admir&aacute;vel mundo novo&nbsp;<br />Autor: Aldous Huxley<br />Ano: 1932</p><h2>&nbsp;<br />Resumo:</h2><p>632 anos depois de Ford (sim, Henry Ford, fundador da marca de carros). N&atilde;o existe mais des&acirc;nimo, nem Deus, nem fam&iacute;lia, nem d&uacute;vidas, nem desigualdade, nem arte. Pelo menos, &eacute; isso que a sociedade ir&aacute; declarar, grandiosamente. Tudo &eacute; perfeito. Os cidad&atilde;os s&atilde;o gerados em laborat&oacute;rios especializados, designando-se, basicamente, todos os aspectos de sua vida. Cada um biologicamente alterado, para seguir seu prop&oacute;sito. Definido por sua casta sistem&aacute;tica, dos Epsilons menos aos Alfas mais, ou do menos evolu&iacute;do ao mais evolu&iacute;do, todos tem seu valor. Toda a realidade, nunca &eacute; questionada, em vez disso, &eacute; repetida tal qual uma voz na mente dos indiv&iacute;duos. Voz essa que sempre diz os mesmos trechos hipnop&eacute;dicos, repetidos por anos para moldar os pensamentos de cada um. &nbsp;<br />&nbsp;Pois ningu&eacute;m ser&aacute; motivado a ter um pensamento, a n&atilde;o ser que contribua para esse sistema. Sem d&uacute;vida, nosso admir&aacute;vel mundo novo, uma distopia disfar&ccedil;ada de utopia. Mas n&atilde;o &eacute; o mundo inteiro que vive assim. Ainda existem viv&iacute;paros, aqueles com pai e m&atilde;e. Totalmente separados, em condi&ccedil;&otilde;es insalubres, exclu&iacute;dos, em reservas separadas.<br />&nbsp;Nesse mundo perfeito que os personagens iniciais vivem, dois deles v&atilde;o a uma reserva e conhecem um viv&iacute;paro, conflitos internos os fazem lev&aacute;-lo (junto de sua m&atilde;e) para estudo na sociedade. Ao se apaixonar por outra personagem, se v&ecirc; perdido em um costume rigoroso de atra&ccedil;&atilde;o em uma sociedade sistem&aacute;tica, sem espa&ccedil;o para o amor.&nbsp;<br />&nbsp;Uma hist&oacute;ria sem protagonista central, onde s&oacute; se observa a queda de cada personagem em completo absurdo.</p><h2><br />Opini&atilde;o:</h2><p>Um &oacute;timo livro para refletir sobre a sociedade. Aldous realiza um cen&aacute;rio frio e calculado com precis&atilde;o absoluta. D&aacute; vida &agrave; uma sociedade morta. Uma distopia t&atilde;o realista que consegue arrancar um terror psicol&oacute;gico do leitor. N&atilde;o &eacute; confort&aacute;vel l&ecirc;-lo, e &eacute; por isso que funciona t&atilde;o bem como cr&iacute;tica. O uso de termos cient&iacute;ficos ou complexos foi o que mais me imergiu. Muitos deles s&atilde;o literais e compactuam o sentido dos objetos, salas, etc&hellip; E nada realmente parece humano. Nem o mais pr&oacute;ximo de arte que existe, o cinema sens&iacute;vel, apenas se destaca como entretenimento f&uacute;til, para ressaltar os valores de uma sociedade calculada. Senti muita raiva dos personagens da narrativa, o que &eacute; bom. Eles realmente conseguem parecer seres perdidos e controlados. O &uacute;nico que parece n&atilde;o seguir perdidamente isso, sendo um n&atilde;o-viv&iacute;paro, &eacute; Henry. Mesmo assim ele ainda n&atilde;o &eacute; a pessoa que mais foge dessa raiva. Dito isso, a pessoa que, n&atilde;o &eacute; s&oacute; a que mais se livre, mas como representa nossa raiva sobre os outros &eacute; John. Poderia desenvolver mais sobre ele, e vou brevemente.</p><h2><br />Recomenda&ccedil;&atilde;o:</h2><p>O livro trata da a&ccedil;&atilde;o humana sobre a vida de todos. Sendo assim, bem sei que, assim como existem pessoas que se importam com ela, existem as que preferem n&atilde;o se preocupar. Qualquer dessas que voc&ecirc; seja, penso ser importante igualmente ler esse livro.<br />Recomendo para audi&ecirc;ncias mais maduras. O livro &eacute; classificado para a faixa et&aacute;ria de 14 anos ou mais).</p><h2><br />Entre realidade e fic&ccedil;&atilde;o:</h2><p>No in&iacute;cio da recomenda&ccedil;&atilde;o, citei que o livro trata da a&ccedil;&atilde;o humana nos outros. Deixe-me desenrolar. Distopias s&atilde;o retratadas, historicamente, como um poss&iacute;vel futuro da nossa realidade, mesmo em fic&ccedil;&atilde;o. E esse recurso tem poder, pois alerta o que as a&ccedil;&otilde;es humanas causam. Mesmo sendo sobre o futuro, elas criticam muito mais o presente.<br />Fazendo parte delas, sempre vem com aspectos marcantes de ignor&acirc;ncia, desigualdade, manipula&ccedil;&atilde;o midi&aacute;tica e controle&nbsp;<br />comportamental. Aldous aproveita o potencial de cada um de forma fria e precisa no mundo real.&nbsp;<br />E pior, ele nem parece se esfor&ccedil;ar muito para fazer isso. Ele v&ecirc; o que est&aacute; no nosso mundo e todo mundo se recusa a ver. E mais, ele nasceu em 1894. As cr&iacute;ticas de mais de um s&eacute;culo atr&aacute;s, n&atilde;o s&oacute; ressoaram, mas como ganharam vida. &nbsp;<br />O paralelo entre a realidade em que estamos e a fic&ccedil;&atilde;o dele &eacute; expl&iacute;cito. Ent&atilde;o por&nbsp;<br />que ficamos t&atilde;o surpreendidos quando nos mostram o que &eacute;, em ess&ecirc;ncia, nosso mundo, com outros nomes? Ao meu ver, ignor&acirc;ncia, e, assim como o livro aponta, n&atilde;o uma pura ignor&acirc;ncia, mas uma injetada, ensaiada.<br />Vivemos em uma crise onde tudo o que vemos &eacute; moldado, moldado para moldar nosso pensamento cr&iacute;tico, atrav&eacute;s de algoritmo, conte&uacute;do e a maior parte da m&iacute;dia (algoritmo, conte&uacute;do, m&iacute;dia&hellip; Esses nomes chegam a cansar at&eacute;).<br />Falo isso tudo porque nem preciso falar sobre como interage com os outros temas de desigualdade, pobreza e at&eacute; controle de subst&acirc;ncias. J&aacute; &eacute; muito f&aacute;cil associ&aacute;-los a vida, est&atilde;o em tudo que conseguimos p&ocirc;r os olhos. E mesmo assim precisamos de um livro para v&ecirc;-los. N&atilde;o s&oacute; v&ecirc;-los, reconhec&ecirc;-los.<br />Por isso, queria relatar que, ap&oacute;s ter a interessante experi&ecirc;ncia de testemunhar esse livro (por mais que, ao ler meu resumo, n&atilde;o pare&ccedil;a), eu n&atilde;o mantive e n&atilde;o quero que mantenham um pensamento pessimista. Na verdade, quero que isso desperte a chama que muitos querem apagar. Esse livro n&atilde;o &eacute; um lamento, &eacute; um aviso, um chamado &agrave; mudan&ccedil;a. E (por mais que possam discordar), simbolicamente, uma esperan&ccedil;a.&nbsp;<br />Por isso acho que a mensagem de um livro n&atilde;o se transmite unicamente nas rea&ccedil;&otilde;es emocionais dos leitores, e sim como essas se manifesta</p><p>&nbsp;</p><h2>O selvagem:<h2/><p>Ele l&ecirc; Shakespeare, dan&ccedil;a junto de seu povo, cuida da m&atilde;e&hellip; tudo aquilo que temem.&nbsp;<br />Citado na minha opini&atilde;o, John &eacute; quem mais nos representa ao testemunhar aquele sistema. O considero o personagem mais interessante do livro. Seus questionamentos, sua rebeldia e, principalmente, seu rep&uacute;dio s&atilde;o compreendidos por mim, e imagino que pelos outros leitores tamb&eacute;m. Um viv&iacute;paro, um selvagem, um animal irracional, John &eacute; descrito assim. Mesmo sendo o mais humano.&nbsp;<br />Outra coisa a parte: adoro o fato de como ele reage &agrave;s intera&ccedil;&otilde;es rom&acirc;nticas. Mas n&atilde;o estou disposta a dar spoilers.&nbsp;</p>
        `
    }
];

//Array do conteúdo dos cards no início
const CONTEUDO_INICIO = [
    {
        titulo: "Cordéis",
        texto: "gênero literário popular, tradicional do Nordeste brasileiro, escrito em versos rimados e com métrica definida. Costuma ser impresso em pequenos folhetos ilustrados com xilogravuras e pendurados em barbantes (cordas) para venda, abordando temas do cotidiano, lendas, humor ou fatos históricos.",
        link: "trabalhoCordel.html",
        imagem: "cordel.jpg",
        alt: "foto de um varal de cordéis"
    },
    {
        titulo: "Entrevista",
        texto: "Texto jornalístico ou informativo construído a partir de um diálogo entre duas ou mais pessoas (o entrevistador e o entrevistado). Seu objetivo é obter informações, opiniões ou relatos de experiência sobre um tema específico, sendo geralmente estruturado em formato de perguntas e respostas.",
        link: "trabalhoEntrevista.html",
        imagem: "entrevista.jpg",
        alt: "Microfones em uma mesa"
    },
    {
        titulo: "Resenhas",
        texto: "Texto descritivo e opinativo que apresenta um resumo de uma obra (como um livro, filme, série ou peça de teatro) acompanhado de uma análise crítica. Serve para informar o público sobre o conteúdo da obra e orientar se vale a pena consumi-la.",
        link: "trabalhoResenha.html",
        imagem: "resenhaInicio.jpg",
        alt: "Estante de livros"
    },
    {
        titulo: "Contos",
        texto: "Narrativa literária curta e ficcional que se concentra em um único conflito central. Possui poucos personagens, um espaço limitado e um recorte temporal reduzido, caminhando rapidamente para um desfecho.",
        link: "trabalhoConto.html",
        imagem: "conto.jpg",
        alt: "Menina com lenço vermelho na cabeça em fundo roxo"
    }
];

// === Cartões e páginas gerados por funções, usando laços ou métodos de array ===
const criarCardInicioHTML = (item) => { // monta o HTML de um card da página inicial 
    return `
      <div id="card">
        <img src="${item.imagem}" alt="${item.alt}">
        <div class="textoCard">
          <h2>${item.titulo}</h2>
          <p>${item.texto}</p>
          <a href="${item.link}" id="button">Acesse aqui</a>
        </div>
      </div>
      `
};

function renderizarInicio(lista) { // monta todos os cards da página principal
    const container = document.getElementById("container-inicio");
    if (!container) return; 
    // O .map() passa cada objeto do array para criarCardInicioHTML
    container.innerHTML = lista.map((item) => criarCardInicioHTML(item)).join("");
}

renderizarInicio(CONTEUDO_INICIO);

// Gera os cards nas páginas (trabalhoCordel.html, trabalhoConto.html, trabalhoResenha.html)
function renderizarCardsTrabalhos() {
    const container = document.querySelector(".containerTrabalhos");
    if (!container) return;

    const tipoPagina = container.dataset.tipo;

    // Filtra os 4 trabalhos da página atual
    const listaFiltrada = TRABALHOS_ALUNOS.filter(
        (item) => item.tipo === tipoPagina
    );

    // Insere os cards mantendo exatamente o seu HTML original
    container.innerHTML = listaFiltrada.map((item) => `
        <div id="cardTrabalho">
            <img src="${item.imagem}" alt="${item.alt}">
            <h2>${item.titulo}</h2>
            <h4>${item.aluno}</h4>
            <p>${item.descricao}</p>
            <a href="trabalhos.html" id="button" data-id="${item.id}">Acesse aqui</a>
        </div>
    `).join("");

    // Adiciona o evento de clique em cada link gerado para salvar qual foi escolhido
    container.querySelectorAll("a[data-id]").forEach((link) => {
        link.addEventListener("click", () => {
            const idClicado = Number(link.dataset.id);
            localStorage.setItem("trabalhoSelecionadoId", idClicado);
        });
    });
}

// Preenche o documento vazio (trabalhos.html) com o <html> inteiro via innerHTML
function montarDocumentoTrabalho() {
    // Verifica se o endereço atual termina ou contém "trabalhos.html"
    if (!window.location.href.includes("trabalhos.html")) return;

    const idSalvo = Number(localStorage.getItem("trabalhoSelecionadoId"));

    if (!idSalvo) {
        document.body.innerHTML = "<h1>Erro: nenhum card foi clicado antes de abrir esta página. Volte e clique em 'Acesse aqui'.</h1>";
        return;
    }

    const trabalho = TRABALHOS_ALUNOS.find((item) => item.id === idSalvo);

    if (!trabalho) {
        document.body.innerHTML = `<h1>Erro: trabalho com ID ${idSalvo} não encontrado no array TRABALHOS_ALUNOS.</h1>`;
        return;
    }

    document.documentElement.innerHTML = `
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Flanerie - ${trabalho.titulo}</title>
        <link rel="stylesheet" href="style.css">
        <link rel="icon" href="favicon.png" type="image/x-icon">
        <link rel="preconnect" href="https://googleapis.com">
        <link rel="preconnect" href="https://gstatic.com" crossorigin>
        <link href="https://googleapis.com/css2?family=Amarante&family=GFS+Neohellenic:ital,wght@0,400;0,700;1,400;1,700&family=Red+Rose:wght@300..700&display=swap" rel="stylesheet">
    </head>
    <body>
        <header>
            <button class="btn-menu" id="btn-menu" aria-label="Abrir menu" aria-expanded="false"><img src="icone-menu.png" alt="icone de menu"></button>
            <img src="logo.png" id="logo" alt="logo - um livro aberto em meio a nuvens, dele saem estrelas">
            <h2>Flanerie</h2>
            <nav>
                <a href="index.html">Início</a>
                <a href="trabalhoCordel.html">Cordéis</a>
                <a href="trabalhoEntrevista.html">Entrevista</a>
                <a href="trabalhoResenha.html">Resenhas</a>
                <a href="trabalhoConto.html">Contos</a>
            </nav>
        </header>
        <main>
            <div class="capa">
                <figure>
                    <img src="${trabalho.imagem}" alt="${trabalho.alt}">
                    <figcaption>${trabalho.legenda}</figcaption>
                </figure>
                <div class="textoCapa">
                    <h1>${trabalho.titulo}</h1>
                    <h2>Autor: ${trabalho.aluno}</h2>
                    <p>${trabalho.descricao}</p>
                </div>
            </div>
            <hr>
            <div class="trabalho">
                ${trabalho.conteudo}
            </div>
        </main>
        <footer>
            <nav>
                <a href="index.html">Início</a>
                <a href="trabalhoCordel.html">Cordeis</a>
                <a href="trabalhoEntrevista.html">Entrevista</a>
                <a href="trabalhoResenha.html">Resenhas</a>
                <a href="trabalhoConto.html">Contos</a>
            </nav>
            <p>©2026 - Flanerie</p>
            <p>Trabalho acadêmico</p>
            <img src="" alt="qr-code">
        </footer>
    </body>
    `;
}
renderizarCardsTrabalhos();
montarDocumentoTrabalho();

// === barra de pesquisa usando filtros e busca com filter ===
// desenha a lista recebida dentro de .containerTrabalhos
function exibirCardsNaTela(container, lista) {
    if (lista.length === 0) {
        container.innerHTML = `<p>Nenhum trabalho encontrado com esse título ou autor.</p>`;
        return;
    }

    container.innerHTML = lista.map((item) => `
        <div id="cardTrabalho">
            <img src="${item.imagem}" alt="${item.alt}">
            <h2>${item.titulo}</h2>
            <h4>${item.aluno}</h4>
            <p>${item.descricao}</p>
            <a href="trabalhos.html" id="button" data-id="${item.id}">Acesse aqui</a>
        </div>
    `).join("");

    // Reaplica o evento de clique nos cards renderizados
    container.querySelectorAll("a[data-id]").forEach((link) => {
        link.addEventListener("click", () => {
            const idClicado = Number(link.dataset.id);
            localStorage.setItem("trabalhoSelecionadoId", idClicado);
        });
    });
}

// Renderiza os cards iniciais da página 
function renderizarCardsTrabalhos() {
    const container = document.querySelector(".containerTrabalhos");
    if (!container) return;

    const tipoPagina = container.dataset.tipo;

    // Filtra os trabalhos do tipo da página atual
    const trabalhosDaPagina = TRABALHOS_ALUNOS.filter(
        (item) => item.tipo === tipoPagina
    );

    exibirCardsNaTela(container, trabalhosDaPagina);
}

// Configura a barra de pesquisa filtrando por título ou autor
function configurarPesquisaTrabalhos() {
    const caixaPesquisa = document.getElementById("caixaPesquisa");
    const container = document.querySelector(".containerTrabalhos");

    if (!caixaPesquisa || !container) return;

    const tipoPagina = container.dataset.tipo;

    caixaPesquisa.addEventListener("input", (evento) => {
        const termo = evento.target.value.toLowerCase().trim();

        // Filtra pelo tipo da página E verifica se o termo está no título OU no autor
        const resultadosFiltrados = TRABALHOS_ALUNOS.filter((item) => {
            const mesmoTipo = item.tipo === tipoPagina;
            const bateTitulo = item.titulo.toLowerCase().includes(termo);
            const bateAutor = item.aluno.toLowerCase().includes(termo);

            return mesmoTipo && (bateTitulo || bateAutor);
        });

        // Mostra apenas os cards que passaram no filtro (excluindo os demais)
        exibirCardsNaTela(container, resultadosFiltrados);
    });
}
renderizarCardsTrabalhos();
configurarPesquisaTrabalhos();

// === Menu hambúrguer responsivo ===
function configurarMenuMobile() {
    const btnMenu = document.getElementById("btn-menu");
    const nav = document.querySelector("header nav");

    if (!btnMenu || !nav) return;

    // Abre ou fecha o menu ao clicar no botão hambúrguer
    btnMenu.addEventListener("click", () => {
        nav.classList.toggle("ativo");

        // Atualiza acessibilidade (true quando aberto, false quando fechado)
        const estaAberto = nav.classList.contains("ativo");
        btnMenu.setAttribute("aria-expanded", estaAberto);
    });

    // Fecha o menu automaticamente ao clicar em qualquer link dele
    const linksMenu = nav.querySelectorAll("a");
    linksMenu.forEach((link) => {
        link.addEventListener("click", () => {
            nav.classList.remove("ativo");
            btnMenu.setAttribute("aria-expanded", "false");
        });
    });
}
configurarMenuMobile();