(() => {
  interface Client {
    name: string;
    age?: number;
    address?: Address;
    getFullAddress(id: string): void;
  }

  interface Address {
    id: number;
    zip: string;
    city: string;
  }

  const client: Client = {
    name: 'Test',
    age: 25,
    address: {
      id: 125,
      zip: 'KY2 SUD',
      city: 'Ottawa',
    },
    getFullAddress() {
      return this.address?.city;
    },
  };

  const client2: Client = {
    name: 'Melissa',
    age: 30,
    address: {
      id: 4,
      city: 'Toronto',
      zip: 'KY2 SU12',
    },
    getFullAddress() {
      return this.address?.city;
    },
  };
})();
