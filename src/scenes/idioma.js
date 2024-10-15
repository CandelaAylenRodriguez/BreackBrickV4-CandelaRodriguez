import { Scene } from 'phaser';
import { getTranslations, getLanguageConfig } from '../services/translations';

export class Idioma extends Scene {
    constructor() {
        super('Idioma');
    }

    create(){
        this.add.image(512, 384, 'background');

         const botonEspañol = this.add.image(300, 384, 'espanol').setScale(0.5);
         botonEspañol.setInteractive();
         botonEspañol.on('pointerdown', () => {
             getTranslations('es-AR', () => {
                 this.scene.start('MainMenu');
             });
         });
 
         const botonIngles = this.add.image(700, 384, 'ingles').setScale(0.5);
         botonIngles.setInteractive();
         botonIngles.on('pointerdown', () => {
             getTranslations('en-US', () => {
                 this.scene.start('MainMenu');
             });
        });
    }




}