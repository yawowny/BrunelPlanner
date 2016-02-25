var db = openDatabase ("bookclass", "1.0", "Test", 90000);
		
//create tables for the database
function tablecreate () {
	db.transaction(function(tx){
		tx.executeSql('CREATE TABLE IF NOT EXISTS "Schools" ("id" INTEGER PRIMARY KEY  NOT NULL ,"School" TEXT,"Dept" TEXT,"Tel" TEXT,"Email1" TEXT,"Email2" TEXT DEFAULT (null) )');
		tx.executeSql('CREATE TABLE IF NOT EXISTS "Buildings" ("id" INTEGER PRIMARY KEY  AUTOINCREMENT  NOT NULL  UNIQUE , "Name" TEXT NOT NULL , "Code" TEXT, "Type" TEXT NOT NULL , "Zone" TEXT NOT NULL , "Long" DOUBLE NOT NULL , "Lat" DOUBLE NOT NULL )');
		tx.executeSql('CREATE TABLE IF NOT EXISTS "Services" ("id" INTEGER PRIMARY KEY  AUTOINCREMENT  NOT NULL  UNIQUE , "Name" TEXT NOT NULL , "Tel" TEXT, "Email" TEXT)');
		tx.executeSql('CREATE TABLE IF NOT EXISTS "Staff" ("id" INTEGER PRIMARY KEY  NOT NULL  UNIQUE, "Name" TEXT NOT NULL , "Position" TEXT, "School"  NOT NULL , "Department" TEXT, "Building" TEXT, "Room" INTEGER, "Telephone" TEXT, "Email" TEXT)');	
		tx.executeSql('CREATE TABLE IF NOT EXISTS "Classes" ("id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, "Day" VARCHAR(12) NOT NULL, "ModCode" VARCHAR(6) NOT NULL, "ModName" VARCHAR(100) NOT NULL, "Start" VARCHAR(5) NOT NULL, "Finish" VARCHAR(5) NOT NULL, "Type" VARCHAR(20) NOT NULL, "Week" VARCHAR(100) NOT NULL, "Room" VARCHAR(6) NOT NULL)');	
		tx.executeSql('CREATE TABLE IF NOT EXISTS "Reminder" ("id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, "Title" VARCHAR(20) NOT NULL, "Description" TEXT NOT NULL, "DueDate" DATE, "DueTime" TIME)');	
		
	}, function(){
	    //--- error handling
	}, function(){
		alert ("Success All");
	});
}

//Sets the Week number by returning variable currentweek
function currentweek () {
	
	var startdate=new Date();
	var today = new Date();
	startdate.setFullYear(2013,08,16);
	
	var weekdiff = parseInt((today - startdate)/(1000*60*60*24*7));
	var currentweek = "Currently Brunel week " + weekdiff;
	
	return currentweek; //used to output current week number for Brunel calendar
}

//Inserts predefined values for the Services TABLE
function insertservices () {
	
	db.transaction(function(tx){
		tx.executeSql('INSERT INTO Services VALUES(1,"Accomodation (Off Campus)","01895266187","housing-uxb@brunel.ac.uk")');
		tx.executeSql('INSERT INTO Services VALUES(2,"Accomodation Office","01895267900","accom-uxb@brunel.ac.uk ")');
		tx.executeSql('INSERT INTO Services VALUES(3,"ARC (Advice and Representation Centre)","01895269169 ",NULL)');
		tx.executeSql('INSERT INTO Services VALUES(4,"Arts Centre","01895266074","artscentre@brunel.ac.uk")');
		tx.executeSql('INSERT INTO Services VALUES(5,"Cash Office","01895265264",NULL)');
		tx.executeSql('INSERT INTO Services VALUES(6,"Computer Centre","01895265888","computing-support@brunel.ac.uk")');
		tx.executeSql('INSERT INTO Services VALUES(7,"Counselling Service","01895265070","brunel-counselling@brunel.ac.uk")');
		tx.executeSql('INSERT INTO Services VALUES(8,"Disability & Dyslexia","01895265213","disability@brunel.ac.uk")');
		tx.executeSql('INSERT INTO Services VALUES(9,"Distribution Centre",NULL,"distributioncentre@brunel.ac.uk")');
		tx.executeSql('INSERT INTO Services VALUES(10,"Library","01895266141","library@brunel.ac.uk")');
		tx.executeSql('INSERT INTO Services VALUES(11,"Medical Centre","01895234426","docman.e86030@nhs.net")');
		tx.executeSql('INSERT INTO Services VALUES(12,"Security Office","01895255786",NULL)');
		tx.executeSql('INSERT INTO Services VALUES(13,"Sports Centre & Park","01895265305","sports.centre@brunel.ac.uk")');
		tx.executeSql('INSERT INTO Services VALUES(14,"Student Centre","01895268268","student.centre@brunel.ac.uk")');
		tx.executeSql('INSERT INTO Services VALUES(15,"Student Union","01895269269","ubs.helpdesk@brunel.ac.uk")');
		
	}, function(){
	    //--- error handling
	}, function(){
		alert ("Success Insert services");
	});
	
}

