import { Person, Food, Resolvers, Dog } from "./types";

const findPersonById = (id: string) => {
  if (id.length > 5) return null;
  return {
    id: "1",
    firstName: "John",
    lastName: "Murphy",
    age: 49,
  };
};

let getFoodForPerson: (id: string) => Food;
let getFoodForDog: (id: string) => Food | null;
let getPersonsDog: (id: string) => Dog | null;
export const resolver: Resolvers = {
  Query: {
    everyone: () => [] as Person[],
    personById: async (parent, args, ctx, info) => {
      const person = findPersonById(args.id);
      if (person) {
        return person;
      } else {
        return null;
      }
    },
  },
  Person: {
    favoriteFood: async (parent, args, ctx, info) => {
      return getFoodForPerson(parent.id);
    },
    dog: async (parent, args, ctx, info) => {
      return getPersonsDog(parent.id);
    },
  },
  Dog: {
    favoriteFood: (parent, args, ctx, info) => {
      return getFoodForDog(parent.id);
    },
  },
};
