const obj = {
  name: "milos",
  lastName: "copic",
  dob: "17.05.1996",
  smoke: false,
  hp: 175,

  gear: {
    laptop: "Thinkpad",
    mis: "Razer",
    monitor: "Dell",
  },

  ocene: [10, 10, 9, 8, 10, 8, 10, 9, 5],

  fakultet: {
    name: "Fax",
    ocene: [10, 10, 9, 8, 10, 88, 10, 9, 5, 1, 999],
  },
  nesto :'value',
};




const menjanje = (field, newName) => {

    obj.gear[field] = newName
    console.log(obj)
}

menjanje(['laptop'],'nekoSranje')