//Inserts predefined values for the Staff TABLE
function insertstaff ()
{
	
	db.transaction(function(tx){
		tx.executeSql('INSERT INTO Staff VALUES(1,"Celia Brayfield, Ms","Academic","Arts","Creative Writing","Gaskell",130,"01895267290","celia.brayfield@brunel.ac.uk")');
		tx.executeSql('INSERT INTO Staff VALUES(2,"Bernardine Evaristo, Dr","Academic","Arts","Creative Writing","Gaskell",132,"01895267240","bernardine.evaristo@brunel.ac.uk")');
		tx.executeSql('INSERT INTO Staff VALUES(3,"Max Kinnings, Mr","Academic","Arts","Creative Writing","Gaskell",140,"01895267506","max.kinnings@brunel.ac.uk")');
		tx.executeSql('INSERT INTO Staff VALUES(4,"Frazer Lee, Mr","Academic","Arts","Creative Writing","Gaskell",131,"01895266578"," frazer.lee@brunel.ac.uk")');
		tx.executeSql('INSERT INTO Staff VALUES(5,"Sarah Penny, Ms","Academic","Arts","Creative Writing","Gaskell",131,"01895266581","sarah.penny@brunel.ac.uk")');
		tx.executeSql('INSERT INTO Staff VALUES(6,"Matt Thorne, Mr","Academic","Arts","Creative Writing","Gaskell",133,"01895265839","matt.thorne@brunel.ac.uk")');
		tx.executeSql('INSERT INTO Staff VALUES(7,"Benjamin Zephaniah, Professor","Academic","Arts","Creative Writing","Gaskell",137,NULL,"benjamin.zephaniah@brunel.ac.uk")');
		tx.executeSql('INSERT INTO Staff VALUES(8,"Jessica Cox, Dr","Academic","Arts","English","Gaskell",126,"01895266402","jessica.cox@brunel.ac.uk")');
		tx.executeSql('INSERT INTO Staff VALUES(9,"Elizabeth Evenden, Dr","Academic","Arts","English","Gaskell",128,"01895267506","elizabeth.evenden@brunel.ac.uk")');
		tx.executeSql('INSERT INTO Staff VALUES(10,"David Fulton, Mr","Academic","Arts","English","Gaskell",122,"01895266552","david.fulton@brunel.ac.uk")');
		tx.executeSql('INSERT INTO Staff VALUES(11,"Sean Gaston, Dr","Academic","Arts","English","Gaskell",127,"01895267365","sean.gaston@brunel.ac.uk")');
		tx.executeSql('INSERT INTO Staff VALUES(12,"Nick Hubble, Dr","Academic","Arts","English","Gaskell",123,"01895266245","nick.hubble@brunel.ac.uk")');
		tx.executeSql('INSERT INTO Staff VALUES(13,"Wendy Knepper, Dr","Academic","Arts","English","Gaskell",135,"01895267816","wendy.knepper@brunel.ac.uk")');
		tx.executeSql('INSERT INTO Staff VALUES(14,"James Knowles, Professor","Academic","Arts","English","Gaskell",141,"01895267332","james.knowles@brunel.ac.uk")');
		tx.executeSql('INSERT INTO Staff VALUES(15,"William (Bill) Leahy, Professor","Academic","Arts","English","Gaskell",146,"01895266553","William.leahy@brunel.ac.uk")');
		tx.executeSql('INSERT INTO Staff VALUES(16,"Claire Lynch, Dr","Academic","Arts","English","Gaskell",134,"01895266475","claire.lynch@brunel.ac.uk")');
		tx.executeSql('INSERT INTO Staff VALUES(17,"Anshuman Mondal, Dr","Academic","Arts","English","Gaskell",125,"01895267066","anshuman.mondal@brunel.ac.uk")');
		tx.executeSql('INSERT INTO Staff VALUES(18,"Jago Morrison, Dr","Academic","Arts","English","Gaskell",129,"01895265827","jago.morrison@brunel.ac.uk")');
		tx.executeSql('INSERT INTO Staff VALUES(19,"Will Self, Professor","Academic","Arts","English","Gaskell",139,NULL,"will.self@brunel.ac.uk")');
		tx.executeSql('INSERT INTO Staff VALUES(20,"William Spurlin, Professor","Academic","Arts","English","Gaskell",142,"01895266234","lliam.spurlin@brunel.ac.uk")');
		tx.executeSql('INSERT INTO Staff VALUES(21,"Philip Tew, Professor","Academic","Arts","English","Gaskell",138,"01895267257","philip.tew@brunel.ac.uk")');
		tx.executeSql('INSERT INTO Staff VALUES(22,"Sara Trevisan, Dr","Academic","Arts","English","Gaskell",128,"01895266099","sara.trevisan@brunel.ac.uk")');
		tx.executeSql('INSERT INTO Staff VALUES(23,"William Watkin, Professor","Academic","Arts","English","Gaskell",144,"01895266560","william.watkin@brunel.ac.uk")');
		
	}, function(){
	    //--- error handling
	}, function(){
		alert ("Success Insert staff");
	});
}

//Inserts predefined values for the schools TABLE
function insertschools () {
	
	db.transaction(function(tx){
		tx.executeSql('INSERT INTO Schools VALUES(1,"Arts",NULL,"01895267104","emma.perry@brunel.ac.uk","sue.ramus@brunel.ac.uk")');
		tx.executeSql('INSERT INTO Schools VALUES(2,"Business",NULL,"01895267007","bbsAPO@brunel.ac.uk",NULL)');
		tx.executeSql('INSERT INTO Schools VALUES(3,"Engineering & Design",NULL,"01895266750","Lesley.Powers@brunel.ac.uk",NULL)');
		tx.executeSql('INSERT INTO Schools VALUES(4,"Healt Sciences & Social Care",NULL,NULL,"biosciences@brunel.ac.uk","health-info@brunel.ac.uk")');
		tx.executeSql('INSERT INTO Schools VALUES(5,"ISCM","Information Systems & Computing","01895265975","cs-office@brunel.ac.uk",NULL)');
		tx.executeSql('INSERT INTO Schools VALUES(6,"ISCM","Mathematical Sciences","01895265745 ","maths@brunel.ac.uk",NULL)');
		tx.executeSql('INSERT INTO Schools VALUES(7,"Law",NULL,"01895274000",NULL,NULL)');
		tx.executeSql('INSERT INTO Schools VALUES(8,"Social Sciences",NULL,"01895265884","sss-ugadmin@brunel.ac.uk","sss-pgadmin@brunel.ac.uk")');
		tx.executeSql('INSERT INTO Schools VALUES(9,"Sport & Education",NULL,"01895267019","sse-ugcourses@brunel.ac.uk","sse-pgtcourses@brunel.ac.uk")');
	}, function(){
	    //--- error handling
	}, function(){
		alert ("Success Inserts Schools");
	});
	
}

