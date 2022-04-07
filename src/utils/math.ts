const randomNumber = (min: number, max: number): number => {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const randomFloat = (min: number, max: number, precision: number): number => {
  // min and max included
  return Number((Math.random() * (max - min + 1) + min).toFixed(precision));
};

const randomBoolean = (): boolean => {
  return Math.random() < 0.5;
};

const randomEnum = <T>(anEnum: T): T[keyof T] => {
  //save enums inside array
  const enumValues = Object.keys(anEnum) as Array<keyof T>;

  //Generate a random index (max is array length)
  const randomIndex = Math.floor(Math.random() * enumValues.length);
  // get the random enum value

  const randomEnumKey = enumValues[randomIndex];
  return anEnum[randomEnumKey];
  // if you want to have the key than return randomEnumKey
};

export { randomNumber, randomFloat, randomEnum, randomBoolean };
