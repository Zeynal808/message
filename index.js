var istifadeciler=[
    {
        name:"pasha",
        password:"pasha808"
    },
    {
        name:'ibrahim',
        password:'ibrahim808'
    },
    {
        name:'zeynal',
        password:'zeynal808'
    }
]
const firebaseConfig = {
    apiKey: "AIzaSyBpzdr_sWdH72YdAlIU6FOCnkRFQcdBG3c",
    authDomain: "oyun-db932.firebaseapp.com",
    databaseURL: "https://oyun-db932-default-rtdb.firebaseio.com",
    projectId: "oyun-db932",
    storageBucket: "oyun-db932.appspot.com",
    messagingSenderId: "358267384743",
    appId: "1:358267384743:web:25976dc03f026c35e77c82"
};
firebase.initializeApp(firebaseConfig);
var db = firebase.database().ref();
var name;
$('#tesdiq').on('click',function()
{
   
   
    name=$('#name').val().toLowerCase();
    password=$('#password').val().toLowerCase();
    for(i=0;i<istifadeciler.length;i++)
    {
          if(name.trim()!==istifadeciler[i].name||password!==istifadeciler[i].password){
         
    }
    
    else
    {
       $('#yourName').html(`Sehifemize xos geldin ${name}`)
       $('.oyun').css("display","block");
       $('.login').css('display','none');
       $('.main').attr('class','main-2')
       
     
    }

    }
    
 
})

$('#send').on('click', function () {
    
   
    var text = $("#message").val();
    db.set({
        message: text,
        ad:name

    })
    $("#message").val('');

})
db.on('value', function (snapshot) {
    console.log('isledi')
    var x = snapshot.val(); 
    var p =$('<p></p>');
    
    p.html(`${x.ad}:${x.message}`);
    if (x === null||x===undefined) {
        
    }
    else{

    $('.show').append(p)
    console.log(x)
}
})