//Inserts predefined values for the Buildings TABLE
function insertbuildings () {
	
	db.transaction(function(tx){
		tx.executeSql('INSERT INTO Buildings VALUES(1, "Academy",NULL,"Sports & Leisure","C","51.533421",", -0.474078")');
		tx.executeSql('INSERT INTO Buildings VALUES(2, "Accommodation Office",NULL,"Services","F","51.531822",", -0.472122")');
		tx.executeSql('INSERT INTO Buildings VALUES(3, "Antonin Artaud","AA","Academic","D","51.531051",", -0.474977")');
		tx.executeSql('INSERT INTO Buildings VALUES(4, "Arts Centre",NULL,"Services","B","51.533053",", -0.472182")');
		tx.executeSql('INSERT INTO Buildings VALUES(5, "Aspretto (Lecture Centre)",NULL,"Food & Drink","C","51.532834",", -0.472775")');
		tx.executeSql('INSERT INTO Buildings VALUES(6, "Assistive Technology Centre (Bannerman)",NULL,"Services","C","51.532796",", -0.473979")');
		tx.executeSql('INSERT INTO Buildings VALUES(7, "Bannerman Centre",NULL,"Services","C","51.532638",", -0.473909")');
		tx.executeSql('INSERT INTO Buildings VALUES(8, "Bar Zest / Beactive (Sports Centre)",NULL,"Food & Drink","E","51.533216",", -0.470566")');
		tx.executeSql('INSERT INTO Buildings VALUES(9, "Bishop Hall",NULL,"Accommodation","F", "51.532835",", -0.470086")');

		tx.executeSql('INSERT INTO Buildings VALUES(10, "Borough Road Hall",NULL,"Accommodation","E","51.534348",", -0.471887")');
		tx.executeSql('INSERT INTO Buildings VALUES(11, "Bragg",NULL,"Services","B","51.534578",", -0.473167")');
		tx.executeSql('INSERT INTO Buildings VALUES(12, "Brian Winstanley Hall (Isambard Complex)",NULL,"Accommodation","A","51.530751",", -0.479631")');
		tx.executeSql('INSERT INTO Buildings VALUES(13, "Brunel Hospitality",NULL,"Services","C","51.533345",", -0.474375")');
		tx.executeSql('INSERT INTO Buildings VALUES(14, "Brunel Science Park",NULL,"Services","G","51.531966",", -0.467882")');
		tx.executeSql('INSERT INTO Buildings VALUES(15, "Brunel University Press",NULL,"Services","B",51.533766,", -0.473978")');
		tx.executeSql('INSERT INTO Buildings VALUES(16, "Cash Machine/ ATM",NULL,"Services","C",51.533169,", -0.474213")');
		tx.executeSql('INSERT INTO Buildings VALUES(17, "Cash Office (Bannerman)",NULL,"Services","C",51.532819,", -0.474044")');
		tx.executeSql('INSERT INTO Buildings VALUES(18, "Central Hall (Isambard Complex)",NULL,"Accommodation","A",51.532083,", -0.480224")');
		tx.executeSql('INSERT INTO Buildings VALUES(19, "Chadwick","CH","Academic","A",51.532784,", -0.479129")');
	
		tx.executeSql('INSERT INTO buildings VALUES(20 ,"Chepstow Hall", NULL , "Accommodation" , "F" ,"51.531716", ", -0.471242")');
		tx.executeSql('INSERT INTO buildings VALUES(21 ,"Clifton Hall", NULL ,"Accommodation","F","51.532494", ", -0.470886")');
		tx.executeSql('INSERT INTO buildings VALUES(22 ,"Computer Centre",NULL,"Services","B", "51.533406",", -0.472047")');
		tx.executeSql('INSERT INTO buildings VALUES(23 ,"Concourse/ Dance Studio",NULL ,"Sports & Leisure" ,"A","51.533076", ", -0.479727")');
		tx.executeSql('INSERT INTO buildings VALUES(24 ,"Costa", NULL ,"Food & Drink" ,"C", "51.532923", ", -0.473651")');
		tx.executeSql('INSERT INTO buildings VALUES(25 ,"Costcutter", NULL ,"Food & Drink" ,"C", "51.533146", ", -0.473403")');
		tx.executeSql('INSERT INTO buildings VALUES(26 ,"Counselling Service", NULL ,"Services" ,"F", "51.532036", ", -0.472024")');
		tx.executeSql('INSERT INTO buildings VALUES(27 ,"David Neave Hall (Isambard Complex)", NULL ,"Accommodation" ,"A", "51.532111", ", -0.480591")');
		tx.executeSql('INSERT INTO buildings VALUES(28 ,"Disability and Dyslexia Service (Bannerman)", NULL ,"Services" ,"C", "51.532735", ", -0.474092")');
		tx.executeSql('INSERT INTO buildings VALUES(29 ,"Distribution Centre", NULL ,"Services" ,"D", "51.530914", ", -0.473716")');
		
		tx.executeSql('INSERT INTO Buildings VALUES(30 ,"East Hall (Isambard Complex)", NULL ,"Accommodation" ,"A", "51.532095", ", -0.479725")');
		tx.executeSql('INSERT INTO Buildings VALUES(31 ,"Eastern Gateway" ,"ESGY" ,"Academic" ,"E", "51.533302", ", -0.468821")');
		tx.executeSql('INSERT INTO Buildings VALUES(32 ,"Elliott Jaques" ,"ELTJ" ,"Academic" ,"G", "51.532154", ", -0.467493")');
		tx.executeSql('INSERT INTO Buildings VALUES(33 ,"Faraday Staircase 1", NULL ,"Accommodation" ,"F", "51.531476", ", -0.469423")');
		tx.executeSql('INSERT INTO Buildings VALUES(34 ,"Faraday Staircase 2", NULL ,"Accommodation" ,"F", "51.531149", ", -0.470485")');
		tx.executeSql('INSERT INTO Buildings VALUES(35 ,"Faraday Staircase 3", NULL ,"Accommodation" ,"F", "51.531686", ", -0.470531")');
		tx.executeSql('INSERT INTO Buildings VALUES(36 ,"Flemming Hall", NULL ,"Accommodation" ,"A", "51.533276", ", -0.478008")');
		tx.executeSql('INSERT INTO Buildings VALUES(37 ,"Galbraith Hall", NULL ,"Accommodation" ,"A", "51.533254", ", -0.479065")');
		tx.executeSql('INSERT INTO Buildings VALUES(38 ,"Garden View Restaurant (Hamilton Centre)", NULL ,"Food & Drink" ,"C", "51.533185", ", -0.473835")');
		tx.executeSql('INSERT INTO Buildings VALUES(39 ,"Gardiner", NULL ,"Services" ,"G", "51.531437", ", -0.467813")');
		
		tx.executeSql('INSERT INTO Buildings VALUES(40 ,"Gaskell" ,"GB" ,"Academic" ,"A", "51.532869", ", -0.477844")');
		tx.executeSql('INSERT INTO Buildings VALUES(41 ,"George Shipp Hall (Isambard Complex)", NULL ,"Accommodation" ,"A", "51.531491", ", -0.479722")');
		tx.executeSql('INSERT INTO Buildings VALUES(42 ,"Gordon Hall", NULL ,"Accommodation" ,"F", "51.532937", ", -0.472079")');
		tx.executeSql('INSERT INTO Buildings VALUES(43 ,"Halsbury" ,"HB" ,"Academic" ,"B", "51.533763", ", -0.472889")');
		tx.executeSql('INSERT INTO Buildings VALUES(44 ,"Hamilton Centre", NULL ,"Sports & Leisure" ,"C", "51.532775", ", -0.473638")');
		tx.executeSql('INSERT INTO Buildings VALUES(45 ,"Heinz Wolff" ,"HW" ,"Academic" ,"B", "51.533966", ", -0.474939")');
		tx.executeSql('INSERT INTO Buildings VALUES(46 ,"Housing Office", NULL ,"Academic" ,"F", "51.531843", ", -0.472111")');
		tx.executeSql('INSERT INTO Buildings VALUES(47 ,"Howell" ,"H" ,"Academic" ,"D", "51.532015", ", -0.473549")');
		tx.executeSql('INSERT INTO Buildings VALUES(48 ,"HSBC Bank", NULL ,"Services" ,"C", "51.533157", ", -0.474385")');
		tx.executeSql('INSERT INTO Buildings VALUES(49 ,"Indoor Athletics Centre" ,"IAC/IC" ,"Sports & Leisure" ,"E", "51.533002", ", -0.469456")');
		
		tx.executeSql('INSERT INTO Buildings VALUES(50 ,"Job Shop (Bannerman)", NULL ,"Services" ,"C", "51.532775", ", -0.473638")');
		tx.executeSql('INSERT INTO Buildings VALUES(51 ,"John Crank" ,"JC" ,"Academic" ,"B", "51.533232", ", -0.472262")');
		tx.executeSql('INSERT INTO Buildings VALUES(52 ,"Joseph Lowe", NULL ,"Services" ,"D", "51.530968", ", -0.474268")');
		tx.executeSql('INSERT INTO Buildings VALUES(53 ,"Kilmorey Hall", NULL ,"Accommodation" ,"F", "51.532462", ", -0.470043")');
		tx.executeSql('INSERT INTO Buildings VALUES(54 ,"Lacy Hall", NULL ,"Accommodation" ,"F", "51.532051", ", -0.469989")');
		tx.executeSql('INSERT INTO Buildings VALUES(55 ,"Lancaster Hall/ Suite", NULL ,"Accommodation" ,"E", "51.534505", ", -0.471422")');
		tx.executeSql('INSERT INTO Buildings VALUES(56 ,"Lecture Centre" ,"LC" ,"Academic" ,"C", "51.533611", ", -0.479875")');
		tx.executeSql('INSERT INTO Buildings VALUES(57 ,"Library (Bannerman)", NULL ,"Services" ,"C", "51.532631", ", -0.473909")');
		tx.executeSql('INSERT INTO Buildings VALUES(58 ,"Locos Bar", NULL ,"Food & Drink" ,"C", "51.533414", ", -0.473777")');
		tx.executeSql('INSERT INTO Buildings VALUES(59 ,"Maria Grey Hall", NULL ,"Accommodation" ,"E", "51.533954", ", -0.471967")');
		
		tx.executeSql('INSERT INTO Buildings VALUES(60 ,"Marie Jahoda" ,"MJ" ,"Academic" ,"A", "51.532977", ", -0.476632")');
		tx.executeSql('INSERT INTO Buildings VALUES(61 ,"Mary Seacole" ,"MS" ,"Academic" ,"E", "51.532823", ", -0.468853")');
		tx.executeSql('INSERT INTO Buildings VALUES(62 ,"Maurice Kogan Hall (Isambard Complex)", NULL ,"Accommodation" ,"A", "51.532528", ", -0.479813")');
		tx.executeSql('INSERT INTO Buildings VALUES(63 ,"Meadow Hall (Isambard Complex)", NULL ,"Accommodation" ,"A", "51.533538", ", -0.480374")');
		tx.executeSql('INSERT INTO Buildings VALUES(64 ,"Medical Centre", NULL ,"Services" ,"D", "51.531865", ", -0.472305")');
		tx.executeSql('INSERT INTO Buildings VALUES(65 ,"Meeting House", NULL ,"Services" ,"A", "51.532937", ", -0.477286")');
		tx.executeSql('INSERT INTO Buildings VALUES(66 ,"Metrobite (Eastern Gateway)", NULL ,"Food & Drink" ,"E", "51.533248", ", -0.468839")');
		tx.executeSql('INSERT INTO Buildings VALUES(67 ,"Michael Bevis Hall (Isambard Complex)", NULL ,"Accommodation" ,"A", "51.533131", ", -0.480629")');
		tx.executeSql('INSERT INTO Buildings VALUES(68 ,"Michael Sterling" ,"ML" ,"Academic" ,"C", "51.532907", ", -0.474812")');
		tx.executeSql('INSERT INTO Buildings VALUES(69 ,"Mill Hall", NULL ,"Accommodation" ,"A", "51.533229", ", -0.476476")');
		
		tx.executeSql('INSERT INTO Buildings VALUES(70 ,"North Hall (Isambard Complex)", NULL ,"Accommodation" ,"A", "51.533623", ", -0.479905")');
		tx.executeSql('INSERT INTO Buildings VALUES(71 ,"Pharmacy", NULL ,"Services" ,"C", "51.533173", ", -0.474165")');
		tx.executeSql('INSERT INTO Buildings VALUES(72 ,"Placement and Careers Centre (Bannerman)" ,"PLC" ,"Services" ,"C", "51.532713", ", -0.473686")');
		tx.executeSql('INSERT INTO Buildings VALUES(73 ,"Runnymede Hall (Isambard Complex)", NULL ,"Accommodation" ,"A", "51.531666", ", -0.480092")');
		tx.executeSql('INSERT INTO Buildings VALUES(74 ,"Russell" ,"RB" ,"Academic" ,"G", "51.531986", ", -0.468545")');
		tx.executeSql('INSERT INTO Buildings VALUES(75 ,"Saltash Hall", NULL ,"Accommodation" ,"F", "51.532407", ", -0.472046")');
		tx.executeSql('INSERT INTO Buildings VALUES(76 ,"Security Office", NULL ,"Services" ,"C", "51.533023", ", -0.475392")');
		tx.executeSql('INSERT INTO Buildings VALUES(77 ,"Shoreditch Hall (Isambard Complex)", NULL ,"Accommodation" ,"A", "51.531108", ", -0.479883")');
		tx.executeSql('INSERT INTO Buildings VALUES(78 ,"Site 5 Fields/ Pitches", NULL ,"Sports & Leisure" ,"Sports Park", "51.527161", ", -0.467756")');
		tx.executeSql('INSERT INTO Buildings VALUES(79 ,"Social Kitchen/ Canteen", NULL ,"Food & Drink" ,"C", "51.533481", ", -0.473691")');
		
		tx.executeSql('INSERT INTO Buildings VALUES(80 ,"South Hall (Isambard Complex)", NULL ,"Accommodation" ,"A", "51.530691", ", -0.480079")');
		tx.executeSql('INSERT INTO Buildings VALUES(81 ,"Southwark Hall", NULL ,"Accommodation" ,"E", "51.533798", ", -0.471536")');
		tx.executeSql('INSERT INTO Buildings VALUES(82 ,"Sports Centre", NULL ,"Sports & Leisure" ,"E", "51.533265", ", -0.469812")');
		tx.executeSql('INSERT INTO Buildings VALUES(83 ,"Sports Pavilion" ,"PAV" ,"Sports & Leisure" ,"Sports Park", "51.528365", ", -0.464645")');
		tx.executeSql('INSERT INTO Buildings VALUES(84 ,"St Johns" ,"ST" ,"Academic" ,"E", "51.534455", ", -0.469414")');
		tx.executeSql('INSERT INTO Buildings VALUES(85 ,"St Margarets Hall", NULL ,"Accommodation" ,"F", "51.531649", ", -0.469938")');
		tx.executeSql('INSERT INTO Buildings VALUES(86 ,"Stephen Bragg Hall (Isambard Complex)", NULL ,"Accommodation" ,"A", "51.532814", ", -0.480068")');
		tx.executeSql('INSERT INTO Buildings VALUES(87 ,"Stockwell", NULL ,"Accommodation" ,"E", "51.533533", ", -0.471515")');
		tx.executeSql('INSERT INTO Buildings VALUES(88 ,"Student Centre (Bannerman)", NULL ,"Services" ,"C", "51.532907", ", -0.473563")');
		tx.executeSql('INSERT INTO Buildings VALUES(89 ,"Student Union Reception", NULL ,"Services" ,"C", "51.533157", ", -0.473734")');
		
		tx.executeSql('INSERT INTO Buildings VALUES(90 ,"Subway", NULL ,"Food & Drink" ,"C", "51.533169", ", -0.474041")');
		tx.executeSql('INSERT INTO Buildings VALUES(91 ,"Syd Urry Hall (Isambard Complex)", NULL ,"Accommodation" ,"A", "51.530811", ", -0.480489")');
		tx.executeSql('INSERT INTO Buildings VALUES(92 ,"The Mezzs Bar/ The Hub", NULL ,"Food & Drink" ,"C", "51.533187", ", -0.473737")');
		tx.executeSql('INSERT INTO Buildings VALUES(93 ,"The Quad", NULL ,"Sports & Leisure" ,"C", "51.533375", ", -0.472836")');
		tx.executeSql('INSERT INTO Buildings VALUES(94 ,"Tower A" ,"TA" ,"Academic" ,"D", "51.532065", ", -0.473989")');
		tx.executeSql('INSERT INTO Buildings VALUES(95 ,"Tower B" ,"TB" ,"Academic" ,"D", "51.531391", ", -0.474166")');
		tx.executeSql('INSERT INTO Buildings VALUES(96 ,"Tower C" ,"TC" ,"Academic" ,"D", "51.531311", ", -0.473823")');
		tx.executeSql('INSERT INTO Buildings VALUES(97 ,"Tower D" ,"TD" ,"Academic" ,"D", "51.531378", ", -0.473018")');
		tx.executeSql('INSERT INTO Buildings VALUES(98 ,"Trevor Slater Hall (Isambard Complex)", NULL ,"Accommodation" ,"A", "51.531302", ", -0.480497")');
		tx.executeSql('INSERT INTO Buildings VALUES(99 ,"West Hall (Isambard Complex)", NULL ,"Accommodation" ,"A", "51.532575", ", -0.480645")');
		tx.executeSql('INSERT INTO Buildings VALUES(100 ,"West London Assessment Centre (Bannerman)", NULL ,"Services" ,"C", "51.532787", ", -0.474088")');
		
	}, function(){
	    //--- error handling
	}, function(){
		alert ("Success Insert buildings");
	});
}

