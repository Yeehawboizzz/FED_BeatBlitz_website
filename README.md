FED Assignment 2
Done by: Wang Po Yen Jason and Ong Yee Hen 
Class: IT02

Project Name: **The Echo Chamber (ft. BeatBlitz)**: 

# 01 Introduction
Welcome to The Echo Chamber! Step into a digital haven that transcends the ordinary one-stop destination for a symphony of musical experiences. We proudly present a unique online shop that goes beyond just albums and playlists, but to a world where music is not just heard, but felt.

At The Echo Chamber, our shelves are adorned with a curated collection of albums spanning genres and eras. Immerse yourself in the timeless classics, discover hidden gems, and explore the latest masterpieces that redefine musical boundaries. Whether you're a vinyl enthusiast, a CD connoisseur, or a digital maestro, our collection caters to all audiophiles.

But that's not all, we dive into the world of curated playlists, meticulously crafted to accompany every moment of your life. Seamlessly connect with Spotify and let the rhythm follow you wherever you go. 

For those who crave a challenge, we introduce BeatBlitz, a mini-game that puts your music knowledge to the test.
It offers an exhilarating experience where you can guess the elusive singer behind the tunes.

Immerse yourself in the excitement with our specially crafted game mode tailored to suit your musical expertise. Whether you're a casual listener or a seasoned music aficionado, our multiple-choice challenge awaits you. Opt for a round of fun as you test your knowledge of popular songs and artists in our engaging and entertaining game. With three difficulty levels—Beginner, Intermediate, and Expert—players can choose the challenge that best matches their skills. When the game ends, bask in the glory of your achievements with a trophy animation that highlights your points.

Are you ready to face the challenge and become the ultimate maestro of our musical realm? Play BeatBlitz now!


# 02 Design Process

User 1: Customers interested in Albums:

For User 1, our website provides a vast collection of albums spanning various genres, eras and artists. Upon entering the site, they can easily look up the NEW ARRIVALS that are featured in the main page, then navigate to the ALL ALBUMS Page where all the albums we sell will be featured. Our albums are categorised and users can use the filter panel to quickly locate the genre they are interested in. Then, the user can purchase the albums by simply pressing Add to Cart, which will then be displayed in the Shopping Cart for users to save it temporarily or buy it.

User 2: Customers interested in Playlists:

User 2, who loves curated playlists, will find our website to be a musical haven. They can explore a diverse range of playlists catering to different moods, occasions, and genres. User 2 can simply navigate to the Playlists Tab from the Nav Bar. To enhance their experience, after choosing a playlist, each playlist can be previewed from our embeded Spotify iFrame, which shows all the songs inside the playlist together with their details. Each sound can be directly played from the website itself through the Spotify iFrame. If users prefer to listen in the actual Spotify App, simply press on the Playlist Title or "Save to Spotify" to be auto directed.

User 3: People interested in playing BeatBlitz Game:

For User 3, the music game enthusiast, our website offers the exciting BeatBlitz Game. This interactive and engaging game challenges users to test their music knowledge. User can navigate to BeatBlitz through pressing on BeatBlitz on the Nav Bar from TEC Website. After which, user can select the difficulty that best match their music knowledge level and carry on with the MCQ game. A score will be reflected to tell the user how he faired.

**Link to Figma Wireframes**
https://www.figma.com/file/XPPq3BGMSMXN7iMKS2qmLv/FED-BeatBlitz?type=design&node-id=0%3A1&mode=design&t=wE7bTi4JLIX5hsVs-1


# 03 Features
Website Contains 3 Main Pages (Echo Chamber), 4 Game Pages (BeatBlitz):

**Page 1: Index Page (Home)**
- Nav Bar (Company Name & Logo, All Albums, Playlist, BeatBlitz)
- Main Image with Company Vision Box and Shop Now Button in the center
- 4 New Arrival Albums Featured (Shop Now Button leads to All Albums Page)
- The Echo Chamber origin picture and short description
- Sign up box prompting user for Email for NewsLetter  (Includes Validation)
- Footer (Contact Us: Email & Tel, Community: FB/IG, Sponsored By: Spotify, Company Logo, Shop Address)

**Page 2: All Albums Shop Page**
- Nav Bar (Company Name & Logo, All Albums, Playlist, BeatBlitz)
- Trending Albums features the best selling albums, display box is bigger (3 per row) and on top.
- All Albums features all albums sold in the shop, display box is smaller and more concised (4 per row) below the trending albums.

- Albums Display: For each album display box, when mouse hovers over, a small box will appear showing more details about the album (Number of Songs, Release Date, Length of Album, Labels). Each album box also has an "Add to Cart" Button, when pressed, the button changes to "Item Added to Cart" for 2s before it changes back. The shopping cart will update accordingly as well.

