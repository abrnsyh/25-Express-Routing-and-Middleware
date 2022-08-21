const hewan = [
	{ id: 1, nama: "Snowy", spesies: "kucing" },
	{ id: 2, nama: "Blacki", spesies: "anjing" },
	{ id: 3, nama: "Molly", spesies: "kucing" },
	{ id: 4, nama: "Milo", spesies: "kelinci" },
	{ id: 5, nama: "Rere", spesies: "kucing" },
];

module.exports = {
	getAllHewan: (req, res) => {
		res.json({
			massage: "success get pet data",
			data: hewan,
		});
	},
	postChecker: (req, res, next) => {
		const { spesies, nama } = req.body;
		if (spesies === "kucing" || spesies === "anjing" || spesies === "kelinci") {
			if (nama === "" || nama === undefined) {
				return res.status(400).json({
					error: "nama cannot be blank",
				});
			}
			return next();
		}

		return res.status(400).json({
			error: "spesies not valid",
		});
	},
	postHewan: (req, res) => {
		const postData = req.body;
		const newPet = { id: hewan.length + 1, nama: postData.nama, spesies: postData.spesies };
		hewan.push(newPet);
		res.status(201).json({
			massage: "Success Adding Data",
			data: hewan,
		});
	},
	getHewanByID: (req, res) => {
		const { id } = req.params;
		const animal = hewan.find((item) => id == item.id);
		if (animal === undefined) {
			return res.status(404).json({
				error: "pet not found",
			});
		}
		return res.json({
			massage: "success get one pet data",
			data: animal,
		});
	},
	updateHewanByID: (req, res) => {
		const { id } = req.params;
		const target = hewan.findIndex((item) => id == item.id);
		const { nama, spesies } = req.body;
		const data = { id: hewan[target].id, nama: nama, spesies: spesies };
		hewan[target] = data;
		res.json({
			message: "success update pet data",
			data: data,
		});
	},
	deleteHewanByID: (req, res) => {
		const { id } = req.params;
		const target = hewan.findIndex((item) => id == item.id);
		if (target < 0) {
			return res.status(400).json({
				error: "pet data not found",
			});
		}
		hewan.splice(target, 1);
		return res.json({
			message: "success delete pet data",
			data: hewan,
		});
	},
};