$(document).on ("click", "#listmyttable", function (event)
{
  db.transaction (function (transaction) 
  {
    //var sql = "SELECT * FROM Classes GROUP BY Day, Start";
    var sql = "SELECT * FROM Classes ORDER BY Day, Start ASC";
    transaction.executeSql (sql, undefined, 
    function (transaction, result)
    {
     
      var html = '<h3> Swipe left or right to remove a class</h3>';
      
      if (result.rows.length)
      {
    	  //html += '<ul id="ClassList" data-role="listview" data-filter="true" data-input="#myFilter" data-autodividers="true" data-inset="true" >';
        for (var i = 0; i < result.rows.length; i++) 
        {
          var row = result.rows.item (i);
          var Day = row.Day;
		  var ModCode = row.ModCode;
		  var ModName = row.ModName;
		  var Start = row.Start;
		  var Finish = row.Finish;
		  var Type = row.Type;
		  var Week = row.Week;
		  var Room = row.Room;
		  var id = row.id;
		  html += "<li " + " id=" + id + " title=" + Day + ">";
          //html += 	"<a href=#>";
          html +=   	"<h2>" + Day + "&nbsp;" + "- " + ModCode + "</h2>";
          html += 		"<h3>" + ModName + "</h3>";
          html += 		"</p1> Type: " + Type + "&nbsp;" + "- " + Room + "</p1>";
          html += 		"<p1> Time: " + Start + "&nbsp;" + "- " + Finish + "</p1>";
          html += 		"<p1> Week(s): " + Week + "</p1>";
          //html += 		'<p style="border-style:solid; border-bottom-width:2px"> </p>';
          
          //html += 	"</a>";
          html += "</li>";
        } 
      }
      else
      {
        html += "<li> No Classes Added </li>";
      }
      
      //html += "</ul>";
      
      
      //$(document).on ("pagebeforeshow", "#mytimetable", function () -----deprecated----
      $(document).on ("pageshow", "#mytimetable", function (event)
      {
	        var $content = $("#mytimetable ul:jqmData(role=listview)");
	        $content.html (html);
	        var $ul = $content.find ("ul");
	        $ul.listview ();
	      
	        //Swipe event to delete a record from timetable 
	        //$("li").bind ("swipe", function (event)  ---deprecated---
	        $(document).on ("swipe", "#ClassList li", function (event)
            {
	        	var id = $(this).attr ("id");
	        	if (!confirm ("Remove this class?", "")) return;
	        	$(this).remove ();
	        	db.transaction (function (transaction) 
	        	{
	        		var sql = "DELETE FROM Classes WHERE id=?";
	        		transaction.executeSql (sql, [id], function ()
	        		{ 
	        			//alert ("Class Removed");
	        		}, error);
	        	});         
            }); 
      });
      
      $(":mobile-pagecontainer").pagecontainer( "change", $("#mytimetable"));
      
    }, error);
  });
});

