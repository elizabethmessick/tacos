const PiroshkiModel = {
    data: [
        {
            name: 'The Elizabeth',
            filling: 'Cheese',
            size: 12
        },
        {
            name: 'The Meat Lovers',
            filling: 'Pepperoni',
            size: 8
        }

    ],
    addPiroshki: function (name, protein, garnish) {
        let newPiroshki = {
            name,
            protein,
            garnish
        };
        this.data.push(newPiroshki);
    },
    getAllPiroshkis: function () {
        return this.data;
    },
    getPiroshki: function (id) {
        return this.data[id];
    },
    updatePiroshki: function (id, name, protein, garnish) {
        let piroshki = {
            name,
            protein,
            garnish
        }
        this.data[id] = piroshki;
    },
    deletePiroshki: function (id) {
        if (id < this.data.length && id >= 0) {
            return this.data.splice(id, 1);
        }
    }
};

module.exports = PiroshkiModel;