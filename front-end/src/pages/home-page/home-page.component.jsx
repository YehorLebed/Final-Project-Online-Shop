import React from 'react';
import { ItemList } from '../../components';
import './home-page.styles.css';

const HomePage = () => {

  const items = [
    {
      id: 'asjdb123',
      imgSrc: 'https://cdn.vox-cdn.com/thumbor/mVW3cvUD4nO-gkNfOapCJ8ORFdk=/0x0:2040x1360/1200x800/filters:focal(857x517:1183x843)/cdn.vox-cdn.com/uploads/chorus_image/image/65326050/akrales_190912_3656_0035.0.jpg',
      title: 'Iphone 10XS',
      text: 'Диагональ экрана:6.59\nОбъем оперативной памяти:4ГБ\nОбъем встроенной памяти:64ГБ\nОсновная камера:16+2Мп',
      price: '300'
    },
    {
      id: 'asjdb12w3',
      imgSrc: 'https://cdn.vox-cdn.com/thumbor/mVW3cvUD4nO-gkNfOapCJ8ORFdk=/0x0:2040x1360/1200x800/filters:focal(857x517:1183x843)/cdn.vox-cdn.com/uploads/chorus_image/image/65326050/akrales_190912_3656_0035.0.jpg',
      title: 'Iphone 10XS',
      text: 'Диагональ экрана:6.59\nОбъем оперативной памяти:4ГБ\nОбъем встроенной памяти:64ГБ\nОсновная камера:16+2Мп',
      price: '300'
    },
    {
      id: 'asjdb12wqe3',
      imgSrc: 'https://cdn.vox-cdn.com/thumbor/mVW3cvUD4nO-gkNfOapCJ8ORFdk=/0x0:2040x1360/1200x800/filters:focal(857x517:1183x843)/cdn.vox-cdn.com/uploads/chorus_image/image/65326050/akrales_190912_3656_0035.0.jpg',
      title: 'Iphone 10XS',
      text: 'Диагональ экрана:6.59\nОбъем оперативной памяти:4ГБ\nОбъем встроенной памяти:64ГБ\nОсновная камера:16+2Мп',
      price: '300'
    },
    {
      id: 'asjdb1qqeq23',
      imgSrc: 'https://cdn.vox-cdn.com/thumbor/mVW3cvUD4nO-gkNfOapCJ8ORFdk=/0x0:2040x1360/1200x800/filters:focal(857x517:1183x843)/cdn.vox-cdn.com/uploads/chorus_image/image/65326050/akrales_190912_3656_0035.0.jpg',
      title: 'Iphone 10XS',
      text: 'Диагональ экрана:6.59\nОбъем оперативной памяти:4ГБ\nОбъем встроенной памяти:64ГБ\nОсновная камера:16+2Мп',
      price: '300'
    },
    {
      id: 'asjdb1qqeqeq23',
      imgSrc: 'https://cdn.vox-cdn.com/thumbor/mVW3cvUD4nO-gkNfOapCJ8ORFdk=/0x0:2040x1360/1200x800/filters:focal(857x517:1183x843)/cdn.vox-cdn.com/uploads/chorus_image/image/65326050/akrales_190912_3656_0035.0.jpg',
      title: 'Iphone 10XS',
      text: 'Диагональ экрана:6.59\nОбъем оперативной памяти:4ГБ\nОбъем встроенной памяти:64ГБ\nОсновная камера:16+2Мп',
      price: '300'
    },
    {
      id: 'asjdb1qqeq21231233',
      imgSrc: 'https://cdn.vox-cdn.com/thumbor/mVW3cvUD4nO-gkNfOapCJ8ORFdk=/0x0:2040x1360/1200x800/filters:focal(857x517:1183x843)/cdn.vox-cdn.com/uploads/chorus_image/image/65326050/akrales_190912_3656_0035.0.jpg',
      title: 'Iphone 10XS',
      text: 'Диагональ экрана:6.59\nОбъем оперативной памяти:4ГБ\nОбъем встроенной памяти:64ГБ\nОсновная камера:16+2Мп',
      price: '300'
    },
    {
      id: 'asjdb1sdqqeq21231233',
      imgSrc: 'https://cdn.vox-cdn.com/thumbor/mVW3cvUD4nO-gkNfOapCJ8ORFdk=/0x0:2040x1360/1200x800/filters:focal(857x517:1183x843)/cdn.vox-cdn.com/uploads/chorus_image/image/65326050/akrales_190912_3656_0035.0.jpg',
      title: 'Iphone 10XS',
      text: 'Диагональ экрана:6.59\nОбъем оперативной памяти:4ГБ\nОбъем встроенной памяти:64ГБ\nОсновная камера:16+2Мп',
      price: '300'
    },
    {
      id: 'asjdb1qqeq2asdasd231233',
      imgSrc: 'https://cdn.vox-cdn.com/thumbor/mVW3cvUD4nO-gkNfOapCJ8ORFdk=/0x0:2040x1360/1200x800/filters:focal(857x517:1183x843)/cdn.vox-cdn.com/uploads/chorus_image/image/65326050/akrales_190912_3656_0035.0.jpg',
      title: 'Iphone 10XS',
      text: 'Диагональ экрана:6.59\nОбъем оперативной памяти:4ГБ\nОбъем встроенной памяти:64ГБ\nОсновная камера:16+2Мп',
      price: '300'
    },
    {
      id: 'asjdb1qqeq2asd1231233',
      imgSrc: 'https://cdn.vox-cdn.com/thumbor/mVW3cvUD4nO-gkNfOapCJ8ORFdk=/0x0:2040x1360/1200x800/filters:focal(857x517:1183x843)/cdn.vox-cdn.com/uploads/chorus_image/image/65326050/akrales_190912_3656_0035.0.jpg',
      title: 'Iphone 10XS',
      text: 'Диагональ экрана:6.59\nОбъем оперативной памяти:4ГБ\nОбъем встроенной памяти:64ГБ\nОсновная камера:16+2Мп',
      price: '300'
    },

  ]

  return (<>
    <h1 className="home-page">Home-page</h1>
    <ItemList items={items} />
  </>);
};

export default HomePage;