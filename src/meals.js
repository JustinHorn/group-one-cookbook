/*DEFENITIONS*/

function Meal(mealType, imgSrc, name, description, steps, ingredients) {
  this.mealType = mealType;
  this.imgSrc = imgSrc;
  this.name = name;
  this.description = description;
  this.steps = steps;
  this.ingredients = ingredients;
}

/*MAIN*/
const meals = [];

const onepan = new Meal(
  "Breakfast",
  "./src/mealImages/onepan.jpg",
  "One-pan breakfast",
  "Inspired by my old-favourite Midnight pan-cooked breakfast, this recipe is all about the principle of cooking breakfast in one pan.",
  [
    "Put a large non-stick (about 26cm) frying pan on a medium heat.",
    "Lay in the bacon and sausages and add ½ a tablespoon of olive oil. Fry for 10 to 12 minutes, until the bacon is beautifully golden and the sausages are cooked through, turning occasionally.",
    "When they’re done, use tongs to move the bacon and sausages out of the pan, leaving the fat behind.",
    "Reduce the heat to low, then halve or quarter the tomatoes, depending on their size, adding them to the pan as you go. Fry for a couple of minutes.",
    "Crack the eggs into the pan, using the tongs to move the tomatoes randomly on top of them as you go.",
    "As the eggs are frying, slice up your bacon and sausages, and return them to the pan, spacing them about so everyone will get a nice portion.",
    "Season with black pepper, then cover with a lid until the eggs are cooked to your liking. Toast the bread.",
    "Use a fish slice or spatula to loosen the eggs around the edges, then slide the whole thing onto a board or platter, like a frisbee, ready to serve in the middle of the table. Line up your hot toast, get your condiments out, and tuck in.",
  ],
  [
    "3 rashers of higher-welfare smoked",
    "streaky bacon",
    "4 higher-welfare chipolatas",
    "olive oil",
    "160 g ripe tomatoes",
    "4 large free-range eggs",
    "3 slices of bread",
  ]
);

const eggAndMango = new Meal(
  "Breakfast",
  "./src/mealImages/eggmango.jpg",
  "Egg and mango chutney flatbreads",
  "Easy to make but delicious. Perfect show off breakfast for you, friends and family. Combination of mango and egg is amazing.",
  [
    "Lower the eggs into a pan of vigorously simmering water and boil for 5½ minutes exactly, then refresh under cold water until cool enough to handle, and peel.",
    "Meanwhile, put a large non-stick frying pan on a medium-high heat.",
    "In a bowl, mix the flour with a little pinch of sea salt, 4 tablespoons of yoghurt and 1 tablespoon of olive oil until you have a dough. Halve, then roll out each piece on a flour-dusted surface until just under ½cm thick.",
    "Cook for 3 minutes, or until golden, turning halfway.",
    "Dot the mango chutney and remaining yoghurt over the breads.",
    "Halve the soft-boiled eggs and arrange on top, smashing them in with a fork, if you like.",
    "Finely slice the chilli and scatter over (as much as you dare!), drizzle with a little extra virgin olive oil and season with salt and black pepper from a height.",
  ],

  [
    "4 large free-range eggs",
    "100 g self-raising flour , plus extra for dusting",
    "6 tablespoons natural yoghurt",
    "2 tablespoons mango chutney",
    "1 fresh red chilli",
  ]
);