- Shopping Cart: The shopping cart is able to expand and close, when open, it displays the items added to cart in a table (Product Name, Quantity, Price). As more items are added, the quantity, price and total price will be updated in the cart. There is also a Buy Button, when pressed, a message saying Purchase Successful will be shown and cart clears. When you refresh the page, the cart contents will not be cleared until your press clear cart or buy. This is due to items being added to local storage when added to cart and deleted from local storage when press buy or clear cart.

- Control Panel: The control panel consist of options: 
1. NEW ARRIVAL
2. ALL TIME FAVOURITE
3. GOOD OLD TIMES

 When user selects any option, the website page will fast forward up or down to the section that displays the album of the selected choice.

- Sign up box prompting user for Email for NewsLetter  (Includes Validation)
- Footer (Contact Us: Email & Tel, Community: FB/IG, Sponsored By: Spotify, Company Logo, Shop Address)

**Page 3: Playlists Page**
- Nav Bar (Company Name & Logo, All Albums, Playlist, BeatBlitz)
- Main Featured Playlist: YEEHAWBOOMBASTIC + Description
- 4 Playlists: 60s-90s, Top Hits 2023, Classical Music, Cozy Jazz
- All 5 Playlist has a "Listen Now" button that links to an individualised Playlist Page

- Each individualised Playlist Page contains an Description + Spotify iframe of the playlist, allowing user to browse and play music or open Spotify in a new tab.

- Sign up box prompting user for Email for NewsLetter  (Includes Validation)
- Footer (Contact Us: Email & Tel, Community: FB/IG, Sponsored By: Spotify, Company Logo, Shop Address)

**Page 4: BeatBlitz Loading Screen Page**
- After pressing BeatBlitz from the Nav Bar, a black loading page with Lottie Animation of a spinning cube for 5 seconds before going into the actual game page.

**Page 5: BeatBlitz Home Page**
- Futuristic Background Image with BeatBlitz Title
- Start Game and Back to TEC Options
- Easter Egg - Rhythm Button when pressed, plays soundtrack.

**Page 5: BeatBlitz Game Difficulty Selection Page**
- Futuristic Background Image with BeatBlitz Title
- Rhythm Button when pressed, plays soundtrack.
- 3 Difficulty Modes: Beginner, Intermediate, Expert
- After selecting a difficulty, it will be highlighted and user can press PLAY to start the game.

**Page 6: BeatBlitz Game Page**
- Game page features a background image with MCQ question set that asks questions about music knowledge with 4 options for user to choose. After selecting an option, user will press "Check Answer" to check if it is correct and the next question will load. There are 10 questions per quiz, score /10 is displayed at the top while doing the quiz.

- After quiz ends, there will be a button to return to main menu.
- If player scored 7 or more out of 10, a special lottie animation will play to reward the user.


# 04 Technologies Used
- Languages: HTML, CSS and JavaScript
- Coding Platform: VS Code
- Others: Bootstrap, Lottie Animation


# 05 Testing
**Page 1: Index Page (Home)**
1. Go to Homepage.
2. Try scrolling and see the content
3. Try using the navigation bar at the top to redirect to other pages
3. Try pressing "Shop Now" at the middle of the page to redirect to All Albums page.
4. Try pressing "Shop Now" under the albums to redirect to All Albums page.

**Page 1,2,3: Sign Up Newsletter** 
1. Go to Homepage, All Albums or Playlists page.
2. Try submitting the form without input, there will a required message.
3. Try typing an invalid email without '@' or '.com' and submit, error message will appear.
4. Try typing all valid inputs and submit, success message will show.

**Page 2: All Albums Shop Page**
**Shopping Cart**
1. Go to All Albums page.
2. Open the shopping cart, try press 'Buy' without adding anything to cart, there will be a Purchase Failed Message.
3. Add something in the cart, press 'Buy', there will be a Purchase Success Message. Then, Cart will be cleared.
4. Add multiple of the same items, see Quantity and Price increase accordingly. 
5. Try adding something to the cart and refresh the page, notice cart items remains.

**Page 3: Playlists Page**
1. Go to Playlist page.
2. Press on any playlist on the "listen now", the website will redirect to the respective playlist.
3. On the playlist page, try playing any songs on the playlist.
4. Try adding the playlist to Spotify.

**Page 4: BeatBlitz Start Page**
1. Go to BeatBlitz page, a loading screen will appear before going into the main menu.
2. In the main menu page, try pressing "Back to TEC Records", it will redirect the website to The Echo Chamber.
3. Try pressing on the red coloured word "RHYTHM" to pause and play audio.
4. Try pressing "Leaderboard", it will redirect the website to the leaderboard page, and display the top 10 player that cleared Expert Mode, press "Back to Main Menu" to go back.
5. Try pressing "Start Game" and the website will redirect to the game difficulty page.

