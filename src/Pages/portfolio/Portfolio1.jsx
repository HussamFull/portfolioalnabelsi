import React, { useState } from 'react';
import './Portfolio1.css'; 

export default function Portfolio1() {


  const [filter, setFilter] = useState('*');
  const [previewImage, setPreviewImage] = useState(null);

  const portfolioItems = [
    {
      id: 1,
      category: 'filter-app',
      title: 'Integral Security Agency ISA GmbH',
      imgSrc: 'portfolio-1.jpg',
      previewLink: 'portfolio-1.jpg',
      detailsLink: 'https://isa-sicherheit.de/',
      galTitle: 'App 1'
    },
    {
      id: 2,
      category: 'filter-web',
      title: 'cansupermarkt - Shop',
      imgSrc: 'portfolio-2.jpg',
      previewLink: 'portfolio-2.jpg',
      detailsLink: 'https://cansupermarkt.netlify.app/',
      galTitle: 'Web 3'
    },
    {
      id: 3,
      category: 'filter-app',
      title: 'Travelish - Shop',
      imgSrc: 'portfolio-3.jpg',
      previewLink: 'portfolio-3.jpg',
      detailsLink: 'https://hussamtravel.netlify.app/',
      galTitle: 'App 2'
    },
    {
      id: 4,
      category: 'filter-card',
      title: 'Mein Portfolio - next.js',
      imgSrc: 'portfolio-4.jpg',
      previewLink: 'portfolio-4.jpg',
      detailsLink: 'https://portfolionext-delta.vercel.app/',
      galTitle: 'Card 2'
    },
    {
      id: 5,
      category: 'filter-web',
      title: 'BBM-kernbohrung-beton',
      imgSrc: 'portfolio-5.jpg',
      previewLink: 'portfolio-5.jpg',
      detailsLink: 'https://bbm-kernbohrung-beton.com/',
      galTitle: 'Web 2'
    },
    {
      id: 6,
      category: 'filter-app',
      title: 'schaenzer-stefan',
      imgSrc: 'portfolio-6.jpg',
      previewLink: 'portfolio-6.jpg',
      detailsLink: 'https://www.schaenzer-stefan.de/',
      galTitle: 'App 3'
    },
    {
      id: 7,
      category: 'filter-card',
      title: 'Belleza Hairstyling-Beauty',
      imgSrc: 'portfolio-7.jpg',
      previewLink: 'portfolio-7.jpg',
      detailsLink: 'https://www.belleza-kassel.de/',
      galTitle: 'Card 1'
    },
    {
      id: 8,
      category: 'filter-card',
      title: 'inventur digital',
      imgSrc: 'portfolio-8.jpg',
      previewLink: 'portfolio-8.jpg',
      detailsLink: '#',
      galTitle: 'Card 3'
    },
    {
      id: 9,
      category: 'filter-web',
      title: 'Mein Portfolio',
      imgSrc: 'portfolio-9.jpg',
      previewLink: 'portfolio-9.jpg',
      detailsLink: 'https://hussamfull.github.io/iPortfolio2/index.html',
      galTitle: 'Web 3'
    },
    {
      id: 12,
      category: 'filter-fullstack',
      title: 'React.js- CRUD System-Api',
      imgSrc: 'portfolio-12.jpg',
      previewLink: 'portfolio-12.jpg',
      detailsLink: 'https://crudsystemreact.onrender.com/',
      galTitle: 'Web 3'
    },
    {
      id: 13,
      category: 'filter-fullstack',
      title: 'React.js- Start Portfolio',
      imgSrc: 'portfolio-13.jpg',
      previewLink: 'portfolio-13.jpg',
      detailsLink: 'https://portfolio-react-1-0y9j.onrender.com/',
      galTitle: 'Web 3'
    },
    {
      id: 14,
      category: 'filter-fullstack',
      title: 'JS-Html-CSS-Bootstrup- Akademie',
      imgSrc: 'portfolio-14.jpg',
      previewLink: 'portfolio-14.jpg',
      detailsLink: 'https://hussamfull.github.io/Akadime/',
      galTitle: 'Web 3'
    },
    {
      id: 15,
      category: 'filter-fullstack',
      title: 'JS-Bootstrup- Api',
      imgSrc: 'portfolio-15.jpg',
      previewLink: 'portfolio-15.jpg',
      detailsLink: 'https://hussamfull.github.io/6---Step2One-GetCategories-/',
      galTitle: 'Web 3'
    },
    {
      id: 16,
      category: 'filter-fullstack',
      title: 'CRUD System- JS Native',
      imgSrc: 'portfolio-16.jpg',
      previewLink: 'portfolio-16.jpg',
      detailsLink: 'https://hussamfull.github.io/Session_20_-CRUD_Project-/',
      galTitle: 'Web 3'
    },
    {
      id: 17,
      category: 'filter-fullstack',
      title: 'Akadmie-Html-CSS-Bootstrup-',
      imgSrc: 'portfolio-17.jpg',
      previewLink: 'portfolio-17.jpg',
      detailsLink: 'https://hussamfull.github.io/landingPage/',
      galTitle: 'Web 3'
    },
    {
      id: 18,
      category: 'filter-fullstack',
      title: 'Ecommerce -React -Api-',
      imgSrc: 'portfolio-18.png',
      previewLink: 'portfolio-18.png',
      detailsLink: 'https://tshop-6wkj.onrender.com',
      galTitle: 'Web 3'
    },
    {
      id: 19,
      category: 'filter-aspnet',
      title: 'Intelligentes Restaurant-Managementsystem (RestoApp)',
      imgSrc: 'portfolio-19.png',
      previewLink: 'portfolio-19.png',
      detailsLink: 'https://www.youtube.com/watch?v=8DH6FVWQ-fY',
      galTitle: 'Web 3'
    },
     {
      id: 20,
      category: 'filter-app',
      title: 'Cozy Home Vienna',
      imgSrc: 'portfolio-20.png',
      previewLink: 'portfolio-20.png',
      detailsLink: 'https://car-zeta-flame.vercel.app/',
      galTitle: 'App 3'
    },
  ];

  // دالة الحل الحركي للمسارات بداخل الـ src
 const getImageUrl = (imageName) => {
  return `/assets/img/portfolio/${imageName}`;
};

  return (
    <section id="portfolio1" className="portfolio section-bg" >
      <div className="container">

        <div className="section-title">
          <h2>Portfolio</h2>
        </div>

        <div className="row">
          <div className="col-lg-12 d-flex justify-content-center">
            <ul id="portfolio-flters">

  <li
    onClick={() => setFilter('*')}
    className={filter === '*' ? 'filter-active' : ''}
  >
    All
  </li>

  <li
    onClick={() => setFilter('filter-web')}
    className={filter === 'filter-web' ? 'filter-active' : ''}
  >
    Web
  </li>

  <li
    onClick={() => setFilter('filter-app')}
    className={filter === 'filter-app' ? 'filter-active' : ''}
  >
    App
  </li>

  <li
    onClick={() => setFilter('filter-card')}
    className={filter === 'filter-card' ? 'filter-active' : ''}
  >
    Projekt
  </li>
    <li
    onClick={() => setFilter('filter-fullstack')}
    className={filter === 'filter-fullstack' ? 'filter-active' : ''}
  >
    Full Stack
  </li>

 

  <li
    onClick={() => setFilter('filter-aspnet')}
    className={filter === 'filter-aspnet' ? 'filter-active' : ''}
  >
    ASP.NET
  </li>

   <li
    onClick={() => setFilter('filter-nodejs')}
    className={filter === 'filter-nodejs' ? 'filter-active' : ''}
  >
    Node.js
  </li>

</ul>
          </div>
        </div>

        <div className="row portfolio-container">
         {portfolioItems
  .filter((item) => {
    if (filter === '*') return true;
    return item.category === filter;
  })
  .map((item) => (
            <div key={item.id} className={`col-lg-4 col-md-6 portfolio-item ${item.category}`}>
              <div className="portfolio-card-box">
                
                <div className="portfolio-title-box">
                  <h4>{item.title}</h4>
                </div>

                <div className="portfolio-wrap">
                  <img src={getImageUrl(item.imgSrc)} className="img-fluid" alt={item.title} />
                  <div className="portfolio-links">
                   <button
  className="preview-btn"
  onClick={() => setPreviewImage(getImageUrl(item.previewLink))}
>
  <i className="bx bx-plus"></i> Preview
</button>
                    <a href={item.detailsLink} target="_blank" rel="noreferrer" title="More Details">
                      <i className="bx bx-link"></i> Link
                    </a>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
      {previewImage && (
  <div
    className="image-modal"
    onClick={() => setPreviewImage(null)}
  >

    <div
      className="image-modal-content"
      onClick={(e) => e.stopPropagation()}
    >

      <button
        className="close-btn"
        onClick={() => setPreviewImage(null)}
      >
        ✕
      </button>

      <img src={previewImage} alt="Preview" />

    </div>

  </div>
)}
    </section>
  );
}