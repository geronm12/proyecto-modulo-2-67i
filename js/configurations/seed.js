//La semilla que inicia nuestro sistema
//es decir los datos necesarios
//para que el sistema comience a funcionar  de 0

const INITIAL_ROLES = [
  {
    id: 1,
    description: "Disertante",
  },
  {
    id: 2,
    description: "Concurrente",
  },
  {
    id: 3,
    description: "Admin",
  },
];

const GAMES = [
  {
    id: 1,
    name: "EA Footbal 23",
    description:
      "Juego de fútbol que es el mismo todos lo años y le cobran más dólares a la gente por las mismas mecánicas",
    stars: 4,
    picture:
      "https://image.api.playstation.com/vulcan/ap/rnd/202310/0214/b449973c0d7f4afc176aa1debb996b472718ce0f4175e02b.png",
  },
];

const ROLES_VALUES = {
  DISERTANTE: 1,
  CONCURRENTE: 2,
  ADMIN: 3,
};

export { INITIAL_ROLES, ROLES_VALUES, GAMES };
