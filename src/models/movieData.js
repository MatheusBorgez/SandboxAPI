const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
    title: String,
    description: String,
    imageUrl: String,
    duration: Number,
    genre: String,
    releaseDate: Date,
    imdb: Number,
});

const Movie = mongoose.model('Movie', MovieSchema);

Movie.create({
    title: 'Capitão América: O Primeiro Vingador',
    description: 'Após ser considerado inapto para o serviço militar, Steve Rogers voluntaria-se para um projeto de investigação altamente secreto que o transforma no Capitão América, um super-herói dedicado a defender os ideais da América e a liderar a luta pela liberdade como a derradeira arma contra o mal.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/pt/d/d8/Capit%C3%A3o_Am%C3%A9rica_O_Primeiro_Vingador_-_Poster.jpg',
    duration: 124,
    releaseDate: new Date('2011-07-29'),
    genre: 'Ação/Ficção científica',
    imdb: 6.9
})

Movie.create({
    title: 'Capitã Marvel',
    description: 'Capitã Marvel é uma alienígena Kree que se encontra no meio de uma batalha entre seu povo e os Skrulls. Com a ajuda de Nick Fury, ela tenta impedir uma invasão na Terra, descobrir os segredos de seu passado e pôr um fim ao antigo conflito.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/pt/5/59/Captain_Marvel_%282018%29.jpg',
    duration: 124,
    releaseDate: new Date('2019-03-07'),
    genre: 'Ação/Aventura',
    imdb: 6.8
})

Movie.create({
    title: 'O Incrível Hulk',
    description: 'O cientista Bruce Banner se esconde no Brasil enquanto busca desesperadamente a cura da mutação que o transforma em um monstro incontrolável. Só assim ele poderá novamente levar uma vida normal e ficar ao lado da mulher que ama. Porém, durante este processo, ele precisa lutar contra o Abominável, um novo inimigo que quer capturá-lo.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/pt/1/1b/The_Incredible_Hulk.jpg',
    duration: 112,
    releaseDate: new Date('2008-06-13'),
    genre: 'Ação/Ficção científica',
    imdb: 6.6
})

Movie.create({
    title: 'Homem de Ferro',
    description: 'Tony Stark é um industrial bilionário e inventor brilhante que realiza testes bélicos no exterior, mas é sequestrado por terroristas que o forçam a construir uma arma devastadora. Em vez disso, ele constrói uma armadura blindada e enfrenta seus sequestradores. Quando volta aos Estados Unidos, Stark aprimora a armadura e a utiliza para combater o crime.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/pt/0/00/Iron_Man_poster.jpg',
    duration: 126,
    releaseDate: new Date('2008-04-30'),
    genre: 'Ação/Ficção científica',
    imdb: 7.9
})

Movie.create({
    title: 'Homem de Ferro 2',
    description: 'Em um mundo ciente da existência do Homem de Ferro, o inventor bilionário Tony Stark sofre pressão de todos os lados para compartilhar sua tecnologia com as forças armadas. Ele resiste para divulgar os segredos de sua inigualável armadura, com medo de que estas informações caiam nas mãos erradas. Com a bela Pepper Potts e o amigo "Rhodey" Rhodes ao seu lado, Tony precisa forjar novas alianças e confrontar um inimigo poderoso.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/pt/9/9a/Homem_de_Ferro_2_-_Poster.jpg',
    duration: 125,
    releaseDate: new Date('2010-04-30'),
    genre: 'Ação/Ficção científica',
    imdb: 6.9
})

Movie.create({
    title: 'Thor',
    description: 'Thor, filho de Odin, o rei dos deuses nórdicos, logo herdará o trono de Asgard de seu idoso pai. No entanto, no dia de sua coroação, Thor reage com brutalidade quando os inimigos dos deuses entram no palácio violando o tratado. Como punição, Odin manda Thor para a Terra. Enquanto seu irmão Loki conspira em Asgard, Thor, agora sem seus poderes, enfrenta sua maior ameaça.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/pt/9/9f/Thor_Poster.jpg',
    duration: 116,
    releaseDate: new Date('2011-04-29'),
    genre: 'Ação/Ficção científica',
    imdb: 7
})

Movie.create({
    title: 'Os Vingadores',
    description: 'Loki, o irmão de Thor, ganha acesso ao poder ilimitado do cubo cósmico ao roubá-lo de dentro das instalações da S.H.I.E.L.D. Nick Fury, o diretor desta agência internacional que mantém a paz, logo reúne os únicos super-heróis que serão capazes de defender a Terra de ameaças sem precedentes. Homem de Ferro, Capitão América, Hulk, Thor, Viúva Negra e Gavião Arqueiro formam o time dos sonhos de Fury, mas eles precisam aprender a colocar os egos de lado e agir como um grupo em prol da humanidade.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/pt/6/69/The_Avengers_Cartaz.jpg',
    duration: 143,
    releaseDate: new Date('2012-04-27'),
    genre: 'Ação/Ficção científica',
    imdb: 8
})

