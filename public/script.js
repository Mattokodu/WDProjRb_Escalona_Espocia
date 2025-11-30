// ============================================
// NAVIGATION BAR - Dynamically generated
// ============================================
function generateNavBar() {
    const navHTML = `
        <a class="brand" href="../index.html">My Site</a>
        <ul>
            <li><a href="../index.html">Home</a></li>
        </ul>
    `;
    document.getElementById("nav-placeholder").innerHTML = navHTML;
}

// ============================================
// FOOTER - Dynamically generated
// ============================================
function generateFooter() {
    const footerHTML = `
            <ul>
              <li><a href="../index.html">Home Page</a></li>
              <li><a href="topic2.html">Mathematical Modelling of Evolution</a></li>
              <li><a href="topic3.html">Topic 3</a></li>
              <li><a href="topic4.html">Topic 4</a></li>
            </ul>
    `; 
    
    document.getElementById("footer-placeholder").innerHTML = footerHTML;
}

// Generate nav and footer when page loads
generateNavBar();
generateFooter();