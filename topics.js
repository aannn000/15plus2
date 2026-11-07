const TOPICS = [
// ==================== HISTORY ====================

['History','The Fall of Constantinople','How did the city’s capture in 1453 reshape power, trade and cultural exchange?','The Byzantine Empire before 1453 | Ottoman military strategy | Consequences for Europe and the eastern Mediterranean'],
['History','The Haitian Revolution','How did enslaved people overthrow French colonial rule and establish an independent state?','Conditions in Saint-Domingue | Toussaint Louverture and other leaders | The revolution’s global significance'],
['History','The Meiji Restoration','How did Japan reorganise its institutions and military during the nineteenth century?','The end of the Tokugawa shogunate | Industrial and military reforms | Effects on Japanese society'],
['History','The Partition of India','What political decisions and social pressures shaped Partition in 1947?','The end of British rule | Competing political visions | Human displacement and its long-term legacy'],
['History','The Printing Press','How did movable-type printing transform access to knowledge and political debate?','Gutenberg’s innovation | Reformation and scientific exchange | Literacy and censorship'],
['History','The Mali Empire','How did trade, scholarship and political power shape the medieval empire of Mali?','Mansa Musa and imperial wealth | Trans-Saharan trade | Timbuktu as a centre of learning'],
['History','The Transatlantic Slave Trade','How did the slave trade operate and reshape societies across the Atlantic?','Trade routes and economic incentives | The lived experience of enslaved people | Resistance and abolition'],
['History','The Cuban Missile Crisis','How did leaders manage the risk of nuclear war in October 1962?','Events leading to the crisis | Kennedy and Khrushchev’s decisions | Lessons for nuclear diplomacy'],
['History','The Abbasid Golden Age','How did scholarship flourish under the Abbasid Caliphate?','Translation movements in Baghdad | Mathematics and medicine | Limits of the Golden Age narrative'],
['History','The Industrial Revolution','How did industrialisation transform work, cities and everyday life?','Steam power and factory production | Urbanisation and labour conditions | Environmental and global consequences'],

// ==================== CURRENT AFFAIRS ====================

['Current affairs','The Global Housing Affordability Crisis','Why are homes becoming increasingly unaffordable in many major cities?','Housing supply and demand | Interest rates and investment | Government housing policies'],
['Current affairs','The Future of Nuclear Energy','Can nuclear power become a major part of the response to climate change?','Small modular reactors | Nuclear waste and safety | Cost compared with renewables'],
['Current affairs','The Global AI Regulation Debate','How should governments regulate artificial intelligence?','EU, US and Indian approaches | Innovation versus safety | Enforcement and accountability'],
['Current affairs','The Future of Electric Vehicles','What will determine how quickly electric vehicles replace petrol and diesel vehicles?','Battery costs and technology | Charging infrastructure | Mining and environmental impacts'],
['Current affairs','The Global Decline in Birth Rates','Why are people in many countries having fewer children?','Cost of housing and childcare | Changing social expectations | Economic effects of ageing'],
['Current affairs','Cashless Economies','What happens when societies increasingly abandon physical cash?','Digital payment infrastructure | Financial inclusion | Privacy and resilience during outages'],
['Current affairs','Global Food Waste','Why does enormous food waste coexist with widespread food insecurity?','Farm-to-market losses | Retail and household behaviour | Policy and technology solutions'],
['Current affairs','The Future of Human Spaceflight','What motivates governments and private companies to expand human space exploration?','Lunar programmes | Plans for Mars | Commercial spaceflight and public costs'],
['Current affairs','The Global Water Crisis','Where is water stress increasing and what solutions are proving effective?','Groundwater depletion | Desalination and reuse | Water governance and unequal access'],
['Current affairs','The Future of Work','How might automation and artificial intelligence change jobs and skills?','Tasks exposed to automation | Reskilling and education | Effects on wages and inequality'],

// ==================== GEOPOLITICS ====================

['Geopolitics','The Israel-Palestine Conflict','What historical developments and competing national claims shaped the conflict?','The late Ottoman and British Mandate periods | 1948 and 1967 | International diplomacy and competing narratives'],
['Geopolitics','The Geopolitics of the Nile','How do competing national interests influence access to the Nile’s water?','The Grand Ethiopian Renaissance Dam | Egypt and Sudan’s concerns | Negotiation and water-sharing law'],
['Geopolitics','The Rise of BRICS','Can BRICS become a meaningful alternative voice in global institutions?','Motivations for cooperation | Expansion and internal differences | Currency and development-finance proposals'],
['Geopolitics','The Strategic Importance of Taiwan','Why does Taiwan matter to global technology and international security?','Semiconductor manufacturing | Cross-strait history | US-China strategic competition'],
['Geopolitics','The African Union','How effective is the African Union at supporting peace, integration and development?','Peace and security mechanisms | Continental trade integration | Funding and enforcement challenges'],
['Geopolitics','NATO After the Cold War','How has NATO’s purpose changed since the collapse of the Soviet Union?','The alliance’s original mission | Enlargement and new security concerns | Burden-sharing debates'],
['Geopolitics','The Geopolitics of Critical Minerals','Why are lithium, cobalt and rare earth elements strategically important?','Where minerals are mined and processed | Supply-chain concentration | Resource diplomacy and environmental costs'],
['Geopolitics','The United Nations Security Council','How do veto powers and membership shape international responses to conflict?','The five permanent members | Major reform proposals | Examples of action and deadlock'],
['Geopolitics','The Indian Ocean’s Strategic Importance','Why do shipping lanes, ports and naval access matter in the Indian Ocean?','Major maritime chokepoints | Naval partnerships | Trade and infrastructure competition'],
['Geopolitics','Small States and Great-Power Rivalry','How do smaller countries preserve autonomy among powerful neighbours?','Balancing and hedging strategies | Economic dependence | Examples from Southeast Asia and the Pacific'],

// ==================== PSYCHOLOGY ====================

['Psychology','The Halo Effect','Why can one positive characteristic influence our perception of someone’s other qualities?','Physical attractiveness and first impressions | Workplace evaluations | Consumer behaviour'],
['Psychology','The Psychology of Conspiracy Beliefs','Why do some people find hidden-plot explanations persuasive?','Need for certainty and control | Pattern recognition | Group identity and online networks'],
['Psychology','Decision Fatigue','Does making repeated decisions reduce the quality of later decisions?','What experiments actually show | Self-control and cognitive load | Criticisms and replication questions'],
['Psychology','The Psychology of Nostalgia','Why do people emotionally revisit memories of the past?','Autobiographical memory | Nostalgia and belonging | Possible benefits and downsides'],
['Psychology','The Psychology of Competition','Why do some people perform better when competing against others?','Motivation and social comparison | Cooperation versus rivalry | Pressure and performance'],
['Psychology','The Psychology of Colour','How do colours influence perception, emotion and consumer behaviour?','Colour associations | Cultural differences | Limits of popular colour claims'],
['Psychology','Risk-Taking Behaviour','Why do some people take risks while others avoid uncertainty?','Personality and sensation-seeking | Reward and threat processing | Social and cultural influences'],
['Psychology','Eyewitness Memory','How reliable are human memories when recalling stressful events?','Memory reconstruction | Leading questions and suggestion | False memories and legal implications'],
['Psychology','The Psychology of Procrastination','Why do people delay tasks they genuinely intend to complete?','Emotion regulation | Present bias and rewards | Practical evidence-based strategies'],
['Psychology','The Psychology of Awe','What happens psychologically when people encounter something vast or extraordinary?','Perception of vastness | Effects on attention and self-focus | Nature and shared experiences'],

// ==================== SCIENCE ====================

['Science','The Mystery of Consciousness','How does physical brain activity relate to subjective experience?','The hard problem of consciousness | Neural correlates | Competing scientific and philosophical theories'],
['Science','The Biology of Ageing','Why do human bodies age and which biological processes contribute?','Cellular senescence | DNA damage and repair | Longevity research'],
['Science','Europa’s Hidden Ocean','Could Jupiter’s moon Europa contain conditions suitable for life?','Evidence for a subsurface ocean | Energy sources and chemistry | Upcoming space missions'],
['Science','The Big Bang Evidence','What observations support the theory that the universe expanded from a hot, dense early state?','Cosmic microwave background | Expansion of the universe | Open questions about the earliest moments'],
['Science','Animal Navigation','How do animals navigate across enormous distances?','Earth’s magnetic field | Sun and star cues | Migration experiments'],
['Science','Black Hole Physics','What happens near a black hole’s event horizon?','General relativity | Gravitational-wave observations | The information paradox'],
['Science','Extreme Weather','What physical processes produce heatwaves, intense rainfall and powerful storms?','Atmospheric dynamics | Climate influences | Weather forecasting'],
['Science','The Human Microbiome','How do microorganisms living in and on the body interact with human biology?','Gut microbial communities | Diet and immunity | Microbiome research'],
['Science','Fusion Energy','Why is it so difficult to produce useful energy from nuclear fusion?','How fusion works | Magnetic and inertial confinement | Engineering and commercial hurdles'],
['Science','The Search for Exoplanets','How do astronomers detect planets orbiting distant stars?','Transit and radial-velocity methods | Direct imaging | What planetary atmospheres may reveal'],

// ==================== TECHNOLOGY ====================

['Technology','Brain-Computer Interfaces','Can people communicate directly with computers through brain signals?','How neural signals are recorded | Medical applications | Privacy and accessibility'],
['Technology','The Rise of Humanoid Robots','What technical challenges stand between humanoid robots and widespread everyday use?','Balance and dexterity | Perception and AI control | Cost and real-world applications'],
['Technology','Blockchain Beyond Cryptocurrency','Can blockchain systems solve problems beyond digital currencies?','Distributed ledgers | Supply-chain applications | Scalability and governance'],
['Technology','The Internet of Things','How do everyday devices communicate through connected networks?','Sensors and connectivity | Smart homes and industry | Security vulnerabilities'],
['Technology','3D Printing and Manufacturing','How could additive manufacturing change the way products are made?','Industrial and medical uses | Materials and precision | Cost and scale limitations'],
['Technology','Satellite Internet','How do low-Earth-orbit satellite networks provide internet access?','Satellite constellations | Latency and coverage | Astronomy and space debris'],
['Technology','Facial Recognition Technology','How do computer systems identify faces and where can they fail?','Computer vision methods | Accuracy across demographic groups | Consent and regulation'],
['Technology','Digital Twins','How can virtual models of physical systems support design and maintenance?','Sensor data and simulation | Industrial applications | Model accuracy and security'],
['Technology','The Right to Repair','Why do repairability and access to spare parts matter to consumers and the environment?','Design and software locks | Electronic waste | Laws and manufacturer arguments'],
['Technology','How Recommendation Algorithms Work','How do platforms predict which videos, products or posts a person may prefer?','Collaborative filtering | Engagement optimisation | Filter bubbles and user control'],

// ==================== ECONOMICS ====================

['Economics','The Economics of Tourism','How does tourism generate wealth while creating costs for destinations?','Jobs and local income | Overtourism and housing | Environmental pressures'],
['Economics','Minimum Wage Economics','What happens to employment, prices and household income when minimum wages rise?','Labour demand | Evidence from policy changes | Differences across industries and regions'],
['Economics','Monopolies and Market Power','Why do some companies dominate entire industries and what are the consequences?','Barriers to entry | Pricing and innovation | Competition policy'],
['Economics','Stock Market Bubbles','Why do asset prices sometimes rise far beyond their underlying value?','Speculation and investor psychology | Historical examples | Warning signs and limits of prediction'],
['Economics','Foreign Direct Investment','Why do companies invest in businesses and factories abroad?','Motives for investment | Employment and technology transfer | Risks for host economies'],
['Economics','The Economics of Gold','Why has gold retained financial importance for centuries?','Store of value | Central-bank reserves | Gold during inflation and crises'],
['Economics','Automation and Employment','Will automation create more jobs than it destroys?','Productivity gains | Displaced tasks and new occupations | Wages and inequality'],
['Economics','The Economics of Public Transport','How should cities evaluate the costs and benefits of public transport?','Capital and operating costs | Congestion and productivity | Equity and land values'],
['Economics','The Economics of Education','What does research reveal about education’s effects on earnings and social mobility?','Returns to schooling | Skills and signalling | Unequal access and outcomes'],
['Economics','Why Exchange Rates Move','How do interest rates, trade and expectations influence currency values?','Supply and demand for currencies | Central-bank policy | Effects on imports and exports'],

// ==================== PHILOSOPHY ====================

['Philosophy','Plato’s Allegory of the Cave','What was Plato trying to explain about knowledge, appearance and reality?','The prisoners and shadows | Education and enlightenment | Modern interpretations'],
['Philosophy','The Philosophy of Happiness','Is happiness a feeling, a life evaluation or a way of living?','Aristotle’s flourishing | Utilitarian views | Modern well-being research'],
['Philosophy','Personal Identity Over Time','What makes you the same person throughout your lifetime?','Memory and psychological continuity | The body and the self | Philosophical thought experiments'],
['Philosophy','The Philosophy of Time','Does only the present exist, or are past and future equally real?','Presentism | Eternalism | The experience and measurement of time'],
['Philosophy','The Ethics of Animal Testing','Can scientific progress justify experiments on animals?','Potential benefits | Animal suffering and moral status | Alternatives and regulation'],
['Philosophy','The Paradox of Free Speech','Should freedom of expression have limits?','The harm principle | Hate speech and incitement | Democratic debate'],
['Philosophy','The Problem of Evil','How can suffering exist if an all-powerful and benevolent God exists?','The logical problem | The evidential problem | Major philosophical responses'],
['Philosophy','The Ethics of Surveillance','When, if ever, is government or corporate surveillance morally acceptable?','Privacy and autonomy | Public safety arguments | Consent and accountability'],
['Philosophy','The Meaning of Justice','Should justice focus on equal treatment, equal outcomes or repairing harm?','Distributive justice | Procedural fairness | Restorative justice'],
['Philosophy','Can Machines Think?','What would it mean for a machine to genuinely think or understand?','Turing’s imitation game | Chinese Room argument | Behavioural and scientific evidence'],

// ==================== SOCIOLOGY ====================

['Sociology','The Sociology of Marriage','How have marriage practices and expectations changed across societies?','Arranged and love marriage | Economic influences | Changing gender roles'],
['Sociology','The Sociology of Crime','Why do crime patterns differ across communities and social environments?','Social inequality | Neighbourhood conditions | Criminal justice institutions'],
['Sociology','The Sociology of Gender','How do societies construct and reinforce gender roles?','Socialisation | Workplace inequality | Cultural expectations and change'],
['Sociology','Consumerism and Identity','Why do people use possessions and brands to communicate identity and status?','Consumer culture | Advertising and influence | Social distinction'],
['Sociology','Nationalism and Identity','How do national identities emerge and influence political behaviour?','Shared history and symbols | Education and language | Political mobilisation'],
['Sociology','Generational Differences','Why do people from different generations sometimes hold different social values?','Shared historical experiences | Technology and work | Generational stereotypes'],
['Sociology','Social Movements','Why do ordinary people organise collective movements for social change?','Shared grievances | Leadership and networks | Political opportunities'],
['Sociology','The Sociology of Trust','How do communities and institutions build or lose public trust?','Social capital | Institutional performance | Misinformation and polarisation'],
['Sociology','Gentrification and Displacement','Who benefits and who loses when neighbourhoods become more expensive?','Investment and urban change | Rent and displacement | Community-led alternatives'],
['Sociology','The Sociology of Work','How have gig platforms and remote work changed relationships between workers and employers?','Job security | Algorithmic management | Worker organisation'],

// ==================== GEOGRAPHY ====================

['Geography','The Amazon Rainforest','Why is the Amazon important to biodiversity, regional livelihoods and global climate systems?','Carbon and water cycles | Indigenous communities | Deforestation drivers'],
['Geography','The Sahara Desert','How did the Sahara become one of the world’s largest deserts?','Climate history | Desertification | Human adaptation and trade'],
['Geography','Global Population Distribution','Why do people concentrate in some regions while other areas remain sparsely populated?','Climate and water | Jobs and infrastructure | Historical settlement patterns'],
['Geography','Global Migration Geography','What geographical factors influence international migration patterns?','Conflict and displacement | Economic opportunities | Environmental pressures'],
['Geography','Natural Disaster Risk','Why are some regions more vulnerable to natural hazards than others?','Physical exposure | Infrastructure and preparedness | Inequality and recovery'],
['Geography','The Geography of Oil','Why are major petroleum reserves concentrated in particular regions?','Geological formation | Historical discovery and extraction | Energy geopolitics'],
['Geography','River Valley Civilisations','Why did many early civilisations develop around major rivers?','Agriculture and irrigation | Transport and trade | Flood management'],
['Geography','Climate Zones of the World','Why do different parts of the world experience different climates?','Latitude and solar energy | Ocean currents | Atmospheric circulation'],
['Geography','The Geography of Renewable Energy','How do sunlight, wind, terrain and power grids shape renewable-energy locations?','Solar and wind resources | Grid connections | Land use and local impacts'],
['Geography','The Geography of Global Trade','Why are ports, canals and maritime chokepoints central to world commerce?','Major shipping routes | Canal and port infrastructure | Vulnerabilities and alternatives'],

// ==================== CULTURE ====================

['Culture','The Cultural History of Yoga','How did yoga evolve from philosophical traditions into a global practice?','Ancient texts and practices | Modern yoga movements | Global commercialisation'],
['Culture','Indian Classical Music','How did Hindustani and Carnatic musical traditions develop?','Raga and tala systems | Historical influences | Regional traditions and patronage'],
['Culture','The Global Rise of Anime','How did Japanese animation become a worldwide cultural phenomenon?','Post-war development | Storytelling and visual styles | Global fandom and distribution'],
['Culture','The History of Tattoos','Why have different societies used tattoos as symbols of identity?','Ancient evidence | Ritual and social meanings | Contemporary tattoo culture'],
['Culture','The Origins of Indian Cuisine','How have migration, geography and trade shaped Indian food?','Regional ingredients | Spice and colonial trade | Food traditions and identity'],
['Culture','The History of Cinema','How did moving pictures develop into a global entertainment industry?','Early film technologies | Global studio systems | Streaming and digital production'],
['Culture','The Cultural Impact of Cricket','Why has cricket become deeply embedded in the identity of several nations?','Colonial history | National teams and major victories | Commercialisation and the IPL'],
['Culture','The History of Fashion','How have clothing styles reflected social class, technology and cultural change?','Textile innovations | Fashion and status | Globalisation and fast fashion'],
['Culture','Street Art and Public Space','When is street art treated as creative expression, protest or vandalism?','Graffiti origins | Public space and ownership | Commercialisation and legal debates'],
['Culture','The Cultural History of Coffeehouses','How have cafés served as spaces for debate, commerce and social life?','Coffeehouse origins | Politics and intellectual exchange | Modern café culture'],

// ==================== INTRIGUING MYSTERIES ====================

['Intriguing mysteries','The Disappearance of the Roanoke Colony','What historical evidence exists about the fate of the English colony established in the 1580s?','The surviving written records | The word Croatoan | Archaeological and Indigenous-history evidence'],
['Intriguing mysteries','The Nazca Lines','How were the enormous geoglyphs in Peru created and what purposes may they have served?','Construction methods | Astronomical and ritual interpretations | Archaeological evidence'],
['Intriguing mysteries','The Mary Celeste','What is documented about the abandoned ship found in the Atlantic in 1872?','The ship’s condition and log | Plausible explanations | Myths added by later accounts'],
['Intriguing mysteries','The Phaistos Disc','Why has this ancient inscribed disc from Crete resisted convincing decipherment?','The symbols and impressions | Dating and archaeological context | Proposed readings and their weaknesses'],
['Intriguing mysteries','The Lost Franklin Expedition','How have archaeology, oral histories and environmental evidence clarified the fate of the Arctic expedition?','The expedition’s route | Inuit testimony and discoveries | Evidence from ships and remains'],
['Intriguing mysteries','The Tunguska Event','What caused the enormous explosion over Siberia in 1908?','Eyewitness accounts | Tree-fall and geological evidence | Asteroid or comet explanations'],
['Intriguing mysteries','The Taos Hum','What investigations have explored reports of a persistent low-frequency sound?','Reported experiences | Environmental and medical hypotheses | Challenges of measuring the phenomenon'],
['Intriguing mysteries','The Dancing Plague of 1518','What do historical records reveal about the Strasbourg dancing outbreak?','Contemporary accounts | Social and medical explanations | Limits of retrospective diagnosis'],
['Intriguing mysteries','The Baghdad Battery Debate','What is the ancient object often called the Baghdad Battery, and was it really a battery?','Archaeological context | Experimental demonstrations | Criticism of the battery interpretation'],
['Intriguing mysteries','The Oak Island Mystery','What is known from documented excavations on Oak Island, and why do treasure theories persist?','Early excavation records | Geological features and search claims | Evidence versus speculation']
];