Movie.create({
    title: 'Homem de Ferro 3',
    description: 'Depois de um inimigo reduzir o mundo de Tony Stark a destroços, o Homem de Ferro precisa aprender a confiar em seus instintos para proteger aqueles que ama, especialmente sua namorada, e lutar contra seu maior medo: o fracasso.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/pt/1/19/Iron_Man_3_poster.jpg',
    duration: 130,
    releaseDate: new Date('2013-04-26'),
    genre: 'Ação/Ficção científica',
    imdb: 7.1
})

Movie.create({
    title: 'Thor: O Mundo Sombrio',
    description: 'Thor precisa contar com a ajuda de seus companheiros e até de seu traiçoeiro irmão Loki em um plano audacioso para salvar o universo. Entretanto, os caminhos de Thor se cruzam com Jane Foster e, dessa vez, a vida dela está realmente em perigo.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/pt/b/b3/Thor_The_Dark_World_2013.jpg',
    duration: 118,
    releaseDate: new Date('2013-11-08'),
    genre: 'Ação/Fantasia',
    imdb: 6.8
})

Movie.create({
    title: 'Capitão América: Soldado Invernal',
    description: 'Após os eventos catastróficos em Nova York com Os Vingadores, Steve Rogers, também conhecido como Capitão América, segue tentando se ajustar ao mundo moderno. Porém, quando um colega da agência S.H.I.E.L.D. é atacado, Steve se vê preso em uma rede de intrigas que ameaça colocar o mundo em risco. Em parceria com a Viúva Negra e Falcão, seu novo aliado, o Capitão América tem que enfrentar um misterioso e inesperado inimigo, o Soldado Invernal.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/pt/e/e8/Captain_America_The_Winter_Soldier.jpg',
    duration: 136,
    releaseDate: new Date('2014-04-10'),
    genre: 'Ação/Aventura',
    imdb: 7.7
})

Movie.create({
    title: 'Guardiões da Galáxia',
    description: 'O aventureiro do espaço Peter Quill torna-se presa de caçadores de recompensas depois que rouba a esfera de um vilão traiçoeiro, Ronan. Para escapar do perigo, ele faz uma aliança com um grupo de quatro extraterrestres. Quando Quill descobre que a esfera roubada possui um poder capaz de mudar os rumos do universo, ele e seu grupo deverão proteger o objeto para salvar o futuro da galáxia.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/pt/b/b2/Guardiansgalaxyposter.jpg',
    duration: 122,
    releaseDate: new Date('2014-06-31'),
    genre: 'Ação/Ficção científica',
    imdb: 8
})

Movie.create({
    title: 'Vingadores: Era de Ultron',
    description: 'Ao tentar proteger o planeta de ameaças, Tony Stark constrói um sistema de inteligência artificial que cuidaria da paz mundial. O projeto acaba dando errado e gera o nascimento do Ultron. Com o destino da Terra em jogo, Capitão América, Homem de Ferro, Thor, Hulk, Viúva Negra e Gavião Arqueiro terão que se unir para mais uma vez salvar a raça humana da extinção.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/pt/2/22/OsVingadores2.jpg',
    duration: 141,
    releaseDate: new Date('2015-04-23'),
    genre: 'Ação/Aventura',
    imdb: 7.3
})

Movie.create({
    title: 'Homem-Formiga',
    description: 'Dr. Hank Pym transforma um talentoso ladrão no herói Homem-Formiga. Ele quer impedir que seu antigo pupilo consiga replicar a fórmula da roupa que dá o poder do encolhimento, força sobre-humana e a capacidade de controlar um exército de formigas.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/pt/9/90/Ant_Man-Poster.jpg',
    duration: 118,
    releaseDate: new Date('2015-06-16'),
    genre: 'Ação/Comédia',
    imdb: 7.2
})

Movie.create({
    title: 'Capitão América: Guerra Civil',
    description: 'Depois do ataque de Ultron, os políticos decidem controlar os Vingadores, já que suas ações afetam toda a humanidade. A decisão coloca o Capitão América em rota de colisão com o Homem de Ferro.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/pt/5/53/Captain_America_Civil_War_poster.jpg',
    duration: 148,
    releaseDate: new Date('2016-04-28'),
    genre: 'Ação/Aventura',
    imdb: 7.8
})

Movie.create({
    title: 'Pantera Negra',
    description: "Conheça a história de T'Challa, príncipe do reino de Wakanda, que perde o seu pai e viaja para os Estados Unidos, onde tem contato com os Vingadores. Entre as suas habilidades estão a velocidade, inteligência e os sentidos apurados.",
    imageUrl: 'https://upload.wikimedia.org/wikipedia/pt/2/28/Black_Panther_2018.jpg',
    duration: 135,
    releaseDate: new Date('2018-02-15'),
    genre: 'Ação/Ficção científica',
    imdb: 7.3
})

module.exports = Movie;
