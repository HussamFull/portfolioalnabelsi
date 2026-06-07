import React, { useState } from 'react';
import './Portfolio1.css'; 

export default function Portfolio1() {
  const [filter, setFilter] = useState('*');
  const [previewImage, setPreviewImage] = useState(null);
  const [previewVideo, setPreviewVideo] = useState(null); // تم إصلاح التعريف هنا لمنع الخطأ

  const portfolioItems = [
    {
      id: 1,
      category: 'filter-app',
      title: 'Integral Security Agency ISA GmbH',
      imgSrc: 'portfolio-1.jpg',
      previewLink: 'portfolio-1.jpg',
      detailsLink: 'https://isa-sicherheit.de/',
      videoLink: null, // لا يوجد فيديو لهذا المشروع  
      galTitle: 'App 1'
    },
    {
      id: 2,
      category: 'filter-web',
      title: 'cansupermarkt - Shop',
      imgSrc: 'portfolio-2.jpg',
      previewLink: 'portfolio-2.jpg',
      detailsLink: 'https://cansupermarkt.netlify.app/',
       videoLink: null, // لا يوجد فيديو لهذا المشروع 
      galTitle: 'Web 3'
    },
    {
      id: 3,
      category: 'filter-app',
      title: 'Travelish - Shop',
      imgSrc: 'portfolio-3.jpg',
      previewLink: 'portfolio-3.jpg',
      detailsLink: 'https://hussamtravel.netlify.app/',
       videoLink: null, // لا يوجد فيديو لهذا المشروع 
      galTitle: 'App 2'
    },
    {
      id: 4,
      category: 'filter-card',
      title: 'Mein Portfolio - next.js',
      imgSrc: 'portfolio-4.jpg',
      previewLink: 'portfolio-4.jpg',
      detailsLink: 'https://portfolionext-delta.vercel.app/',
       videoLink: null, // لا يوجد فيديو لهذا المشروع 
      galTitle: 'Card 2'
    },
    {
      id: 5,
      category: 'filter-web',
      title: 'BBM-kernbohrung-beton',
      imgSrc: 'portfolio-5.jpg',
      previewLink: 'portfolio-5.jpg',
      detailsLink: 'https://bbm-kernbohrung-beton.com/',
       videoLink: null, // لا يوجد فيديو لهذا المشروع 
      galTitle: 'Web 2'
    },
    {
      id: 6,
      category: 'filter-app',
      title: 'schaenzer-stefan',
      imgSrc: 'portfolio-6.jpg',
      previewLink: 'portfolio-6.jpg',
      detailsLink: 'https://www.schaenzer-stefan.de/',
       videoLink: null, // لا يوجد فيديو لهذا المشروع 
      galTitle: 'App 3'
    },
    {
      id: 7,
      category: 'filter-card',
      title: 'Belleza Hairstyling-Beauty',
      imgSrc: 'portfolio-7.jpg',
      previewLink: 'portfolio-7.jpg',
      detailsLink: 'https://www.belleza-kassel.de/',
       videoLink: null, // لا يوجد فيديو لهذا المشروع 
      galTitle: 'Card 1'
    },
    {
      id: 8,
      category: 'filter-card',
      title: 'inventur digital',
      imgSrc: 'portfolio-8.jpg',
      previewLink: 'portfolio-8.jpg',
      detailsLink: '#',
       videoLink: null, // لا يوجد فيديو لهذا المشروع 
      galTitle: 'Card 3'
    },
    {
      id: 9,
      category: 'filter-web',
      title: 'Mein Portfolio',
      imgSrc: 'portfolio-9.jpg',
      previewLink: 'portfolio-9.jpg',
      detailsLink: 'https://hussamfull.github.io/iPortfolio2/index.html',
        videoLink: null, // لا يوجد فيديو لهذا المشروع
      galTitle: 'Web 3'
    },
    {
      id: 12,
      category: 'filter-fullstack',
      title: 'React.js- CRUD System-Api',
      imgSrc: 'portfolio-12.jpg',
      previewLink: 'portfolio-12.jpg',
      detailsLink: 'https://crudsystemreact.onrender.com/',
        videoLink: null, // لا يوجد فيديو لهذا المشروع
      galTitle: 'Web 3'
    },
    {
      id: 13,
      category: 'filter-fullstack',
      title: 'React.js- Start Portfolio',
      imgSrc: 'portfolio-13.jpg',
      previewLink: 'portfolio-13.jpg',
      detailsLink: 'https://portfolio-react-1-0y9j.onrender.com/',
        videoLink: null, // لا يوجد فيديو لهذا المشروع
      galTitle: 'Web 3'
    },
    {
      id: 14,
      category: 'filter-fullstack',
      title: 'JS-Html-CSS-Bootstrup- Akademie',
      imgSrc: 'portfolio-14.jpg',
      previewLink: 'portfolio-14.jpg',
      detailsLink: 'https://hussamfull.github.io/Akadime/',
      videoLink: "https://www.youtube.com/embed/NPsEoqlasWM?si=skSD83Ec0EtdJ0ZL", // لا يوجد فيديو لهذا المشروع 
      galTitle: 'Web 3'
    },
    {
      id: 15,
      category: 'filter-fullstack',
      title: 'JS-Bootstrup- Api',
      imgSrc: 'portfolio-15.jpg',
      previewLink: 'portfolio-15.jpg',
      detailsLink: 'https://hussamfull.github.io/6---Step2One-GetCategories-/',
      videoLink: null, // لا يوجد فيديو لهذا المشروع
      galTitle: 'Web 3'
    },
    {
      id: 16,
      category: 'filter-fullstack',
      title: 'CRUD System- JS Native',
      imgSrc: 'portfolio-16.jpg',
      previewLink: 'portfolio-16.jpg',
      detailsLink: 'https://hussamfull.github.io/Session_20_-CRUD_Project-/',
      videoLink: null, // لا يوجد فيديو لهذا المشروع
      galTitle: 'Web 3'
    },
    {
      id: 17,
      category: 'filter-fullstack',
      title: 'Akadmie-Html-CSS-Bootstrup-',
      imgSrc: 'portfolio-17.jpg',
      previewLink: 'portfolio-17.jpg',
      detailsLink: 'https://hussamfull.github.io/landingPage/',
      videoLink: null, // لا يوجد فيديو لهذا المشروع
      galTitle: 'Web 3'
    },
    {
      id: 18,
      category: 'filter-fullstack',
      title: 'Ecommerce -React -Api-',
      imgSrc: 'portfolio-18.png',
      previewLink: 'portfolio-18.png',
      detailsLink: 'https://tshop-6wkj.onrender.com',
      videoLink: null, // لا يوجد فيديو لهذا المشروع
      galTitle: 'Web 3'
    },
    {
      id: 19,
      category: 'filter-aspnet',
      title: 'Intelligentes Restaurant-Managementsystem (RestoApp)',
      imgSrc: 'portfolio-19.png',
      previewLink: 'portfolio-19.png',
      detailsLink: 'https://www.youtube.com/watch?v=8DH6FVWQ-fY',
      videoLink: 'https://www.youtube.com/embed/8DH6FVWQ-fY', // رابط embed للمشاهدة الفورية
      galTitle: 'Web 3'
    },
    {
      id: 20,
      category: 'filter-app',
      title: 'Cozy Home Vienna',
      imgSrc: 'portfolio-20.png',
      previewLink: 'portfolio-20.png',
      detailsLink: 'https://car-zeta-flame.vercel.app/',
       videoLink: 'https://www.youtube.com/embed/mGAPaXw8iMQ?si=qJgO3FjM-aH_aFY2', // رابط embed للمشاهدة الفورية
      galTitle: 'App 3'
    },
    {
      id:21,
      category: 'filter-fullstack',
      title: 'E_Commerce_SyriaEShop',
      imgSrc: 'portfolio-21.png',
      previewLink: 'portfolio-21.png',
      detailsLink: '',
      videoLink: "https://www.youtube.com/embed/tG245n3aV9E?si=vWm4smuaD7XO5mu4", // لا يوجد فيديو لهذا المشروع
      galTitle: 'Web 3'
    },
    {
      id: 22,
      category: 'filter-web',
      title: 'UmzügeTransport Group',
      imgSrc: 'portfolio-22.png',
      previewLink: 'portfolio-22.png',
      detailsLink: 'https://umzugtransportgrupe.vercel.app/',
        videoLink: "https://www.youtube.com/embed/pWMaLeMCwR8?si=j0urmiueMF1fxDQN", // لا يوجد فيديو لهذا المشروع
      galTitle: 'Web 3'
    },
      {
      id: 23,
      category: 'filter-nodejs',
      title: '#Ecommerce_Api_Authentication _Register_Login',
      imgSrc: 'portfolio-23.png',
      previewLink: 'portfolio-23.png',
      detailsLink: 'https://github.com/HussamFull/ecoProject',
        videoLink: "https://www.youtube.com/embed/JeyBnzp5Iig?si=Ts8Jj-t_A2irbfmo", // لا يوجد فيديو لهذا المشروع
      galTitle: 'Web 3'
    },
     {
      id: 24,
      category: 'filter-nodejs',
      title: '#Back_End_Ecommerce_Add_Category_Add_Roles_Admin_User.',
      imgSrc: 'portfolio-24.png',
      previewLink: 'portfolio-24.png',
      detailsLink: 'https://github.com/HussamFull/ecoProject',
        videoLink: "https://www.youtube.com/embed/UxZPUOtRc4I?si=B3raFjN-mZDjV2Vq", // لا يوجد فيديو لهذا المشروع
      galTitle: 'Web 3'
    },
  ];

  const getImageUrl = (imageName) => {
    return `/assets/img/portfolio/${imageName}`;
  };

  return (
    <section id="portfolio1" className="portfolio section-bg">
      <div className="container">
        <div className="section-title">
          <h2>Portfolio</h2>
        </div>

        <div className="row">
          <div className="col-lg-12 d-flex justify-content-center">
            <ul id="portfolio-flters">
              <li onClick={() => setFilter('*')} className={filter === '*' ? 'filter-active' : ''}>All</li>
              <li onClick={() => setFilter('filter-web')} className={filter === 'filter-web' ? 'filter-active' : ''}>Web</li>
              <li onClick={() => setFilter('filter-app')} className={filter === 'filter-app' ? 'filter-active' : ''}>App</li>
              <li onClick={() => setFilter('filter-card')} className={filter === 'filter-card' ? 'filter-active' : ''}>Projekt</li>
              <li onClick={() => setFilter('filter-fullstack')} className={filter === 'filter-fullstack' ? 'filter-active' : ''}>Full Stack</li>
              <li onClick={() => setFilter('filter-aspnet')} className={filter === 'filter-aspnet' ? 'filter-active' : ''}>ASP.NET</li>
              <li onClick={() => setFilter('filter-nodejs')} className={filter === 'filter-nodejs' ? 'filter-active' : ''}>Node.js</li>
            </ul>
          </div>
        </div>

        <div className="row portfolio-container">
          {portfolioItems
            .filter((item) => filter === '*' || item.category === filter)
            .map((item) => (
              <div key={item.id} className={`col-lg-4 col-md-6 portfolio-item ${item.category}`}>
                <div className="portfolio-card-box">
                  <div className="portfolio-title-box">
                    <h4>{item.title}</h4>
                  </div>

                  <div className="portfolio-wrap">
                    <img src={getImageUrl(item.imgSrc)} className="img-fluid" alt={item.title} />
                    <div className="portfolio-links">
                      
                      <button className="preview-btn" onClick={() => setPreviewImage(getImageUrl(item.previewLink))}>
                        <i className="bx bx-plus"></i> Preview
                      </button>

                      {/* زر الفيديو يظهر فقط للأعمال التي تملك حقل videoLink */}
                      {item.videoLink && (
                        <button className="video-btn" onClick={() => setPreviewVideo(item.videoLink)} style={{ marginLeft: '5px', marginRight: '5px' }}>
                          <i className="bx bxl-youtube"></i> Video
                        </button>
                      )}

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

      {/* مودال الصور */}
      {previewImage && (
        <div className="image-modal" onClick={() => setPreviewImage(null)}>
          <div className="image-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setPreviewImage(null)}>✕</button>
            <img src={previewImage} alt="Preview" />
          </div>
        </div>
      )}

      {/* مودال الفيديو المنبثق */}
      {previewVideo && (
        <div className="image-modal" onClick={() => setPreviewVideo(null)}>
          <div className="image-modal-content" style={{ maxWidth: '800px', width: '90%', background: '#000' }} onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setPreviewVideo(null)}>✕</button>
            <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
              <iframe 
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                src={previewVideo} 
                title="Video Preview" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}