import { Observable, of } from 'rxjs';
import { Persona } from '../models/persona.model';

export const PersonMockService =  {

  getById: (id: string): Observable<Persona> => {
    return of({
      apellido: "Grimes",
      edad: 82237,
      id: "1",
      nombre: "Guillermo"
   });
  },

  getList: ():Observable<Persona[]> => {
    return of(
      [
        {
            "nombre": "Guillermo",
            "apellido": "Grimes",
            "edad": 82237,
            "id": "1"
        },
        {
            "nombre": "Norris",
            "apellido": "Gorczany",
            "edad": 57877,
            "id": "2"
        },
        {
            "nombre": "Richmond",
            "apellido": "Rutherford",
            "edad": 26391,
            "id": "3"
        },
        {
            "nombre": "Valentina",
            "apellido": "Haag",
            "edad": 35473,
            "id": "4"
        },
        {
            "nombre": "Herminio",
            "apellido": "King",
            "edad": 1199,
            "id": "5"
        },
        {
            "nombre": "Paula",
            "apellido": "Rodriguez",
            "edad": 46455,
            "id": "6"
        },
        {
            "nombre": "Demond",
            "apellido": "Runolfsdottir",
            "edad": 98268,
            "id": "7"
        },
        {
            "nombre": "Stanley",
            "apellido": "Dibbert",
            "edad": 73415,
            "id": "8"
        },
        {
            "nombre": "Kole",
            "apellido": "Borer",
            "edad": 73478,
            "id": "9"
        },
        {
            "nombre": "Opal",
            "apellido": "Lynch",
            "edad": 30740,
            "id": "10"
        },
        {
            "nombre": "Einar",
            "apellido": "Kuvalis",
            "edad": 23082,
            "id": "11"
        },
        {
            "nombre": "Lukas",
            "apellido": "Wyman",
            "edad": 15160,
            "id": "12"
        },
        {
            "nombre": "Lottie",
            "apellido": "Larkin",
            "edad": 66498,
            "id": "13"
        },
        {
            "nombre": "Cordell",
            "apellido": "Barrows",
            "edad": 38730,
            "id": "14"
        },
        {
            "nombre": "Forrest",
            "apellido": "Cassin",
            "edad": 64175,
            "id": "15"
        },
        {
            "nombre": "Evelyn",
            "apellido": "Mosciski",
            "edad": 78952,
            "id": "16"
        },
        {
            "nombre": "Adrienne",
            "apellido": "Cronin",
            "edad": 23539,
            "id": "17"
        },
        {
            "nombre": "Curtis",
            "apellido": "Jacobs",
            "edad": 13419,
            "id": "18"
        },
        {
            "nombre": "Wanda",
            "apellido": "Torphy",
            "edad": 86804,
            "id": "19"
        },
        {
            "nombre": "Cheyanne",
            "apellido": "Ward",
            "edad": 18944,
            "id": "20"
        },
        {
            "nombre": "Marjorie",
            "apellido": "Feil",
            "edad": 70010,
            "id": "21"
        },
        {
            "nombre": "Gunner",
            "apellido": "Wuckert",
            "edad": 7994,
            "id": "22"
        },
        {
            "nombre": "Katrine",
            "apellido": "Gislason",
            "edad": 7459,
            "id": "23"
        },
        {
            "nombre": "Hortense",
            "apellido": "Will",
            "edad": 38123,
            "id": "24"
        },
        {
            "nombre": "Nigel",
            "apellido": "Keebler",
            "edad": 45149,
            "id": "25"
        },
        {
            "nombre": "Aubree",
            "apellido": "Balistreri",
            "edad": 83017,
            "id": "26"
        },
        {
            "nombre": "Toney",
            "apellido": "Kling",
            "edad": 23758,
            "id": "27"
        },
        {
            "nombre": "Iva",
            "apellido": "Muller",
            "edad": 33772,
            "id": "28"
        },
        {
            "nombre": "Flo",
            "apellido": "Reilly",
            "edad": 62451,
            "id": "29"
        },
        {
            "nombre": "Sonia",
            "apellido": "Borer",
            "edad": 65629,
            "id": "30"
        },
        {
            "nombre": "Cecilia",
            "apellido": "Cremin",
            "edad": 5778,
            "id": "31"
        },
        {
            "nombre": "Jamal",
            "apellido": "Beer",
            "edad": 7,
            "id": "32"
        },
        {
            "nombre": "Otho",
            "apellido": "O'Kon",
            "edad": 79402,
            "id": "33"
        },
        {
            "nombre": "Laila",
            "apellido": "Borer",
            "edad": 89283,
            "id": "34"
        },
        {
            "nombre": "Faustino",
            "apellido": "Crona",
            "edad": 80358,
            "id": "35"
        },
        {
            "nombre": "Kaley",
            "apellido": "Harvey",
            "edad": 61847,
            "id": "36"
        },
        {
            "nombre": "Norwood",
            "apellido": "Langosh",
            "edad": 68578,
            "id": "37"
        },
        {
            "nombre": "Orlo",
            "apellido": "Reinger",
            "edad": 85844,
            "id": "38"
        },
        {
            "nombre": "Eleonore",
            "apellido": "Ruecker",
            "edad": 85061,
            "id": "39"
        },
        {
            "nombre": "Amelie",
            "apellido": "Kassulke",
            "edad": 26020,
            "id": "40"
        },
        {
            "nombre": "Wendy",
            "apellido": "Abernathy",
            "edad": 19350,
            "id": "41"
        },
        {
            "nombre": "Demetrius",
            "apellido": "Lueilwitz",
            "edad": 88362,
            "id": "42"
        },
        {
            "nombre": "Hannah",
            "apellido": "Bins",
            "edad": 35426,
            "id": "43"
        },
        {
            "nombre": "Addie",
            "apellido": "Considine",
            "edad": 3561,
            "id": "44"
        },
        {
            "nombre": "Johnathon",
            "apellido": "Hand",
            "edad": 84895,
            "id": "45"
        },
        {
            "nombre": "Patrick",
            "apellido": "Aufderhar",
            "edad": 36810,
            "id": "46"
        },
        {
            "nombre": "Marcelle",
            "apellido": "Crist",
            "edad": 56968,
            "id": "47"
        },
        {
            "nombre": "Margarete",
            "apellido": "Ruecker",
            "edad": 4755,
            "id": "48"
        },
        {
            "nombre": "Giovani",
            "apellido": "Harber",
            "edad": 71844,
            "id": "49"
        },
        {
            "nombre": "Max",
            "apellido": "Hudson",
            "edad": 36391,
            "id": "50"
        },
        {
            "nombre": "Zoe",
            "apellido": "Spencer",
            "edad": 79190,
            "id": "51"
        },
        {
            "nombre": "Bryon",
            "apellido": "Hammes",
            "edad": 74820,
            "id": "52"
        }
      ]
    );
  }

}
