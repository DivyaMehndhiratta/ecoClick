<!--Authors: Divya-C0883916, Sarthak-C0883191, Ashita-C0885078, Akashdeep Gill-C0883925
  Project: EcoClicks: Revolutionising Sustainable Shopping Worldwide
  Date: 04-03-2023
  Description: This HTML page represents a webpage for "EcoClicks" company, which provides eco-friendly products in various categories. The page contains a header section with a navigation bar that links to different pages like "About us," "Products," "Blogs," and "Contact us." The main section contains a cover image and a title, followed by a set of cards, each of which displays an image and a title of a specific product category like "Personal Care," "Bags," "Clothing," "Containers and Packaging," "Cleaning Products," and "Best of Electronics." Finally, the page has a footer section with links to various social media pages, the website's about page, contact page, careers page, and help center page, as well as links to data policy, privacy policy, terms, and imprint pages. The page is responsive, as it includes a meta viewport tag, and uses the Roboto font from Google Fonts. The page's design is consistent with a common.css file and a home.css file, which are referenced in the head section.  
-->

  <!DOCTYPE html>
  <html lang="en">
    <head>
      <!-- This meta tag sets the character encoding of the document to UTF-8 -->
      <meta charset="utf-8">
      <!-- This meta tag sets the width of the viewport to the width of the device, and sets the initial scale to 1.0 -->
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <!-- This tag sets the title of the page -->
      <title>EcoClicks</title>
      <!-- This link tag links to the common CSS file -->
      <link rel="stylesheet" href="../css/common.css" type="text/css">
      <!-- This link tag links to the home CSS file -->
      <link rel="stylesheet" href="../css/home.css" type="text/css">
      <!-- This link tag links to the Roboto font on the Google Fonts website -->
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto">
    </head>
    <body>
      <!--Header section with navigation bar-->
      <header>
      <nav class="navbar">
         <a href="./home.php"><img loading="lazy"
            src="../img/2.png" class="logo"
            alt="Company's logo"></a>
         <ul class="navbar-list">
            <li><a class="navbar-list-items" href="../html/about.html">About us</a></li>
            <li><a class="navbar-list-items" href="../html/products.html">Products</a></li>
            <li><a class="navbar-list-items" href="../html/contact.html">Contact us</a></li>
            <li><a href="./account.php" class="navbar-list-items">My Profile</a></li>
         </ul>
      </nav>
  

      </header>
      <!--Main section-->
      <main>
        
    <?php
    session_start();
      // Check if 'username' session variable is set (user is logged in)
      if (isset($_SESSION['username'])) {
    ?>
    <h1>You are now logged in!</h1>
    <p>Welcome, <?php echo $_SESSION['username']; ?>.</p>
    <?php
      }
    ?>
        <section class="blogs">
          <img class="blog-bkg-cover" src="https://642b0c5fb9346d4bb3c59062--fascinating-sopapillas-34261b.netlify.app/earth.png" alt="earth with a leaf">
          <p class="blog-heading">
            EcoClicks: Revolutionising Sustainable Shopping Worldwide
          </h2>
        </section>
        <!-- This section contains a set of cards, each of which displays an image and a title -->
        <section class="blog-cards-section">
          <!-- The first card displays an image related to personal care products -->
          <div class="blog-cards">
            <a href="../html/products.html#personal-care"><img src="https://642b0c5fb9346d4bb3c59062--fascinating-sopapillas-34261b.netlify.app/personalcare.jpg" alt="Personal Care">
            <h3>Personal Care</h3></a>
          </div>
          <!-- The second card displays an image related to bags -->
          <div class="blog-cards">
            <a href="../html/products.html#bags"><img src="https://642b0c5fb9346d4bb3c59062--fascinating-sopapillas-34261b.netlify.app/bags.jpg" alt="Bag">
            <h3>Bags</h3></a>
          </div>
          <!-- The third card displays an image related to clothing -->
          <div class="blog-cards">
            <a href="../html/products.html#clothing"><img src="https://642b0c5fb9346d4bb3c59062--fascinating-sopapillas-34261b.netlify.app/clothing.jpg" alt="Clothing">
            <h3>Clothing</h3></a>
          </div>
          <!-- The fourth card displays an image related to containers and packaging -->
          <div class="blog-cards">
            <a href="../html/products.html#packaging"><img src="https://642b0c5fb9346d4bb3c59062--fascinating-sopapillas-34261b.netlify.app/packing.jpg" alt="Containers and Packaging">
            <h3>Containers and Packaging</h3></a>
          </div>
          <!-- The fifth card displays an image related to cleaning products -->
          <div class="blog-cards">
            <a href="../html/products.html#cleaning"><img src="https://642b0c5fb9346d4bb3c59062--fascinating-sopapillas-34261b.netlify.app/cleaning.jpg" alt="Cleaning">
            <h3>Cleaning Products</h3></a>
          </div>
          <!-- The sixth card displays an image related to electronics -->
          <div class="blog-cards">
            <a href="../html/products.html#electronics"><img src="https://642b0c5fb9346d4bb3c59062--fascinating-sopapillas-34261b.netlify.app/electronics.jpg" alt="Electronics">
            <h3>Best of Electronics</h3></a>
          </div>
        </section>
      </main>
      <!-- End of Main section -->
      <!-- This is the footer section that contains information about social media, the website, and legal policies -->
      <footer class="footer">
        <div class="footer-wrapper">
          <!-- This section contains links to various social media pages -->
          <div class="column social">
            <h3>Social</h3>
            <ul>
              <li><a href="#"><img src="https://642b0c5fb9346d4bb3c59062--fascinating-sopapillas-34261b.netlify.app/linkedin.svg" alt="LinkedIn"></a></li>
              <li><a href="#"><img src="https://642b0c5fb9346d4bb3c59062--fascinating-sopapillas-34261b.netlify.app/facebook.svg" alt="Facebook"></a></li>
              <li><a href="#"><img src="https://642b0c5fb9346d4bb3c59062--fascinating-sopapillas-34261b.netlify.app/wordpress.svg" alt="WordPress"></a></li>
              <li><a href="#"><img src="https://642b0c5fb9346d4bb3c59062--fascinating-sopapillas-34261b.netlify.app/envelope-regular.svg" alt="Email"></a></li>
            </ul>
          </div>
          <!-- This section contains links to the about page, contact page, careers page, and help center page -->
          <div class="column about">
            <h3>About</h3>
            <ul>
              <li><a href="../html/about.html">About us</a></li>
              <li><a href="../html/contact.html">Contact us</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Help Center</a></li>
            </ul>
          </div>
          <!-- This section contains links to data policy, privacy policy, terms, and imprint pages -->
          <div class="column legals">
            <h3>Legals</h3>
            <ul>
              <li><a href="#">Data Policy</a></li>
              <li><a href="#">Private Policy</a></li>
              <li><a href="#">Terms</a></li>
              <li><a href="#">Imprint</a></li>
            </ul>
          </div>
        </div>
        <!-- This section contains the copyright information -->
        <div class="copyright">
          <p>&#169; 2023 EcoClicks(Ashita Divya Akash   Sarthak)</p>
        </div>
      </footer>
      <!-- End of footer section -->
    </body>
  </html>