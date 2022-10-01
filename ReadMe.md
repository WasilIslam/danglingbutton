# Dangling Button

The Button uses css to dangle when form inputs are invalid.

![Alt Text](https://media.giphy.com/media/MZ6HOi0G4Xx717qku0/giphy.gif)


## Installation

Use the npm package manager to install danglingbutton.

```bash
npm install danglingbutton
```

## Usage

### Javascript
```javascript
<div className='form'>
    <h1>Login</h1>
    <input value={info.name} onChange={(e) => handleSetInfo(e.target.value, "name")} placeholder="name"></input>
    <input value={info.email} onChange={(e) => handleSetInfo(e.target.value, "email")} placeholder="email"></input>
    <input style={{ borderColor: !valid && "darkred" }} value={info.password} onChange={(e) => handleSetInfo(e.target.value, "password")} type="password" placeholder='password'></input>
    <p>⚠️Password length less than 5.</p>
    <Danglingbutton valid={valid} handleClick={() => { alert("Logged In") }} />
</div>
```

### CSS
```css
.form {
    display: flex;
    width: 40%;
    gap: 10px;
    margin: auto;
    margin-top: 190px;
    flex-direction: column;
}

.form input,
.form button {
    padding: 10px;
    font-size: 20px;
    outline: none;
    border: 1px solid black;
}
```


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)

Made with 💝 by Wasil Islam.