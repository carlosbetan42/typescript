(() => {
  class Apocalipsis {
    static instance: Apocalipsis;

    private constructor(public name: string) {}

    static callApocalipsis() {
      if (!Apocalipsis.instance) {
        Apocalipsis.instance = new Apocalipsis('Soy Apocalipsis... el único');
      }
      return Apocalipsis.instance;
    }

    changeName(newName: string): void {
      this.name = newName;
    }
  }

  // const apocalipsis1 = new Apocalipsis('Soy Apocalipsis1... el único');
  // const apocalipsis2 = new Apocalipsis('Soy Apocalipsis2... el único');
  // const apocalipsis3 = new Apocalipsis('Soy Apocalipsis3... el único');
  // console.log(apocalipsis1, apocalipsis2, apocalipsis3);

  const apocalipsis1 = Apocalipsis.callApocalipsis();
  apocalipsis1.changeName('Xavier');
  const apocalipsis2 = Apocalipsis.callApocalipsis();
  const apocalipsis3 = Apocalipsis.callApocalipsis();
  // console.log(apocalipsis1, apocalipsis2, apocalipsis3);
})();
