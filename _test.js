const TRACKS = {
  visual: {
    label: 'Visual',
    keywords: [
      // media & formats
      'image','picture','pic','photo','photograph','photography','portrait','selfie','snapshot','screenshot','wallpaper',
      'design','graphic','graphic design','visual','illustration','logo','icon','ui','ux','interface','mockup','wireframe',
      'poster','banner','flyer','brochure','billboard','advertisement','commercial','cover','book cover','album art','thumbnail','meme','gif','emoji','sticker',
      'art','artwork','drawing','sketch','doodle','painting','digital art','concept art','fan art','pixel art','vector',
      'midjourney','dalle','stable diffusion','ai art','ai image','ai generated','text to image',
      'render','3d','3d model','3d render','cgi','animation','motion graphics','vfx',
      // people
      'woman','women','man','men','girl','girls','boy','boys','child','children','baby','babies','kid','kids','teen','teenager','adolescent','toddler','infant','newborn',
      'person','people','human','lady','gentleman','adult','couple','family','friend','group','crowd','neighbor','colleague','partner','spouse','husband','wife','parent','mother','father','mom','dad','daughter','son','sibling','brother','sister','grandmother','grandfather','grandma','grandpa','aunt','uncle','cousin','niece','nephew',
      // fantasy beings
      'king','queen','prince','princess','royal','monarch','ruler','lord','lady','duke','duchess','count','countess',
      'warrior','knight','fairy','elf','dwarf','giant','angel','demon','devil','satan','seraphim','cherub',
      'zombie','vampire','werewolf','robot','cyborg','alien','extraterrestrial','mutant','clone','android',
      'mermaid','centaur','goddess','god','spirit','ghost','phantom','specter','witch','wizard','mage','sorcerer','warlock','necromancer','druid','shaman','oracle','prophet',
      'ninja','samurai','pirate','viking','barbarian','gladiator','spartan','legionnaire','cowboy','cowgirl','outlaw','bandit','thief','assassin','hunter','ranger','archer','paladin','monk','cleric',
      'hero','heroine','villain','superhero','supervillain','sidekick','secret agent','spy','detective',
      // animals
      'animal','pet','wildlife','creature','beast','critter',
      'cat','cats','kitten','kittens','feline','dog','dogs','puppy','puppies','canine',
      'bird','fish','horse','pony','foal','stallion','mare','lion','lioness','tiger','bear','wolf','wolves',
      'fox','rabbit','bunny','deer','doe','fawn','moose','elk','bison','buffalo',
      'dragon','unicorn','dinosaur','t-rex','raptor','triceratops','stegosaurus','pterodactyl',
      'shark','great white','hammerhead','whale','dolphin','porpoise','seal','sea lion','otter','beaver',
      'eagle','hawk','falcon','owl','raven','crow','raven','parrot','macaw','parakeet','canary','finch','sparrow','robin','blue jay','cardinal','woodpecker','hummingbird','swan','duck','goose','chicken','rooster','hen','turkey','peacock','pigeon','dove','seagull','penguin','flamingo','ostrich','emu',
      'snake','serpent','cobra','python','viper','rattlesnake','lizard','gecko','iguana','chameleon','turtle','tortoise','frog','toad','salamander','newt',
      'spider','tarantula','scorpion','bee','bumblebee','honeybee','wasp','hornet','ladybug','butterfly','moth','dragonfly','caterpillar','centipede','millipede','ant','termite','cockroach','beetle','cricket','grasshopper','firefly','mosquito','fly',
      'monkey','ape','gorilla','chimpanzee','orangutan','lemur','sloth','panda','koala','kangaroo','wallaby','wombat','platypus','echidna','hedgehog','porcupine','armadillo','anteater','badger','skunk','raccoon','opossum','rat','mouse','mice','hamster','guinea pig','gerbil','chinchilla','ferret','squirrel','chipmunk',
      'elephant','rhino','rhinoceros','hippo','hippopotamus','giraffe','zebra','antelope','gazelle','impala','wildebeest','camel','llama','alpaca','goat','sheep','lamb','pig','piglet','hog','boar','cow','calf','cattle','bull','ox',
      'crab','lobster','shrimp','prawn','clam','mussel','oyster','scallop','squid','octopus','jellyfish','starfish','sea horse','coral','anemone',
      // nature & landscapes
      'nature','landscape','scenery','panorama','vista','view',
      'beach','shore','coast','coastal','ocean','sea','water','wave','waves','surf','tide','seaside',
      'river','stream','creek','brook','lake','pond','waterfall','cascade','rapids',
      'mountain','mountains','mountainous','peak','summit','volcano','hill','hills','valley','cliff','cliffs','canyon','gorge','ravine','ridge','range',
      'forest','woods','woodland','jungle','rainforest','grove','orchard','garden','park','nature reserve','wilderness','bush','outback',
      'desert','sahara','dune','oasis','cactus','mesa','butte','plateau',
      'island','islands','archipelago','atoll','reef','peninsula','cape','bay','gulf','harbor','port','marina',
      'field','meadow','pasture','plain','plains','prairie','savanna','tundra','taiga','swamp','marsh','bog','wetland',
      'cave','cavern','grotto','tunnel','mine','quarry',
      'rock','stone','boulder','cliff','cliffside','moss','mushroom','flower','flowers','rose','tulip','daisy','sunflower','lavender','lotus','cherry blossom','tree','trees','oak','maple','pine','willow','palm','bamboo','fern','vine','ivy','bush','shrub','grass','hay','wheat','corn','crop','harvest',
      'snow','ice','glacier','iceberg','frost','hail','sleet','rain','rainbow','storm','thunderstorm','lightning','thunder','hurricane','tornado','monsoon','typhoon','cyclone','blizzard','fog','mist','haze','smoke','cloud','clouds','sky','skies','horizon',
      // space
      'space','outer space','galaxy','galaxies','cosmos','universe','planet','planets','star','stars','constellation','solar system',
      'sun','moon','crescent','full moon','new moon','eclipse','nebula','aurora','northern lights','southern lights',
      'comet','asteroid','meteor','meteorite','meteor shower','satellite','spacecraft','spaceship','rocket','astronaut',
      // fantasy themes
      'fantasy','magical','magic','mystical','enchanted','surreal','dream','dreamy','dreamlike','ethereal','moody','gothic','steampunk','cyberpunk','dieselpunk','post apocalyptic','apocalyptic','medieval','renaissance','ancient','mythical','mythology','legendary','fairy tale','fairytale','folklore','otherworldly',
      // emotions & moods
      'cute','adorable','sweet','lovely','charming','delightful','beautiful','pretty','handsome','gorgeous','elegant','graceful','stunning','magnificent','majestic','splendid','breathtaking','radiant','glowing','luminous','vibrant','dazzling','sparkling','shimmering','glittering',
      'scary','scary','horror','horrifying','creepy','spooky','eerie','haunting','terrifying','frightening','chilling','macabre','grotesque','gruesome','gory','bloody','disturbing','unsettling','ominous','sinister','foreboding',
      'peaceful','calm','serene','tranquil','quiet','still','gentle','soothing','relaxing','restful','meditative',
      'romantic','passionate','intimate','tender','affectionate','loving','warm','cozy','comfortable','inviting',
      'dramatic','intense','powerful','epic','grand','heroic','monumental','awe inspiring',
      'funny','humorous','comical','whimsical','playful','quirky','silly','goofy','cartoonish','lively','energetic','cheerful','joyful','happy','excited','ecstatic','elated','jubilant',
      'sad','melancholy','somber','gloomy','dreary','bleak','desolate','lonely','isolated','abandoned','forgotten',
      'mysterious','enigmatic','mystical','esoteric','occult','secret','hidden','concealed','veiled','shadowy',
      // art styles & mediums
      'paint','painting','oil painting','watercolor','acrylic','gouache','tempera','fresco','mural',
      'pastel','charcoal','pencil','colored pencil','graphite','ink','marker','crayon','chalk','pastel',
      'cartoon','comic','comic book','manga','anime','anime style','chibi','kawaii','pixel','pixel art','voxel','low poly','8-bit','16-bit',
      'photorealistic','hyperrealistic','realistic','realism','impressionist','expressionist','abstract','cubist','surrealist','pop art','modern art','contemporary art',
      'cinematic','film','movie','film noir','noir','blockbuster','indie film','documentary',
      'vintage','retro','antique','old fashioned','classic','rustic','black and white','monochrome','monochromatic','sepia','grayscale',
      // colors
      'red','blue','green','yellow','black','white','purple','orange','pink','brown','grey','gray','gold','silver','bronze','copper',
      'neon','fluorescent','iridescent','holographic','metallic','matte','glossy','shiny','dull',
      'dark','light','pale','deep','rich','bright','vibrant','colorful','multicolor','rainbow','pastel','muted','washed out','faded',
      'warm','cool','neutral','complementary','monochromatic',
      // triggers
      'generate','create','make','produce','build','render','design','craft','compose','imagine','visualize','depict','show','display','illustrate','capture',
      'draw a','paint a','sketch of','render of','a photo of','a picture of','an image of','a portrait of','a shot of','a view of','a scene of','a drawing of','a painting of','a sketch of','an illustration of','a rendering of',
      // actions & poses
      'looking','wearing','dressed in','clothed in','holding','carrying','wielding','wearing','standing','sitting','posing','posing','walking','running',
      'flying','soaring','hovering','floating','dancing','spinning','twirling','sleeping','lying','resting','eating','drinking',
      'laughing','crying','weeping','smiling','grinning','frowning','scowling','staring','gazing','glancing','peering',
      'jumping','leaping','climbing','crawling','kneeling','bowing','reaching','pointing','waving','saluting',
      'fighting','battling','attacking','defending','protecting','guarding','charging','retreating','hiding',
      'singing','playing','performing','reading','writing','painting','drawing','cooking','baking','gardening',
      // clothing & fashion
      'clothes','clothing','outfit','attire','garment','costume','dress','gown','shirt','t-shirt','blouse','top','pants','trousers','jeans','skirt','shorts',
      'suit','tuxedo','blazer','jacket','coat','trench coat','leather jacket','hoodie','sweater','cardigan','vest','waistcoat',
      'shoes','boots','sneakers','heels','sandals','flats','loafers','oxfords','platforms','wedges','slippers',
      'hat','cap','beanie','beret','fedora','top hat','sun hat','cowboy hat','baseball cap','crown','tiara','headband',
      'uniform','armor','robe','cloak','cape','hood','scarf','gloves','mittens','belt','suspenders','tie','bow tie',
      'socks','stockings','tights','leggings','pajamas','bathrobe','swimsuit','bikini','lingerie',
      'fashion','style','chic','trendy','stylish','elegant','glamorous','bohemian','preppy','punk','goth','emo','grunge','hipster','boho','vintage','retro','casual','formal','business','professional','sporty','athletic',
      // accessories
      'jewelry','watch','necklace','pendant','chain','earrings','studs','hoops','bracelet','bangle','ring','engagement ring','wedding ring','cufflinks','brooch','pin','badge','medal',
      'glasses','sunglasses','reading glasses','goggles','monocle','mask','veil','purse','handbag','bag','backpack','suitcase','luggage','wallet','umbrella','fan','cane','staff','wand',
      // body & appearance
      'hair','hairstyle','eyes','eye','face','facial','smile','grin','frown','scowl','expression','look','gaze','stare',
      'pose','posing','posture','stance','gesture','motion','movement',
      'beard','mustache','goatee','stubble','whiskers','sideburns','eyebrows','eyelashes','dimples','freckles','beauty mark','mole','scar','wrinkles','crow feet','birthmark','tattoo','piercing','makeup','lipstick','eyeliner','eyeshadow','blush','foundation',
      'skin','complexion','fair','pale','tan','bronzed','dark','brown','black','olive','porcelain','rosy','glowing','flawless',
      'female','feminine','male','masculine','young','youthful','old','elderly','aged','ancient','middle aged','tall','short','average height',
      'athletic','muscular','buff','ripped','swole','slim','slender','thin','lean','curvy','voluptuous','buxom','fit','toned','petite','delicate','broad','stocky','bulky','heavy set','overweight','obese','plus size','chubby','plump',
      'blonde','blond','brunette','redhead','ginger','auburn','chestnut','mahogany','raven','jet black','salt and pepper','grey','gray','white','silver','platinum',
      'bald','shaved','buzzed','curly','wavy','straight','kinky','coily','textured',
      'long hair','short hair','medium length','ponytail','braid','braids','bun','dreadlocks','locs','afro','pompadour','quiff','fade','undercut','mohawk','mullet','pixie cut','bob','layered','feathered','bangs','fringe','side part','middle part',
      'blue eyes','green eyes','brown eyes','dark eyes','hazel eyes','grey eyes','gray eyes','amber eyes','black eyes','deep set eyes','hooded eyes','almond eyes','round eyes','close set eyes','wide set eyes','monolid eyes','big eyes','small eyes',
      'tall','short','lean','slender','thin','slim','petite','tiny','large','big','huge','massive','enormous','gigantic','colossal','miniature',
      // professions
      'ceo','executive','boss','manager','director','leader','president','founder','owner','chairman','chairwoman','entrepreneur','businessman','businesswoman',
      'doctor','physician','surgeon','nurse','paramedic','emt','dentist','veterinarian','therapist','psychologist','psychiatrist',
      'teacher','professor','instructor','educator','tutor','mentor','principal','dean',
      'lawyer','attorney','judge','magistrate','prosecutor','defender','notary',
      'soldier','military','marine','navy','army','air force','coast guard','general','captain','commander','lieutenant','sergeant','corporal','private',
      'police','officer','sheriff','deputy','trooper','detective','investigator','fbi','agent','secret service','bodyguard','security guard',
      'firefighter','fireman','firewoman','paramedic','rescuer','lifeguard','ranger','park ranger','forest ranger',
      'pilot','aviator','captain','co pilot','flight attendant','stewardess','air hostess','driver','chauffeur','conductor','engineer','train engineer',
      'scientist','researcher','lab technician','chemist','biologist','physicist','astronomer','geologist','archaeologist','paleontologist','mathematician','statistician',
      'engineer','mechanical engineer','electrical engineer','civil engineer','software engineer','architect','designer',
      'artist','painter','sculptor','illustrator','graphic designer','photographer','videographer','filmmaker',
      'musician','singer','vocalist','rapper','guitarist','pianist','drummer','bassist','dj','composer','conductor','band','orchestra',
      'dancer','ballet dancer','hip hop dancer','contemporary dancer','choreographer','performer',
      'writer','author','poet','journalist','reporter','editor','blogger','novelist','playwright','screenwriter','columnist',
      'chef','cook','baker','pastry chef','sous chef','head chef','line cook','butcher','fishmonger',
      'farmer','rancher','shepherd','cowboy','gardener','landscaper','florist','beekeeper',
      'athlete','sportsman','sportswoman','player','runner','swimmer','gymnast','boxer','wrestler','weightlifter','bodybuilder','yogi','trainer','coach','personal trainer','fitness instructor',
      'student','graduate','undergraduate','postgraduate','scholar','researcher','intern','apprentice','trainee',
      'construction worker','builder','carpenter','plumber','electrician','welder','mechanic','technician','handyman','painter','decorator','roofer','gardener','janitor','cleaner','maid','butler','waiter','waitress','bartender','barista','cashier','clerk','secretary','receptionist','assistant','intern',
      'model','actor','actress','performer','entertainer','celebrity','influencer','youtuber','tiktoker','streamer',
      'priest','pastor','minister','monk','nun','rabbi','imam','monk','nun','missionary',
      // vehicles
      'car','cars','automobile','truck','truck','pickup','van','suv','jeep','sports car','race car','convertible','coupe','sedan','limousine',
      'motorcycle','motorbike','bike','bicycle','scooter','moped','atv','quad','dirt bike',
      'plane','airplane','aircraft','jet','fighter jet','private jet','airliner','helicopter','chopper','drone','glider','blimp','airship','hot air balloon',
      'boat','ship','yacht','sailboat','sailing ship','cruise ship','speedboat','fishing boat','canoe','kayak','raft','ferry','tanker','cargo ship','warship','submarine','rowboat',
      'train','locomotive','steam train','bullet train','subway','metro','tram','trolley','streetcar',
      'spacecraft','spaceship','rocket','shuttle','satellite','space station','ufo','flying saucer',
      // food & drink
      'food','meal','dish','cuisine','pizza','burger','sandwich','taco','burrito','pasta','spaghetti','noodles','ramen','sushi','rice','steak','chicken','fish','seafood',
      'salad','soup','stew','curry','bread','toast','bagel','croissant','muffin','donut','cake','pie','cookie','brownie','ice cream','gelato','sorbet','pudding','custard','cheesecake',
      'fruit','apple','banana','orange','grape','strawberry','blueberry','raspberry','cherry','peach','pear','plum','lemon','lime','watermelon','pineapple','mango','kiwi','avocado','tomato',
      'vegetable','broccoli','carrot','potato','sweet potato','corn','peas','beans','spinach','kale','lettuce','cucumber','onion','garlic','pepper','mushroom',
      'drink','beverage','coffee','tea','water','juice','soda','coke','wine','beer','cocktail','smoothie','milkshake','chocolate','hot chocolate',
      'breakfast','lunch','dinner','brunch','dessert','appetizer','snack',
      // home & furniture
      'house','home','apartment','condo','loft','studio','dorm','villa','mansion','estate','cottage','cabin','cabin','chalet','bungalow','ranch','farmhouse','townhouse','penthouse',
      'room','living room','bedroom','kitchen','bathroom','dining room','office','home office','study','library','den','basement','attic','garage','laundry room','mudroom','pantry','hallway','staircase','foyer','entryway',
      'furniture','sofa','couch','chair','armchair','recliner','loveseat','bench','stool','table','desk','dining table','coffee table','nightstand','bed','bunk bed','crib','bookshelf','cabinet','dresser','wardrobe','closet',
      'lamp','light','chandelier','ceiling fan','curtains','drapes','blinds','rug','carpet','mirror','clock','vase','bowl','plate','cup','glass','mug','pot','pan','utensil','knife','fork','spoon',
      'pillow','cushion','throw','blanket','quilt','comforter','towel','sheet','linen',
      'plant','potted plant','succulent','cactus','flower arrangement','bouquet',
      // architecture & buildings
      'architecture','building','skyscraper','tower','high rise','structure','monument','landmark',
      'castle','palace','fortress','fort','citadel','stronghold','keep','tower','church','cathedral','chapel','basilica','temple','pagoda','mosque','synagogue','shrine',
      'bridge','suspension bridge','arch bridge','drawbridge','dam','wall','gate','arch','column','pillar','dome','spire','steeple','tower','minaret',
      'house','home','cottage','cabin','villa','mansion','bungalow','farmhouse','lighthouse','windmill','watermill','barn','shed','greenhouse','greenhouse',
      'modern','contemporary','minimalist','brutalist','futuristic','sleek','smooth','glass','steel','concrete','brick','stone','wood','marble','granite',
      'ancient','ruins','ruined','abandoned','derelict','dilapidated','crumbling','weathered','worn',
      // city & urban
      'city','cityscape','skyline','downtown','urban','metropolitan','suburb','suburban','neighborhood','district','street','road','avenue','boulevard','lane','drive','way','alley','plaza','square','market',
      'shop','store','mall','boutique','market','supermarket','grocery','pharmacy','restaurant','cafe','coffee shop','bakery','bar','pub','club','nightclub','lounge',
      'hotel','inn','hostel','motel','resort','spa','gym','fitness center','stadium','arena','theater','cinema','museum','gallery','library','school','university','college','hospital','clinic','bank','office building',
      'park','playground','fountain','statue','monument','memorial','bench','streetlamp','street light','traffic light','sign','billboard',
      // environments & settings
      'indoor','indoor','outdoor','outdoor','interior','exterior','indoors','outdoors','inside','outside',
      'office','skyscraper','office building','corporate','boardroom','conference room','meeting room','cubicle','desk','chair','computer','laptop','monitor','keyboard','window','glass','conference table',
      'factory','warehouse','workshop','studio','laboratory','lab','greenhouse','observatory','planetarium',
      'hospital','clinic','operating room','waiting room','patient room','pharmacy',
      'school','classroom','lecture hall','library','cafeteria','gymnasium','auditorium','playground',
      // lighting & atmosphere
      'golden hour','blue hour','sunset','sunrise','dawn','dusk','twilight','magic hour',
      'morning','early morning','afternoon','midday','evening','night','midnight','late night',
      'sunlight','moonlight','starlight','candlelight','firelight','torchlight','lantern light','streetlight',
      'warm light','soft light','natural light','dramatic light','hard light','harsh light','diffused light','soft light',
      'colorful light','neon light','studio light','ambient light','backlight','rim light','fill light','key light',
      'sunny','cloudy','overcast','foggy','misty','rainy','stormy','windy','snowy','clear','bright','gloomy','dark','shadowy',
      'atmospheric','ambient','moody','dramatic','cinematic lighting','dramatic lighting','soft lighting','natural lighting','studio lighting',
      // camera & composition
      'looking at camera','staring at camera','gazing at camera','glancing at camera',
      'crossed arms','arms crossed','folding arms','hands in pockets','hands on hips','arms behind back',
      'headshot','bust','portrait','full body','half body','three quarter body',
      'close up','closeup','extreme close up','wide shot','wide angle','medium shot','long shot',
      'aerial view','bird eye view','birds eye view','drone shot','top down','overhead','above',
      'low angle','high angle','eye level','ground level',
      'side view','profile','front view','straight on','back view','rear view','three quarter view',
      'point of view','pov','over the shoulder','behind','from behind',
      'macro','micro','close up detail','extreme close up',
      'action','action shot','motion','movement','action pose','dynamic pose',
      'posing confidently','standing tall','standing proud','sitting gracefully',
      'walking toward camera','walking away','looking away','looking back',
      'looking up','looking down','looking over shoulder','glancing back',
      // materials & textures
      'wood','wooden','metal','metallic','gold','golden','silver','bronze','brass','copper','iron','steel','chrome','platinum',
      'stone','stony','marble','granite','limestone','slate','concrete','brick','clay','ceramic','porcelain','glass','crystal',
      'fabric','cotton','silk','satin','velvet','leather','wool','linen','lace','denim','polyester','nylon','spandex',
      'paper','cardboard','plastic','rubber','foam','sponge','wax','ivory','bone','shell','pearl','gem','diamond','ruby','sapphire','emerald','opal','amethyst',
      'smooth','rough','bumpy','textured','grainy','gritty','soft','hard','stiff','flexible','brittle','fragile','durable','sturdy','solid',
      'shiny','glossy','matte','dull','reflective','mirror','transparent','translucent','opaque','clear','cloudy','frosted',
      'polished','unpolished','raw','finished','unfinished','weathered','distressed','aged','antique','rusty','tarnished','oxidized',
      // weather & elements
      'sunny','sunshine','sun','bright','clear','fair','fine',
      'cloudy','overcast','gray','grey','gloomy','dreary',
      'rainy','rain','raining','drizzle','shower','downpour','torrential',
      'stormy','storm','thunder','lightning','thunderstorm','tempest',
      'snowy','snow','snowing','snowfall','blizzard','sleet','hail','icicle','frost','freezing',
      'foggy','fog','mist','misty','hazy','haze','smog','smoky',
      'windy','wind','breeze','gust','gale','hurricane','typhoon','tornado','cyclone','whirlwind',
      'humid','dry','hot','warm','cool','cold','freezing','chilly','mild',
      'fire','flame','flames','burning','blazing','inferno','wildfire','ash','ember','smoke',
      'water','wave','waves','splash','spray','foam','bubble','bubbles','ripple','tide','current',
      // abstract & conceptual
      'abstract','conceptual','surreal','psychedelic','trippy','optical illusion','geometric','pattern','symmetry','asymmetry','fractal','mandala','kaleidoscope',
      'love','hate','fear','hope','dream','nightmare','memory','imagination','fantasy','vision',
      'time','space','infinity','eternity','silence','solitude','freedom','chaos','order','balance',
      'energy','power','strength','force','light','shadow','darkness','reflection','transformation',
      // time periods
      'medieval','middle ages','renaissance','baroque','roccoco','victorian','edwardian','georgian','gothic','romanesque','byzantine',
      '1920s','1930s','1940s','1950s','1960s','1970s','1980s','1990s',
      'ancient','prehistoric','stone age','bronze age','iron age','classical','roman','greek','egyptian','viking','celtic','mayan','aztec','inca',
      'futuristic','sci fi','science fiction','cyberpunk','dystopian','utopian','post apocalyptic','space age','retro futuristic',
      'old west','wild west','colonial','pioneer','frontier',
      // patterns
      'striped','stripes','plaid','checkered','polka dot','floral','geometric','abstract pattern','camouflage','tie dye','leopard print','zebra print','animal print','houndstooth','herringbone','argyle','paisley','tartan','gingham','lacy',
      // celebrations
      'birthday','party','celebration','wedding','marriage','anniversary','graduation','holiday','christmas','halloween','easter','thanksgiving','new year','valentine','independence day',
      'festival','carnival','parade','fireworks','confetti','balloon','cake','gift','present','candle','decoration',
      // sports & activities
      'soccer','football','basketball','baseball','tennis','golf','volleyball','hockey','rugby','cricket','badminton','table tennis','ping pong',
      'swimming','running','jogging','cycling','hiking','climbing','skiing','snowboarding','skating','surfing','diving',
      'boxing','wrestling','martial arts','karate','judo','taekwondo','kung fu','fencing',
      'yoga','pilates','gym','workout','exercise','stretching',
      'fishing','hunting','camping','backpacking','boating','sailing','kayaking','rafting',
      // music & instruments
      'guitar','acoustic guitar','electric guitar','bass guitar','piano','keyboard','drums','drum set','violin','cello','flute','saxophone','trumpet','trombone','clarinet','oboe','harp','accordion','banjo','ukulele','mandolin',
      'microphone','headphones','speaker','amplifier','turntable','record player',
      // technology
      'phone','smartphone','iphone','android','tablet','ipad','computer','laptop','desktop','monitor','screen','display',
      'keyboard','mouse','headphones','earbuds','airpods','speaker','camera','webcam','printer','scanner',
      'tv','television','projector','remote','game console','playstation','xbox','nintendo','controller',
      'robot','drone','smart watch','fitness tracker','vr headset','virtual reality',
      'light bulb','lamp','flashlight','charger','cable','wire','battery',
      // nature elements
      'fire','flame','flames','blaze','inferno','ember','ash','spark','smoke',
      'water','waterfall','river','ocean','sea','lake','stream','wave','tide','rain','splash',
      'wind','air','breeze','gust','gale','storm','tornado','hurricane','whirlwind',
      'earth','soil','dirt','mud','sand','rock','stone','clay','ground','land',
      'light','sunlight','moonlight','starlight','sunbeam','ray','glow','shine','sparkle','twinkle','flash',
      'shadow','shade','silhouette','reflection','mirror image',
      // body parts
      'face','head','hair','eyes','ears','nose','mouth','lips','teeth','tongue','chin','jaw','cheek','forehead','brow','eyebrow','eyelash',
      'neck','shoulder','arm','elbow','wrist','hand','finger','thumb','palm','fist','knuckle','nail',
      'back','chest','stomach','belly','waist','hip','leg','thigh','knee','calf','ankle','foot','feet','toe','heel','sole',
      'wing','wings','tail','horn','antler','fin','tusk','claw','paw','hoof','snout','beak','feather','fur','scale','shell',
      // flowers & plants
      'rose','tulip','sunflower','daisy','lily','orchid','lavender','lotus','cherry blossom','sakura','blossom','petal','flower','floral',
      'tree','oak','maple','pine','willow','birch','cedar','fir','spruce','palm','bamboo','fern','vine','ivy','bush','shrub','hedge',
      'leaf','leaves','branch','bark','root','trunk','stem','thorn',
      'grass','moss','lichen','mushroom','toadstool','fungus','algae','seaweed','kelp',
      'desert','cactus','succulent','agave','yucca'
    ],
    refinements: ['Vibrant colors', 'Dramatic lighting', 'Change perspective', 'Surreal', 'Minimalist']
  },
  creative: {
    label: 'Creative',
    keywords: [
      'story','stories','tale','tales','fiction','nonfiction','narrative',
      'poem','poetry','sonnet','haiku','verse','lyric','rhyme','limerick','ballad','epic',
      'novel','novella','chapter','book','series','saga','trilogy','prequel','sequel',
      'write','writing','writer','author','authored','prose','essay','paragraph','sentence',
      'script','screenplay','play','monologue','dialogue','scene','act',
      'creative','literature','literary','genre','fantasy','scifi','sci-fi','romance','thriller','mystery','horror','comedy','drama','tragedy','adventure','action','western','dystopia','utopia',
      'plot','subplot','character','protagonist','hero','heroine','villain','antagonist','antihero','sidekick','mentor','ally','enemy','foil',
      'setting','worldbuilding','world','dialogue','description','exposition','narration',
      'storytelling','narrator','voice','tone','mood','theme','symbolism','metaphor','allegory',
      'beginning','ending','climax','conflict','twist','arc','resolution','introduction','prologue','epilogue',
      'short story','flash fiction','microfiction','fan fiction','fanfic',
      'blog','blog post','article','newsletter','copy','content','review','opinion','editorial',
      'describe','describe a','tell me a','tell a','tell me about','write me',
      'create a story','create a poem','make a story'
    ],
    refinements: ['Funnier', 'More descriptive', 'Add dialogue', 'Darker', 'Shorter']
  },
  technical: {
    label: 'Technical',
    keywords: [
      'code','coding','program','programming','software','application',
      'app','apps','website','web','site','webpage','web app',
      'frontend','front-end','backend','back-end','fullstack','full-stack',
      'api','rest','graphql','endpoint','server','client','database',
      'python','javascript','typescript','java','c++','c#','go','rust',
      'swift','kotlin','php','ruby','scala','lua','perl','bash','shell','powershell',
      'react','vue','angular','svelte','next','nuxt','express','django','flask',
      'fastapi','spring','rails','laravel','asp.net','blazor','jquery',
      'html','css','sass','less','tailwind','bootstrap','material ui','chakra','styled',
      'node','deno','bun','npm','yarn','pnpm',
      'algorithm','data structure','function','class','object','method','variable','array','list','map','set',
      'library','framework','tool','cli','terminal','command','sdk','ide','editor','vscode',
      'deploy','deployment','build','compile','bundle','package','publish','release',
      'debug','debugging','bug','error','exception','fix','patch','hotfix','refactor',
      'test','testing','unit test','integration test','e2e','ci','cd',
      'sql','nosql','query','table','schema','migration','index','join','select','insert','update','delete',
      'auth','login','signup','password','oauth','jwt','session','token','cookie','encryption','hash',
      'docker','container','kubernetes','cloud','aws','azure','gcp','serverless','lambda',
      'devops','pipeline','automation','orchestration','monitoring','logging',
      'component','module','package','dependency','import','export','require',
      'performance','optimize','optimization','memory','speed','latency','throughput','cache',
      'security','authentication','authorization','permissions','roles',
      'tutorial','guide','how to','example','snippet','cheatsheet','documentation','readme',
      'architecture','design pattern','solid','clean code','dry','kiss','yagni','mvc','mvvm','restful',
      'beginner','intermediate','advanced','expert','professional',
      'syntax','compile','runtime','async','await','promise','callback','thread','process','event','stream'
    ],
    refinements: ['Add error handling', 'More comments', 'Optimize', 'Beginner-friendly', 'Add examples']
  },
  general: {
    label: 'General',
    keywords: [],
    refinements: ['Casual tone', 'More persuasive', 'Beginners', 'More structured', 'Professional']
  }
}; globalThis.TRACKS = TRACKS;
function ddt(input) {
  const lower = input.toLowerCase().trim();

  // Priority 1: Instruction-style requests → not visual
  const isInstruction = /^(how (to|do|does|is|are|can)|what (is|are|does|do)|explain|define|why (is|are|does|do)|describe (how|what)|tell me (how|what|about)|give me|show me|list|find me)\b/i.test(lower)
    || /\b(analyze|analyse|summarize|summarise|review|evaluate|compare)\b/i.test(lower);
  if (isInstruction) {
    if (/\b(image|picture|photo|draw|paint|render|portrait|sketch|art|design|logo|illustration|animation|3d|cinematic|photorealistic)\b/i.test(lower)) return 'visual';
    if (/\b(code|python|javascript|app|website|algorithm|database|function|program|software|api|server|sql|tutorial|component|class|variable)\b/i.test(lower)) return 'technical';
    if (/\b(story|write|poem|novel|essay|tale|fiction|script|chapter|prose|blog|article)\b/i.test(lower)) return 'creative';
    return 'general';
  }

  // Priority 2: First-word verb detection
  const firstWord = lower.split(/\s+/)[0];
  if (['write', 'tell', 'describe', 'compose', 'draft', 'author', 'rewrite'].includes(firstWord)) return 'creative';
  if (['draw', 'paint', 'sketch', 'render', 'depict', 'illustrate'].includes(firstWord)) return 'visual';
  if (['code', 'program', 'debug', 'compile', 'deploy', 'install', 'configure', 'build', 'implement'].includes(firstWord)) return 'technical';

  // Priority 3: Strong signals (technical before visual — "design" is ambiguous but more specific technical terms should win)
  if (/\b(story|write|poem|novel|essay|tale|fiction|script|chapter|prose|blog|article)\b/i.test(lower)) return 'creative';
  if (/\b(code|python|javascript|app|website|algorithm|database|function|program|software|api|server|sql|tutorial|component|class|variable|build|deploy|setup|config)\b/i.test(lower)) return 'technical';
  if (/\b(image|picture|photo|draw|paint|render|portrait|sketch|art|design|logo|illustration|animation|3d|cinematic|photorealistic)\b/i.test(lower)) return 'visual';

  // Priority 4: Keyword voting as fallback (for descriptive noun phrases like "a cat", "confident female ceo")
  const scores = { visual: 0, creative: 0, technical: 0 };
  for (const [track, config] of Object.entries(TRACKS)) {
    if (track === 'general') continue;
    for (const keyword of config.keywords) {
      if (lower.includes(keyword)) scores[track] += 1;
    }
  }

  let bestTrack = 'general', bestScore = 0;
  for (const [track, score] of Object.entries(scores)) {
    if (score > bestScore) { bestScore = score; bestTrack = track; }
  }
  return bestTrack;
}


