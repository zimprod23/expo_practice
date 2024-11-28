export type Person = {
  name: string;
  phoneNumber: string;
  address?: string;
  age: number;
};

export const persons: Person[] = [
  {
    name: "John Doe",
    phoneNumber: "123-456-7890",
    address: "123 Main St, Cityville",
    age: 28,
  },
  {
    name: "Jane Smith",
    phoneNumber: "987-654-3210",
    address: "456 Oak St, Townsville",
    age: 34,
  },
  {
    name: "Alex Johnson",
    phoneNumber: "555-123-4567",
    address: "789 Pine St, Villageville",
    age: 22,
  },
  {
    name: "Emily Davis",
    phoneNumber: "111-222-3333",
    address: "101 Maple St, Suburbia",
    age: 45,
  },
  {
    name: "Chris Martin",
    phoneNumber: "555-987-6543",
    age: 30,
  },
  {
    name: "Emily Davis",
    phoneNumber: "111-222-333311",
    address: "101 Maple St, Suburbia",
    age: 45,
  },
  {
    name: "Chris Martin",
    phoneNumber: "555-987-654315",
    age: 30,
  },
  {
    name: "Emily Davis",
    phoneNumber: "111-222-333312",
    address: "101 Maple St, Suburbia",
    age: 45,
  },
  {
    name: "Chris Martin",
    phoneNumber: "555-987-654313",
    age: 30,
  },
];

export const fetchPersons = async (query: ""): Promise<Person[]> => {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  const prs = persons.filter((p) => p.name.toLowerCase().includes(query));
  return [...prs];
};

export const addPerson = async (
  person: Pick<Person, "name">
): Promise<Person> => {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  const prs: Person = {
    name: person.name,
    age: 120,
    address: "nowhere",
    phoneNumber: "02023265",
  };
  persons.push(prs);
  return prs;
};