**Page 5: BeatBlitz Game Page**
1. On the Game Difficulty page, choose a difficulty and press Play.
2. There will be a total of 10 questions generated from the API, as well as four options, with one of them as the correct answer.
3. Try playing the quiz until the 10th question is finished.
4. If score is less than 7, it will display the score, if more than or equals to 7, a lottie animation of a trophy will play.

**Responsiveness (Mobile View)**
Website is responsive, when width hits below 767px, mobile view is activated.

**Page 1: Index Page (Home)**
The elements on the navigation bar will all be hidden under the three-lined button, the albums on New Arrival will change from row to grid to column based on the responsive frame. The About Us information will change from left right arrangement to up down arrangement. The information on the footer will change from row to column.

**Page 2: All Albums Shop Page**
The elements on the navigation bar will all be hidden under the three-lined button, the navigation bar that redirects to different album category will also have its element hidden under an icon button. The albums will change from row to grid to column based on the responsive frame. The information on the footer will change from row to column.

**Page 3: Playlists Page**
The main featured playlist information will change from left right arrangement to up down arrangement. The playlists will change from row to grid to column based on the responsive frame. The information on the footer will change from row to column.

**Page 4: BeatBlitz Start Page**
The main menu will shift to the center of the screen and the background will be centralised.

**Page 5: BeatBlitz Game Page**
The quiz format will remain similar, the background will be shorter in width.

**Page 6: BeatBlitz Leaderboard**
The leaderboard will remain similar, the background will be shorter in width.


# 06 Credits
**Content**:
Embedded Spotify Playlist/Album:
- Top Hits 2023: https://open.spotify.com/album/5j0o3XQ1YciVzm7MtcFmfG?si=_4wl0JScSkuHa8P12o18MQ
- Mozart Classic: https://open.spotify.com/playlist/72oczUf02H4RGoaUBC87JQ?si=1ff2be680bce4f89
- 60s 70s 80s 90s Classical Hits: https://open.spotify.com/album/4bj82rYTQLhl8xrWRySRdo?si=hYvzkFHkT26RRIq_4XitKg
- Soft Jazz: https://open.spotify.com/album/7oFOcwN0RinLbGF2X7mu6n?si=uCRvZj50SLSjFTGCzq8gsA

**Media**:
I took images from these links:

- DJ : https://pxhere.com/en/photo/1550901 
- Album1 : https://www.amazon.sg/After-Hours/dp/B084XT1P28 
- Album2 : https://medium.com/the-quaker-campus/does-1989-taylors-version-go-too-big-not-fast-enough-df68a15922e0 
- Album3 : https://pitchfork.com/reviews/albums/coldplay-music-of-the-spheres/ 
- Album4 : https://pitchfork.com/reviews/albums/justin-bieber-justice/ 
- Album5 : https://the-weeknd.fandom.com/wiki/Starboy_(album) 
- Album6 : https://www.pinterest.com/pin/683702787167546285/ 
- Album7 : https://www.amazon.sg/Divide-Deluxe-Version-Ed-Sheeran/dp/B01MY72DNS
- Album8 : https://pitchfork.com/reviews/albums/eminem-kamikaze/ 
- Album9 : https://www.amazon.sg/The-Eminem-Show/dp/B000066JCX
- Album10: https://www.amazon.sg/Four-CD-One-Direction/dp/B09YBXQCTG
- Album11: https://musicbrainz.org/release/d0cb6120-ad2e-4694-847f-664083bdc0e4
- Album12: https://www.windmill-records.co.uk/elvis-presley---elvis-now-sf-8266-2531-p.asp
- Category-Icon: https://www.vecteezy.com/vector-art/26529565-music-note-silhouette-icon-music-symbol-and-rhythm-vector
- AboutUs: https://www.pinterest.com/pin/766456430313128874/
- Sponsor: https://en.m.wikipedia.org/wiki/File:Spotify_icon.svg
- Beatblitz Background: https://rarible.com/rhythmandstealth/owned
- Beatblitz Audio: https://www.youtube.com/watch?v=UtXWe5oa3U8&ab_channel=WeAreMagonia
- Beatblitz Game Background: https://pngtree.com/freebackground/game-red-outer-space_2444899.html
- The Echo Chamber Logo: https://www.bing.com/images/create/a-logo-for-vinyl-music-shop2c-the-echo-chamber/1-65abf34d487248d694a0c2a34adb19bd?id=tnnGeKV6BK%2bKmdPKFwkxeQ%3d%3d&view=detailv2&idpp=genimg&FORM=GCRIDP&ajaxhist=0&ajaxserp=0

**Libraries Used**
- No library used

**External Sources**
- No external sources

**API Used**
- Open Trivia Database API
- RandomUser API

**Acknowledgements**:
I received inspiration from: 
1. https://songtrivia2.io/ 
2. https://theanalogvault.com/

- Help from ChatGPT for advanced JS functions. (Understood Code)
