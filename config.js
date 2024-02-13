var config = {
    style: 'mapbox://styles/alanacg/clri954qp00dy01qocvvp6hjg',
    accessToken: 'pk.eyJ1IjoiYWxhbmFjZyIsImEiOiJjbHI2dTdmaTgyYmJkMmtteWg4aTFyYjd0In0.4egkQvHeJNw_VNBgcSEZmg',
    //accessToken: 'sk.eyJ1IjoiYWxhbmFjZyIsImEiOiJjbHJqa2UwODgwNGR4Mm1xYmZ3YTFoc3dzIn0.9n9rVslaaH6GkjkmR_5zOA',
    showMarkers: true,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: false,
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'Story on Dynamics between Rangeland and Cropland in Senegal',
    subtitle: 'Based on research for NASA Harvest/SERVIR',
    byline: 'By Alana Ginsburg',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'openerpage',
            alignment: 'left',
            hidden: false,
            title: 'Chapter 1: Where cropland meets rangeland',
            image: './images/ferloschwartzstein.png',
            description: 'Much of Senegal, a country in West Africa, is located within the Sahel. The Sahel is one of the worlds largest savanna/wooded grassland ecosystems, and it is currently undergoing pressure as land that has been traditionally used for livestock grazing has been getting converted to cropland. This change can be analyzed from satellite data, however the two land use types often have similar signals, and more research is needed to investigate and map these areas on local scales so the relationship is better understood. The picture above shows a region traditionally used as rangeland where a agricultural field has been recently developed (Wendle).',
            location: {
                center: [-14.28234, 14.86512],
                zoom: 7.14,
                pitch: 45.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'pageone',
            alignment: 'full',
            hidden: false,
            title: 'Chapter 2',
            image: './images/ndvigradient1720.gif',
            description: '<p> this is a graphic of the seasonal latitudinal greenup across Senegal due to the onset of the rainy season. </p> <iframe width="960" height="540" src="https://www.planet.com/compare/?id=trans-nzoia-kenya-VbOt1ISGg" />',
            location: {
                center: [-15.833,14.849],
                zoom: 10.00,
                pitch: 45.00,
                bearing: 0.00
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'pagetwo',
            alignment: 'left',
            hidden: false,
            title: 'Eastern City in Sahel Zone',
            image: './path/to/image/source.png',
            description: 'City in Ferlo region with lost cropland following poor rains at end of 2017 season.',
            location: {
                center: [-13.661031, 15.125161],
                zoom: 13.91,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                     layer: 'choropleth-fill',
                     opacity: 1,
                     duration: 5000
                     //zoom 10/02 to see most zoomed out layer
                 }
            ],
            onChapterExit: [
                 {
                     layer: 'choropleth-fill',
                     opacity: 0
                 }
            ]
        },
        {
            id: 'page3',
            alignment: 'fully',
            hidden: false,
            title: 'Third Title',
            image: './images/usgstappan1.png',
            description: 'Wooded savannah (rangeland) being converted to cropland in Southern Senegal circa. 2010s ',
            location: {
                center: [-15.852,14.668],
                zoom: 14.10,
                pitch: 45.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
            	{
            		layer: 'usgstappan1',
                	opacity: 1,
                	duration: 5000
                 }
        	],
        	onChapterExit: [
            	{
                	layer: 'usgstappan1',
                	opacity: 0
        		}
    		]
		}
	 ]
	};
