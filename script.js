$(document).ready(function() {
    // Dummy content for the "About" dropdown
    var aboutContent = `
        <a href="#" onclick="loadContent('aimsAndScope')">Aims and Scope</a>
        <a href="#" onclick="loadContent('editorialBoard')">Editorial Board</a>
        <a href="#">Journal Insights</a>
        <a href="#">Abstracting & Indexing</a>
        <a href="#">Announcements</a>
    `;

    // Dummy content for the "Articles & Issues" dropdown
    var articlesIssuesContent = `
        <a href="#">Latest Issue</a>
        <a href="#">All Issues</a>
        <a href="#">Articles in Press</a>
        <a href="#">Special Issues</a>
        <a href="#">Collections</a>
    `;

    // Dummy content for the "Publish" dropdown
    var publishContent = `
        <a href="#">Submit Your Article</a>
        <a href="#">Guide for Authors</a>
        <a href="#">Policies and Guidelines</a>
        <a href="#">Open Access Options</a>
    `;

    // Dynamically add content to the dropdowns
    $('#about-dropdown').html(aboutContent);
    $('#articles-dropdown').html(articlesIssuesContent);
    $('#publish-dropdown').html(publishContent);

    // Toggle visibility of the dropdowns on link click
    $('#about-link').click(function() {
        $('#about-dropdown').toggle();
    });

    $('#articles-link').click(function() {
        $('#articles-dropdown').toggle();
    });

    $('#publish-link').click(function() {
        $('#publish-dropdown').toggle();
    });

    // Hide the dropdowns when clicking outside of them
    $(document).on('click', function(event) {
        if (!$(event.target).closest('#about-link, #about-dropdown, #articles-link, #articles-dropdown, #publish-link, #publish-dropdown').length) {
            $('#about-dropdown, #articles-dropdown, #publish-dropdown').hide();
        }
    });
});

function loadContent(section) {
    var contentSection = $('#content-section .container');
    
    if (section === 'aimsAndScope') {
        contentSection.html(`
            <div class="grey-space">
                <h2>About the Journal: (Aims & Scope)</h2>
                <p>MITS Journal is an official refereed publication of Madhav Institute of Technology & Science, Gwalior, MP, India .</p>
                <p>This journal is going to be published, peer-reviewed research articles in the fields of physics, astronomy, mathematics, statistics, chemistry, biochemistry, earth sciences, life and environmental sciences on the basis of scientific originality and interdisciplinary interest.</p>
                <p>This journal is devoted primarily to research papers but short communications, reviews and book reviews are also included. The editorial board and associated editors, composed of prominent scientists from around the world, are representative of the disciplines covered by the journal.</p>
            </div>
        `);
    } else if (section === 'editorialBoard') {
        contentSection.html(`
            <div class="grey-space">
                <h2>EDITORIAL BOARD</h2>
                <div class="editor-info">
                    <div class="circle-icon" style="background-image: url(images/honorary-editor.jpg);"></div>
                    <div>
                        <p>Honorary Editor: Prof K.K. Aggrawal<br>Former Chairman, NBA & Founder VC, GGS Indraprastha University, India</p>
                    </div>
                </div>
                <div class="editor-info">
                    <div class="circle-icon" style="background-image: url(images\manjri.png);"></div>
                    <div>
                        <p>Editor-in-Chief: Dr. Manjaree Pandit<br>Madhav Institute of Technology & Science, Gwalior, India</p>
                    </div>
                </div>
                <h3>ASSOCIATE EDITORS:</h3>
                <div class="editor-info">
                    <div class="circle-icon" style="background-image: url(images/associate-editor1.jpg);"></div>
                    <div>
                        <p>Dr. Manoj Kumar Gaur<br>Madhav Institute of Technology & Science, Gwalior, India</p>
                    </div>
                </div>
                <div class="editor-info">
                    <div class="circle-icon" style="background-image: url(images/associate-editor2.jpg);"></div>
                    <div>
                        <p>Dr. Manish Dixit<br>Madhav Institute of Technology & Science, Gwalior, India</p>
                    </div>
                </div>
                <div class="editor-info">
                    <div class="circle-icon" style="background-image: url(images/associate-editor3.jpg);"></div>
                    <div>
                        <p>Dr. Sulochana Wadhwani<br>Madhav Institute of Technology & Science, Gwalior, India</p>
                    </div>
                </div>
                <div class="editor-info">
                    <div class="circle-icon" style="background-image: url(images/associate-editor4.jpg);"></div>
                    <div>
                        <p>Dr. Manoj Kumar Trivedi<br>Madhav Institute of Technology & Science, Gwalior, India</p>
                    </div>
                </div>
            </div>
        `);
    }
    // Add more conditions for other sections if needed
}