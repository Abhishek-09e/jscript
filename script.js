function changeHeading()
{
    const h1Element = document.getElementsByTagName('h1')[0];
     const h2Element = document.getElementsByTagName('h2')[0];
    h1Element.innerHTML = 'Content Changed Successfully!';
    h2Element.innerHTML = 'Content Changed Successfully!';
   
}

window.setTimeout(changeHeading, 2000);