const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people:[],
			fotos : [
				"https://starwars-visualguide.com/assets/img/characters/1.jpg", // Luke
				"https://starwars-visualguide.com/assets/img/characters/2.jpg", // C3Po
				"https://starwars-visualguide.com/assets/img/characters/3.jpg", // R2-D2
				"https://starwars-visualguide.com/assets/img/characters/4.jpg", // Darth Vader
				"https://starwars-visualguide.com/assets/img/characters/5.jpg", // Leia Organa
				"https://starwars-visualguide.com/assets/img/characters/6.jpg", // Owen Lars
				"https://starwars-visualguide.com/assets/img/characters/7.jpg", // Beru
				"https://starwars-visualguide.com/assets/img/characters/8.jpg", // R5-D4
				"https://starwars-visualguide.com/assets/img/characters/9.jpg", // Biggs 
				"https://starwars-visualguide.com/assets/img/characters/10.jpg", // Obi-Wan
			],
			
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			//WOLOLO 1
			loadSomeData: async () => {
		await fetch('https://swapi.dev/api/people')
		.then(response => response.json())
		.then(data => {console.log(data.results)
			setStore({people:data.results})
		})
		.catch(error => console.log("Error Loco", error))
			},
// WOLOLO 2
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
