import p2_img from "./product_2.png";
import hero_image from "./hero_image.png";
import boss from "./boss.jpg"
import CEO from "./CEO.png"
import p28_img from "./product_28.png";
import p29_img from "./product_29.png";



const AboutData = {
    history: {
      title: "Our Company History",
      content: "Our company was founded in 2010 with a mission to create innovative and reliable software solutions. Over the years, we've expanded our services to meet the evolving needs of our clients, and today, we are a leading provider in our industry.",
    },
    mission: {
      title: "Mission Statement",
      content: "Our mission is to empower businesses through technology. We believe in creating solutions that not only solve problems but also add value and enhance the user experience.",
    },
    values: {
      title: "Our Core Values",
      content: "Integrity, innovation, and customer satisfaction are at the core of everything we do. We are committed to delivering high-quality products and services that exceed our clients' expectations.",
    },
    clients: [
      { src: p28_img, alt: "Client 1" },
      { src: p29_img, alt: "Client 1" },
      { src: p2_img, alt: "Client 1" },
      { src: CEO, alt: "Client 1" },
      { src: p2_img, alt: "Client 2" },
      { src: p2_img, alt: "Client 3" },
      { src: hero_image, alt: "Client 4" },
      { src: p28_img, alt: "Client 1" },
      { src: p2_img, alt: "Client 1" },
      { src: CEO, alt: "Client 1" },
      { src: p2_img, alt: "Client 2" },
      { src: p2_img, alt: "Client 3" },
      { src: hero_image, alt: "Client 4" },
    ],
    team: [
      { name: "John Doe", title: "CEO", img: boss },
      { name: "Jane Smith", title: "CTO", img: boss },
      { name: "Mike Johnson", title: "Lead Developer", img: boss },
    ],
    testimonials: [
      { content: "This company exceeded our expectations. Their solutions are top-notch, and their customer service is unparalleled.", author: "Client 1",image:p2_img },
      { content: "We are thrilled with the results. Their team is professional, responsive, and incredibly talented.", author: "Client 2",image:p2_img },
    ],
  };
  export default AboutData;