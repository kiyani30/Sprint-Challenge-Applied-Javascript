// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>


// axios.get('https://lambda-times-backend.herokuapp.com/topics')
//     .then(response => {
//     response.data.topics.forEach(topic => {
//         tabs.appendChild(tabMaker(topic));
//         const tabs = document.querySelector('.topic');

//     })
// })

// function tabMaker(tab){
//     const tabdiv = document.createElement('div');
//     tabdiv.classList.add('tab');
//     tabdiv.textcontent = tab;

//     return tabdiv;
// }

const topicsContainer = document.querySelector(".topics");

axios.get("https://lambda-times-backend.herokuapp.com/topics")
    .then(response => {
        topics = response.data.topics;
        topics.forEach(topic => {
        const newTab = tabMaker(topic);
        topicsContainer.appendChild(newTab);
        });
 })
    .catch(response => {
    console.log("Error message for 'Tabs' API call");
    });
    
 function tabMaker(topic) {
 const tabs = document.createElement('div');
 tabs.classList.add('tab');
 tabs.textContent = topic;

 return tabs;
 }