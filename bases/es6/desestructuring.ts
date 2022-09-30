(() => {
  type Avengers = { nick: string; ironman: string; vision: string; activo: boolean; poder: number };

  const avengers: Avengers = {
    nick: 'Samuel L. Jackson',
    ironman: 'Robert Downey J.',
    vision: 'Paul Bettany',
    activo: true,
    poder: 1500.123223,
  };

  // const { poder, vision } = avengers;
  // console.log(poder.toFixed(2), vision.toUpperCase());

  const printAvenger = ({ vision, ...resto }: Avengers) => {
    console.log(vision, resto);
  };
  // printAvenger(avengers);

  const avengersArr: [string, boolean, number] = ['Cap. América', true, 150.15];

  // const ironman = avengersArr[1];
  // console.log({ ironman });

  const [capitan, ironman, seriaUnNumero] = avengersArr;
  // console.log({ ironman, capitan });
})();
