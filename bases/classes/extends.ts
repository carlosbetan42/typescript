(() => {
  class Avenger {
    constructor(public name: string, public realName: string) {
      // console.log('Constructor avenger llamado');
    }

    protected getFullName() {
      return `${this.name} ${this.realName}`;
    }
  }

  class Xmen extends Avenger {
    constructor(name: string, realName: string, public isMutant: boolean) {
      super(name, realName);
      // console.log('constructor xmen llamado');
    }

    get fullName(): string {
      return `${this.name} - ${this.realName}`;
    }

    set fullName(name: string) {
      if (name.length < 3) {
        throw new Error('El nombre debe de ser mayor de 3 letras');
      }
      this.name = name;
    }

    getFullNameDesdeXmen() {
      return this.getFullName();
    }
  }

  const wolverine = new Xmen('Wolverine', 'Logan', true);
  // wolverine.getFullNameDesdeXmen();
  // wolverine.fullName = 'Ot';
  // console.log(wolverine.fullName);
})();
