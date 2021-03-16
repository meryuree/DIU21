/*******************************************/
/*             PERSONA.JS                  */
/*     Datos para PERSONA TEMPLATE         */   
/*          [DIU] UX Toolkit v1.0 2019    */                        
/*          ver 1.1 26/Feb/2020            */
/*******************************************/
    
/****  README:       */
/****  Modifica los datos para las Personas      */
/****  v.1.1 Incluye nombre de tu grupo de prácticas (Grupo.ID), curso académico y enlace a github ***/
/****  Las imagenes para  'Photo'  están en carpeta ./photos **/
/****  Si se usan nuevas imágenes se deben añadir a esa carpeta **/
/****  Los valores de rating están entre 1..5 **/
/****  recursos de imágenes:  https://www.vectorstock.com/royalty-free-vectors/vectors-by_zdeneksasek ***/



angular.module("angular", [])
	.controller("controller", ["$scope", function($scope) { 
        $scope.Grupo_ID ="DIU1.ABCDEF";
        $scope.Curso ="2020/21";
        $scope.Github_ID ="https://github.com/mgea/UX-DIU-Toolkit";
        
		$scope.PersonaIndex = 0;
		$scope.Personas = [
			{		
                
                
                /*************************************/
                /**** PRIMERA PERSONA          *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
                
				Id: 0,
				Name: "Pablo",
				Photo: "pablo.jpg",
				Quote: "Invertir en viajar es invertir en uno mismo",
				Character: "Le gusta disfrutar del tiempo",
				Age: 45,
				Occupation: "Profesor de educación infantil",
				Family: "Casado desde hace 6 años y con un hijo de 5 años",
				Location: "Barcelona",
				Character: "Le gusta aprender de cualquier experiencia",
				PersonalityTraits: [
					{ Name: "Introvertido/reservado Vs  Extrov/activo ", Value: 7 },
					{ Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 3 },
					{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 8 },
					{ Name: "Flemático/apático  Vs   Colérico/visceral", Value: 7 }
				], 
				Goals: ["Poder disfrutar de un viaje que se acomode a las necesidades de su hijo", "Mudarse a una casa más grande y seguir formando una familia","Volver a jugar al futbol, su hobby desde pequeño"],
				Frustrations: ["Le gustaria poder leer más libros de investigación acerca de la discapacidad de su hijo","No ser tan exigente consigo mismo, en concreto en el trabajo"],
				Bio: "Es de Madrid y se mudó a Barcelona para estudiar magisterio. De pequeño estaba federado en fútbol pero desde que cambió de ciudad no juega más allá de cómo un hobby. Cuando acabó la carrera en Barcelona decidió opositar para ser profesor de educación infantil y ahí conoció a su mujer. Al poco tiempo decidieron tener un hijo, lo pasaron realmente mal cuando se enteraron de la discapacidad de este pero consiguieron salir adelante y adaptar su vida a ello, ahora están felices a pesar de todo",
				Tech: [
					{ Name: "TIC/Internet", Value: 3 },
					{ Name: "Movil", Value: 6 },
					{ Name: "RRSS", Value: 2 },
					{ Name: "Software", Value: 1 }

				], 
                Contextos: "Siempre le ha gustado mucho viajar pero ahora su situación ha cambiado debido a su hijo y su incapacidad, busca experiencias que puedan adaptarse a ello. Por lo general, se fia bastante de las recomendaciones de personas de confianza",  
				PreferredChannels: [
					{ Name: "Publicidad Tradicional", Value: 5 },
					{ Name: "Publicidad Tradicional", Value: 2 },
					{ Name: "Online & Social Media", Value: 3 },
					{ Name: "Recomendaciones & sugerencias", Value: 8 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 9 }
				]

			},
			{
                
                /*************************************/
                /**** SEGUNDA PERSONA          *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
                
				Id: 1,
				Name: "Ángeles Perez",
				Photo: "angeles.jpeg",
				Quote: "La vejez empieza cuando se pierde la curiosidad.",
				Age: 68,
				Occupation: "Ha sido pintora y lleva jubilada desde hace 2 años",
				Family: "Mujer viuda desde hace 5 años, tiene dos hijos de 45 y 47 años",
				Location: "Málaga",
				Character: "Es muy independiente y le encanta seguir pintando aunque no sea su trabajo ya",
				PersonalityTraits: [
					{ Name: "Introvertido/reservado Vs  Extrov/activo ", Value: 8 },
					{ Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 2 },
					{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 9 },
					{ Name: "Flemático/apático  Vs   Colérico/visceral", Value: 6 }
				], 
				Goals: ["Poder recorrer todas las ciudades que rechazó en su momento por el trabajo.", "Conocer a personas con las que comparta sus aficiones", "Seguir pintando por gusto y exponer sus pinturas en una galería de arte"],
				Frustrations: ["No sabe idiomas y esto le impide muchas veces viajar"],
				Bio: "Nació y creció en Málaga con sus padres y su hermana de 3 años menor, desde pequeña dibujaba muy bien y decidió estudiar bellas artes. Cuando acabó la carrera empezó a trabajar en un taller de pintura y al cabo de cuatro años ya estaba vendiendo sus propios cuadros. En la universidad conoció a quién fue su marido durante 42 años, se mudaron a una casa y tuvieron a sus dos hijos. Hace 5 años su marido murió de un infarto. Ella estuvo más de dos años sin viajar pero, poco a poco, gracias a sus hijos y a sus amigos consiguió volver a retomar la costumbre de viajar.",
				Tech: [
					{ Name: "TIC/Internet", Value: 3 },
					{ Name: "Mobile", Value: 4 },
					{ Name: "RRSS", Value: 1 },
					{ Name: "Software", Value: 2 }
					
				], 
                Contextos:   "Siempre viajaba mucho con su marido por todo el mundo y ella no quiere abandonar esa costumbre, aunque sea sola" ,
				PreferredChannels: [
					{ Name: "Publicidad Tradicional (Ads)", Value: 5 },
					{ Name: "Online & Social Media", Value: 1 },
					{ Name: "Recomendaciones & sugerencias", Value: 8 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 9 }
				]
			}
		];
		$scope.model = $scope.Personas[0];

	}])
