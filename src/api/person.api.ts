import { Person } from "../state/static/sampleData";

const persons: Person[] = [
  {
    name: "John Doe",
    phoneNumber: "123-456-7890",
    address: "123 Main St, Cityville",
    age: 28,
    image:
      "https://plus.unsplash.com/premium_photo-1676496046182-356a6a0ed002?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Jane Smith",
    phoneNumber: "987-654-3210",
    address: "456 Oak St, Townsville",
    age: 34,
    image:
      "https://images.unsplash.com/photo-1470240731273-7821a6eeb6bd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Alex Johnson",
    phoneNumber: "555-123-4567",
    address: "789 Pine St, Villageville",
    age: 22,
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Emily Davis",
    phoneNumber: "111-222-3333",
    address: "101 Maple St, Suburbia",
    age: 45,
    image:
      "https://images.unsplash.com/photo-1470240731273-7821a6eeb6bd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Chris Martin",
    phoneNumber: "555-987-6543",
    age: 30,
    image:
      "https://plus.unsplash.com/premium_photo-1666863909125-3a01f038e71f?q=80&w=1986&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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

export const fetchPersons = async (query = ""): Promise<Person[]> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const filteredPersons = persons.filter((prs) =>
    prs.name.toLowerCase().includes(query.toLowerCase())
  );

  return [...filteredPersons];
};

export const removePerson = async (phoneNumber: string): Promise<boolean> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const index = persons.findIndex((p) => p.phoneNumber === phoneNumber);
  if (index === -1) {
    throw new Error("Item does not exist");
  }
  persons.splice(index, 1);
  return true;
};

export const addPerson = async (phoneNumber: string): Promise<Person> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const person = {
    name: "demo",
    phoneNumber: phoneNumber,
    address: "Nowhere",
    age: 45,
  };

  persons.push(person);
  return person as Person;
};