//Insert class (row) into Timetable Table from form fields values
$(document).on ("click", "#insertTT", function (event)
{
  var Day = $("#Day").val ();
  var ModCode = $("#ModCode").val ();
  var ModName = $("#ModName").val ();
  var Start = $("#Start").val ();
  var Finish = $("#Finish").val ();
  var Type = $("#Type").val ();
  var Week = $("#Week").val ();
  var Room = $("#Room").val ();
  
  db.transaction (function (transaction) 
  {
    var sql = "INSERT INTO Classes (Day, ModCode, ModName, Start, Finish, Type, Week, Room) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
    transaction.executeSql (sql, [Day, ModCode, ModName, Start, Finish, Type, Week, Room], function ()
    { 
      alert ("Class added");
      $(":mobile-pagecontainer").pagecontainer( "change", $("#offline"), { reload: "true" });
      //TODO get it to refresh page
    }, error);
  });
  
  $("#ModCode").val ('');
  $("#ModName").val ('');
  $("#Week").val ('');
  $("#Room").val ('');
});



$(document).on ("click", "#listmyreminders", function (event)
{
  db.transaction (function (transaction) 
  {
    var sql = "SELECT * FROM Reminder ORDER BY DueDate ASC";
    transaction.executeSql (sql, undefined, 
    function (transaction, result)
    {
     
      var html = '<h3> Swipe left or right to remove a reminder</h3>';
      
      if (result.rows.length)
      {
        for (var i = 0; i < result.rows.length; i++) 
        {
          var row = result.rows.item (i);
          var Title = row.Title;
		  var Description = row.Description;
		  var DueDate = row.DueDate;
		  var DueTime = row.DueTime;
		  var id = row.id;
		  html += "<li " + " id=" + id + " title=" + DueDate + ">";
          //html += 	"<a href=#>";
          html +=   	"<h2>" + Title + "</h2>";
          if (DueDate==null)
			{
        	  html += 		"<p1> No Due Date </p1>";
			}
			else
			{
				html += 		"<p1> Due (yyyy-mm-dd): " + DueDate + "&nbsp;" + " at " + DueTime + "</p1>";
			}
          html += 		"<h3> Note: " + Description + "</h3>";
          html += 		"<span></span>";
          //html += 	"</a>";
          html += "</li>";
        } 
      }
      else
      {
        html += "<li> No Reminders Added </li>";
      }
      
      
      $(document).on ("pageshow", "#myreminders", function (event)
      {
	        var $content = $("#myreminders ul:jqmData(role=listview)");
	        $content.html (html);
	        var $ul = $content.find ("ul");
	        $ul.listview ();
	      
	        //Swipe event to delete a record from table
	        //$("li").bind ("swipe", function (event)  ---deprecated---
	        $(document).on ("swipe", "#ReminderList li", function (event)
            {
	        	var id = $(this).attr ("id");
	        	if (!confirm ("Remove this reminder?", "")) return;
	        	$(this).remove ();
	        	db.transaction (function (transaction) 
	        	{
	        		var sql = "DELETE FROM Reminder WHERE id=?";
	        		transaction.executeSql (sql, [id], function ()
	        		{ 
	        			//alert ("Remindder Removed");
	        		}, error);
	        	});         
            }); 
      });
      
      $(":mobile-pagecontainer").pagecontainer( "change", $("#myreminders"));
      
    }, error);
  });
});

