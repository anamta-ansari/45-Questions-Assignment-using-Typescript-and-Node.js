//They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

const car: { type: string, model: string, year: number } = {
    type: "Toyota",
    model: "Corolla",
    year: 2009
  };
console.log(`Car type:${car.type} \nCar model:${car.model} \nCar Launch in :${car.year}`);