import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  citiesPeru = {};

  constructor() {
    this.citiesPeru = {
      "Lima": {
        "Lima": {
          "Lima": "150101",
          "Ancon": "150102",
          "Ate": "150103",
          "Barranco": "150104",
          "Breña": "150105",
          "Carabayllo": "150106",
          "Chaclacayo": "150107",
          "Chorrillos": "150108",
          "Cieneguilla": "150109",
          "Comas": "150110",
          "El Agustino": "150111",
          "Independencia": "150112",
          "Jesus Maria": "150113",
          "La Molina": "150114",
          "La Victoria": "150115",
          "Lince": "150116",
          "Los Olivos": "150117",
          "Lurigancho": "150118",
          "Lurin": "150119",
          "Magdalena Del Mar": "150120",
          "Miraflores": "150122",
          "Pachacamac": "150123",
          "Pucusana": "150124",
          "Pueblo Libre": "150121",
          "Puente Piedra": "150125",
          "Punta Hermosa": "150126",
          "Punta Negra": "150127",
          "Rimac": "150128",
          "San Bartolo": "150129",
          "San Borja": "150130",
          "San Isidro": "150131",
          "San Juan De Lurigancho": "150132",
          "San Juan De Miraflores": "150133",
          "San Luis": "150134",
          "San Martin De Porres": "150135",
          "San Miguel": "150136",
          "Santa Anita": "150137",
          "Santa Maria Del Mar": "150138",
          "Santa Rosa": "150139",
          "Santiago De Surco": "150140",
          "Surquillo": "150141",
          "Villa El Salvador": "150142",
          "Villa Maria Del Triunfo": "150143"
        },
        "Barranca": {
          "Barranca": "150201",
          "Paramonga": "150202",
          "Pativilca": "150203",
          "Supe": "150204",
          "Supe Puerto": "150205"
        },
        "Cajatambo": {
          "Cajatambo": "150301",
          "Copa": "150302",
          "Gorgor": "150303",
          "Huancapon": "150304",
          "Manas": "150305"
        },
        "Callao": {
          "Bellavista": "070102",
          "Callao": "070101",
          "Carmen De La Legua Reynoso": "070103",
          "La Perla": "070104",
          "La Punta": "070105",
          "Ventanilla": "070106"
        },
        "Canta": {
          "Arahuay": "150402",
          "Canta": "150401",
          "Huamantanga": "150403",
          "Huaros": "150404",
          "Lachaqui": "150405",
          "San Buenaventura": "150406",
          "Santa Rosa De Quives": "150407"
        },
        "Cañete": {
          "Asia": "150502",
          "Calango": "150503",
          "Cerro Azul": "150504",
          "Chilca": "150505",
          "Coayllo": "150506",
          "Imperial": "150507",
          "Lunahuana": "150508",
          "Mala": "150509",
          "Nuevo Imperial": "150510",
          "Pacaran": "150511",
          "Quilmana": "150512",
          "San Antonio": "150513",
          "San Luis": "150514",
          "San Vicente De Cañete": "150501",
          "Santa Cruz De Flores": "150515",
          "Zuñiga": "150516"
        },
        "Huaral": {
          "Atavillos Alto": "150602",
          "Atavillos Bajo": "150603",
          "Aucallama": "150604",
          "Chancay": "150605",
          "Huaral": "150601",
          "Ihuari": "150606",
          "Lampian": "150607",
          "Pacaraos": "150608",
          "San Miguel De Acos": "150609",
          "Santa Cruz De Andamarca": "150610",
          "Sumbilca": "150611",
          "Veintisiete De Noviembre": "150612"
        },
        "Huarochirí": {
          "Antioquia": "150702",
          "Callahuanca": "150703",
          "Carampoma": "150704",
          "Chicla": "150705",
          "Cuenca": "150706",
          "Huachupampa": "150707",
          "Huanza": "150708",
          "Huarochiri": "150709",
          "Lahuaytambo": "150710",
          "Langa": "150711",
          "Laraos": "150712",
          "Mariatana": "150713",
          "Matucana": "150701",
          "Ricardo Palma": "150714",
          "San Andres De Tupicocha": "150715",
          "San Antonio": "150716",
          "San Bartolome": "150717",
          "San Damian": "150718",
          "San Juan De Iris": "150719",
          "San Juan De Tantaranche": "150720",
          "San Lorenzo De Quinti": "150721",
          "San Mateo": "150722",
          "San Mateo De Otao": "150723",
          "San Pedro De Casta": "150724",
          "San Pedro De Huancayre": "150725",
          "Sangallaya": "150726",
          "Santa Cruz De Cocachacra": "150727",
          "Santa Eulalia": "150728",
          "Santiago De Anchucaya": "150729",
          "Santiago De Tuna": "150730",
          "Santo Domingo De Los Olleros": "150731",
          "Surco": "150732"
        },
        "Huaura": {
          "Ambar": "150802",
          "Caleta De Carquin": "150803",
          "Checras": "150804",
          "Huacho": "150801",
          "Hualmay": "150805",
          "Huaura": "150806",
          "Leoncio Prado": "150807",
          "Paccho": "150808",
          "Santa Leonor": "150809",
          "Santa Maria": "150810",
          "Sayan": "150811",
          "Vegueta": "150812"
        },
        "Oyón": {
          "Andajes": "150902",
          "Caujul": "150903",
          "Cochamarca": "150904",
          "Navan": "150905",
          "Oyon": "150901",
          "Pachangara": "150906"
        },
        "Yauyos": {
          "Alis": "151002",
          "Allauca": "151003",
          "Ayaviri": "151004",
          "Azangaro": "151005",
          "Cacra": "151006",
          "Carania": "151007",
          "Catahuasi": "151008",
          "Chocos": "151009",
          "Cochas": "151010",
          "Colonia": "151011",
          "Hongos": "151012",
          "Huampara": "151013",
          "Huancaya": "151014",
          "Huangascar": "151015",
          "Huantan": "151016",
          "Huañec": "151017",
          "Laraos": "151018",
          "Lincha": "151019",
          "Madean": "151020",
          "Miraflores": "151021",
          "Omas": "151022",
          "Putinza": "151023",
          "Quinches": "151024",
          "Quinocay": "151025",
          "San Joaquin": "151026",
          "San Pedro De Pilas": "151027",
          "Tanta": "151028",
          "Tauripampa": "151029",
          "Tomas": "151030",
          "Tupe": "151031",
          "Vitis": "151033",
          "Viñac": "151032",
          "Yauyos": "151001"
        }
      },
      "Amazonas": {
        "Bagua": {
          "Aramango": "010202",
          "Bagua": "010201",
          "Copallin": "010203",
          "El Parco": "010204",
          "Imaza": "010205",
          "La Peca": "010206"
        },
        "Bongará": {
          "Chisquilla": "010302",
          "Churuja": "010303",
          "Corosha": "010304",
          "Cuispes": "010305",
          "Florida": "010306",
          "Jazan": "010307",
          "Jumbilla": "010301",
          "Recta": "010308",
          "San Carlos": "010309",
          "Shipasbamba": "010310",
          "Valera": "010311",
          "Yambrasbamba": "010312"
        },
        "Chachapoyas": {
          "Asuncion": "010102",
          "Balsas": "010103",
          "Chachapoyas": "010101",
          "Cheto": "010104",
          "Chiliquin": "010105",
          "Chuquibamba": "010106",
          "Granada": "010107",
          "Huancas": "010108",
          "La Jalca": "010109",
          "Leimebamba": "010110",
          "Levanto": "010111",
          "Magdalena": "010112",
          "Mariscal Castilla": "010113",
          "Molinopampa": "010114",
          "Montevideo": "010115",
          "Olleros": "010116",
          "Quinjalca": "010117",
          "San Francisco De Daguas": "010118",
          "San Isidro De Maino": "010119",
          "Soloco": "010120",
          "Sonche": "010121"
        },
        "Condorcanqui": {
          "El Cenepa": "010402",
          "Nieva": "010401",
          "Rio Santiago": "010403"
        },
        "Luya": {
          "Camporredondo": "010502",
          "Cocabamba": "010503",
          "Colcamar": "010504",
          "Conila": "010505",
          "Inguilpata": "010506",
          "Lamud": "010501",
          "Longuita": "010507",
          "Lonya Chico": "010508",
          "Luya": "010509",
          "Luya Viejo": "010510",
          "Maria": "010511",
          "Ocalli": "010512",
          "Ocumal": "010513",
          "Pisuquia": "010514",
          "Providencia": "010515",
          "San Cristobal": "010516",
          "San Francisco Del Yeso": "010517",
          "San Jeronimo": "010518",
          "San Juan De Lopecancha": "010519",
          "Santa Catalina": "010520",
          "Santo Tomas": "010521",
          "Tingo": "010522",
          "Trita": "010523"
        },
        "Rodríguez De Mendoza": {
          "Chirimoto": "010602",
          "Cochamal": "010603",
          "Huambo": "010604",
          "Limabamba": "010605",
          "Longar": "010606",
          "Mariscal Benavides": "010607",
          "Milpuc": "010608",
          "Omia": "010609",
          "San Nicolas": "010601",
          "Santa Rosa": "010610",
          "Totora": "010611",
          "Vista Alegre": "010612"
        },
        "Utcubamba": {
          "Bagua Grande": "010701",
          "Cajaruro": "010702",
          "Cumba": "010703",
          "El Milagro": "010704",
          "Jamalca": "010705",
          "Lonya Grande": "010706",
          "Yamon": "010707"
        }
      },
      "Apurímac": {
        "Abancay": {
          "Abancay": "030101",
          "Chacoche": "030102",
          "Circa": "030103",
          "Curahuasi": "030104",
          "Huanipaca": "030105",
          "Lambrama": "030106",
          "Pichirhua": "030107",
          "San Pedro De Cachora": "030108",
          "Tamburco": "030109"
        },
        "Andahuaylas": {
          "Andahuaylas": "030201",
          "Andarapa": "030202",
          "Chiara": "030203",
          "Huancarama": "030204",
          "Huancaray": "030205",
          "Huayana": "030206",
          "Kaquiabamba": "030219",
          "Kishuara": "030207",
          "Pacobamba": "030208",
          "Pacucha": "030209",
          "Pampachiri": "030210",
          "Pomacocha": "030211",
          "San Antonio De Cachi": "030212",
          "San Jeronimo": "030213",
          "San Miguel De Chaccrampa": "030214",
          "Santa Maria De Chicmo": "030215",
          "Talavera": "030216",
          "Tumay Huaraca": "030217",
          "Turpo": "030218"
        },
        "Antabamba": {
          "Antabamba": "030301",
          "El Oro": "030302",
          "Huaquirca": "030303",
          "Juan Espinoza Medrano": "030304",
          "Oropesa": "030305",
          "Pachaconas": "030306",
          "Sabaino": "030307"
        },
        "Aymaraes": {
          "Capaya": "030402",
          "Caraybamba": "030403",
          "Chalhuanca": "030401",
          "Chapimarca": "030404",
          "Colcabamba": "030405",
          "Cotaruse": "030406",
          "Huayllo": "030407",
          "Justo Apu Sahuaraura": "030408",
          "Lucre": "030409",
          "Pocohuanca": "030410",
          "San Juan De Chacña": "030411",
          "Sañayca": "030412",
          "Soraya": "030413",
          "Tapairihua": "030414",
          "Tintay": "030415",
          "Toraya": "030416",
          "Yanaca": "030417"
        },
        "Chincheros": {
          "Anco_huallo": "030602",
          "Chincheros": "030601",
          "Cocharcas": "030603",
          "Huaccana": "030604",
          "Ocobamba": "030605",
          "Ongoy": "030606",
          "Ranracancha": "030608",
          "Uranmarca": "030607"
        },
        "Cotabambas": {
          "Challhuahuacho": "030506",
          "Cotabambas": "030502",
          "Coyllurqui": "030503",
          "Haquira": "030504",
          "Mara": "030505",
          "Tambobamba": "030501"
        },
        "Grau": {
          "Chuquibambilla": "030701",
          "Curasco": "030714",
          "Curpahuasi": "030702",
          "Gamarra": "030703",
          "Huayllati": "030704",
          "Mamara": "030705",
          "Micaela Bastidas": "030706",
          "Pataypampa": "030707",
          "Progreso": "030708",
          "San Antonio": "030709",
          "Santa Rosa": "030710",
          "Turpay": "030711",
          "Vilcabamba": "030712",
          "Virundo": "030713"
        }
      },
      "Arequipa": {
        "Arequipa": {
          "Alto Selva Alegre": "040102",
          "Arequipa": "040101",
          "Cayma": "040103",
          "Cerro Colorado": "040104",
          "Characato": "040105",
          "Chiguata": "040106",
          "Jacobo Hunter": "040107",
          "Jose Luis Bustamante Y Rivero": "040129",
          "La Joya": "040108",
          "Mariano Melgar": "040109",
          "Miraflores": "040110",
          "Mollebaya": "040111",
          "Paucarpata": "040112",
          "Pocsi": "040113",
          "Polobaya": "040114",
          "Quequeña": "040115",
          "Sabandia": "040116",
          "Sachaca": "040117",
          "San Juan De Siguas": "040118",
          "San Juan De Tarucani": "040119",
          "Santa Isabel De Siguas": "040120",
          "Santa Rita De Siguas": "040121",
          "Socabaya": "040122",
          "Tiabaya": "040123",
          "Uchumayo": "040124",
          "Vitor": "040125",
          "Yanahuara": "040126",
          "Yarabamba": "040127",
          "Yura": "040128"
        },
        "Camaná": {
          "Camana": "040201",
          "Jose Maria Quimper": "040202",
          "Mariano Nicolas Valcarcel": "040203",
          "Mariscal Caceres": "040204",
          "Nicolas De Pierola": "040205",
          "Ocoña": "040206",
          "Quilca": "040207",
          "Samuel Pastor": "040208"
        },
        "Caravelí": {
          "Acari": "040302",
          "Atico": "040303",
          "Atiquipa": "040304",
          "Bella Union": "040305",
          "Cahuacho": "040306",
          "Caraveli": "040301",
          "Chala": "040307",
          "Chaparra": "040308",
          "Huanuhuanu": "040309",
          "Jaqui": "040310",
          "Lomas": "040311",
          "Quicacha": "040312",
          "Yauca": "040313"
        },
        "Castilla": {
          "Andagua": "040402",
          "Aplao": "040401",
          "Ayo": "040403",
          "Chachas": "040404",
          "Chilcaymarca": "040405",
          "Choco": "040406",
          "Huancarqui": "040407",
          "Machaguay": "040408",
          "Orcopampa": "040409",
          "Pampacolca": "040410",
          "Tipan": "040411",
          "Uraca": "040413",
          "Uñon": "040412",
          "Viraco": "040414"
        },
        "Caylloma": {
          "Achoma": "040502",
          "Cabanaconde": "040503",
          "Callalli": "040504",
          "Caylloma": "040505",
          "Chivay": "040501",
          "Coporaque": "040506",
          "Huambo": "040507",
          "Huanca": "040508",
          "Ichupampa": "040509",
          "Lari": "040510",
          "Lluta": "040511",
          "Maca": "040512",
          "Madrigal": "040513",
          "Majes": "040520",
          "San Antonio De Chuca": "040514",
          "Sibayo": "040515",
          "Tapay": "040516",
          "Tisco": "040517",
          "Tuti": "040518",
          "Yanque": "040519"
        },
        "Condesuyos": {
          "Andaray": "040602",
          "Cayarani": "040603",
          "Chichas": "040604",
          "Chuquibamba": "040601",
          "Iray": "040605",
          "Rio Grande": "040606",
          "Salamanca": "040607",
          "Yanaquihua": "040608"
        },
        "Islay": {
          "Cocachacra": "040702",
          "Dean Valdivia": "040703",
          "Islay": "040704",
          "Mejia": "040705",
          "Mollendo": "040701",
          "Punta De Bombon": "040706"
        },
        "La Uniòn": {
          "Alca": "040802",
          "Charcana": "040803",
          "Cotahuasi": "040801",
          "Huaynacotas": "040804",
          "Pampamarca": "040805",
          "Puyca": "040806",
          "Quechualla": "040807",
          "Sayla": "040808",
          "Tauria": "040809",
          "Tomepampa": "040810",
          "Toro": "040811"
        }
      },
      "Ayacucho": {
        "Cangallo": {
          "Cangallo": "050201",
          "Chuschi": "050202",
          "Los Morochucos": "050203",
          "Maria Parado De Bellido": "050204",
          "Paras": "050205",
          "Totos": "050206"
        },
        "Huamanga": {
          "Acocro": "050102",
          "Acos Vinchos": "050103",
          "Andrés Avelino Cáceres Dorregaray": "050116",
          "Ayacucho": "050101",
          "Carmen Alto": "050104",
          "Chiara": "050105",
          "Jesus Nazareno": "050115",
          "Ocros": "050106",
          "Pacaycasa": "050107",
          "Quinua": "050108",
          "San Jose De Ticllas": "050109",
          "San Juan Bautista": "050110",
          "Santiago De Pischa": "050111",
          "Socos": "050112",
          "Tambillo": "050113",
          "Vinchos": "050114"
        },
        "Huanca Sancos": {
          "Carapo": "050302",
          "Sacsamarca": "050303",
          "Sancos": "050301",
          "Santiago De Lucanamarca": "050304"
        },
        "Huanta": {
          "Ayahuanco": "050402",
          "Canayre": "050409",
          "Huamanguilla": "050403",
          "Huanta": "050401",
          "Iguain": "050404",
          "Llochegua": "050408",
          "Luricocha": "050405",
          "Santillana": "050406",
          "Sivia": "050407",
          "Uchuraccay": "050410"
        },
        "La Mar": {
          "Anchihuay": "050510",
          "Anco": "050502",
          "Ayna": "050503",
          "Chilcas": "050504",
          "Chungui": "050505",
          "Luis Carranza": "050506",
          "Samugari": "050509",
          "San Miguel": "050501",
          "Santa Rosa": "050507",
          "Tambo": "050508"
        },
        "Lucanas": {
          "Aucara": "050602",
          "Cabana": "050603",
          "Carmen Salcedo": "050604",
          "Chaviña": "050605",
          "Chipao": "050606",
          "Huac-huas": "050607",
          "Laramate": "050608",
          "Leoncio Prado": "050609",
          "Llauta": "050610",
          "Lucanas": "050611",
          "Ocaña": "050612",
          "Otoca": "050613",
          "Puquio": "050601",
          "Saisa": "050614",
          "San Cristobal": "050615",
          "San Juan": "050616",
          "San Pedro": "050617",
          "San Pedro De Palco": "050618",
          "Sancos": "050619",
          "Santa Ana De Huaycahuacho": "050620",
          "Santa Lucia": "050621"
        },
        "Parinacochas": {
          "Chumpi": "050702",
          "Coracora": "050701",
          "Coronel Castañeda": "050703",
          "Pacapausa": "050704",
          "Pullo": "050705",
          "Puyusca": "050706",
          "San Francisco De Ravacayco": "050707",
          "Upahuacho": "050708"
        },
        "Pàucar Del Sara Sara": {
          "Colta": "050802",
          "Corculla": "050803",
          "Lampa": "050804",
          "Marcabamba": "050805",
          "Oyolo": "050806",
          "Pararca": "050807",
          "Pausa": "050801",
          "San Javier De Alpabamba": "050808",
          "San Jose De Ushua": "050809",
          "Sara Sara": "050810"
        },
        "Sucre": {
          "Belen": "050902",
          "Chalcos": "050903",
          "Chilcayoc": "050904",
          "Huacaña": "050905",
          "Morcolla": "050906",
          "Paico": "050907",
          "Querobamba": "050901",
          "San Pedro De Larcay": "050908",
          "San Salvador De Quije": "050909",
          "Santiago De Paucaray": "050910",
          "Soras": "050911"
        },
        "Vilcas Huamán": {
          "Accomarca": "051102",
          "Carhuanca": "051103",
          "Concepcion": "051104",
          "Huambalpa": "051105",
          "Independencia": "051106",
          "Saurama": "051107",
          "Vilcas Huaman": "051101",
          "Vischongo": "051108"
        },
        "Víctor Fajardo": {
          "Alcamenca": "051002",
          "Apongo": "051003",
          "Asquipata": "051004",
          "Canaria": "051005",
          "Cayara": "051006",
          "Colca": "051007",
          "Huamanquiquia": "051008",
          "Huancapi": "051001",
          "Huancaraylla": "051009",
          "Huaya": "051010",
          "Sarhua": "051011",
          "Vilcanchos": "051012"
        }
      },
      "Cajamarca": {
        "Cajabamba": {
          "Cachachi": "060202",
          "Cajabamba": "060201",
          "Condebamba": "060203",
          "Sitacocha": "060204"
        },
        "Cajamarca": {
          "Asuncion": "060102",
          "Cajamarca": "060101",
          "Chetilla": "060103",
          "Cospan": "060104",
          "Encañada": "060105",
          "Jesus": "060106",
          "Llacanora": "060107",
          "Los Baños Del Inca": "060108",
          "Magdalena": "060109",
          "Matara": "060110",
          "Namora": "060111",
          "San Juan": "060112"
        },
        "Celendín": {
          "Celendin": "060301",
          "Chumuch": "060302",
          "Cortegana": "060303",
          "Huasmin": "060304",
          "Jorge Chavez": "060305",
          "Jose Galvez": "060306",
          "La Libertad De Pallan": "060312",
          "Miguel Iglesias": "060307",
          "Oxamarca": "060308",
          "Sorochuco": "060309",
          "Sucre": "060310",
          "Utco": "060311"
        },
        "Chota": {
          "Anguia": "060402",
          "Chadin": "060403",
          "Chalamarca": "060419",
          "Chiguirip": "060404",
          "Chimban": "060405",
          "Choropampa": "060406",
          "Chota": "060401",
          "Cochabamba": "060407",
          "Conchan": "060408",
          "Huambos": "060409",
          "Lajas": "060410",
          "Llama": "060411",
          "Miracosta": "060412",
          "Paccha": "060413",
          "Pion": "060414",
          "Querocoto": "060415",
          "San Juan De Licupis": "060416",
          "Tacabamba": "060417",
          "Tocmoche": "060418"
        },
        "Contumazá": {
          "Chilete": "060502",
          "Contumaza": "060501",
          "Cupisnique": "060503",
          "Guzmango": "060504",
          "San Benito": "060505",
          "Santa Cruz De Toled": "060506",
          "Tantarica": "060507",
          "Yonan": "060508"
        },
        "Cutervo": {
          "Callayuc": "060602",
          "Choros": "060603",
          "Cujillo": "060604",
          "Cutervo": "060601",
          "La Ramada": "060605",
          "Pimpingos": "060606",
          "Querocotillo": "060607",
          "San Andres De Cutervo": "060608",
          "San Juan De Cutervo": "060609",
          "San Luis De Lucma": "060610",
          "Santa Cruz": "060611",
          "Santo Domingo De La Capilla": "060612",
          "Santo Tomas": "060613",
          "Socota": "060614",
          "Toribio Casanova": "060615"
        },
        "Hualgayoc": {
          "Bambamarca": "060701",
          "Chugur": "060702",
          "Hualgayoc": "060703"
        },
        "Jaén": {
          "Bellavista": "060802",
          "Chontali": "060803",
          "Colasay": "060804",
          "Huabal": "060805",
          "Jaen": "060801",
          "Las Pirias": "060806",
          "Pomahuaca": "060807",
          "Pucara": "060808",
          "Sallique": "060809",
          "San Felipe": "060810",
          "San Jose Del Alto": "060811",
          "Santa Rosa": "060812"
        },
        "San Ignacio": {
          "Chirinos": "060902",
          "Huarango": "060903",
          "La Coipa": "060904",
          "Namballe": "060905",
          "San Ignacio": "060901",
          "San Jose De Lourdes": "060906",
          "Tabaconas": "060907"
        },
        "San Marcos": {
          "Chancay": "061002",
          "Eduardo Villanueva": "061003",
          "Gregorio Pita": "061004",
          "Ichocan": "061005",
          "Jose Manuel Quiroz": "061006",
          "Jose Sabogal": "061007",
          "Pedro Galvez": "061001"
        },
        "San Miguel": {
          "Bolivar": "061102",
          "Calquis": "061103",
          "Catilluc": "061104",
          "El Prado": "061105",
          "La Florida": "061106",
          "Llapa": "061107",
          "Nanchoc": "061108",
          "Niepos": "061109",
          "San Gregorio": "061110",
          "San Miguel": "061101",
          "San Silvestre De Cochan": "061111",
          "Tongod": "061112",
          "Union Agua Blanca": "061113"
        },
        "San Pablo": {
          "San Bernardino": "061202",
          "San Luis": "061203",
          "San Pablo": "061201",
          "Tumbaden": "061204"
        },
        "Santa Cruz": {
          "Andabamba": "061302",
          "Catache": "061303",
          "Chancaybaños": "061304",
          "La Esperanza": "061305",
          "Ninabamba": "061306",
          "Pulan": "061307",
          "Santa Cruz": "061301",
          "Saucepampa": "061308",
          "Sexi": "061309",
          "Uticyacu": "061310",
          "Yauyucan": "061311"
        }
      },
      "Cusco": {
        "Acomayo": {
          "Acomayo": "080201",
          "Acopia": "080202",
          "Acos": "080203",
          "Mosoc Llacta": "080204",
          "Pomacanchi": "080205",
          "Rondocan": "080206",
          "Sangarara": "080207"
        },
        "Anta": {
          "Ancahuasi": "080302",
          "Anta": "080301",
          "Cachimayo": "080303",
          "Chinchaypujio": "080304",
          "Huarocondo": "080305",
          "Limatambo": "080306",
          "Mollepata": "080307",
          "Pucyura": "080308",
          "Zurite": "080309"
        },
        "Calca": {
          "Calca": "080401",
          "Coya": "080402",
          "Lamay": "080403",
          "Lares": "080404",
          "Pisac": "080405",
          "San Salvador": "080406",
          "Taray": "080407",
          "Yanatile": "080408"
        },
        "Canas": {
          "Checca": "080502",
          "Kunturkanki": "080503",
          "Langui": "080504",
          "Layo": "080505",
          "Pampamarca": "080506",
          "Quehue": "080507",
          "Tupac Amaru": "080508",
          "Yanaoca": "080501"
        },
        "Canchis": {
          "Checacupe": "080602",
          "Combapata": "080603",
          "Marangani": "080604",
          "Pitumarca": "080605",
          "San Pablo": "080606",
          "San Pedro": "080607",
          "Sicuani": "080601",
          "Tinta": "080608"
        },
        "Chumbivilcas": {
          "Capacmarca": "080702",
          "Chamaca": "080703",
          "Colquemarca": "080704",
          "Livitaca": "080705",
          "Llusco": "080706",
          "Quiñota": "080707",
          "Santo Tomas": "080701",
          "Velille": "080708"
        },
        "Cusco": {
          "Ccorca": "080102",
          "Cusco": "080101",
          "Poroy": "080103",
          "San Jeronimo": "080104",
          "San Sebastian": "080105",
          "Santiago": "080106",
          "Saylla": "080107",
          "Wanchaq": "080108"
        },
        "Espinar": {
          "Alto Pichigua": "080808",
          "Condoroma": "080802",
          "Coporaque": "080803",
          "Espinar": "080801",
          "Ocoruro": "080804",
          "Pallpata": "080805",
          "Pichigua": "080806",
          "Suyckutambo": "080807"
        },
        "La Convención": {
          "Echarate": "080902",
          "Huayopata": "080903",
          "Kimbiri": "080907",
          "Maranura": "080904",
          "Ocobamba": "080905",
          "Pichari": "080910",
          "Quellouno": "080906",
          "Santa Ana": "080901",
          "Santa Teresa": "080908",
          "Vilcabamba": "080909"
        },
        "Paruro": {
          "Accha": "081002",
          "Ccapi": "081003",
          "Colcha": "081004",
          "Huanoquite": "081005",
          "Omacha": "081006",
          "Paccaritambo": "081007",
          "Paruro": "081001",
          "Pillpinto": "081008",
          "Yaurisque": "081009"
        },
        "Paucartambo": {
          "Caicay": "081102",
          "Challabamba": "081103",
          "Colquepata": "081104",
          "Huancarani": "081105",
          "Kosñipata": "081106",
          "Paucartambo": "081101"
        },
        "Quispicanchi": {
          "Andahuaylillas": "081202",
          "Camanti": "081203",
          "Ccarhuayo": "081204",
          "Ccatca": "081205",
          "Cusipata": "081206",
          "Huaro": "081207",
          "Lucre": "081208",
          "Marcapata": "081209",
          "Ocongate": "081210",
          "Oropesa": "081211",
          "Quiquijana": "081212",
          "Urcos": "081201"
        },
        "Urubamba": {
          "Chinchero": "081302",
          "Huayllabamba": "081303",
          "Machupicchu": "081304",
          "Maras": "081305",
          "Ollantaytambo": "081306",
          "Urubamba": "081301",
          "Yucay": "081307"
        }
      },
      "Huancavelica": {
        "Acobamba": {
          "Acobamba": "090201",
          "Andabamba": "090202",
          "Anta": "090203",
          "Caja": "090204",
          "Marcas": "090205",
          "Paucara": "090206",
          "Pomacocha": "090207",
          "Rosario": "090208"
        },
        "Angaraes": {
          "Anchonga": "090302",
          "Callanmarca": "090303",
          "Ccochaccasa": "090304",
          "Chincho": "090305",
          "Congalla": "090306",
          "Huanca-huanca": "090307",
          "Huayllay Grande": "090308",
          "Julcamarca": "090309",
          "Lircay": "090301",
          "San Antonio De Antaparco": "090310",
          "Santo Tomas De Pata": "090311",
          "Secclla": "090312"
        },
        "Castrovirreyna": {
          "Arma": "090402",
          "Aurahua": "090403",
          "Capillas": "090404",
          "Castrovirreyna": "090401",
          "Chupamarca": "090405",
          "Cocas": "090406",
          "Huachos": "090407",
          "Huamatambo": "090408",
          "Mollepampa": "090409",
          "San Juan": "090410",
          "Santa Ana": "090411",
          "Tantara": "090412",
          "Ticrapo": "090413"
        },
        "Churcampa": {
          "Anco": "090502",
          "Chinchihuasi": "090503",
          "Churcampa": "090501",
          "Cosme": "090511",
          "El Carmen": "090504",
          "La Merced": "090505",
          "Locroja": "090506",
          "Pachamarca": "090510",
          "Paucarbamba": "090507",
          "San Miguel De Mayocc": "090508",
          "San Pedro De Coris": "090509"
        },
        "Huancavelica": {
          "Acobambilla": "090102",
          "Acoria": "090103",
          "Ascension": "090118",
          "Conayca": "090104",
          "Cuenca": "090105",
          "Huachocolpa": "090106",
          "Huancavelica": "090101",
          "Huando": "090119",
          "Huayllahuara": "090107",
          "Izcuchaca": "090108",
          "Laria": "090109",
          "Manta": "090110",
          "Mariscal Caceres": "090111",
          "Moya": "090112",
          "Nuevo Occoro": "090113",
          "Palca": "090114",
          "Pilchaca": "090115",
          "Vilca": "090116",
          "Yauli": "090117"
        },
        "Huaytará": {
          "Ayavi": "090602",
          "Cordova": "090603",
          "Huayacundo Arma": "090604",
          "Huaytara": "090601",
          "Laramarca": "090605",
          "Ocoyo": "090606",
          "Pilpichaca": "090607",
          "Querco": "090608",
          "Quito-arma": "090609",
          "San Antonio De Cusicancha": "090610",
          "San Francisco De Sangayaico": "090611",
          "San Isidro": "090612",
          "Santiago De Chocorvos": "090613",
          "Santiago De Quirahuara": "090614",
          "Santo Domingo De Capillas": "090615",
          "Tambo": "090616"
        },
        "Tayacaja": {
          "Acostambo": "090702",
          "Acraquia": "090703",
          "Ahuaycha": "090704",
          "Colcabamba": "090705",
          "Daniel Hernandez": "090706",
          "Huachocolpa": "090707",
          "Huaribamba": "090709",
          "Pampas": "090701",
          "Pazos": "090711",
          "Quishuar": "090713",
          "Salcabamba": "090714",
          "Salcahuasi": "090715",
          "San Marcos De Rocchac": "090716",
          "Surcubamba": "090717",
          "Tintay Puncu": "090718",
          "Ñahuimpuquio": "090710"
        }
      },
      "Huánuco": {
        "Ambo": {
          "Ambo": "100201",
          "Cayna": "100202",
          "Colpas": "100203",
          "Conchamarca": "100204",
          "Huacar": "100205",
          "San Francisco": "100206",
          "San Rafael": "100207",
          "Tomay Kichwa": "100208"
        },
        "Dos De Mayo": {
          "Chuquis": "100307",
          "La Union": "100301",
          "Marias": "100311",
          "Pachas": "100313",
          "Quivilla": "100316",
          "Ripan": "100317",
          "Shunqui": "100321",
          "Sillapata": "100322",
          "Yanas": "100323"
        },
        "Huacaybamba": {
          "Canchabamba": "100402",
          "Cochabamba": "100403",
          "Huacaybamba": "100401",
          "Pinra": "100404"
        },
        "Huamalíes": {
          "Arancay": "100502",
          "Chavin De Pariarca": "100503",
          "Jacas Grande": "100504",
          "Jircan": "100505",
          "Llata": "100501",
          "Miraflores": "100506",
          "Monzon": "100507",
          "Punchao": "100508",
          "Puños": "100509",
          "Singa": "100510",
          "Tantamayo": "100511"
        },
        "Huánuco": {
          "Amarilis": "100102",
          "Chinchao": "100103",
          "Churubamba": "100104",
          "Huanuco": "100101",
          "Margos": "100105",
          "Pillco Marca": "100111",
          "Quisqui (kichki)": "100106",
          "San Francisco De Cayran": "100107",
          "San Pedro De Chaulan": "100108",
          "Santa Maria Del Valle": "100109",
          "Yacus": "100112",
          "Yarumayo": "100110"
        },
        "Lauricocha": {
          "Baños": "101002",
          "Jesus": "101001",
          "Jivia": "101003",
          "Queropalca": "101004",
          "Rondos": "101005",
          "San Francisco De Asis": "101006",
          "San Miguel De Cauri": "101007"
        },
        "Leoncio Prado": {
          "Daniel Alomia Robles": "100602",
          "Hermilio Valdizan": "100603",
          "Jose Crespo Y Castillo": "100604",
          "Luyando": "100605",
          "Mariano Damaso Beraun": "100606",
          "Rupa-rupa": "100601"
        },
        "Marañón": {
          "Cholon": "100702",
          "Huacrachuco": "100701",
          "San Buenaventura": "100703"
        },
        "Pachitea": {
          "Chaglla": "100802",
          "Molino": "100803",
          "Panao": "100801",
          "Umari": "100804"
        },
        "Puerto Inca": {
          "Codo Del Pozuzo": "100902",
          "Honoria": "100903",
          "Puerto Inca": "100901",
          "Tournavista": "100904",
          "Yuyapichis": "100905"
        },
        "Yarowilca": {
          "Aparicio Pomares": "101104",
          "Cahuac": "101102",
          "Chacabamba": "101103",
          "Chavinillo": "101101",
          "Choras": "101108",
          "Jacas Chico": "101105",
          "Obas": "101106",
          "Pampamarca": "101107"
        }
      },
      "Ica": {
        "Chincha": {
          "Alto Laran": "110202",
          "Chavin": "110203",
          "Chincha Alta": "110201",
          "Chincha Baja": "110204",
          "El Carmen": "110205",
          "Grocio Prado": "110206",
          "Pueblo Nuevo": "110207",
          "San Juan De Yanac": "110208",
          "San Pedro De Huacarpana": "110209",
          "Sunampe": "110210",
          "Tambo De Mora": "110211"
        },
        "Ica": {
          "Ica": "110101",
          "La Tinguiña": "110102",
          "Los Aquijes": "110103",
          "Ocucaje": "110104",
          "Pachacutec": "110105",
          "Parcona": "110106",
          "Pueblo Nuevo": "110107",
          "Salas": "110108",
          "San Jose De Los Molinos": "110109",
          "San Juan Bautista": "110110",
          "Santiago": "110111",
          "Subtanjalla": "110112",
          "Tate": "110113",
          "Yauca Del Rosario": "110114"
        },
        "Nazca": {
          "Changuillo": "110302",
          "El Ingenio": "110303",
          "Marcona": "110304",
          "Nasca": "110301",
          "Vista Alegre": "110305"
        },
        "Palpa": {
          "Llipata": "110402",
          "Palpa": "110401",
          "Rio Grande": "110403",
          "Santa Cruz": "110404",
          "Tibillo": "110405"
        },
        "Pisco": {
          "Huancano": "110502",
          "Humay": "110503",
          "Independencia": "110504",
          "Paracas": "110505",
          "Pisco": "110501",
          "San Andres": "110506",
          "San Clemente": "110507",
          "Tupac Amaru Inca": "110508"
        }
      },
      "Junín": {
        "Chanchamayo": {
          "Chanchamayo": "120301",
          "Perene": "120302",
          "Pichanaqui": "120303",
          "San Luis De Shuaro": "120304",
          "San Ramon": "120305",
          "Vitoc": "120306"
        },
        "Chupaca": {
          "Ahuac": "120902",
          "Chongos Bajo": "120903",
          "Chupaca": "120901",
          "Huachac": "120904",
          "Huamancaca Chico": "120905",
          "San Juan De Iscos": "120906",
          "San Juan De Jarpa": "120907",
          "Tres De Diciembre": "120908",
          "Yanacancha": "120909"
        },
        "Concepción": {
          "Aco": "120202",
          "Andamarca": "120203",
          "Chambara": "120204",
          "Cochas": "120205",
          "Comas": "120206",
          "Concepcion": "120201",
          "Heroinas Toledo": "120207",
          "Manzanares": "120208",
          "Mariscal Castilla": "120209",
          "Matahuasi": "120210",
          "Mito": "120211",
          "Nueve De Julio": "120212",
          "Orcotuna": "120213",
          "San Jose De Quero": "120214",
          "Santa Rosa De Ocopa": "120215"
        },
        "Huancayo": {
          "Carhuacallanga": "120104",
          "Chacapampa": "120105",
          "Chicche": "120106",
          "Chilca": "120107",
          "Chongos Alto": "120108",
          "Chupuro": "120111",
          "Colca": "120112",
          "Cullhuas": "120113",
          "El Tambo": "120114",
          "Huacrapuquio": "120116",
          "Hualhuas": "120117",
          "Huancan": "120119",
          "Huancayo": "120101",
          "Huasicancha": "120120",
          "Huayucachi": "120121",
          "Ingenio": "120122",
          "Pariahuanca": "120124",
          "Pilcomayo": "120125",
          "Pucara": "120126",
          "Quichuay": "120127",
          "Quilcas": "120128",
          "San Agustin": "120129",
          "San Jeronimo De Tunan": "120130",
          "Santo Domingo De Acobamba": "120135",
          "Sapallanga": "120133",
          "Saño": "120132",
          "Sicaya": "120134",
          "Viques": "120136"
        },
        "Jauja": {
          "Acolla": "120402",
          "Apata": "120403",
          "Ataura": "120404",
          "Canchayllo": "120405",
          "Curicaca": "120406",
          "El Mantaro": "120407",
          "Huamali": "120408",
          "Huaripampa": "120409",
          "Huertas": "120410",
          "Janjaillo": "120411",
          "Jauja": "120401",
          "Julcan": "120412",
          "Leonor Ordoñez": "120413",
          "Llocllapampa": "120414",
          "Marco": "120415",
          "Masma": "120416",
          "Masma Chicche": "120417",
          "Molinos": "120418",
          "Monobamba": "120419",
          "Muqui": "120420",
          "Muquiyauyo": "120421",
          "Paca": "120422",
          "Paccha": "120423",
          "Pancan": "120424",
          "Parco": "120425",
          "Pomacancha": "120426",
          "Ricran": "120427",
          "San Lorenzo": "120428",
          "San Pedro De Chunan": "120429",
          "Sausa": "120430",
          "Sincos": "120431",
          "Tunan Marca": "120432",
          "Yauli": "120433",
          "Yauyos": "120434"
        },
        "Junín": {
          "Carhuamayo": "120502",
          "Junin": "120501",
          "Ondores": "120503",
          "Ulcumayo": "120504"
        },
        "Satipo": {
          "Coviriali": "120602",
          "Llaylla": "120603",
          "Mazamari": "120604",
          "Pampa Hermosa": "120605",
          "Pangoa": "120606",
          "Rio Negro": "120607",
          "Rio Tambo": "120608",
          "Satipo": "120601"
        },
        "Tarma": {
          "Acobamba": "120702",
          "Huaricolca": "120703",
          "Huasahuasi": "120704",
          "La Union": "120705",
          "Palca": "120706",
          "Palcamayo": "120707",
          "San Pedro De Cajas": "120708",
          "Tapo": "120709",
          "Tarma": "120701"
        },
        "Yauli": {
          "Chacapalpa": "120802",
          "Huay-huay": "120803",
          "La Oroya": "120801",
          "Marcapomacocha": "120804",
          "Morococha": "120805",
          "Paccha": "120806",
          "Santa Barbara De Carhuacayan": "120807",
          "Santa Rosa De Sacco": "120808",
          "Suitucancha": "120809",
          "Yauli": "120810"
        }
      },
      "La Libertad": {
        "Ascope": {
          "Ascope": "130201",
          "Casa Grande": "130208",
          "Chicama": "130202",
          "Chocope": "130203",
          "Magdalena De Cao": "130204",
          "Paijan": "130205",
          "Razuri": "130206",
          "Santiago De Cao": "130207"
        },
        "Bolívar": {
          "Bambamarca": "130302",
          "Bolivar": "130301",
          "Condormarca": "130303",
          "Longotea": "130304",
          "Uchumarca": "130305",
          "Ucuncha": "130306"
        },
        "Chepén": {
          "Chepen": "130401",
          "Pacanga": "130402",
          "Pueblo Nuevo": "130403"
        },
        "Gran Chimú": {
          "Cascas": "131101",
          "Lucma": "131102",
          "Marmot": "131103",
          "Sayapullo": "131104"
        },
        "Julcán": {
          "Calamarca": "130502",
          "Carabamba": "130503",
          "Huaso": "130504",
          "Julcan": "130501"
        },
        "Otuzco": {
          "Agallpampa": "130602",
          "Charat": "130604",
          "Huaranchal": "130605",
          "La Cuesta": "130606",
          "Mache": "130608",
          "Otuzco": "130601",
          "Paranday": "130610",
          "Salpo": "130611",
          "Sinsicap": "130613",
          "Usquil": "130614"
        },
        "Pacasmayo": {
          "Guadalupe": "130702",
          "Jequetepeque": "130703",
          "Pacasmayo": "130704",
          "San Jose": "130705",
          "San Pedro De Lloc": "130701"
        },
        "Pataz": {
          "Buldibuyo": "130802",
          "Chillia": "130803",
          "Huancaspata": "130804",
          "Huaylillas": "130805",
          "Huayo": "130806",
          "Ongon": "130807",
          "Parcoy": "130808",
          "Pataz": "130809",
          "Pias": "130810",
          "Santiago De Challas": "130811",
          "Taurija": "130812",
          "Tayabamba": "130801",
          "Urpay": "130813"
        },
        "Santiago De Chuco": {
          "Angasmarca": "131002",
          "Cachicadan": "131003",
          "Mollebamba": "131004",
          "Mollepata": "131005",
          "Quiruvilca": "131006",
          "Santa Cruz De Chuca": "131007",
          "Santiago De Chuco": "131001",
          "Sitabamba": "131008"
        },
        "Sánchez Carrión": {
          "Chugay": "130902",
          "Cochorco": "130903",
          "Curgos": "130904",
          "Huamachuco": "130901",
          "Marcabal": "130905",
          "Sanagoran": "130906",
          "Sarin": "130907",
          "Sartimbamba": "130908"
        },
        "Trujillo": {
          "El Porvenir": "130102",
          "Florencia De Mora": "130103",
          "Huanchaco": "130104",
          "La Esperanza": "130105",
          "Laredo": "130106",
          "Moche": "130107",
          "Poroto": "130108",
          "Salaverry": "130109",
          "Simbal": "130110",
          "Trujillo": "130101",
          "Victor Larco Herrera": "130111"
        },
        "Virú": {
          "Chao": "131202",
          "Guadalupito": "131203",
          "Viru": "131201"
        }
      },
      "Lambayeque": {
        "Chiclayo": {
          "Cayalti": "140116",
          "Chiclayo": "140101",
          "Chongoyape": "140102",
          "Eten": "140103",
          "Eten Puerto": "140104",
          "Jose Leonardo Ortiz": "140105",
          "La Victoria": "140106",
          "Lagunas": "140107",
          "Monsefu": "140108",
          "Nueva Arica": "140109",
          "Oyotun": "140110",
          "Patapo": "140117",
          "Picsi": "140111",
          "Pimentel": "140112",
          "Pomalca": "140118",
          "Pucala": "140119",
          "Reque": "140113",
          "Santa Rosa": "140114",
          "Saña": "140115",
          "Tuman": "140120"
        },
        "Ferreñafe": {
          "Cañaris": "140202",
          "Ferreñafe": "140201",
          "Incahuasi": "140203",
          "Manuel Antonio Mesones Muro": "140204",
          "Pitipo": "140205",
          "Pueblo Nuevo": "140206"
        },
        "Lambayeque": {
          "Chochope": "140302",
          "Illimo": "140303",
          "Jayanca": "140304",
          "Lambayeque": "140301",
          "Mochumi": "140305",
          "Morrope": "140306",
          "Motupe": "140307",
          "Olmos": "140308",
          "Pacora": "140309",
          "Salas": "140310",
          "San Jose": "140311",
          "Tucume": "140312"
        }
      },
      "Loreto": {
        "Alto Amazonas": {
          "Balsapuerto": "160202",
          "Jeberos": "160205",
          "Lagunas": "160206",
          "Santa Cruz": "160210",
          "Teniente Cesar Lopez Rojas": "160211",
          "Yurimaguas": "160201"
        },
        "Datem Del Marañón": {
          "Andoas": "160706",
          "Barranca": "160701",
          "Cahuapanas": "160702",
          "Manseriche": "160703",
          "Morona": "160704",
          "Pastaza": "160705"
        },
        "Loreto": {
          "Nauta": "160301",
          "Parinari": "160302",
          "Tigre": "160303",
          "Trompeteros": "160304",
          "Urarinas": "160305"
        },
        "Mariscal Ramón Castilla": {
          "Pebas": "160402",
          "Ramon Castilla": "160401",
          "San Pablo": "160404",
          "Yavari": "160403"
        },
        "Maynas": {
          "Alto Nanay": "160102",
          "Belen": "160112",
          "Fernando Lores": "160103",
          "Indiana": "160104",
          "Iquitos": "160101",
          "Las Amazonas": "160105",
          "Mazan": "160106",
          "Napo": "160107",
          "Punchana": "160108",
          "San Juan Bautista": "160113",
          "Torres Causana": "160110"
        },
        "Putumayo": {
          "Putumayo": "160801",
          "Rosa Panduro": "160802",
          "Teniente Manuel Clavero": "160803",
          "Yaguas": "160804"
        },
        "Requena": {
          "Alto Tapiche": "160502",
          "Capelo": "160503",
          "Emilio San Martin": "160504",
          "Jenaro Herrera": "160510",
          "Maquia": "160505",
          "Puinahua": "160506",
          "Requena": "160501",
          "Saquena": "160507",
          "Soplin": "160508",
          "Tapiche": "160509",
          "Yaquerana": "160511"
        },
        "Ucayali": {
          "Contamana": "160601",
          "Inahuaya": "160602",
          "Padre Marquez": "160603",
          "Pampa Hermosa": "160604",
          "Sarayacu": "160605",
          "Vargas Guerra": "160606"
        }
      },
      "Madre De Dios": {
        "Manu": {
          "Fitzcarrald": "170202",
          "Huepetuhe": "170204",
          "Madre De Dios": "170203",
          "Manu": "170201"
        },
        "Tahuamanu": {
          "Iberia": "170302",
          "Iñapari": "170301",
          "Tahuamanu": "170303"
        },
        "Tambopata": {
          "Inambari": "170102",
          "Laberinto": "170104",
          "Las Piedras": "170103",
          "Tambopata": "170101"
        }
      },
      "Moquegua": {
        "General Sánchez Cerro": {
          "Chojata": "180202",
          "Coalaque": "180203",
          "Ichuña": "180204",
          "La Capilla": "180205",
          "Lloque": "180206",
          "Matalaque": "180207",
          "Omate": "180201",
          "Puquina": "180208",
          "Quinistaquillas": "180209",
          "Ubinas": "180210",
          "Yunga": "180211"
        },
        "Ilo": {
          "El Algarrobal": "180302",
          "Ilo": "180301",
          "Pacocha": "180303"
        },
        "Mariscal Nieto": {
          "Carumas": "180102",
          "Cuchumbaya": "180103",
          "Moquegua": "180101",
          "Samegua": "180104",
          "San Cristobal": "180105",
          "Torata": "180106"
        }
      },
      "Pasco": {
        "Daniel Alcides Carrión": {
          "Chacayan": "190202",
          "Goyllarisquizga": "190203",
          "Paucar": "190204",
          "San Pedro De Pillao": "190205",
          "Santa Ana De Tusi": "190206",
          "Tapuc": "190207",
          "Vilcabamba": "190208",
          "Yanahuanca": "190201"
        },
        "Oxapampa": {
          "Chontabamba": "190302",
          "Constitución": "190308",
          "Huancabamba": "190303",
          "Oxapampa": "190301",
          "Palcazu": "190304",
          "Pozuzo": "190305",
          "Puerto Bermudez": "190306",
          "Villa Rica": "190307"
        },
        "Pasco": {
          "Chaupimarca": "190101",
          "Huachon": "190102",
          "Huariaca": "190103",
          "Huayllay": "190104",
          "Ninacaca": "190105",
          "Pallanchacra": "190106",
          "Paucartambo": "190107",
          "San Francisco De Asis De Yarusyacan": "190108",
          "Simon Bolivar": "190109",
          "Ticlacayan": "190110",
          "Tinyahuarco": "190111",
          "Vicco": "190112",
          "Yanacancha": "190113"
        }
      },
      "Piura": {
        "Ayabaca": {
          "Ayabaca": "200201",
          "Frias": "200202",
          "Jilili": "200203",
          "Lagunas": "200204",
          "Montero": "200205",
          "Pacaipampa": "200206",
          "Paimas": "200207",
          "Sapillica": "200208",
          "Sicchez": "200209",
          "Suyo": "200210"
        },
        "Huancabamba": {
          "Canchaque": "200302",
          "El Carmen De La Frontera": "200303",
          "Huancabamba": "200301",
          "Huarmaca": "200304",
          "Lalaquiz": "200305",
          "San Miguel De El Faique": "200306",
          "Sondor": "200307",
          "Sondorillo": "200308"
        },
        "Morropón": {
          "Buenos Aires": "200402",
          "Chalaco": "200403",
          "Chulucanas": "200401",
          "La Matanza": "200404",
          "Morropon": "200405",
          "Salitral": "200406",
          "San Juan De Bigote": "200407",
          "Santa Catalina De Mossa": "200408",
          "Santo Domingo": "200409",
          "Yamango": "200410"
        },
        "Paita": {
          "Amotape": "200502",
          "Arenal": "200503",
          "Colan": "200504",
          "La Huaca": "200505",
          "Paita": "200501",
          "Tamarindo": "200506",
          "Vichayal": "200507"
        },
        "Piura": {
          "Castilla": "200104",
          "Catacaos": "200105",
          "Cura Mori": "200107",
          "El Tallan": "200108",
          "La Arena": "200109",
          "La Union": "200110",
          "Las Lomas": "200111",
          "Piura": "200101",
          "Tambo Grande": "200114",
          "Veintiseis De Octubre": "200115"
        },
        "Sechura": {
          "Bellavista De La Union": "200802",
          "Bernal": "200803",
          "Cristo Nos Valga": "200804",
          "Rinconada Llicuar": "200806",
          "Sechura": "200801",
          "Vice": "200805"
        },
        "Sullana": {
          "Bellavista": "200602",
          "Ignacio Escudero": "200603",
          "Lancones": "200604",
          "Marcavelica": "200605",
          "Miguel Checa": "200606",
          "Querecotillo": "200607",
          "Salitral": "200608",
          "Sullana": "200601"
        },
        "Talara": {
          "El Alto": "200702",
          "La Brea": "200703",
          "Lobitos": "200704",
          "Los Organos": "200705",
          "Mancora": "200706",
          "Pariñas": "200701"
        }
      },
      "Puno": {
        "Azángaro": {
          "Achaya": "210202",
          "Arapa": "210203",
          "Asillo": "210204",
          "Azangaro": "210201",
          "Caminaca": "210205",
          "Chupa": "210206",
          "Jose Domingo Choquehuanca": "210207",
          "Muñani": "210208",
          "Potoni": "210209",
          "Saman": "210210",
          "San Anton": "210211",
          "San Jose": "210212",
          "San Juan De Salinas": "210213",
          "Santiago De Pupuja": "210214",
          "Tirapata": "210215"
        },
        "Carabaya": {
          "Ajoyani": "210302",
          "Ayapata": "210303",
          "Coasa": "210304",
          "Corani": "210305",
          "Crucero": "210306",
          "Ituata": "210307",
          "Macusani": "210301",
          "Ollachea": "210308",
          "San Gaban": "210309",
          "Usicayos": "210310"
        },
        "Chucuito": {
          "Desaguadero": "210402",
          "Huacullani": "210403",
          "Juli": "210401",
          "Kelluyo": "210404",
          "Pisacoma": "210405",
          "Pomata": "210406",
          "Zepita": "210407"
        },
        "El Collao": {
          "Capazo": "210502",
          "Conduriri": "210505",
          "Ilave": "210501",
          "Pilcuyo": "210503",
          "Santa Rosa": "210504"
        },
        "Huancané": {
          "Cojata": "210602",
          "Huancane": "210601",
          "Huatasani": "210603",
          "Inchupalla": "210604",
          "Pusi": "210605",
          "Rosaspata": "210606",
          "Taraco": "210607",
          "Vilque Chico": "210608"
        },
        "Lampa": {
          "Cabanilla": "210702",
          "Calapuja": "210703",
          "Lampa": "210701",
          "Nicasio": "210704",
          "Ocuviri": "210705",
          "Palca": "210706",
          "Paratia": "210707",
          "Pucara": "210708",
          "Santa Lucia": "210709",
          "Vilavila": "210710"
        },
        "Melgar": {
          "Antauta": "210802",
          "Ayaviri": "210801",
          "Cupi": "210803",
          "Llalli": "210804",
          "Macari": "210805",
          "Nuñoa": "210806",
          "Orurillo": "210807",
          "Santa Rosa": "210808",
          "Umachiri": "210809"
        },
        "Moho": {
          "Conima": "210902",
          "Huayrapata": "210903",
          "Moho": "210901",
          "Tilali": "210904"
        },
        "Puno": {
          "Acora": "210102",
          "Amantani": "210103",
          "Atuncolla": "210104",
          "Capachica": "210105",
          "Chucuito": "210106",
          "Coata": "210107",
          "Huata": "210108",
          "Mañazo": "210109",
          "Paucarcolla": "210110",
          "Pichacani": "210111",
          "Plateria": "210112",
          "Puno": "210101",
          "San Antonio": "210113",
          "Tiquillaca": "210114",
          "Vilque": "210115"
        },
        "San Antonio De Putina": {
          "Ananea": "211002",
          "Pedro Vilca Apaza": "211003",
          "Putina": "211001",
          "Quilcapuncu": "211004",
          "Sina": "211005"
        },
        "San Román": {
          "Cabana": "211102",
          "Cabanillas": "211103",
          "Caracoto": "211104",
          "Juliaca": "211101"
        },
        "Sandia": {
          "Alto Inambari": "211209",
          "Cuyocuyo": "211202",
          "Limbani": "211203",
          "Patambuco": "211204",
          "Phara": "211205",
          "Quiaca": "211206",
          "San Juan Del Oro": "211207",
          "San Pedro De Putina Punco": "211210",
          "Sandia": "211201",
          "Yanahuaya": "211208"
        },
        "Yunguyo": {
          "Anapia": "211302",
          "Copani": "211303",
          "Cuturapi": "211304",
          "Ollaraya": "211305",
          "Tinicachi": "211306",
          "Unicachi": "211307",
          "Yunguyo": "211301"
        }
      },
      "San Martín": {
        "Bellavista": {
          "Alto Biavo": "220202",
          "Bajo Biavo": "220203",
          "Bellavista": "220201",
          "Huallaga": "220204",
          "San Pablo": "220205",
          "San Rafael": "220206"
        },
        "El Dorado": {
          "Agua Blanca": "220302",
          "San Jose De Sisa": "220301",
          "San Martin": "220303",
          "Santa Rosa": "220304",
          "Shatoja": "220305"
        },
        "Huallaga": {
          "Alto Saposoa": "220402",
          "El Eslabon": "220403",
          "Piscoyacu": "220404",
          "Sacanche": "220405",
          "Saposoa": "220401",
          "Tingo De Saposoa": "220406"
        },
        "Lamas": {
          "Alonso De Alvarado": "220502",
          "Barranquita": "220503",
          "Caynarachi": "220504",
          "Cuñumbuqui": "220505",
          "Lamas": "220501",
          "Pinto Recodo": "220506",
          "Rumisapa": "220507",
          "San Roque De Cumbaza": "220508",
          "Shanao": "220509",
          "Tabalosos": "220510",
          "Zapatero": "220511"
        },
        "Mariscal Cáceres": {
          "Campanilla": "220602",
          "Huicungo": "220603",
          "Juanjui": "220601",
          "Pachiza": "220604",
          "Pajarillo": "220605"
        },
        "Moyobamba": {
          "Calzada": "220102",
          "Habana": "220103",
          "Jepelacio": "220104",
          "Moyobamba": "220101",
          "Soritor": "220105",
          "Yantalo": "220106"
        },
        "Picota": {
          "Buenos Aires": "220702",
          "Caspisapa": "220703",
          "Picota": "220701",
          "Pilluana": "220704",
          "Pucacaca": "220705",
          "San Cristobal": "220706",
          "San Hilarion": "220707",
          "Shamboyacu": "220708",
          "Tingo De Ponasa": "220709",
          "Tres Unidos": "220710"
        },
        "Rioja": {
          "Awajun": "220802",
          "Elias Soplin Vargas": "220803",
          "Nueva Cajamarca": "220804",
          "Pardo Miguel": "220805",
          "Posic": "220806",
          "Rioja": "220801",
          "San Fernando": "220807",
          "Yorongos": "220808",
          "Yuracyacu": "220809"
        },
        "San Martín": {
          "Alberto Leveau": "220902",
          "Cacatachi": "220903",
          "Chazuta": "220904",
          "Chipurana": "220905",
          "El Porvenir": "220906",
          "Huimbayoc": "220907",
          "Juan Guerra": "220908",
          "La Banda De Shilcayo": "220909",
          "Morales": "220910",
          "Papaplaya": "220911",
          "San Antonio": "220912",
          "Sauce": "220913",
          "Shapaja": "220914",
          "Tarapoto": "220901"
        },
        "Tocache": {
          "Nuevo Progreso": "221002",
          "Polvora": "221003",
          "Shunte": "221004",
          "Tocache": "221001",
          "Uchiza": "221005"
        }
      },
      "Tacna": {
        "Candarave": {
          "Cairani": "230202",
          "Camilaca": "230203",
          "Candarave": "230201",
          "Curibaya": "230204",
          "Huanuara": "230205",
          "Quilahuani": "230206"
        },
        "Jorge Basadre": {
          "Ilabaya": "230302",
          "Ite": "230303",
          "Locumba": "230301"
        },
        "Tacna": {
          "Alto De La Alianza": "230102",
          "Calana": "230103",
          "Ciudad Nueva": "230104",
          "Coronel Gregorio Albarracin Lanchipa": "230110",
          "Inclan": "230105",
          "Pachia": "230106",
          "Palca": "230107",
          "Pocollay": "230108",
          "Sama": "230109",
          "Tacna": "230101"
        },
        "Tarata": {
          "Estique": "230403",
          "Estique-pampa": "230404",
          "Heroes Albarracin": "230402",
          "Sitajara": "230405",
          "Susapaya": "230406",
          "Tarata": "230401",
          "Tarucachi": "230407",
          "Ticaco": "230408"
        }
      },
      "Tumbes": {
        "Contralmirante Villar": {
          "Canoas De Punta Sal": "240203",
          "Casitas": "240202",
          "Zorritos": "240201"
        },
        "Tumbes": {
          "Corrales": "240102",
          "La Cruz": "240103",
          "Pampas De Hospital": "240104",
          "San Jacinto": "240105",
          "San Juan De La Virgen": "240106",
          "Tumbes": "240101"
        },
        "Zarumilla": {
          "Aguas Verdes": "240302",
          "Matapalo": "240303",
          "Papayal": "240304",
          "Zarumilla": "240301"
        }
      },
      "Ucayali": {
        "Atalaya": {
          "Raymondi": "250201",
          "Sepahua": "250202",
          "Tahuania": "250203",
          "Yurua": "250204"
        },
        "Coronel Portillo": {
          "Calleria": "250101",
          "Campoverde": "250102",
          "Iparia": "250103",
          "Manantay": "250107",
          "Masisea": "250104",
          "Nueva Requena": "250106",
          "Yarinacocha": "250105"
        },
        "Padre Abad": {
          "Curimana": "250303",
          "Irazola": "250302",
          "Padre Abad": "250301"
        },
        "Purús": {
          "Purus": "250401"
        }
      },
      "Áncash": {
        "Aija": {
          "Aija": "020201",
          "Coris": "020202",
          "Huacllan": "020203",
          "La Merced": "020204",
          "Succha": "020205"
        },
        "Antonio Raymondi": {
          "Aczo": "020302",
          "Chaccho": "020303",
          "Chingas": "020304",
          "Llamellin": "020301",
          "Mirgas": "020305",
          "San Juan De Rontoy": "020306"
        },
        "Asunción": {
          "Acochaca": "020402",
          "Chacas": "020401"
        },
        "Bolognesi": {
          "Abelardo Pardo Lezameta": "020502",
          "Antonio Raymondi": "020503",
          "Aquia": "020504",
          "Cajacay": "020505",
          "Canis": "020506",
          "Chiquian": "020501",
          "Colquioc": "020507",
          "Huallanca": "020508",
          "Huasta": "020509",
          "Huayllacayan": "020510",
          "La Primavera": "020511",
          "Mangas": "020512",
          "Pacllon": "020513",
          "San Miguel De Corpanqui": "020514",
          "Ticllos": "020515"
        },
        "Carhuaz": {
          "Acopampa": "020602",
          "Amashca": "020603",
          "Anta": "020604",
          "Ataquero": "020605",
          "Carhuaz": "020601",
          "Marcara": "020606",
          "Pariahuanca": "020607",
          "San Miguel De Aco": "020608",
          "Shilla": "020609",
          "Tinco": "020610",
          "Yungar": "020611"
        },
        "Carlos Fermín Fitzcarrald": {
          "San Luis": "020701",
          "San Nicolas": "020702",
          "Yauya": "020703"
        },
        "Casma": {
          "Buena Vista Alta": "020802",
          "Casma": "020801",
          "Comandante Noel": "020803",
          "Yautan": "020804"
        },
        "Corongo": {
          "Aco": "020902",
          "Bambas": "020903",
          "Corongo": "020901",
          "Cusca": "020904",
          "La Pampa": "020905",
          "Yanac": "020906",
          "Yupan": "020907"
        },
        "Huaraz": {
          "Cochabamba": "020102",
          "Colcabamba": "020103",
          "Huanchay": "020104",
          "Huaraz": "020101",
          "Independencia": "020105",
          "Jangas": "020106",
          "La Libertad": "020107",
          "Olleros": "020108",
          "Pampas Grande": "020109",
          "Pariacoto": "020110",
          "Pira": "020111",
          "Tarica": "020112"
        },
        "Huari": {
          "Anra": "021002",
          "Cajay": "021003",
          "Chavin De Huantar": "021004",
          "Huacachi": "021005",
          "Huacchis": "021006",
          "Huachis": "021007",
          "Huantar": "021008",
          "Huari": "021001",
          "Masin": "021009",
          "Paucas": "021010",
          "Ponto": "021011",
          "Rahuapampa": "021012",
          "Rapayan": "021013",
          "San Marcos": "021014",
          "San Pedro De Chana": "021015",
          "Uco": "021016"
        },
        "Huarmey": {
          "Cochapeti": "021102",
          "Culebras": "021103",
          "Huarmey": "021101",
          "Huayan": "021104",
          "Malvas": "021105"
        },
        "Huaylas": {
          "Caraz": "021201",
          "Huallanca": "021202",
          "Huata": "021203",
          "Huaylas": "021204",
          "Mato": "021205",
          "Pamparomas": "021206",
          "Pueblo Libre": "021207",
          "Santa Cruz": "021208",
          "Santo Toribio": "021209",
          "Yuracmarca": "021210"
        },
        "Mariscal Luzuriaga": {
          "Casca": "021302",
          "Eleazar Guzman Barron": "021303",
          "Fidel Olivas Escudero": "021304",
          "Llama": "021305",
          "Llumpa": "021306",
          "Lucma": "021307",
          "Musga": "021308",
          "Piscobamba": "021301"
        },
        "Ocros": {
          "Acas": "021402",
          "Cajamarquilla": "021403",
          "Carhuapampa": "021404",
          "Cochas": "021405",
          "Congas": "021406",
          "Llipa": "021407",
          "Ocros": "021401",
          "San Cristobal De Rajan": "021408",
          "San Pedro": "021409",
          "Santiago De Chilcas": "021410"
        },
        "Pallasca": {
          "Bolognesi": "021502",
          "Cabana": "021501",
          "Conchucos": "021503",
          "Huacaschuque": "021504",
          "Huandoval": "021505",
          "Lacabamba": "021506",
          "Llapo": "021507",
          "Pallasca": "021508",
          "Pampas": "021509",
          "Santa Rosa": "021510",
          "Tauca": "021511"
        },
        "Pomabamba": {
          "Huayllan": "021602",
          "Parobamba": "021603",
          "Pomabamba": "021601",
          "Quinuabamba": "021604"
        },
        "Recuay": {
          "Catac": "021702",
          "Cotaparaco": "021703",
          "Huayllapampa": "021704",
          "Llacllin": "021705",
          "Marca": "021706",
          "Pampas Chico": "021707",
          "Pararin": "021708",
          "Recuay": "021701",
          "Tapacocha": "021709",
          "Ticapampa": "021710"
        },
        "Santa": {
          "Caceres Del Peru": "021802",
          "Chimbote": "021801",
          "Coishco": "021803",
          "Macate": "021804",
          "Moro": "021805",
          "Nepeña": "021806",
          "Nuevo Chimbote": "021809",
          "Samanco": "021807",
          "Santa": "021808"
        },
        "Sihuas": {
          "Acobamba": "021902",
          "Alfonso Ugarte": "021903",
          "Cashapampa": "021904",
          "Chingalpo": "021905",
          "Huayllabamba": "021906",
          "Quiches": "021907",
          "Ragash": "021908",
          "San Juan": "021909",
          "Sicsibamba": "021910",
          "Sihuas": "021901"
        },
        "Yungay": {
          "Cascapara": "022002",
          "Mancos": "022003",
          "Matacoto": "022004",
          "Quillo": "022005",
          "Ranrahirca": "022006",
          "Shupluy": "022007",
          "Yanama": "022008",
          "Yungay": "022001"
        }
      }
    };
  }

  getRegions():string[] {
    return Object.keys(this.citiesPeru);
  }

  getProvinces(region: string):string[] {
    // @ts-ignore
    return Object.keys(this.citiesPeru[region]);
  }

  getDistricts(region: string, province: string): string[] {
    // @ts-ignore
    return Object.keys(this.citiesPeru[region][province]);
  }

  validSelection(region: string, province: string, district: string):boolean {
    console.log(region, province, district);
    // @ts-ignore
    console.log(this.citiesPeru[region][province][district])
    // @ts-ignore
    return this.citiesPeru[region][province][district]!==undefined && this.citiesPeru[region][province][district]!==null;
  }
}
