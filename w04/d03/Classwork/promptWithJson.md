Update your app so that it uses JSON encoded data stored to an external file. Once that's working, add some more features:

- a search feature that allows users to search by first and last name

```bash
node rolodex.js search first andrew
First Name: andrew Last Name:fritz  Age:28

node rolodex.js search last orbison
First Name: Roy Last Name: Orbison Age 95
```

- a search feature that allows users to search by age

```bash
node rolodex.js search youngest
First Name: andrew Last Name:fritz  Age:28

node rolodex.js search oldest
First Name: Roy Last Name: Orbison Age 95

```

- if you finish that, think of some more features. Refactor your code into functions as well.