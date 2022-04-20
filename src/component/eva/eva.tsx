import { Game, GameObject, resource, RESOURCE_TYPE } from '@eva/eva.js';
import { RendererSystem } from '@eva/plugin-renderer';
import { Img, ImgSystem } from '@eva/plugin-renderer-img';
import { Text, TextSystem } from '@eva/plugin-renderer-text'
import React from 'react';

import './eva.css'

function Eva() {

  // 资源预加载
  resource.addResource([
    {
      name: 'image1',
      type: RESOURCE_TYPE.IMAGE,
      src: {
        image: {
          type: 'png',
          url:
            'https://gw.alicdn.com/tfs/TB1DNzoOvb2gK0jSZK9XXaEgFXa-658-1152.webp',
        },
      },
      preload: true,
    },
  ]);
  
  // 初始化游戏
  const game = new Game({
    systems: [
      new RendererSystem({ // 初始化渲染系统
        canvas: document.querySelector('#canvas') as HTMLCanvasElement,
        width: 750,
        height: 1000,
      }),
      new ImgSystem(),
      // new TextSystem(),
    ],
  });
  
  // 游戏对象
  const image = new GameObject('image', {
    size: { width: 750, height: 1319 },
    origin: { x: 0, y: 0 },
    position: {
      x: 0,
      y: -319,
    },
    anchor: {
      x: 0,
      y: 0,
    },
  });
  
  // 游戏对象添加图片组件
  image.addComponent(
    new Img({
      resource: 'image1',
    })
  );
  
  // 将图片添加到场景
  game.scene.addChild(image);

  // const text = new GameObject('text', {
  //   position: {
  //     x: 0,
  //     y: 0
  //   },
  //   origin: {
  //     x: 0.5,
  //     y: 0.5
  //   },
  //   anchor: {
  //     x: 0.5,
  //     y: 0.5
  //   }
  // })
  
  // text.addComponent(
  //   new Text({
  //     text: '欢迎使用EVA互动游戏开发体系！',
  //     style: {
  //       fontFamily: 'Arial',
  //       fontSize: 36,
  //       fontStyle: 'italic',
  //       fontWeight: 'bold',
  //       fill: ['#b35d9e', '#84c35f', '#ebe44f'], // gradient
  //       fillGradientType: 1,
  //       fillGradientStops: [0.1, 0.4],
  //       stroke: '#4a1850',
  //       strokeThickness: 5,
  //       dropShadow: true,
  //       dropShadowColor: '#000000',
  //       dropShadowBlur: 4,
  //       dropShadowAngle: Math.PI / 6,
  //       dropShadowDistance: 6,
  //       wordWrap: true,
  //       wordWrapWidth: 400,
  //       breakWords: true
  //     }
  //   })
  // )
  
  // game.scene.addChild(text)
  return (
    <div>
      <canvas id="canvas"></canvas>
    </div>
  );
}

export default Eva;
