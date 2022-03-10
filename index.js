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
var defe=0;
$('#send').on('click', function () {
    defe++;
   
    var text = $("#message").val();
    db.set({
        message: text
    })

})
db.on('value', function (snapshot) {
    console.log('isledi')
    var x = snapshot.val(); 
    var p =$('<p></p>');
    p.html(x.message);
    if (x === null||x===undefined) {
        
    }
    else{

    $('.show').append(p)
    console.log(x)
}
})
$('.show').html('Mesajlariniz burada gorsenecek')