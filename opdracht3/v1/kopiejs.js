/* OPMAAK HELE WEBSITE */
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
/* EINDE OPMAAK HELE WEBSITE */

/* BODY GEHELE WEBSITE */
body {
    background-color: #f9f4e6;
    font-family: Segoe UI, Myriad Pro, sans-serif;
}
/* EINDE BODY GEHELE WEBSITE */

main {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 2em;
}

img{
    width: 10rem;
    margin-top: 2em;
    object-fit: contain;
}

h1 {
    position: absolute;
    width: 100%;
    font-size:2rem;
    padding-left: 0.2em;
    margin-top: 0.5em;
    color: #365367;
}


h2 {
    font-size: 1.2em;
    margin-top: 0.5em;
    text-align: center;
    color:#f494ab
}

p {
    position: absolute;
    font-size: 0.5em;
    padding: 0.5em;
    margin-top: 20em;
    color:#f494ab;
    background-color: white;
    max-width: 80%;
}

section {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    max-width: 100%;
}

article {
    position: relative;
    margin-top: 1em;
    padding: 0 1em;
    width: 1fr;
}

img:hover {
    transition: 2s;
    width: 12rem;
}

