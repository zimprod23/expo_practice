export type Place = { title: string; subtitle: string; imageUri: string };
const places: Place[] = [
  {
    title: "Beautiful Mountains",
    subtitle: "Explore the wild outdoors",
    imageUri:
      "https://images.unsplash.com/photo-1468413253725-0d5181091126?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "City Lights",
    subtitle: "The beauty of urban life",
    imageUri:
      "https://images.unsplash.com/photo-1495954484750-af469f2f9be5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Sunset Vibes",
    subtitle: "Golden hour at its best",
    imageUri:
      "https://plus.unsplash.com/premium_photo-1722895862381-e445d66a8cdb?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Ocean Breeze",
    subtitle: "The calming sea breeze",
    imageUri:
      "https://images.unsplash.com/photo-1473116763249-2faaef81ccda?q=80&w=2096&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Forest Adventures",
    subtitle: "Into the heart of nature",
    imageUri:
      "https://images.unsplash.com/photo-1513689125086-6c432170e843?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJlYWNofGVufDB8MHwwfHx8MA%3D%3D",
  },
];

export const fetchPlaces = async (query = ""): Promise<Place[]> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const filteredPlaces = places.filter((prs) =>
    prs.title.toLowerCase().includes(query.toLowerCase())
  );

  return [...filteredPlaces];
};

export const removePlace = async (title: string): Promise<boolean> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const index = places.findIndex((p) => p.title === title);
  if (index === -1) {
    throw new Error("Item does not exist");
  }
  places.splice(index, 1);
  return true;
};
