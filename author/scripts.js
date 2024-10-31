let authors = [
    {
        firstName: 'Andreas',
        lastName: 'Neeser'
    },
    {
        firstName: 'Anna',
        lastName: 'Ruchat'
    },
    {
        firstName: 'Arno',
        lastName: 'Camenisch'
    },
    {
        firstName: 'Barbara',
        lastName: 'Schibli'
    },
    {
        firstName: 'Demian',
        lastName: 'Leinhard'
    },
    {
        firstName: 'Flurina',
        lastName: 'Bader'
    },
    {
        firstName: 'Franco',
        lastName: 'Supino'
    },
    {
        firstName: 'Lukas',
        lastName: 'Hartmann'
    },
    {
        firstName: 'Marius',
        lastName: 'Popescu'
    },
    {
        firstName: 'Reto',
        lastName: 'Haenny'
    },
    {
        firstName: 'Sandra',
        lastName: 'Kuenzi'
    },
    {
        firstName: 'Simon',
        lastName: 'Libsig'
    }
];

const authorPhotos = document.querySelectorAll('main ul li');

authorPhotos.forEach((li) => {

    const img = li.querySelector('img');
    if (img) {
        
        const imgName = img.src.split('/').pop();
        
        const imgAuthorName = imgName.replace("tile_", "").replace(".jpg", "");

        const author = authors.find(author =>
            `${author.firstName.toLowerCase()}_${author.lastName.toLowerCase()}` === imgAuthorName
        );

        if (author) {
            const authorName = document.createElement('h2');
            authorName.textContent = `${author.firstName} ${author.lastName}`;
            
            li.appendChild(authorName);
            
            img.alt = `${author.firstName} ${author.lastName}`;
            img.title = `${author.firstName} ${author.lastName}`;
        }
    }
});