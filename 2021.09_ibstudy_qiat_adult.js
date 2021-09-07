define(['pipAPI', 'https://cdn.jsdelivr.net/gh/sdivietro/IBstudy/quiat9.js'], function(APIConstructor, iatExtension){
    var API = new APIConstructor();

	return iatExtension({
		category1 : {
			name : 'Black people', //Will appear in the data.
			title : {
				media : {word : 'Black people'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'2em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
    		    {image : 'raceadultfaces/bf14_nc.jpg'}, 
    		    {image : 'raceadultfaces/bf23_nc.jpg'}, 
    		    {image : 'raceadultfaces/bf56_nc.jpg'},
    		    {image : 'raceadultfaces/bm14_nc.jpg'},
    		    {image : 'raceadultfaces/bm23_nc.jpg'},
    		    {image : 'raceadultfaces/bm56_nc.jpg'}
			], 
			//Stimulus css (style)
			stimulusCss : {color:'#31940F','font-size':'1.8em'}
		},	
		category2 :	{
			name : 'White people', //Will appear in the data.
			title : {
				media : {word : 'White people'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'2em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
    		    {image : 'raceadultfaces/wf2_nc.jpg'}, 
    		    {image : 'raceadultfaces/wf3_nc.jpg'}, 
    		    {image : 'raceadultfaces/wf6_nc.jpg'}, 
    		    {image : 'raceadultfaces/wm1_nc.jpg'}, 
    		    {image : 'raceadultfaces/wm4_nc.jpg'}, 
    		    {image : 'raceadultfaces/wm6_nc.jpg'}
			], 
			//Stimulus css
			stimulusCss : {color:'#31940F','font-size':'1.8em'}
		},	

		base_url : {//Where are your images at?
			image : 'https://cdn.jsdelivr.net/gh/sdivietro/IBstudy/images/'
		} 
	});
});
