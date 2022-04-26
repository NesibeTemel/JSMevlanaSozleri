let mevlana=["Güzelliğin bir damlası olan Leyla için uykuyu haram etmek çok değilse, güzelliğin kaynağı Mevla için bir ömrü feda etmek az bile.","Ay doğmuyorsa yüzüne, güneş vurmuyorsa pencerene, kabahati ne güneşte ne de ay da ara! Gözlerindeki perdeyi arala!","Sus gönlüm! Bütün bu susmalarına karşılık her şeyin hayırlısının olacağına inanarak sus.","Toprak gibi sessiz olduğum an bil ki; şimşek gibi gökte gürlüyor feryadım.","Ne kadar bilirsen bil, söylediklerin karşındakilerin anlayabileceği kadardır.","Aynı dili konuşanlar değil, aynı duyguları paylaşanlar anlaşabilir.","Susmak, mana eksikliğinden değil. Belki mana derinliğindendir.","Sabır önceleri zehirdir. Huy edinirsen bal olur.","Gönül sevgiyi bulmuşsa kuru dal bile çiçek açar.","Bilmez misin ki cevap vermemek de cevaptır.","Cahil kimsenin yanında kitap gibi sessiz ol.","Kimde bir güzellik varsa bilsin ki ödünçtür.","Kalp denizdir, dil de kıyı. Deniz de ne varsa kıyıya o vurur.","Doğruysan zarar gördüm deme, bil ki iyiler mutlaka kazanır.","İki şey yıkar insanı; dostundan gelen ihanet, düşmanından gelen merhamet...","Dün zekiydim, dünyayı değiştirmek isterdim. Ama bugün akıllıyım, kendimi değiştiriyorum.","Her zorluğun sonunda doğan bir ışık vardır. Eğer elleriniz diken yaralarıyla kan revan içinde kaldıysa güle dokunmanıza çok az kalmış demektir.","Gönül almayı bilmeyene ömür emanet edilmez.","Aradığın seni arayandır.","Aradığın seni arayandır.","Yılan sokması seni sadece canından eder. Ama kötü dost hem candan, hem de imandan eder.","Dediler ki: gözden ırak olan gönülden de ırak olur. Dedim ki: gönle giren gözden ırak olsa ne olur.","Ey sahura kalkan, sahur yemeği yiyen kişi! Az konuş, hatta sus! Sus da orucu anlayanlar, oruçtan söz etsinler."];

const buton=document.getElementById("btnTikla");
const sonuc=document.getElementById("soz");

let sayi=Math.floor(Math.random() * 20);
sonuc.innerHTML=mevlana[sayi];

buton.addEventListener("click",()=>{

  sayi=Math.floor(Math.random() * 20);
  sonuc.innerHTML=mevlana[sayi];
  
})
let renkBtn=document.querySelector("#btnTikla");
renkBtn.onclick=()=>{
    let renk1=Math.round(Math.random()*255);
    let renk2=Math.round(Math.random()*255);
    let renk3=Math.round(Math.random()*255);

    document.body.style.background="rgb("+renk1+","+renk2+","+renk3+")";
}