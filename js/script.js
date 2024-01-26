// Code here!

// --1--Byt namn på första hoodien från Ash till Potato.
const artName = document.querySelector('.art-1>h3');
artName.innerText = 'Potato';

// --2--.Byt namn på Home till Start.
const homeLink = document.querySelectorAll('header nav a');
homeLink[0].innerText = 'Start';

// --3--.Byt namn på Contact till Mail Us.
homeLink[2].innerText = "Mail Us";

// --4--Byt ut informationen om Sinus Hoodie - Fire.
const artTwoInfo = document.querySelector('.art-2>p');
artTwoInfo.innerText = 'Here is the new information about the Sinus Hoodie - Fire with the help of javascript';

// --5--Byt bakgrundsfärg och text på en knapp.
const artTreBtn = document.querySelector('.art-3>button');
artTreBtn.style.backgroundColor = "rgb(184, 102, 130)";
artTreBtn.style.color = '#000000';
artTreBtn.innerText = 'Add';


// --6--Byt bakgrundsfärg på någon av produkterna.
const artTreFigure = document.querySelector('.art-3>figure');
artTreFigure.style.backgroundColor = 'green';

// --7-- Byt ut adressen på sidan.
const addressArticle = document.querySelectorAll('footer>section>article')[1];
addressArticle.innerHTML = `
    <h3>Where we are</h3>
    <p>Sinus shopping <br>
    Dalvägen 102 <br>
    104 64, Stockholm</p>`;

// --8-- Byt färg på samtliga 
const p = document.querySelectorAll('p');
p.forEach (e => {
    e.style.color = "blue";
})

// --9--. Ändra text på samtliga knappar till add to cart.

const btn = document.querySelectorAll('button');
btn.forEach(e => {
    e.innerText = 'Add to cart'
})

// --10-- Lägg till classen active på menyalternativet home.
homeLink[0].classList.add('active');

// --11--. Ta bort classen logo på logotypen.
const logoImg = document.querySelector('header img.logo');
logoImg.classList.remove('logo');

// --12--Lägg till classen active på menyalternativet home.
const Login = document.createElement('a');
Login.innerText = 'Login';
homeLink[2].insertAdjacentElement('beforeend', Login);

// --13--. Lägg till en ny produkt med följande info
let newProduct = `
    <article>
        <figure><img src="img/hoodie-Forrest.png" alt="hoodie"></figure>
        <h2>Sinus Hoodie</h2>
        <h3>Forrest</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, dolores.</p>
        <button>Add to cart</button>
    </article>
`;
const main = document.querySelector('main');
main.innerHTML += newProduct

// --14-- Lyssna efter ett klick på logotypen (.logo). När den registrerar ett klick skall du console.log:a "found you!";

logoImg.addEventListener('click', e => {
    e.preventDefault();
    console.log('found you!');
})

// --15-- Lyssna efter klick på samtliga produkter ( <article>). När den registrerar ett klick skall du console.log:a "Hi, Im article Fire / Ash / Water".

const articles = document.querySelectorAll('main article');
console.log(articles);
for (let i = 0; i < articles.length; i++){
    let article = articles[i];
    article.addEventListener('click', e => {
        let productName = article.querySelector('h3');
        console.log("Hi, Im article ${productName.innerText}");
    })
}