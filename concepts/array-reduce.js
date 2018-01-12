let results =  [
		{
			"url": "https://pokeapi.co/api/v2/pokemon/1/",
			"name": "bulbasaur"
		},
		{
			"url": "https://pokeapi.co/api/v2/pokemon/2/",
			"name": "ivysaur"
		},
		{
			"url": "https://pokeapi.co/api/v2/pokemon/3/",
			"name": "venusaur"
		},
		{
			"url": "https://pokeapi.co/api/v2/pokemon/4/",
			"name": "charmander"
		}
];

let lookup = results.reduce( (foo,n) => {
  let key = uuid();
  foo[n.name] = n.url
  return foo;
}, {});

console.log(lookup);


function uuid() {
  return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
    (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
  )
}
