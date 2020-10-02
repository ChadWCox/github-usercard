/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
axios.get('https://api.github.com/users/ChadWCox')
  .then(res => {

  console.log('here is the response organized by axios', res)
  console.log('here is the RESPONSE BODY', res.data)  
  })
    .catch(stuff => {

      console.log(stuff)
    })

  console.log('We requested data with axios')

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

axios.get('https://api.github.com/users/ChadWCox')
  .then(res => {
    const object = res.data
    const domEntry = document.querySelector('.cards');
    const personCard = personCardMaker(object)

    domEntry.appendChild(personCard)

    })

    .catch(err => {
      console.log(err)
      
    })

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/





const followersArray = ["https://api.github.com/users/tetondan", "https://api.github.com/users/dustinmyers", "https://api.github.com/users/justsml", "https://api.github.com/users/luishrd", "https://api.github.com/users/bigknell"];


followersArray.forEach(values => {
  axios.get(values)
    .then(res => {
      const people = res.data
      const peopleCard = personCardMaker(people) 
      const domEntry = document.querySelector('.cards');
      domEntry.appendChild(peopleCard)  
    })
    .catch(err => {
  console.log(err)
})
})




/*
  STEP 3: Create a function that accepts a single objURL as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/
function personCardMaker(objURL) {

  const personCard = document.createElement('div')
    personCard.classList.add('card')

  const image = document.createElement('img')
    image.src = objURL.avatar_url

  const cardDiv = document.createElement('div')
    cardDiv.classList.add('card-info')  

  const title = document.createElement('h3')
    title.classList.add('name')
    title.textContent = objURL.name

  const username = document.createElement('p')
    username.classList.add('username')
    username.textContent = objURL.login

  const location = document.createElement('p')
    location.textContent = `Location: ${objURL.location}`

  const profile = document.createElement('p')
    profile.textContent = `Profile: `

  const url = document.createElement('a')
    url.href = objURL.html_url
    url.textContent = objURL.html_url

  const followers = document.createElement('p')
    followers.textContent = `Followers: ${objURL.followers}`

  const following = document.createElement('p')
    following.textContent = `Following: ${objURL.following}` 

  const bio = document.createElement('p')
    bio.textContent = objURL.bio

  personCard.appendChild(image)
  personCard.appendChild(cardDiv)
  cardDiv.appendChild(title)
  cardDiv.appendChild(username)
  cardDiv.appendChild(location)
  cardDiv.appendChild(profile)
  profile.append(url)
  cardDiv.appendChild(followers)
  cardDiv.appendChild(following)
  cardDiv.appendChild(bio)



  return personCard
}



/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
