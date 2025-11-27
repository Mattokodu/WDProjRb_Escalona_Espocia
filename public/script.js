// ============================================
// NAVIGATION BAR - Dynamically generated
// ============================================
function generateNavBar() {
    const navHTML = `
        <a class="brand" href="index.html">My Site</a>
        <ul class="nav-list">
            <li><a href="index.html">Home</a></li>
            <li><a href="about.html">About</a></li>
            <li><a href="projects.html">Projects</a></li>
            <li><a href="contact.html">Contact</a></li>
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
                <li><a href="public\\topic1.html">Underlying Themes of Biology</a></li>
                <li><a href="public\\topic2.html">Mathematical Modelling of Evolution</a></li>
                <li><a href="public\\topic3.html">Topic 3</a></li>
                <li><a href="public\\topic4.html">Topic 4</a></li>
            </ul>
    `; 
    document.getElementById("footer-placeholder").innerHTML = footerHTML;
}

// Generate nav and footer when page loads
generateNavBar();
generateFooter();