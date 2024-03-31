
import React, {useState} from 'react';

// import { Link } from 'react-scroll';
// import { ImWhatsapp } from "react-icons/im";
// import { MdOutlineEmail } from "react-icons/md";
// import { BsLinkedin, BsBehance, BsInstagram } from "react-icons/bs";
// import { AiFillGithub, AiFillFacebook } from "react-icons/ai";
import { FaFacebook } from "@react-icons/all-files/fa/FaFacebook";
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter";
import {FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";
import {FaInstagram } from "@react-icons/all-files/fa/FaInstagram";
import {FaYoutube } from "@react-icons/all-files/fa/FaYoutube";





const Contact = () => { 
  
        const [hoveredIcons, setHoveredIcons] = useState({
          linkedin: false,
          youtube: false,
          facebook: false,
          instagram: false,
          twitter: false,
          
        });
        const iconHoverHandler = (iconName, isHovered) => {
            setHoveredIcons((prevHoveredIcons) => ({
        
              [iconName]: isHovered,
            }));
          };

          const getHoveredIconText = (iconName) => {
            switch (iconName) {
              case 'linkedin':
                return 'LinkedIn/ist-islamabad ';
              case 'youtube':
                return 'youtube/IST';
              case 'facebook':
                return 'facebook/IST.islamabad ';
              case 'instagram':
                return 'Instagram/ist_islamabad ';
              case 'twitter':
                return 'Instagram/ISTIslamabad';
        
              default:
                return '';
            }
          };

          const iconContainerStyle = (iconName) => ({
            display: 'flex',
            alignItems: 'center',
            marginTop: '8px',
            cursor: 'pointer',
            color: hoveredIcons[iconName] ? '#29cce5' : '#f7f5f5',
            transition: 'color 0.3s',
          });
          return (
            <div id='contact' className='gradient-background text-white w-auto flex py-6 mt-20'>
              <div className='flex flex-col'>
                <div className='flex flex-row gap-16 '>
                  <div className='mt-2 ml-16'>
                    <h3 className='font-logo text-4xl self-start pt-10 '>Institute of Space Technology</h3>
                    <h2 className='font-bodyFont text-base pl-1 pt-4 w-[340px]'>
                      An ISO 9001:2015 Certified Institute
                      Islamabad Expressway, Islamabad
                      G59H+P2 Islamabad
                    </h2>
                    <div className='w-32 h-8 text-lg flex items-center justify-center mt-4 font-bodyFont font-normal hover:font-semibold text-center hover:scale-[1.1] delay-50 duration-200 rounded'>
                      <a href='https://drive.google.com/file/d/1oIon6d1eukbRGQGnt-3YnOfrmGRKX8jm/view?usp=drive_link' target="_blank" rel="noopener noreferrer" download='poster.jpg'>⦿ Poster</a>
                    </div>
                    <div className='w-32 pl-5 h-8 text-lg flex items-center justify-center  font-bodyFont font-normal hover:font-semibold text-center hover:scale-[1.1] delay-50 duration-200 rounded'>
                      <a href='https://drive.google.com/file/d/1Wagw8lcoCwx72RYY2LhWrO7_5tuJQKQM/view?usp=drive_link' target="_blank" rel="noopener noreferrer" download='Broucher.jpg'>⦿ Broucher</a>
                    </div>
                  </div>
        
                  <div className='flex flex-col w-[140px] mt-12 pl-10'>
                    <h3 className='justify-center font-bodyFont font-semibold cursor-pointer hover:font-bold text-xl'>Admission</h3>
                    <ul className='pt-7 font-bodyFont text-base'>
                      <li className='text-white text-lg w-[72px]'>Why IST</li>
                      <li className='text-white text-lg w-11 pt-2'>Undergraduate</li>
                      <li className='text-white text-lg w-[72px] pt-2'>Scholarships</li>
                      <li className='text-white text-lg w-[180px] pt-2'>Fee Structure</li>
                      <li className='text-white text-lg w-[200px] pt-2'>Admission FAQs</li>
                    </ul>
                  </div>
        
                  <div className='flex flex-col w-[140px] mt-12 pl-10'>
                    <h3 className='justify-center font-bodyFont font-semibold cursor-pointer hover:font-bold text-xl'>Research</h3>
                    <ul className='pt-7 font-bodyFont text-base'>
                      <li className='text-lg '>Departments</li>
                      <li className='text-lg w-[200px] pt-2'>Degree & Programs</li>
                      <li className='text-lg pt-2'>Faculty</li>
                      <li className='text-lg pt-2'>Library</li>
                    </ul>
                  </div>
        
                  <div className='flex flex-col w-[300px] mt-12 pl-10'>
                    <h3 className='justify-center font-bodyFont font-semibold cursor-pointer hover:font-bold text-xl'>Links</h3>
                    <ul className='pt-7 font-bodyFont gap-4 '>
                    <li
                        style={iconContainerStyle('linkedin')}
                        onMouseEnter={() => iconHoverHandler('linkedin', true)}
                        onMouseLeave={() => iconHoverHandler('linkedin', false)}
                      >
                        <a href="https://www.linkedin.com/company/ist-islamabad" target="_blank" rel="noopener noreferrer" className="flex items-center">
                          <FaLinkedin style={{ fontSize: '1.2rem' }} />
                          {hoveredIcons['linkedin'] && (
                            <span className="font-bodyFont text-xs text-white ml-2">
                              {getHoveredIconText('linkedin')}
                            </span>
                          )}
                        </a>
                      </li>
              
              
                      <li
                        style={iconContainerStyle('twitter')}
                        onMouseEnter={() => iconHoverHandler('twitter', true)}
                        onMouseLeave={() => iconHoverHandler('twitter', false)}
                      >
                        <a href="https://twitter.com/ISTIslamabad" target="_blank" rel="noopener noreferrer" className="flex items-center">
                          <FaTwitter style={{ fontSize: '1.2rem' }} />
                          {hoveredIcons['twitter'] && (
                            <span className="font-bodyFont text-xs text-white ml-2">
                              {getHoveredIconText('twitter')}
                            </span>
                          )}
                        </a>
                      </li>

                      <li
                        style={iconContainerStyle('youtube')}
                        onMouseEnter={() => iconHoverHandler('youtube', true)}
                        onMouseLeave={() => iconHoverHandler('youtube', false)}
                      >
                        <a href="https://www.youtube.com/channel/UCq9INNBEtpL-FdgxDFRKhQ" target="_blank" rel="noopener noreferrer" className="flex items-center">
                          <FaYoutube style={{ fontSize: '1.2rem' }} />
                          {hoveredIcons['youtube'] && (
                            <span className="font-bodyFont text-xs text-white ml-2">
                              {getHoveredIconText('youtube')}
                            </span>
                          )}
                        </a>
                      </li>
                      <li
                        style={iconContainerStyle('facebook')}
                        onMouseEnter={() => iconHoverHandler('facebook', true)}
                        onMouseLeave={() => iconHoverHandler('facebook', false)}
                      >
                        <a href="https://www.facebook.com/IST.islamabad" target="_blank" rel="noopener noreferrer" className="flex items-center">
                          <FaFacebook style={{ fontSize: '1.2rem' }} />
                          {hoveredIcons['facebook'] && (
                            <span className="font-bodyFont text-xs text-white ml-2">
                              {getHoveredIconText('facebook')}
                            </span>
                          )}
                        </a>
                      </li>
                      <li
                        style={iconContainerStyle('instagram')}
                        onMouseEnter={() => iconHoverHandler('instagram', true)}
                        onMouseLeave={() => iconHoverHandler('instagram', false)}
                      >
                        <a href="https://www.instagram.com/ist_islamabad/" target="_blank" rel="noopener noreferrer" className="flex items-center">
                          <FaInstagram style={{ fontSize: '1.2rem' }} />
                          {hoveredIcons['instagram'] && (
                            <span className="font-bodyFont text-xs text-white ml-2">
                              {getHoveredIconText('instagram')}
                            </span>
                          )}
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          );
        };
        
        export default Contact;