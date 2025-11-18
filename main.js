var playpause = document.querySelector(".button_play_pause");

document.addEventListener("DOMContentLoaded", function() {
    const atalhosRapidosContainer = document.querySelector('.atalhos-rapidos');
    const seusProgramasContainer = document.querySelector('.sessao_seus-programas');

    // Function to create playlist items
    function createPlaylistItem(playlist) {
        const playlistBox = document.createElement('div');
        playlistBox.className = 'atalhos-rapidos_box';

        const imgContainer = document.createElement('div');
        imgContainer.className = 'atalhos-rapidos_img';
        const img = document.createElement('img');
        img.src = playlist.imgSrc;
        img.alt = '';
        imgContainer.appendChild(img);

        const insideContainer = document.createElement('div');
        insideContainer.className = 'box_atalhos-rapidos_dentro';

        const title = document.createElement('div');
        title.className = 'atalhos-rapidos_titulo';
        title.textContent = playlist.title;

        insideContainer.appendChild(title);

        if (playlist.title === "Músicas Curtidas") {
            const playButton = document.createElement('div');
            playButton.className = 'button_play_playlist';
            const icon = document.createElement('i');
            icon.className = 'fas fa-pause';
            playButton.appendChild(icon);
            insideContainer.appendChild(playButton);
        }

        playlistBox.appendChild(imgContainer);
        playlistBox.appendChild(insideContainer);

        return playlistBox;
    }

    // Function to create program items
    function createProgramItem(program) {
        const programBox = document.createElement('div');
        programBox.className = 'box_seus-programas';

        const imgContainer = document.createElement('div');
        imgContainer.className = 'seus-programas_img';
        const img = document.createElement('img');
        img.src = program.imgSrc;
        img.alt = '';
        imgContainer.appendChild(img);

        const title = document.createElement('div');
        title.className = 'seus-programas_titulo';
        const h1 = document.createElement('h1');
        h1.textContent = program.title;
        title.appendChild(h1);

        const subtitle = document.createElement('div');
        subtitle.className = 'seus-programas_sub-titulo';
        const h3 = document.createElement('h3');
        h3.textContent = program.subtitle;
        subtitle.appendChild(h3);

        programBox.appendChild(imgContainer);
        programBox.appendChild(title);
        programBox.appendChild(subtitle);

        return programBox;
    }

    // Populate playlists
    if (atalhosRapidosContainer) {
        playlists.forEach(playlist => {
            atalhosRapidosContainer.appendChild(createPlaylistItem(playlist));
        });
    }

    // Populate programs
    if (seusProgramasContainer) {
        programs.forEach(program => {
            seusProgramasContainer.appendChild(createProgramItem(program));
        });
    }

    // Player functionality
    if (playpause) {
        playpause.addEventListener("click", function () {
            const playIcon = playpause.querySelector(".fa-play-circle");
            const pauseIcon = playpause.querySelector(".fa-pause-circle");

            if (playIcon.style.opacity !== "0") {
                playIcon.style.opacity = "0";
                pauseIcon.style.opacity = "1";
            } else {
                playIcon.style.opacity = "1";
                pauseIcon.style.opacity = "0";
            }
        });
    }
});
