const movies = [
  {
    id: 1,
    name: "IRON MAN",
    year: 2008,
    img: "./img/iron_man_1_1.jpg",
    link: "https://www.2embed.ru/embed/imdb/movie?id=tt0371746",
  },
  {
    id: 2,
    name: "THE INCREDIBLE HULK",
    year: 2008,
    img: "./img/the_incredible_hulk.jpg",
    link: "https://www.2embed.ru/embed/imdb/movie?id=tt0800080",
  },
  {
    id: 3,
    name: "IRON MAN 2",
    year: 2010,
    img: "./img/iron_man_2.jpg",
    link: "https://www.2embed.ru/embed/imdb/movie?id=tt1228705",
  },
  {
    id: 4,
    name: "THOR",
    year: 2011,
    img: "./img/thor.jpg",
    link: "https://www.2embed.ru/embed/imdb/movie?id=tt0800369",
  },
  {
    id: 5,
    name: "CAPTAIN AMERICA : THE FIRST AVENGER",
    year: 2011,
    img: "./img/captain_america_1.jpg",
    link: "https://www.2embed.ru/embed/imdb/movie?id=tt0458339",
  },
  {
    id: 6,
    name: "MARVEL'S THE AVENGERS",
    year: 2012,
    img: "./img/the_avengers.jpg",
    link: "https://www.2embed.ru/embed/imdb/movie?id=tt0848228",
  },
  {
    id: 7,
    name: "IRON MAN 3",
    year: 2013,
    img: "./img/iron_man_3.jpg",
    link: "https://www.2embed.ru/embed/imdb/movie?id=tt1300854",
  },
  {
    id: 8,
    name: "THOR: THE DARK WORLD",
    year: 2013,
    img: "./img/thor_the_dark_world.jpg",
    link: "https://fmovies.co/film/thor-the-dark-world-1843?play=1",
  },
  {
    id: 9,
    name: "CAPTAIN AMERICA : THE WINTER SOLDIER",
    year: 2014,
    img: "./img/the_winter_soldier.jpg",
    link: "https://www.2embed.ru/embed/imdb/movie?id=tt1843866",
  },
  {
    id: 10,
    name: "GUARDIANS OF THE GALAXY",
    year: 2014,
    img: "./img/guardians_of_the_galaxy.jpg",
    link: "https://www.2embed.ru/embed/imdb/movie?id=tt2015381",
  },
  {
    id: 11,
    name: "AVENGERS : AGE OF ULTRON",
    year: 2015,
    img: "./img/marvels_age_of_ultron.jpg",
    link: "https://www.2embed.ru/embed/imdb/movie?id=tt2395427",
  },
  {
    id: 12,
    name: "ANT-MAN",
    year: 2015,
    img: "./img/ant_man._1.jpg",
    link: "https://ww3.d123movies.to/watch-movie-2/ant-man-2015_cw6m6qlwm/63bj4qv-full-movie-free-online",
  },
  {
    id: 13,
    name: "CAPTAIAN AMERICA : CIVIL WAR",
    year: 2016,
    img: "./img/civil_war.jpg",
    link: "https://www.2embed.ru/embed/imdb/movie?id=tt3498820",
  },
  {
    id: 14,
    name: "DOCTOR STRANGE",
    year: 2016,
    img: "./img/doctor_strange_1.jpg",
    link: "https://www.2embed.ru/embed/imdb/movie?id=tt1211837",
  },
  {
    id: 15,
    name: "GUARDIANS OF THE GALAXY VOL. 2",
    year: 2017,
    img: "./img/guardians_of_the_galaxy_2.jpg",
    link: "https://www.2embed.ru/embed/imdb/movie?id=tt3896198",
  },
  {
    id: 16,
    name: "SPIDERMAN:HOMECOMING",
    year: 2017,
    img: "./img/homecoming.jpg",
    link: "https://www.2embed.ru/embed/imdb/movie?id=tt2250912",
  },
  {
    id: 17,
    name: "THOR:RAGNAROK",
    year: 2017,
    img: "./img/thor_ragnarok.jpg",
    link: "https://www.2embed.ru/embed/imdb/movie?id=tt3501632",
  },
  {
    id: 18,
    name: "BLACK PANTHER",
    year: 2018,
    img: "./img/black_panther.jpg",
    link: "https://www.2embed.ru/embed/imdb/movie?id=tt1825683",
  },
  {
    id: 19,
    name: "AVENGERS INFINITY WAR",
    year: 2018,
    img: "./img/inifinity_war.jpg",
    link: "https://www.2embed.ru/embed/imdb/movie?id=tt4154756",
  },
  {
    id: 20,
    name: "ANT-MAN AND THE WASP",
    year: 2018,
    img: "./img/ant_man_and_the_wasp.png",
    link: "https://www.2embed.ru/embed/imdb/movie?id=tt5095030",
  },
  {
    id: 21,
    name: "CAPTAIN MARVEL",
    year: 2019,
    img: "./img/captain_marvel.jpg",
    link: "https://www.2embed.ru/embed/imdb/movie?id=tt4154664",
  },
  {
    id: 22,
    name: "AVENGERS END GAME",
    year: 2019,
    img: "./img/end_game_1.jpg",
    link: "https://www.2embed.ru/embed/imdb/movie?id=tt4154796",
  },
  {
    id: 23,
    name: "SPIDER-MAN FAR FROM HOME",
    year: 2019,
    img: "./img/far_from_home.jpg",
    link: "https://www.2embed.ru/embed/imdb/movie?id=tt6320628",
  },
  {
    id: 24,
    name: "BLACK WIDOW",
    year: 2021,
    img: "./img/black_widow_1.jpg",
    link: "https://www.2embed.ru/embed/imdb/movie?id=tt3480822",
  },
  {
    id: 25,
    name: "SHANG-CHI AND THE LEGEND OF THE TEN RINGS",
    year: 2021,
    img: "./img/legend_of_the_ten_rings.jpg",
    link: "https://www.2embed.ru/embed/imdb/movie?id=tt9376612",
  },
  {
    id: 26,
    name: "ETERNALS",
    year: 2021,
    img: "./img/eternals.jpg",
    link: "https://www.2embed.ru/embed/imdb/movie?id=tt9032400",
  },
  {
    id: 27,
    name: "SPIDER-MAN NO WAY HOME",
    year: 2021,
    img: "./img/no_way_home_1.jpg",
    link: "https://www.2embed.ru/embed/imdb/movie?id=tt10872600",
  },
];

export default movies;
