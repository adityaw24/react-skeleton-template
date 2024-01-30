# React Skeleton Template

This project contain skeleton for creating app with react. the skeleton has template using tailwind + daisyui preconfigured with react router, documentation for component with jsdoc, and some crud example with dummy api.

## Installation & Usage
```bash
# Clone or download this repo
git clone https://github.com/AbidKhairyAK/react-skeleton-template.git

# Enter the cloned folder
cd react-skeleton-template

# Install dependencies
npm install

# Run the app
npm run dev
```

## Main Dependencies
This is list of some dependencies used to create this skeleton
- Vite
- Tailwind CSS
- Daisy UI
- Windmill Dashboard
- Lucide Icon
- React Router V6
- Axios
- Tanstack React Table
- React Hook Form
- Yup
- Zustand
- Sweetalert2
- React Hot Toast
- JSDoc

## Folder Structure Inside SRC
- **components** :
  - this folder contains global component
  - components is categorized using folder, e.g. Form, UI, etc...
- **lib** :
  - utils and helper is stored here
- **menu** :
  - sidebar menu on admin panel is confgured here
- **router**
  - router configuration for all page
- **stores**
  - global state management using zustand
- **types**
  - contains global custom type defined using jsdoc
  - `_namespaces.js` file is used to define namespace and category for component and function
- **views**
  - contains page for this app
  - every page file is appended with "Page" word, e.g. `ArticleListPage.jsx`

## Todo For Readme
- [ ] Folder File Structure & Naming Convention
- [x] Main Dependency List
- [ ] Code Documentation Guide
- [ ] Some usage guide
- [ ] Translate component doc to english