const smokedSalmon = new Meal(
  "Breakfast",
  "./src/mealImages/salmon.jpg",
  "Smoked salmon toasts",
  "Easy to make but delicious. Perfect show off breakfast for you, friends and family. Combination of mango and egg is amazing.",
  [
    "Halve, stone and scoop out the avocado flesh, then mash with the crème fraîche until completely smooth. If you’re worried about it discolouring, add a small squeeze of lemon juice. Season with a little sea salt and ground black pepper, if you like.",
    "Finely slice the radishes, then pick and finely chop the dill. Toss the radish slices with the dill, vinegar and a little pinch of salt.",
    "Spread the avocado over the crispbread or rye toast slices, then top with slices of salmon.",
    "Sprinkle over the radish slices, then finish with a scattering of the cress and leaves, and a drizzle of rapeseed oil. Serve with lemon wedges.",
  ],

  [
    "1 ripe avocado",
    "1 tablespoon crème fraîche",
    "1 lemon",
    "70 g radishes",
    "3 sprigs of fresh dill",
    "1 tablespoon cider vinegar",
    "12-16 slices of crispbread or thinly sliced and toasted rye bread",
    "200 g smoked salmon , from sustainable sources",
    "½ a punnet of cress",
    "1 handful of vein sorrel or other colourful baby leaves",
    "rapeseed oil",
  ]
);

// breakfast
meals.push(onepan);
meals.push(eggAndMango);
meals.push(smokedSalmon);

//lunch

const salmonCouscous = new Meal(
  "Lunch",
  "src/mealImages/salmonCouscous.jpg",
  "Salmon Couscous",
  "This super-fresh salmon and couscous salad is a tasty, wholesome and quick dinner",
  [
    "Pop the couscous into a bowl",
    "Slice the courgette into batons, snap the woody ends from the asparagus and deseed and finely chop the chilli.",
    "Roughly chop the tomatoes, then pick and roughly chop the coriander leaves, discarding the stalks.",
    "Slice the salmon into finger-sized strips, drizzle with olive oil, then season with pepper and a small pinch of sea salt.",
    "Heat a small non-stick frying pan over a medium heat, add the salmon, then scatter over the courgette and chilli. Cook for 2 minutes, turning the salmon halfway.",
    "Stir the tomatoes, lemon juice, 1 tablespoon of oil and the chopped coriander into the couscous, then season to taste with salt and black pepper.",
    "Carefully remove the salmon strips to a plate, then add the couscous to the veg left in the pan. Toss and mix together, then place the salmon strips on top of the couscous. Cover with a lid or some tin foil and place back on a high heat for 1 final minute, or until the fish is beautifully cooked.",
    "To serve, slide everything onto a plate, spoon over the yoghurt, then tuck in.",
  ],

  [
    "75 g couscous",
    "1 small courgette",
    "1 handful of asparagus",
    "1 fresh red chilli",
    "2 ripe tomatoes",
    "a few sprigs of fresh coriander",
    "1 x 120 g salmon fillet , skin on, scaled, pin-boned, from sustainable sources",
    "extra virgin olive oil",
    "½ a lemon",
    "1 tablespoon fat-free natural yoghurt",
  ]
);

meals.push(salmonCouscous);

const reubenishSandwich = new Meal(
  "Lunch",
  "src/mealImages/reubenishSandwich.jpg",
  "Reubenish Sandwich",
  "My twist on a classic New York sandwich, so big you need sticks to hold it together!",

  [
    "Grill the slices of bread on a griddle pan until lightly toasted on both sides then spread one side of each with mayonnaise.",
    "Put some of the sauerkraut and some of the chilli on 2 of the slices, and top with a couple of slices of pastrami.",
    "Top with the remaining sauerkraut and chilli and the sliced gherkins, then grate the Swiss cheese over the top.",
    "Preheat a hot grill. Place the slices with toppings under the grill until the cheese is melted and dribbling.",
    "Stack the sandwich together, adding a few watercress leaves and finishing with the final slice of toast. Press down lightly and use wooden skewers to hold together. Tuck in!",
  ],

  [
    "2 big slices rye bread , 1cm in size",
    "low fat mayonnaise",
    "3 heaped tablespoons sauerkraut",
    "1 fresh red chilli , deseeded and finely sliced",
    "3 slices pastrami",
    "a few gherkins",
    "60 g Swiss cheese",
    "1 handful watercress leaves , to serve",
  ]
);

meals.push(reubenishSandwich);