//Insert class (row) into Table from form fields values
$(document).on ("click", "#insertReminder", function (event)
{
  var Title = $("#Title").val ();
  var Description = $("#Description").val ();
  var DueDate = $("#DueDate").val ();
  var DueTime = $("#DueTime").val ();
  
  db.transaction (function (transaction) 
  {
    var sql = "INSERT INTO Reminder (Title, Description, DueDate, DueTime) VALUES (?, ?, ?, ?)";
    transaction.executeSql (sql, [Title, Description, DueDate, DueTime], function ()
    { 
      alert ("Reminder added");
      $(":mobile-pagecontainer").pagecontainer( "change", $("#offline"), { reload: "true" });
      //TODO get it to refresh page
    }, error);
  });
  
  /*
  $("#Title").val ('');
  $("#Description").val ('');
  $("#DueDate").val ('');
  $("#DueTime").val ('');
  */
});

$(document).on ("click", "#listbuildings", function (event)
{
  db.transaction (function (transaction) 
  {
    var sql = "SELECT * FROM Buildings";
    transaction.executeSql (sql, undefined, 
    function (transaction, result)
    {
      //var html = '<ul data-role="listview" data-filter="true">';
      
      if (result.rows.length)
      {
    	  var html = '<p> Search for a building by name, zone [A], short code [(H)], Category and then click on it to locate it on the map </p>';
        for (var i = 0; i < result.rows.length; i++) 
        {
			var row = result.rows.item (i);
			var id = row.id;
			var Name = row.Name;
			var Code = row.Code;
			var Type = row.Type;
			var Zone = row.Zone;
		  
			html += "<li data-icon=true " + " id=" + id + ">";
			if (Code==null)
			{
				html += 		"<h2> " + Name + "</h2>";
			}
			else
			{
				html += 		"<h2> " + Name + " (" + Code + ") </h2>";
			}

			html += 		"<h3> Category: " + Type + " </h3>";
			html += 		"<h3> Brunel Zone: " + Zone + " </h3>";

			html += "</li>";
        }
      }
      else
      {
        html += "<li> No Buildings Database </li>";
      }
      
      //html += "</ul>";
      
      $(document).on ("pageshow", "#mybuildings", function (event)
      {
	        var $content = $("#mybuildings ul:jqmData(role=listview)");
	        $content.html (html);
	        var $ul = $content.find ("ul");
	        $ul.listview (); 
      });
      
      $(":mobile-pagecontainer").pagecontainer( "change", $("#mybuildings"));
    }, error);
  });
});


