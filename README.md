# Lab - React Todos <!-- omit in toc -->
- [Starter code](#starter-code)
- [Requirements](#requirements)
  - [Part 1 - Navbar](#part-1---navbar)
  - [Part 2 - Index](#part-2---index)
  - [Part 3 Show](#part-3-show)
  - [Part 4 New](#part-4-new)
  - [Part 5 Edit](#part-5-edit)
  - [Part 6 Destroy](#part-6-destroy)
- [Bonus](#bonus)

# Starter code
- Clone Repo
- Create a new branch `[your-initials]-solution`
- Run `$ npm install`
- Run `$ npm run serve`

# Requirements
Create a todos website!

> NOTE - You will need to refer to https://github.com/dented-academy/api-todos for the API Doc

## Part 1 - Navbar
GIF Here

- Create a `Navbar` that will be shown on all routes
  - A `Home Brand Link`  to `/`
  - A `Browse Link`  to `/todos`
  - A `New Todo Link`  to `/todos/new`

## Part 2 - Index
GIF Here

- Create a `Todos Index Page` under the route `/todos`
  - Send request to API and store data to context
  - Displays the list data that **redirects** to `/todos/:id`

## Part 3 Show
GIF Here

- Create a `Todos Show Page` under the route `/todos/:id`
  - Send request to API and store data to context
  - Displays the data


## Part 4 New
GIF Here

- Create a `Todos New Page` under the route `/todos/new`
  - Contains a `Formik Form` with `Yup Validation` (make this a component! so you can reuse it in `Part 5`)
    - Form has an `Add Button` to add `TodoItem`
    - Each `TodoItem` have a `Delete Button` to remove the `TodoItem`
    - Fields
      - `title` - required
      - `TodoItems[i][name]` - required
      - `TodoItems[i][checked]` - isBoolean
  - Upon successful submission, redirect to `/todos/:id`

## Part 5 Edit
GIF Here

- Create a `Todos Edit Page` under the route `/todos/:id/edit`
  - Send request to API and store data to context
  - Use the `SAME` form you created in `Part 4` and modify the form so that it will take in `initialValues` from the stored data
  - Upon successful submission, redirect to `/todos/:id`

## Part 6 Destroy
GIF here

- Add a `Delete Button` to `Todos Show Page`
  - Upon successful delete, redirect to `/todos`

# Bonus
GIF Here

- Add a `Dropdown` to each todos in `Todos Index Page`
  - has a `Show Option` to open a modal to show the contents of the `Todo`
  - has an `Edit Option` to open a modal with a form to edit the contents of `Todo`
  - has a `Delete Option` to delete the `Todo`
- Edit the `New Todo Link` in `Navbar` to open a modal with a form to create new `Todo`