const spicyndujaVongole = new Meal(
  "Lunch",
  "src/mealImages/spicyndujaVongole.jpg",
  "Spicy nduja Vongole",
  "The meal is not as difficult to prepare as it is to pronounce. I promise.... Enjoy!",

  [
    "Cook the pasta in a pan of boiling salted water according to the packet instructions, draining 1 minute early and reserving a mugful of cooking water.",
    "Meanwhile, sort through the clams, giving any that aren’t tightly closed a tap. If they don’t close, discard them.",
    "Tear the ’nduja into a large cold non-stick frying pan, add 1 tablespoon of olive oil, place on a medium heat and let the ’nduja melt while you finely chop the parsley (stalks and all).",
    "Stir most of the parsley into the ’nduja pan with the clams and rosé, and put the lid on.",
    "After 3 or 4 minutes the clams will start to open – keep jiggling the pan until they’ve all opened, then remove from the heat, discarding any unopened clams.",
    "Toss the drained pasta into the clam pan with a splash of reserved cooking water and simmer for 1 minute. Taste and season to perfection with sea salt and black pepper, if needed.",
    "Dish up, drizzle with a little extra virgin olive oil and scatter over the remaining parsley, and tuck in.",
  ],

  [
    "150 g dried linguine.",
    "500 g clams , scrubbed, from sustainable sources.",
    "20 g higher-welfare ’nduja",
    "½ a bunch of fresh flat-leaf parsley , (15g)",
    "100 ml light rosé wine",
  ]
);

meals.push(spicyndujaVongole);

//dinner

const grilledChicken = new Meal(
  "Dinner",
  "src/mealImages/grilledChicken.jpg",
  "Grilled chicken with charred pineapple salad",
  "This super-healthy recipe heroes the gluten-free grain, quinoa, which is full of all-important protein and fibre. Paired with lean chicken in this tasty lunch, it makes for a great post-workout meal, as protein promotes muscle growth and repair. ",
  [
    "Combine the oregano in a bowl with 1 to 2 tablespoons of oil, then season with sea salt and black pepper.",
    "Use a sharp knife to slice into the chicken breasts, then open each one out flat like a book to butterfly. Place in the bowl with the herby oil, turning until well coated, then leave to one side.",
    "Cook the quinoa according to the packet instructions, then drain and set aside.",
    "For the dressing, peel and destone the avocado half, then scoop the flesh into a blender. Add half the coriander (stalks and all) and the jalapeños, along with a splash of the pickling liquid and the juice of 1½ limes. Blitz until smooth, adding a splash of oil, if needed. Stir through the quinoa.",
    "Finely shred the cabbage, pick the remaining coriander leaves, then toss with the salad leaves.",
    "Place a griddle pan over a high heat. Peel the pineapple, remove and discard any core, then chop into 4. Place on the hot griddle pan for a few minutes on each side, or until charred, and transfer to a chopping board.",
    "In the same pan, griddle the chicken for 5 minutes on each side, or until charred and cooked through, then remove from the pan and leave to rest on the board for a few minutes.",
    "Chop the griddled pineapple into bite-sized chunks, then slice the chicken into thin strips. Deseed and finely chop the chilli.",
    "Divide the yoghurt between four plates, then top with the chicken, adding the pineapple on one side and the dressed quinoa on the other. Toss the leaves and cabbage with the juice of the remaining lime half and a little salt and pepper, plus the chopped chilli. Divide between the plates, then serve",
  ],
  [
    "1 teaspoon dried oregano",
    "olive oil",
    "2 x 150 g free-range chicken breasts",
    "150 g quinoa",
    "50 g white cabbage",
    "1 large handful of salad leaves",
    "¼ of a pineapple",
    "50 g natural yoghurt",
    "1 fresh red chilli",
  ]
);

