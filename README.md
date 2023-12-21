# Esercitazione 9

Ho anche portato `<header>` e `<footer>` dentro i rispettivi file `header.ejs` e `footer.ejs`, e richiamati tramite la sintassi `<%- include("../views/header.ejs") %>` e `<%- include("../views/footer.ejs") %>`

## Requirements

Creare una app `node.js`. Installare `express` e `ejs`
L’URL `/rubrica` deve restiruire una pagina che visualizza i dati qui accanto:

```json
{
"id": 1,
"first_name": "Jeanette", "last_name": "Penddreth", "email": "jpenddreth0@census.gov", "phone_number": "265-81932"
},
{
"id": 2,
"first_name": "Giavani", "last_name": "Frediani",
"email": "gfrediani1@senate.gov", "phone_number": "229-794212"
},
{
"id": 3,
"first_name": "Noell", "last_name": "Bea",
"email": "nbea2@imageshack.us", "phone_number": "186-162255"
},
{
"id": 4,
"first_name": "Willard", "last_name": "Valek",
"email": "wvalek3@vk.com", "phone_number": "677-618826"
}
```

Il template html deve essere diviso in tre parti:

- Header
- Main
- Footer
