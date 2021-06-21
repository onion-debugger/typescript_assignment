class Product {
  title: string;

  constructor(title: string) {
    this.title = title;
  }

  printDisplayName(): void {
    console.log(`Title: ${this.title}`);
  }
}

// Using the Inheritance concept of OOP
class PhysicalProduct extends Product {
  weight: number;

  constructor(title: string, weight: number) {
    super(title); // calls Product constructor

    this.weight = weight;
  }

  printWeight(): void {
    console.log(`Weight: ${this.weight}lb`);
  }
}

class DigitalProduct extends Product {
  platform: Platform;
	
// Using the {Union Type} in TypeScript
  constructor(title: string, platform: 'PC' | 'Console') {
    super(title); // calls Product constructor

    this.platform = platform;
  }

  printPlatform(): void {
    console.log(`Platform: ${this.platform}`);
  }
}

const movie = new DigitalProduct('Avengers', 'PC');
const salt = new PhysicalProduct('Salt', 1);

// inherited methods:
movie.printDisplayName(); 
salt.printDisplayName(); 

movie.printPlatform(); 
salt.printWeight(); 
