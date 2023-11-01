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

const ROLES_VALUES = {
  DISERTANTE: 1,
  CONCURRENTE: 2,
  ADMIN: 3,
};

export { INITIAL_ROLES, ROLES_VALUES };
