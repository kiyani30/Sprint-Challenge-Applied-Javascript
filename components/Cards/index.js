// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

// const cardContainer = document.querySelector(".cards-container");

// axios.get("https://lambda-times-backend.herokuapp.com/articles")
//     .then(response => {
//        articles = response.data.articles;
//        articles.forEach(CardContent => {
//            const newArticle = CardMaker(CardContent);
//            cardContainer.appendChild(newArticle);    
//        });
//     })



 function CardMaker (object){
    
    const card = document.createElement('div');
    const headline = document.createElement('div');
    const author = document.createElement('div');
    const imgContainer = document.createElement('div');
    const image = document.createElement('img');
    const authorsName = document.createElement('span');

    card.classList.add("card");
    headline.classList.add("headline");
    author.classList.add("author");
    imgContainer.classList.add("img-container");
    image.classList.add("img");
    authorsName.classList.add("span");

    headline.textContent = object.headline;
    image.src = object.authorPhoto;
    authorsName.textContent = `By ${object.authorName}`;

    card.appendChild(headline);
    card.appendChild(author);
    card.appendChild(imgContainer);
    card.appendChild(image);
    card.appendChild(authorsName);

    headline.textContent = object.headline;
    image.src = object.authorPhoto;
    authorsName.textContent = `${object.authorName}`;

    return card;
}


 axios.get("https://lambda-times-backend.herokuapp.com/articles")
    .then(response => {
        const articlesArr = [];
        articlesByTopicObject = response.data.articles;
        const arrayOfObjectsValues = Object.values(articlesByTopicObject);

        arrayOfObjectsValues.forEach(response => {
        response.forEach(array => {
            articlesArr.push(array);
 });
 });

 articlesArr.forEach(object => {
    let newArticle = CardMaker(object);
    const cardsContainer = document.querySelector(".cards-container");
    cardsContainer.appendChild(newArticle);
    });
 })

    .catch(response => {
    console.log(response);
 });
