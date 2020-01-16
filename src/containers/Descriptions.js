import React from 'react';
import { Media } from 'reactstrap';

const logo = [
    {
      src1: 'icon1.jpg',
      src2: 'icon2.jpg',
      src3: 'icon2.jpg',
      src4: 'back4.jpg',
      src5: 'back5.jpg',
    }
  ];

const Descriptions = () => {
  return (
    <div>
      <Media className="MediaMain">
        <Media body className="mediaBody">
          <Media heading>
            Horizon Zero Dawn
          </Media>
            Horizon Zero Dawn is an action role-playing game developed by Guerrilla Games and published by Sony Interactive Entertainment. It was released for the PlayStation 4 in early 2017. The plot follows Aloy, a hunter in a world overrun by machines, who sets out to uncover her past.
        </Media>
      </Media>
      <Media className="mt-1">
        <Media body>
          <Media heading>
            Bloodborne
          </Media>
          Bloodborne is an action role-playing game developed by FromSoftware and published by Sony Computer Entertainment for the PlayStation 4. ... The game is played from a third-person perspective. Players control a customizable protagonist and the gameplay is focused on weapons-based combat and exploration.
        </Media>
      </Media>
      <Media className="mt-1">
        <Media body>
          <Media heading>
            God of War
          </Media>
          God of War is an action-adventure game franchise created by David Jaffe at Sony's Santa Monica Studio. It began in 2005 on the PlayStation 2 (PS2) video game console, and has become a flagship title for the PlayStation brand, consisting of eight games across multiple platforms.        </Media>
      </Media>
      <Media className="mt-1">
        <Media body>
          <Media heading>
            Sekiro: Shadows Die Twice
          </Media>
        Sekiro: Shadows Die Twice is an action-adventure video game developed by FromSoftware and published by Activision. The game takes place in the Sengoku period in Japan, and follows a shinobi known as Wolf as he attempts to take revenge on a samurai clan who attacked him and kidnapped his lord.        </Media>
      </Media>
      <Media className="mt-1">
        <Media body>
          <Media heading>
            Wiedzmin 3
          </Media>
          The Witcher 3: Wild Hunt is an action role-playing game with a third-person perspective. Players control Geralt of Rivia, a monster hunter known as a Witcher. Geralt walks, runs, rolls and dodges, and (for the first time in the series) jumps, climbs and swims.
        </Media>
      </Media>
    </div>
  );
};

export default Descriptions;