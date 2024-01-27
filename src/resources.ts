import { ImageFiltering, ImageSource, Loader } from "excalibur";
import { LdtkResource } from '@excaliburjs/plugin-ldtk';
import heroImgPath from '../res/Solaria Demo Pack Update 03/Solaria Demo Pack Update 03/16x16/Sprites/Hero 01.png';
import tilesetPath from '../res/Solaria Demo Pack Update 03/Solaria Demo Pack Update 03/16x16/Tilesets/Solaria Demo Update 01.png';
import ldtkLevel0 from '../res/top-down/Level_0.ldtkl';
import ldtkLevel1 from '../res/top-down/Level_1.ldtkl';
import ldtkPath from '../res/top-down.ldtk';

export const Resources = {
    HeroSpriteSheetPng: new ImageSource(heroImgPath, false, ImageFiltering.Pixel),
    LdtkResource: new LdtkResource(ldtkPath, {
        useTilemapCameraStrategy: true,
        useMapBackgroundColor: true,
        // Path map intercepts and redirects to work around parcel's static bundling
        pathMap: [
            { path: 'Hero 01.png', output: heroImgPath },
            { path: 'Level_0.ldtkl', output: ldtkLevel0 },
            { path: 'Level_1.ldtkl', output: ldtkLevel1 },
            { path: 'Solaria Demo Update 01.png', output: tilesetPath },
        ]
    })
} as const;


export const loader = new Loader();
for (let resource of Object.values(Resources)) {
    loader.addResource(resource);
}