/**
 * File:        scripts.js
 * Author:      Sachin Dangal | Student ID: 11873136
 * Subject:     ITC293 - Assessment 4
 * Description: External JavaScript for the portfolio website.
 *              Contains reusable utility functions used across pages.
 * Last edited: 7 June 2026
 */

/* ============================================================
   FUNCTION: openNewsletterForm
   Purpose:  Opens the newsletter signup form in a new browser
             tab/window when called from Javascriptpage.html.
             Using window.open() with '_blank' satisfies the
             requirement that the form opens in a new tab.
   ============================================================ */
function openNewsletterForm() {
    window.open('sd_A4_newsletter.html', '_blank');
}

/* ============================================================
   FUNCTION: validateNewsletterForm
   Purpose:  Validates the newsletter signup form on submit.
             Checks that First Name and Last Name are NOT empty.
             If either field is empty an alert is shown and the
             form submission is prevented (returns false).
             If both fields are filled the form may submit.
   Parameters: formElement - the HTML form DOM object
   Returns:  true  → allow submission
             false → block submission and alert the user
   ============================================================ */
function validateNewsletterForm(formElement) {

    /* Retrieve trimmed values from the name fields */
    var firstName = formElement.firstName.value.trim();
    var lastName  = formElement.lastName.value.trim();

    /* Validate First Name — must not be empty */
    if (firstName === '') {
        alert('Please enter your First Name. This field is required.');
        formElement.firstName.focus(); /* move focus to the empty field */
        return false;                 /* prevent form from submitting  */
    }

    /* Validate Last Name — must not be empty */
    if (lastName === '') {
        alert('Please enter your Last Name. This field is required.');
        formElement.lastName.focus();
        return false;
    }

    /* Both required fields are filled — allow submission */
    alert('Thank you, ' + firstName + '! Your newsletter signup has been submitted.');
    return true;
}

/* ============================================================
   FUNCTION: showWelcomeAlert
   Purpose:  Displays a welcome message when the newsletter
             signup page loads (called via window.onload in
             sd_A4_newsletter.html).
             The company name "NexaCore" is the fictitious
             company used in this portfolio assignment.
   ============================================================ */
function showWelcomeAlert() {
    alert('Welcome to the NexaCore Corporation - Newsletter Signup');
}

/* ============================================================
   FUNCTION: setActiveNav
   Purpose:  Automatically highlights the correct nav button
             as "active" based on the current page filename.
             This avoids hard-coding the active class on each
             individual page and demonstrates code reuse.
   ============================================================ */
function setActiveNav() {
    /* Get just the filename portion of the current URL */
    var currentPage = window.location.pathname.split('/').pop();

    /* Select all nav buttons */
    var navButtons = document.querySelectorAll('nav.navbar a.nav-btn');

    navButtons.forEach(function(btn) {
        /* Extract the href filename */
        var btnPage = btn.getAttribute('href').split('/').pop();

        /* Add or remove the active class based on match */
        if (btnPage === currentPage) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

/* ---- Run setActiveNav once the DOM is ready ---- */
document.addEventListener('DOMContentLoaded', setActiveNav);