const roastDuckLeg = new Meal(
  "Dinner",
  "src/mealImages/roastDuckLeg.jpg",
  "Roast duck leg, cherry, watercress and feta salad",
  "This is an awesome description of something that was never on the website. More awesome text that makes no sense here. This lovely Roast duck leg is yummy and crunchy. ",
  [
    "Preheat the oven to full whack.",
    "Put the duck legs on a baking tray, sprinkle with sea salt and black pepper, then put in the oven. Immediately turn the heat down to 180ºC/gas 4 and cook for about 35 minutes, or until the skin is crispy and the meat is moist and tender. Leave to rest for 5 minutes.",
    "Cook the quinoa according to the packet instructions, then drain and set aside.",
    "Destone and place the cherries in a salad bowl with the watercress. Crumble in the feta.",
    "Make the vinaigrette by mixing together the ingredients in a jar or glass.",
    "Shred the duck meat, add it to the bowl, pour over the vinaigrette, toss and serve.",
  ],
  [
    "2 duck legs",
    "250 g cherries",
    "100 g watercress",
    "150 g feta cheese",
    "Vinaigrette",
    "1 tablespoon extra virgin olive oil",
    "1 teaspoon extra virgin plum seed oil",
    "1 tablespoon balsamic vinegar",
  ]
);

const loveDumplings = new Meal(
  "Dinner",
  "src/mealImages/loveDumpling.jpg",
  "Love dumplings",
  "Me and Jools absolutely love making and eating this dish. The inspiration came from a Japanese gyoza recipe, but I’ve gone for more of a Vietnamese-style filling, which works so well. It’s light, full of flavour and a real pleasure. Pop them in the middle of the table, then get sharing and dipping – it’s about as romantic as it gets. ",
  [
    "Start by making the dipping sauce. Finely chop the chilli, then combine with the lime juice (about 2 tablespoons), sugar, fish sauce and 8 tablespoons of water.",
    "Pour half into a cute bowl for dunking, and save the rest to dress your lettuce, herb and noodle salad.",
    "Smash the prawns with the side of your knife, then finely chop them. Peel and very finely chop the shallot and garlic, then trim and finely slice the spring onions (keep the white and green parts separate). Pick and finely chop the coriander leaves.",
    "Pop the prawns, shallot, garlic, coriander and the whites of the spring onions in a bowl, generously season with black pepper and a pinch of sea salt, and give it a good mix.",
    "Lay out your wrappers and spoon a teaspoon of filling into the middle of each. Brush the edges of one wrapper with water, fold it in half, then pleat and pinch the edges together to secure. Repeat with the others.",
    "You can steam the dumplings for 5 minutes, then fry the base until crispy. But the method I use is how I’ve seen it done in Japan. Place an oiled pan over a medium heat, add the dumplings and a splash of water, and cover. They’ll steam for 2 to 3 minutes, then once the water has evaporated, take off the lid and fry for a further 2 minutes.",
    "Cook the noodles according to the packet instructions. Toast the peanuts in a dry frying pan, then crush.",
    "Pick off and arrange the lettuce and herb leaves with the glass noodles on two plates, dress with the sauce and scatter the peanuts on top.",
    "Serve the dumplings sprinkled with the sliced green part of the spring onions, with bowls of dipping sauce and chilli sauce on the side.",
  ],
  [
    "200 g raw peeled prawns, from sustainable sources",
    "1 large shallot",
    "2 cloves of garlic",
    "4 spring onions",
    "½ a bunch of fresh coriander",
    "16 round dumpling wrappers",
    "100 g glass noodles",
    "1 tablespoon unsalted peanuts",
    "1 soft lettuce",
    "a few sprigs of fresh basil",
    "a few sprigs of fresh mint",
    "Lingham’s chilli sauce",
    "DIPPING SAUCE",
    "1 fresh red chilli",
    "1 lime",
    "4 tablespoons caster sugar",
    "4 tablespoons fish sauce",
  ]
);

meals.push(grilledChicken);

meals.push(roastDuckLeg);

meals.push(loveDumplings);
