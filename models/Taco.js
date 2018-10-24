const tacoModel = {
    data: [
        {
            name: 'Captain Beefheart',
            protein: 'Carne Asada',
            garnish: 'cheddar, lettuce, and pico'
        },
        {
            name: 'Piggy Azalea',
            protein: 'Carnitas',
            garnish: 'chile peppers and pineapple'
        }
    ],
    addTaco: function (name, protein, garnish) {
        let newTaco = {
            name,
            protein,
            garnish
        };
        this.data.push(newTaco);
    },
    getAllTacos: function () {
        return this.data;
    },
    getTaco: function (id) {
        return this.data[id];
    },
    updateTaco: function (id, name, protein, garnish) {
        let taco = {
            name,
            protein,
            garnish
        }
        this.data[id] = taco;
    },
    deleteTaco: function (id) {
        if (id < this.data.length && id >= 0) {
            return this.data.splice(id, 1);
        }
    }
};

module.exports = tacoModel;