# WallapopTest

## What is this about

The purpose of this test is to know your ability to create a modern and functional single page application.

## How to use?

Run `npm install` followed by `ng serve` for a dev server. Navigate to `http://localhost:4200/`.

## App requirements

As a user I want to have access to an Item Manager where I can search items given the following criteria:

- Title
- Description
- Price
- Email

Each item will have these fields and a picture.

When I perform a search that has results, I’d like to view a list of the items showing all the information. The app must provide me the ability to sort the listed items by title, description, price or email.

Also, I want to be able to have a favourite items list, so I must be able to select the items from the list and save them on my favourite list. The list should be displayed on a modal containing all those items showing only the picture and the title. The modal should be opened by clicking on a button displayed in some place on the page where it’s easily accessible.
In the favourite modal, I want to be able to search by title and the possibility to remove the items from the favourite list without having to close the modal. I don’t want the favorite items to be preserved when I refresh the page.

The data that holds the items contains 20 items. The 20 items should NOT be displayed all at once. I’d like to see 5 items each time (with an initial load of 5 when the page is loaded), so some pagination method should be implemented to view the remaining items (clicking a button, with endless scroll...it’s up to you).