$(document).on ("click", "#listschools", function (event)
{
  db.transaction (function (transaction) 
  {
    //var sql = "SELECT * FROM Schools GROUP BY Day, Start";
    var sql = "SELECT * FROM Schools GROUP BY School";
    transaction.executeSql (sql, undefined, 
    function (transaction, result)
    {
      //var html = '<ul data-role="listview" data-filter="true">';
      
      if (result.rows.length)
      {
    	  var html = "<p> Contact details for Academic Schools</p>";
        for (var i = 0; i < result.rows.length; i++) 
        {
			var row = result.rows.item (i);
			var id = row.id;
			var School = row.School;
			var Dept = row.Dept;
			var Tel = row.Tel;
			var Email1 = row.Email1;
			var Email2 = row.Email2;
		  
			html += "<li data-icon=true " + " id=" + id + ">";
			html +=   	"<h2> School of " + School + "</h2>";
			if (Dept==null)
			{
				
			}
			else
			{
				html += 		"<h3> Dept: " + Dept + "</h3>";
			}
			
			if (Tel==null)
			{
				
			}
			else
			{
				html += 		"<h3> <a  href=tel:" + Tel + " rel=external> Tel: " + Tel + "</a> </h3>";
			}
			
			if ((Email1==null) && (Email2==null))
			{
				
			}
			else if(Email1==null)
			{
				html += 		"<h3> <a  href=mailto:" + Email2 + " rel=external> Email: " + Email2 + "</a> </h3>";
			}
			else if(Email2==null)
			{
				html += 		"<h3> <a  href=mailto:" + Email1 + " rel=external> Email: " + Email1 + "</a> </h3>";
			}
			else
			{
				html += 		"<h3> <a  href=mailto:" + Email1 + " rel=external> Email: " + Email1 + "</a> </h3>";
				html += 		"<h3> <a  href=mailto:" + Email2 + " rel=external> Email: " + Email2 + "</a> </h3>";
			}
          html += "</li>";
        }
      }
      else
      {
        html += "<li> No Schools Database </li>";
      }
      
      //html += "</ul>";
      
      
      //$(document).on ("pagebeforeshow", "#myschools", function () -----deprecated----
      $(document).on ("pageshow", "#myschools", function (event)
      {
	        var $content = $("#myschools ul:jqmData(role=listview)");
	        //var $content = 
	        $content.html (html);
	        var $ul = $content.find ("ul");
	        $ul.listview (); 
      });
      
      //$.mobile.changePage ($("#myschools"));
      $(":mobile-pagecontainer").pagecontainer( "change", $("#myschools"));
    }, error);
  });
});


$(document).on ("click", "#liststaff", function (event)
{
  db.transaction (function (transaction) 
  {
    var sql = "SELECT * FROM Staff";
    transaction.executeSql (sql, undefined, 
    function (transaction, result)
    {
      //var html = '<ul data-role="listview" data-filter="true" data-inset="true" data-autodividers="true">';
      
      if (result.rows.length)
      {
    	 var html = "<p> Search for staff by name, school, department </p>";
        for (var i = 0; i < result.rows.length; i++) 
        {
			var row = result.rows.item (i);
			var id = row.id;
			var Name = row.Name;
			var Position = row.Position;
			var School = row.School;
			var Department = row.Department;
			var Building = row.Building;
			var Room = row.Room;
			var Telephone = row.Telephone;
			var Email = row.Email;
		  
		  html += "<li data-icon=false " + " id=" + id + ">";
		  html += 		"<h2> " + Name + " (" + Position + ") </h2>";
		  if (Department==null)
          {
			  html +=   	"<h2> School of " + School + "</h2>";
          }
          else 
          {
        	  html +=   	"<h2> School of " + School +" (" + Department + ") </h2>";
          }
		  
		  if (Building==null)
          {
			  
          }
          else 
          {
        	  html +=   	"<h2> Location: " + Building + " " + Room + " </h2>";
          }
          
		  if (Telephone==null)
          {
        	  
          }
          else 
          {
        	  html += 		"<h3> <a  href=tel:" + Telephone + " rel=external> Tel: " + Telephone + "</a> </h3>";
          }
		  
		  if (Email==null)
          {
        	  
          }
          else 
          {
        	  html += 		"<h3> <a  href=mailto:" + Email + " rel=external> Tel: " + Email + "</a> </h3>";
          }
          html += "</li>";
        }
      }
      else
      {
        html += "<li> No Staff Database </li>";
      }
      
      //html += "</ul>";
      
     $(document).on ("pageshow", "#mystaff", function (event)
      {
	        var $content = $("#mystaff ul:jqmData(role=listview)");
	        $content.html (html);
	        var $ul = $content.find ("ul");
	        $ul.listview ();
      });
      
      //$.mobile.changePage ($("#myservices"));
      $(":mobile-pagecontainer").pagecontainer( "change", $("#mystaff"));
    }, error);
  });
});