function ggp(input, track) {
  const clean = input.replace(/^(?:o\s+|a\s+|an\s+|the\s+|this\s+|that\s+)/i, '').trim();

  const promptReq = input.match(/(?:give me|create|make|write|generate)\s+(?:a\s+)?prompt\s+(?:to|for)\s+(.+)/i)
    || input.match(/^prompt\s+(?:to|for|that|about)\s+(.+)/i)
    || clean.match(/^(?:build|create|make|design|develop|implement|set up|architect)\s+(.+)/i);

  function title(s) { return s[0].toUpperCase() + s.slice(1); }

  // ── Visual track —─────────────────────────────────────────────
  if (track === 'visual' && !promptReq) {
    const sub = title(clean);
    const hasVerb = /^(generate|create|make|render|draw|paint)\s+(an?\s+)?(image|picture|photo|3d|render|illustration|art|portrait|drawing|sketch)\b/i.test(clean);
    const subject = hasVerb ? sub + '.' : `Create an image of ${clean}.`;
    return `${subject}
Style: Hyperrealistic, photorealistic. Every surface, texture, and material reads as tangible and real — from the finest micro-details to the overall form.
Lighting: Cinematic and intentional. Rich contrast between deep, velvety shadows and warm, luminous highlights. The light shapes the subject, emphasizing form and creating a strong sense of three-dimensional depth. Soft falloff on edges gives a natural, organic feel.
Color: Professionally graded with carefully balanced warm and cool tones. The palette is rich but natural — no oversaturation, just deep, resonant colors that serve the mood and atmosphere. Subtle tonal variations add visual interest without distracting.
Focus & Depth: Razor-sharp on the subject with a beautifully soft background. Shallow depth of field isolates the subject while the background melts into a creamy, atmospheric blur that adds context without competing.
Detail: Ultra-high resolution (8K). Fine details are visible throughout — textures, reflections, surface imperfections, and subtle material qualities. The level of detail rewards close inspection.
Composition: Strong, intentional framing. The arrangement guides the eye naturally to the focal point. Balanced and harmonious, with every element serving the overall visual.
Mood: Evocative and immersive. The image feels alive and captures a specific moment in time. It tells a story in a single frame — the kind of image that stops you scrolling and makes you look closer.`;
  }

  // ── Creative track —───────────────────────────────────────────
  if (track === 'creative' && !promptReq) {
    const cap = title(clean);
    return `${cap}

A story about ${clean}. The protagonist is someone caught between who they are and who they need to become. The setting is a world that feels real enough to touch but strange enough to keep the reader off-balance — familiar details twisted just enough to feel new. The central conflict forces them to choose between what they want and what is right, and either choice comes with a cost they are not prepared to pay.

The story opens in the middle of a ordinary moment that is about to crack open. Something small goes wrong — a missed message, a locked door, a stranger who knows too much — and that small thing unravels everything the protagonist thought was true. By page three, the ground has shifted and the reader knows this is not going to be the story they expected.

The arc follows a classic three-act structure but the beats hit in unexpected places. The midpoint revelation is not a twist — it is the thing the protagonist has been avoiding seeing. The dark moment is not defeat but clarity: they finally understand what they have to lose. The climax forces them to act not because they are ready but because inaction is no longer an option.

The ending earns its emotional weight through setup paid off in small, specific moments. Objects mentioned early return with new meaning. Casual lines of dialogue become keys to character decisions. The final image stays with the reader — not because it is shocking but because it is true.

Write this story with pacing that lets the reader breathe in quiet moments and holds its breath during tension. Use language that serves the mood: lyrical when the scene calls for beauty, clipped and urgent when it calls for action. Every sentence should either advance the plot, reveal character, or deepen the atmosphere — ideally more than one at once.`;
  }

  // ── Technical track —──────────────────────────────────────────
  if (track === 'technical' && !promptReq) {
    const cap = title(clean);
    return `${cap}

**Problem**
${clean}. Define the inputs, expected outputs, and constraints clearly before building. What format does the input come in? What happens at the boundaries — empty input, maximum size, malformed data? What performance characteristics matter — speed, memory, concurrency?

**Approach**
Break the problem into clear steps. For each step, state what it takes in, what it produces, and why this approach was chosen over alternatives. If there are naming conventions, data structures, or algorithms worth calling out, specify them here. The architecture should be obvious from the structure: each module has one responsibility, each function does one thing, and the data flow between them is a straight line with no loops.

**Implementation Outline**
1. Parse and validate input — reject bad data early with clear error messages
2. Transform or process — apply the core logic, handling the common case first and edge cases as early returns
3. Format output — return results in a consistent, predictable structure
4. Handle errors — every failure mode should have a logged error, a user-facing message, and a recovery path or graceful degradation

**Data Structures**
Name the key types, their fields, their relationships, and any invariants that must hold. Use types that make illegal states unrepresentable.

**Testing**
Cover the happy path with realistic sample data. Cover edge cases: empty/null/missing input, maximum bounds, type mismatches, concurrent access, network or resource failures. Each test should prove one behavior and be readable as documentation.

**Usage**
Include a minimal working example showing the exact input and expected output. Include setup and teardown instructions. The solution should be immediately runnable by another developer with no back-and-forth.`;
  }

  // ── Prompt request: user explicitly asked for a prompt —──────
  if (promptReq) {
    const task = promptReq[1].replace(/\s*,\s*/g, ', ').trim();
    const lowerTask = task.toLowerCase();
    const cap = title(task);

    // ── Analyse —───────────────────────────────────────────────
    if (/\b(analys|conversation|chat|dialogue|transcript|talk|discussion)\b/.test(lowerTask)) {
      return `Analyse this conversation between an AI and a human.

**Summary**
One paragraph covering: what was asked, what was exchanged, what was decided or concluded. State whether the conversation achieved its goal.

**Structure**
Break the conversation into phases — opening (how did it start, was the goal set), exploration (questions asked, needs uncovered), core exchange (the main work), closing (summary, next steps, or abrupt end). For each phase, note whether it was effective or where it went wrong.

**Tone & Dynamics**
Track the emotional arc of both participants. Where did engagement peak? Where did frustration appear? Quote specific lines that show the shift. Note any mismatches in tone (e.g., user became impatient while AI stayed formal).

**AI Adaptation**
Did the AI match the user's expertise level, communication style, and formality? Where did it make good assumptions and where did it lead the conversation astray? Did it recover from misunderstandings or double down?

**Improvements**
List 2-3 specific, actionable improvements referencing exact exchanges. For each: what went wrong, why it mattered, and what a better response would look like. Be honest — praise strengths too, but focus on what will make the next conversation better.`;
    }

    // ── Story / write —─────────────────────────────────────────
    if (/\b(story|write|narrative|tale|fiction|novel|poem|script)\b/.test(lowerTask)) {
      return `${cap}

A story about ${task}. The protagonist is someone who wants something deeply but is afraid to admit it — even to themselves. The world they live in feels real: specific, textured, lived-in. The conflict that drives the story is not external action but internal pressure: a decision that cannot be postponed, a truth that cannot stay buried, a change that cannot be avoided.

The opening scene starts in the middle of an ordinary moment that is about to crack open. Something small goes wrong — a missed connection, an unexpected visitor, a discovery in a drawer — and that small thing sets everything in motion. By the end of the first chapter, the protagonist faces a choice they cannot ignore.

The middle deepens the stakes. The protagonist tries to maintain control as their world shifts around them. Secondary characters reveal hidden agendas. The reader learns what the protagonist is running from and what they are moving toward. The midpoint forces a confrontation with the real problem — not the surface conflict but the one underneath.

The ending resolves through the protagonist's choice, not through rescue or coincidence. The resolution is earned: every thread from the opening pays off. The final image or line lingers — not because it is surprising but because it feels inevitable in retrospect. The reader closes the page feeling like they lived through something real.

Write this story with pacing that matches the emotional beats. Slow down for moments of discovery and connection. Speed through transitions. Use language that is precise and sensory — the weight of objects, the quality of light, the sound of a voice. Every scene should advance the story and deepen the reader's understanding of who these people are and why this moment matters.`;
    }

    // ── Explain / summarise —───────────────────────────────────
    if (/\b(explain|summar|overview|breakdown|describe|tell about)\b/.test(lowerTask)) {
      return `${task}.

**What it is**
A plain-language definition of ${task}. What problem does it solve? Who uses it and why? What is the one thing someone absolutely needs to understand before anything else?

**Core concepts**
The key ideas, explained in order. Each concept builds on the last. Define every term the first time you use it. Use analogies that connect to everyday experience. Give concrete examples that show the concept in action.

**How it works**
A step-by-step walkthrough of ${task} in practice. Show the process from start to finish. Use a running example that carries through the whole explanation so the reader sees how the pieces fit together.

**Common misconceptions**
What do people usually get wrong about ${task}? Call out each misconception explicitly, explain why it is wrong, and state what is actually true. Address the top 2-3 misunderstandings that trip up most learners.

**Why it matters**
The practical impact of ${task}. What can you do with this knowledge? What changes once you understand it? Give 2-3 concrete takeaways the reader can apply immediately — a question to ask, a tool to try, a pattern to look for.

**Going deeper**
If the reader wants to learn more, where should they go next? Suggest 1-2 resources at the right level — not too beginner, not too advanced.`;
    }

    // ── Database design —───────────────────────────────────────
    if (/\b(database|schema|data model|table|query|sql|nosql)\b/.test(lowerTask)) {
      return `${cap}

**Entities**
List the core entities in the system. For each entity, list its attributes, their types, and any constraints (required, unique, default, foreign key). Use clear, descriptive names.

**Relationships**
Define how entities connect: one-to-one, one-to-many, many-to-many. For each relationship, specify the foreign key, whether it cascades on delete, and whether it is optional or required.

**Indexes**
List the indexes needed for the query patterns this system will actually use. Include composite indexes for filter+sorted queries and partial indexes for commonly filtered subsets. Explain what each index optimises.

**Key queries**
Write the SQL or query patterns for the most important operations: the primary lookup by ID, the filtered list with pagination, the report or aggregation, the insert or upsert. Show the query plan and note any N+1 traps.

**Migrations**
Outline the migration strategy. Each migration should be reversible, versioned, and tested. Include seed data that exercises constraints and relationships.

**Operational notes**
Connection pool sizing, backup frequency and retention, point-in-time recovery strategy, slow query monitoring setup, and a data archival policy for old records.`;
    }

    // ── API / backend —─────────────────────────────────────────
    if (/\b(api|backend|server|endpoint|microservice|rest|graphql)\b/.test(lowerTask)) {
      return `${cap}

**Base URL**
\`/api/v1/\`

**Authentication**
Describe the auth mechanism (API key, JWT, OAuth2). Include how tokens are issued, refreshed, and revoked. List which endpoints require auth and which are public.

**Endpoints**

For each endpoint:
- Method and path
- Request body schema (fields, types, required/optional, validation rules)
- Response body schema (success and error shapes)
- Status codes returned and what each means
- Authentication requirement

**Standard headers**
\`Content-Type: application/json\`, \`Authorization: Bearer <token>\`, \`X-Request-Id\` for tracing.

**Error format**
Consistent JSON error envelope. Include a machine-readable error code, a human-readable message, and the field that caused the error where applicable.

**Pagination**
For list endpoints: cursor-based for frequently-changing data, offset-based for stable data. Include \`next_cursor\` or \`total_count\` in the response.

**Rate limiting**
Describe the limits (requests per minute per user/IP), how limits are communicated via headers (\`X-RateLimit-Remaining\`, \`X-RateLimit-Reset\`), and what happens when limits are exceeded (429 response with Retry-After header).`;
    }

    // ── App / software —────────────────────────────────────────
    if (/\b(app|application|mobile|software)\b/.test(lowerTask)) {
      return `${cap}

**Overview**
${task} is a [platform type] that [core value proposition]. It serves [user types] who need to [primary goal].

**User types**
List the distinct user roles. For each role, describe their goals, their permissions, and the key actions they perform.

**Core features**
For each feature:
- What it does
- Who uses it
- The trigger that starts it
- The steps involved
- The outcome
- Error states and how they are handled

**Screens / views**
List the main screens or pages. For each: the purpose, the key elements on it, the data it displays, and the actions the user can take from it.

**Data model**
The main entities, their attributes, and how they relate to each other. Name the relationships and any important constraints (unique, required, cascade).

**User flows**
Describe the critical paths through the app:
1. Onboarding: signup → setup → first action
2. Core loop: the primary action users repeat
3. Edge path: what happens when something goes wrong (error, empty state, slow network)

**Technical considerations**
Platform choice, key libraries or services, authentication approach, data storage, real-time requirements, third-party integrations. Only include what is relevant — not a generic checklist.`;
    }

    // ── Website —───────────────────────────────────────────────
    if (/\b(website|web app|web application|site|landing page|ecommerce|shop|store)\b/.test(lowerTask)) {
      return `${cap}

**Purpose**
What this site is for, who it serves, and what action visitors should take.

**Pages**
List every page. For each page:
- URL path
- Goal of the page
- Content sections in order (hero, features, testimonials, CTA, etc.)
- Key interactive elements (forms, galleries, search, filters)
- Responsive behavior for each section

**Navigation**
Structure of the menu, mobile behaviour (hamburger, drawer), and footer links.

**Interactive elements**
For each interactive component:
- Trigger (click, scroll, hover, form submit)
- States: default, loading, success, error, empty
- Validation rules for forms
- Animation or transition (with reduced-motion respect)

**Content strategy**
Tone of voice, image requirements (style, format, sizes), SEO metadata patterns (title, description, OG tags per page type).

**Performance targets**
Target Lighthouse scores, image optimisation approach (lazy loading, responsive srcset, WebP), caching strategy, critical rendering path considerations.

**Accessibility**
Keyboard navigation order, ARIA labels needed, colour contrast requirements, screen reader support for interactive elements.`;
    }

    // ── Generic —───────────────────────────────────────────────
    return `${cap}

**Goal**
${task}. Define what success looks like, the constraints, and what counts as done.

**Approach**
Break the work into clear phases. For each phase: what goes in, what comes out, and how you know it is correct. State why this approach over alternatives.

**Details**
Work through the core of the task. Address the common case first, then edge cases. Call out decisions and tradeoffs as they come up. Use examples to illustrate abstract points.

**Output**
Structure the result so it is immediately usable. Include specific details — not placeholders. End with a summary of what was produced and any open questions or risks.`;
  }

  // ── General fallback —────────────────────────────────────────
  let cap = title(clean);
  if (!/[.?!]/.test(cap)) cap += '.';
  return cap;
}

