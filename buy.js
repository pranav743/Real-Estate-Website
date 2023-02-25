// const Body = document.getElementById('body');
// Body.style.opacity="0";


// setTimeout(function(){
//    Body.style.opacity="1";

// }, 1000);


var element= document.querySelector('.display-cities');
const firebaseConfig = {
    apiKey: "AIzaSyAjn6BX6RDYNgcH57erYyZTw_iQ8NnyPIg",
    authDomain: "real-estate-e1ba2.firebaseapp.com",
    databaseURL: "https://real-estate-e1ba2-default-rtdb.firebaseio.com",
    projectId: "real-estate-e1ba2",
    storageBucket: "real-estate-e1ba2.appspot.com",
    messagingSenderId: "980117749137",
    appId: "1:980117749137:web:a2e8032f53e301ca0eae30",
    measurementId: "G-HNR1Y4SZHD"
  };

  firebase.initializeApp(firebaseConfig);
 
  var realestate = firebase.database();

  console.log(realestate);



//   realesate.ref("home/card4").set({
//     name:'Antilia',
//     location: 'Mumbai'
//   });


  realestate.ref("home").on("value", function(snapshot) {
    var data = snapshot.val();
    console.log(data);
  });


  let card_details=[
  { name: 'PremVishnu', location: 'Mumbai', source:'city 1.png' },
  { name: 'DSK', location: 'Pune', source:'city 2.png' },
  { name: 'PremChitralekha', location: 'Mumbai', source:'city 3.png' },
  { name: 'Leela Sky Villas', location: 'Delhi', source:'city 4.png' }

];

const path = './imgs/';
console.log(card_details);

  // firebase.database().ref("home").once("value", function (snapshot){
  //   snapshot.forEach(
  //       function(ChildSnapshot){
  //       let name = ChildSnapshot.val().name;
  //       let location = ChildSnapshot.val().location;
  //       console.log("Name : ", name, "Location : ", location);
  //       var newObject = {title: name, location: location};
  //       card_details.push(newObject);

  //       const card =`
  //   <div class="card" style='height:auto;'>
  //           <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
  //           <img src="https://mdbootstrap.com/img/new/standard/nature/111.webp" class="img-fluid" />
  //           <a href="#!">
  //               <div class="mask" style="background-color: rgba(251, 251, 251, 0.15)"></div>
  //           </a>
  //           </div>
  //           <div class="card-header">${name}</div>
  //           <div class="card-body">
  //           <h5 class="card-title">${location}</h5>
        
  //           </div>
  //   </div> 
  //   `;
  //   let fetch = element.innerHTML;
  //   element.innerHTML=fetch+card;
        
  //   })
  // });

  console.log(card_details);




displaycards();
function displaycards(){
for (let i=0; i<card_details.length;i++){

    var img_src = path+card_details[i].source;


    const card =`
    <div class="card" style='height:auto;'>
            <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
            <img src="${img_src}" class="img-fluid" />
            <a href="#!">
                <div class="mask" style="background-color: rgba(251, 251, 251, 0.15)"></div>
            </a>
            </div>
            <div class="card-header">${card_details[i].name}</div>
            <div class="card-body">
            <h5 class="card-title">${card_details[i].location}</h5>
        
            </div>
    </div> 
    `;
    let fetch = element.innerHTML;
    element.innerHTML=fetch+card;

}};


document.querySelector('.newsletter').addEventListener('submit', function(event) {
  event.preventDefault();
});

function confirm_subscription(){
  var subscriber_name=document.getElementsByClassName('subscription_name')[0].value;
  var subscriber_email=document.getElementsByClassName('subscription_email')[0].value;
  var modal = document.getElementsByClassName("subscribed_msg")[0];
    
    document.getElementsByClassName("newsletter_submit_btn")[0].disabled = true;
    modal.style.display = "block";
    setTimeout(function(){
      modal.style.display = "none";
      document.getElementsByClassName("newsletter_submit_btn")[0].disabled = false;
    }, 2000);

  // realesate.ref("subscribers/1").set({
  //     name:subscriber_name,
  //     email: subscriber_email
  // });
  console.log("Confirmed");

}
async function newslettersubmit(){
  var exist=false;
  var subscriber_email=document.getElementsByClassName('subscription_email')[0].value;

  
  
  firebase.database().ref("subscribers").once("value", function (snapshot){

    
    
    snapshot.forEach(
      
        function(ChildSnapshot){
        let name = ChildSnapshot.val().name;
        let email = ChildSnapshot.val().email;
        console.log("Name : ", name, "E-mail : ", email);
        
        if (subscriber_email==email){
          exist=true;
        }

        })

    if (exist){

      var modal = document.getElementsByClassName("subscribed_msg")[0];
        modal.innerHTML="You Are Already Subscribed !"
        modal.style.backgroundColor = "rgba(180, 180, 180, 0.5)";
    
        document.getElementsByClassName("newsletter_submit_btn")[0].disabled = true;
        modal.style.display = "block";
        setTimeout(function(){
          modal.style.display = "none";
          document.getElementsByClassName("newsletter_submit_btn")[0].disabled = false;
          modal.style.backgroundColor = "rgba(0, 180, 0, 0.5)";
          modal.innerHTML="Thanks For Subscribing !"
        }, 3000);

    }

    else{
      confirm_subscription();

    }

      });
     


};