$(document).on ("click", "#listservices", function (event)
{
  db.transaction (function (transaction) 
  {
    //var sql = "SELECT * FROM Services GROUP BY Day, Start";
    var sql = "SELECT * FROM Services";
    transaction.executeSql (sql, undefined, 
    function (transaction, result)
    {
      //var html = '<ul data-role="listview" data-filter="true" data-inset="true" data-autodividers="true">';
      
      if (result.rows.length)
      {
    	 var html = "<p> Contact details for services around campus </p>";
        for (var i = 0; i < result.rows.length; i++) 
        {
			var row = result.rows.item (i);
			var id = row.id;
			var Name = row.Name;
			var Tel = row.Tel;
			var Email = row.Email;
		  
		  html += "<li data-icon=false " + " id=" + id + ">";
          html +=   	"<h2>" + Name + "</h2>";
          
          if (Tel==null)
          {
        	  
          }
          else 
          {
        	  html += 		"<h3> <a  href=tel:" + Tel + " rel=external> Tel: " + Tel + "</a> </h3>";
          }
		  
          
          if (Email==null)
          {
        	  
          }
          else 
          {
        	  html += 		"<h3> <a  href=mailto:" + Email + " rel=external> Email: " + Email + "</a> </h3>";
          }
          html += "</li>";
        }
      }
      else
      {
        html += "<li> No Services Database </li>";
      }
      
      //html += "</ul>";
      
      
      //$(document).on ("pagebeforeshow", "#mytimetable", function () -----deprecated----
     $(document).on ("pageshow", "#myservices", function (event)
      {
	        var $content = $("#myservices ul:jqmData(role=listview)");
	        $content.html (html);
	        var $ul = $content.find ("ul");
	        $ul.listview ();
      });
      
      //$.mobile.changePage ($("#myservices"));
      $(":mobile-pagecontainer").pagecontainer( "change", $("#myservices"));
    }, error);
  });
});

function ok ()
{
}

function error (transaction, err) 
{
  alert ("DB error : " + err.message);
  return false;
}



// 							TESTING
		
		//  GEOLOCATION
		navigator.geolocation.getCurrentPosition (function (position)
		{
		  var lat = position.coords.latitude;
		  var lng = position.coords.longitude;
		  $("#lat").val (lat);
		  $("#lng").val (lng);
		});

		
		
		//		Click to make 
		$(document).on ("click", "#btn", function (event)
				{
				  var lat = $("#lat").val ();
				  var lng = $("#lng").val ();
				  var latlng = new google.maps.LatLng (lat, lng);
				  var options = { 
				    zoom : 4, 
				    center : latlng, 
				    mapTypeId : google.maps.MapTypeId.ROADMAP 
				  };
				  
				
				  var $content = $("#win2 div:jqmData(role=content)");
				  $content.height (screen.height);
				  var map = new google.maps.Map ($content[0], options);
				  $.mobile.changePage ($("#win2"));
				  
				  new google.maps.Marker ( 
				  { 
				    map : map, 
				    animation : google.maps.Animation.DROP,
				    position : latlng  
				  });  
			});
		
		
		$(document).on ("swipe", "#showbuilding li", function (event)
				{
						
					var myid = $(this).attr ("id");
					var mylong;
					var mylat;
					var mylonlat;
					alert ("Alert1 id is: " + myid);
		        	db.transaction (function (transaction) 
		        	{
		        		var sql = "SELECT * FROM Buildings";
		        		transaction.executeSql (sql, undefined, 
		        				function (transaction, result)
							    {
		        					
				        			if (result.rows.length)
				        		      {
				        		        for (var i = 0; i < result.rows.length; i++) 
				        		        {
				        					var row = result.rows.item (i);
				        					var id = row.id;
											var Name = row.Name;
											var Code = row.Code;
											var Type = row.Type;
											var Zone = row.Zone;
											var Long = row.Long;
											var Lat = row.Lat;
											
				        				  if(id==myid)
				        					  {
				        					  	mylong = Long;
				        					  	var ln = Lat.length;
				        					  	var subLat = Lat.substr(2,ln);
												mylat = subLat.trim();
												break;
				        					  }
				        		        }
				        		      }
				        			alert ("Success id is: " + id + " Name: " + Name + " Long: " + Long + " Lat: " + Lat + " myLat: " + mylat + " myLong: " + mylong);
				        			mylonlat = mylong + ", " + mylat;
				        			
				        			//klji
				        			alert ("Well mylonlat: " + mylonlat);
								  	
						        	var latlng = new google.maps.LatLng (mylat, mylong);
									  
									var options = { 
												    zoom : 4, 
												    center : latlng, 
												    mapTypeId : google.maps.MapTypeId.ROADMAP 
									};
										  
									var $content = $("#win2 div:jqmData(role=content)");
									$content.height (device.height);
									var map = new google.maps.Map ($content[0], options);
									//$.mobile.changePage ($("#win2"));
									$(":mobile-pagecontainer").pagecontainer( "change", $("#win2")); 
									new google.maps.Marker ( 
									{ 
									    map : map, 
									    animation : google.maps.Animation.DROP,
									    position : latlng  
									});
				        			
							    }, error);
		        		});     
					
		        	
				});


