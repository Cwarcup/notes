# Redux Store with TypeScript

Using `https://registry.npmjs.org/-/v1/search?text=react` as an example.

'Package' is a reserved word in TypeScript (like 'for', 'if', etc.).

We are going to call NPM packages 'repositories' instead.

---

**Redux Store**
  - repositories
    - data 
      - list of repositories from NPM
    - loading
      - true if fetching repositories
      - false if not
    - error
      - String
      - error message if one occurred during fetching
---

**Action Creators**
- searchRepositories
  - String
  - search term

---

**Actions**
- SearchRepositories
- SearchRepositoriesSuccess
- SearchRepositoriesError

---

**Action Types**
- SEARCH_REPOSITORIES
- SEARCH_REPOSITORIES_SUCCESS
- SEARCH_REPOSITORIES_ERROR

---