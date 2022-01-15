const MovieData = [
  {
      id : 1,
      title : "Spider-Man: No Way Home" ,
      description : "Spider-Man: No Way Home is a 2021 superhero film, based on the Marvel Comics superhero of the same name. The film is a sequel to Spider-Man: Homecoming and Spider-Man: Far From Home, as well as a crossover/sequel to the Spider-Man and The Amazing Spider-Man franchises. It is the twenty-seventh film in the Marvel Cinematic Universe, and the ninth installment of Phase Four. The film was released on December 17, 2021.",
      posterURL : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrdPsGJEBxBev7gKo_EMp0Pgk7Q7su_xTUxf3vo8dE9S_CiG2Z",
      trailer:"https://www.youtube.com/watch?v=JfVOs4VSpmA" ,
      rating : 5
  },
  {
      id : 2,
      title : "Black Panther" ,
      description : "Black Panther is a 2018 American superhero film based on the Marvel Comics character of the same name. ... In Black Panther, T'Challa is crowned king of Wakanda following his father's death, but he is challenged by Killmonger Jordan who plans to abandon the country's isolationist policies and begin a global revolution.",
      posterURL :"https://images-na.ssl-images-amazon.com/images/I/A1xg6fEaPQL._SL500.jpg",
      rating : 4
  },
  {
      id : 3,
      title : "Iron Man" ,
      description : "Iron Man is a fictional superhero who wears a suit of armor. His alter ego is Tony Stark. He was created by Stan Lee, Jack Kirby and Larry Lieber for Marvel Comics in Tales of Suspense #39 in the year 1963 and appears in their comic books. He is also one of the main protagonists in the Marvel Cinematic Universe.",
      posterURL :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNlXki3pqT1WZMY_tEi0IWisS7YCt1lflUIQ&usqp=CAU",
      rating : 4
  },
  {
      id : 4,
      title : "Captain America" ,
      description : "Captain America is the alter ego of Steve Rogers, a frail young artist enhanced to the peak of human perfection by an experimental after joining the military to aid the United States government's efforts in World War II.",
      posterURL :"https://upload.wikimedia.org/wikipedia/en/6/6b/Chris_Evans_as_Steve_Rogers_Captain_America.jpg",
      rating : 3
  },
  {
      id : 5,
      title : "American Pie : Reunion" ,
      description : "Jim, Michelle, Stifler et leurs amis se retrouvent à East Great Falls, dans le Michigan, pour leur réunion de lycée.",
      posterURL :"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR1jaT1yn01bbujm2pJSfpfTh8-5TK2LndPv0Kv24HDWKkcBaeH",
      rating : 2
  },
  {
      id : 6,
      title : "Batman v Superman : L'Aube de la justice" ,
      description : "Craignant que les actions de Superman ne soient pas contrôlées, Batman affronte l'homme d'acier, tandis que le monde débat du type de héros dont il a vraiment besoin.",
      posterURL :"https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg",
      rating : 2
  },
  {
      id :7,
      title: 'The Invisible Guest',

      posterURL:
        'https://m.media-amazon.com/images/M/MV5BMDk0YzAwYjktMWFiZi00Y2FmLWJmMmMtMzUyZDZmMmU5MjkzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg',
      description:
        'A successful entrepreneur accused of murder and a witness preparation expert have less than three hours to come up with an impregnable defense.',
      rating: 1,
      },
    {
      id : 8,
      posterURL:
        'https://m.media-amazon.com/images/M/MV5BMjE0NTE3MjMwNV5BMl5BanBnXkFtZTgwMDc5NjQxODE@._V1_.jpg',
      title: 'The Brothers Grimsby',
      rating: 2,
      description:
        'A new assignment forces a top spy to team up with his football hooligan brother.',
    },
    {
      id : 9,
      posterURL:
        'https://m.media-amazon.com/images/M/MV5BYTcxYTA0MjAtYzdjNC00ZmFmLTgwYWItMmVhYTY5ZGZhOWQzXkEyXkFqcGdeQXVyMTAyOTE2ODg0._V1_.jpg',
      title: 'The Shawshank Redemption',
      rating: 5,
      description:
        'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
    },
    
      {
        id : 10,
        posterURL:
          'https://m.media-amazon.com/images/M/MV5BMTA3NDM5ODU3NzleQTJeQWpwZ15BbWU3MDgyMjgyNDE@._V1_.jpg',
        title: 'Epic Movie',
        rating: 1,
        description:
          'A spoof on previous years epic movies (The Da Vinci Code (2006), The Chronicles of Narnia: The Lion, the Witch and the Wardrobe (2005) + 20 more), TV series, music videos and celebs. 4 orphans are on an epic adventure.',
      },
      { id :11,
        posterURL:
          'https://m.media-amazon.com/images/M/MV5BOTdmNTFjNDEtNzg0My00ZjkxLTg1ZDAtZTdkMDc2ZmFiNWQ1XkEyXkFqcGdeQXVyNTAzNzgwNTg@._V1_.jpg',
        title: '1917',
        rating: 4,
        description:
          'April 6th, 1917. As a regiment assembles to wage war deep in enemy territory, two soldiers are assigned to race against time and deliver a message that will stop 1,600 men from walking straight into a deadly trap.',
      },
      { id:12,
        posterURL:
          'https://m.media-amazon.com/images/M/MV5BMjExNDkzNjAwOV5BMl5BanBnXkFtZTcwMDMzMzQwOQ@@._V1_.jpg',
        title: 'The Call',
        rating: 3,
        description:
          'When a veteran 911 operator takes a life-altering call from a teenage girl who has just been abducted, she realizes that she must confront a killer from her past in order to save the girls life.',
      },
      { id :13,
        posterURL:
          'https://m.media-amazon.com/images/M/MV5BNGQwZjg5YmYtY2VkNC00NzliLTljYTctNzI5NmU3MjE2ODQzXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
        title: 'The Hangover',
        rating: 4,
        description:
          'Three buddies wake up from a bachelor party in Las Vegas, with no memory of the previous night and the bachelor missing. They make their way around the city in order to find their friend before his wedding.',
      },
  
  
  
  

  

]

export default MovieData