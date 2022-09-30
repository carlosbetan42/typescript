(() => {
  // class Avenger {
  //   private name: string;
  //   private team: string;
  //   public realName?: string;
  //   static avgAge: number = 35;

  //   constructor(name: string, team: string, realName?: string) {
  //     this.name = name;
  //     this.team = team;
  //     this.realName = realName;
  //   }
  // }

  // const antman: Avenger = new Avenger('Antman', 'Capitan');
  // console.log(antman);
  // console.log(Avenger.avgAge);

  class Avenger {
    // private name: string;
    // private team: string;
    // public realName?: string;
    static avgAge: number = 35;
    static getAvg() {
      return this.name.toUpperCase();
    }

    constructor(private name: string, public team: string, public realName?: string, avgAge: number = 55) {
      Avenger.avgAge = avgAge;
    }

    public bio() {
      return `${this.name} ${this.team}`;
    }
  }

  const antman: Avenger = new Avenger('Antman', 'Capitan', 'Scott Lang');
  // console.log(antman);
  // console.log(Avenger.avgAge);
  // console.log(antman.bio());
  // Avenger.getAvg();
})();
