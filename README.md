When user signs up they create an organization and become admin of that orgnization.
Other users can be invited by email. They receive an email and are automatically added to an organization.
Each organization has sticky messages and projects.
Projects have sticky messages and issues.
Issues have comments

TODO:

WHERE I LEFT OFF:
sticky messsages controller for update and delete

- Add Issues

  - Sort issues
  - pagination

- Prompt user to join an organization if they are not in one
- User signs up or logs in
- Has organization?
- If not redict to new organization page
- User creates new organization, they are added to it and they are an admin
- Admin can create projects for an org
  - Org has many projects
  - Projects are displayed on org's homepage
- Org home page
  - Has links to users.
    - Users page shows a table of users
    - Admin can edit and delete users
    - Admin can add other users
  - Has sticky messages
    - Messages that stay at the top of the page for announcements.
- Project page
  - Issues.
  - Can create sticky message. Admin
- Issues
  - Can be sorted.
  - Paginate.
  - Can include comments
- Comments belong to issues and maybe sticky messsages

- Adding other users to organization
  - Admin can create new users
  - When users are created, they are added to the organiztion
  - User receives email stating they have ben added
  - User is prompted to log in and change password