
import './App.css';
import Card from './Card';
import BrandCards from './BrandCards';

function App() {
  return (
    <div className='body'>
      <div className='flexnavbar'>
        <div className='navbar'>
          <div>
             <img src='https://res.cloudinary.com/doeqkxbmo/image/upload/v1705605391/web/Icons/dd67emmajvwiba1dfbs0.svg' 
              width="90px"
             />
          </div>
          <div className='middle'>
             <p>Home</p>
             <p>Feature</p>
             <p>Brands</p>
          </div>
          <div>
             <button className='startbutton' >
               Get Started
             </button>
          </div>
        </div>
      </div>
      <div className='about'>
        <p className='welcome'>
           <p>Welcome to</p> <p style={{color:"#ff2f6f"}}> Wardroll</p>
        </p>
        <p className='share'>
           <p>Share Your Style,Share Your Love!</p>
        </p>
        <p className='thirdline'>
           <p>Share your favorite finds effortlessly, and let your followers dive into the trends you love.</p>
        </p>
      </div>
      <div className='getstart'>
        <div>
          Get Started
        </div>
        <img src='https://res.cloudinary.com/doeqkxbmo/image/upload/v1705607869/web/Icons/l11jgvq2cxugd66tuldn.svg'
         style={{marginTop:"40px"}}
        />
      </div>
      <div>
        
        <div className='images'>
          <img src='https://www.wardroll.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdoeqkxbmo%2Fimage%2Fupload%2Fv1716665696%2Fweb%2Fepogyud5xqy0w19a9lno.png&w=1200&q=75' 
            className='leftimage'
          />
          <img src='https://www.wardroll.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdoeqkxbmo%2Fimage%2Fupload%2Fv1716665692%2Fweb%2Fwiw9pxf7ipkfi2gu1yv0.png&w=1920&q=75' 
            className='centerimage'
          />
          <img src='https://www.wardroll.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdoeqkxbmo%2Fimage%2Fupload%2Fv1716665699%2Fweb%2Fnwriqh39wfokdpckra9x.png&w=1200&q=75' 
            className='rightimage'
          />
        </div>
        <div className='backdiv'>
        <img src='https://res.cloudinary.com/doeqkxbmo/image/upload/v1711087476/web/v9xdwwqzxdhcuusai58k.svg'
          className='backgroundimg'
          
          />
        </div>
      </div>
      <div className='aboutseconddiv'>
        <p className='welcome'>
           <p>Unlock the Magic with </p> <p style={{color:"#ff2f6f"}}> Wardroll</p>
        </p>
        <p className='thirdline'>
           <p>Embark on a seamless style-sharing journey with our intuitive tools, connecting and creating effortlessly.</p>
        </p>
      </div>
      <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
      <div className='cards'>
          <Card 
            imageurl="https://res.cloudinary.com/doeqkxbmo/image/upload/v1705603160/web/Icons/rwaugsmhrf0xhql4fa3d.svg"
            heading="Smart Link Sharing"
            description="Share product links seamlessly through comments."
          />
          <Card 
            imageurl="https://res.cloudinary.com/doeqkxbmo/image/upload/v1705603160/web/Icons/ooditgaghywaljpy9td8.svg"
            heading="Community Connection"
            description="Build a community around shared interests and styles"
          />
          <Card 
            imageurl="https://res.cloudinary.com/doeqkxbmo/image/upload/v1705603159/web/Icons/wo9eqvgconk0xrutaoaz.svg"
            heading="Keyword-Triggered Responses"
            description="Instantly address inquiries with customized responses."
          />
          <Card 
            imageurl="https://res.cloudinary.com/doeqkxbmo/image/upload/v1705603160/web/Icons/i1cirqyje9mcjwnzm3pu.svg"
            heading="Automated Commissions"
            description="Earn effortlessly with each purchase made through your links"
          />
          <Card 
            imageurl="https://res.cloudinary.com/doeqkxbmo/image/upload/v1705603159/web/Icons/xxm9bh1ijosvuauozm9k.svg"
            heading="Real-time Analytics"
            description="Track engagement and optimize your strategy for maximum impact."
          />
          <Card 
            imageurl="https://res.cloudinary.com/doeqkxbmo/image/upload/v1705603159/web/Icons/gcxpqqva41d3njvtyxcu.svg"
            heading="Collaborate and Create"
            description="Connect with brands and amplify your influence together."
          />
        
      </div>
      </div>
      <div style={{marginTop:"40px"}}>
        <img src='https://www.wardroll.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdoeqkxbmo%2Fimage%2Fupload%2Fv1715022799%2Fweb%2Fcwvy7arptdg3ywzsfyue.png&w=3840&q=75'
          width="100%"
          height="auto"
        />
      </div>
      <div className='about'>
        <p className='welcome'>
           <p>Brands with</p> <p style={{color:"#ff2f6f"}}> Wardroll</p>
        </p>
        <p className='thirdline'>
           <p>Discover brands on Wardroll & experience the seamless fashion technology designed &</p>
            engineered by the creative minds of IIT Alumnus.</p>
      </div>
      <div style={{display:"flex",justifyContent:"center",alignItems:"center"}} >
        <div className='brandcards'>
           <BrandCards 
             imageurl="https://www.wardroll.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdoeqkxbmo%2Fimage%2Fupload%2Fv1710907265%2Fweb%2Flomfmujsvkb83jqctiao.png&w=750&q=75"
             brand="Myntra"
           />
            <BrandCards 
             imageurl="https://www.wardroll.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdoeqkxbmo%2Fimage%2Fupload%2Fv1710907268%2Fweb%2Fz5binbw8htbjmyqqjmhb.png&w=750&q=75"
             brand="Nykaa"
           />
            <BrandCards 
             imageurl="https://www.wardroll.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdoeqkxbmo%2Fimage%2Fupload%2Fv1710907262%2Fweb%2Ftwdkwlufhsq0fq7mcmfx.png&w=750&q=75"
             brand="Caprese"
           />
            <BrandCards 
             imageurl="https://www.wardroll.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdoeqkxbmo%2Fimage%2Fupload%2Fv1710907259%2Fweb%2Fnmaa07egpwt8unovrtsp.png&w=750&q=75"
             brand="Forever 21"
           />
            <BrandCards 
             imageurl="https://www.wardroll.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdoeqkxbmo%2Fimage%2Fupload%2Fv1710907257%2Fweb%2Fxbj3vvmlch4auktzedhb.png&w=750&q=75"
             brand="Ajio"
           />
            <BrandCards 
             imageurl="https://www.wardroll.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdoeqkxbmo%2Fimage%2Fupload%2Fv1711803862%2Fweb%2Foipmhqod3tofv9popf6h.png&w=750&q=75"
             brand="Urbanic"
           />
            <BrandCards 
             imageurl="https://www.wardroll.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdoeqkxbmo%2Fimage%2Fupload%2Fv1710907263%2Fweb%2Fdq1rojcpexwnbn9kvwky.png&w=750&q=75"
             brand="FabIndia"
           />
           <BrandCards 
             imageurl="https://www.wardroll.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdoeqkxbmo%2Fimage%2Fupload%2Fv1710907280%2Fweb%2Ffv4wu74zrhxofqg7tjcn.png&w=750&q=75"
             brand="Uniqlo"
           />
        </div>
      </div>
      <div className='about'>
        <p className='welcome'>
           <p>& many more only on </p> <p style={{color:"#ff2f6f"}}> Wardroll</p>
        </p>
      </div>
      <div className='about'>
        <p className='welcome'>
           <p>Join</p> <p style={{color:"#ff2f6f"}}> Wardroll</p> <p>today!</p>
        </p>
        <p className='thirdline'>
           Unlock World of Seamless Fashion Discovery- One Tap Away
        </p>
        <div className='getstart'>
          <div>
            Get Started
          </div>
        </div>
        <div>
          <h4>or Scan the QR Below</h4>
        </div>
        <img src="https://res.cloudinary.com/doeqkxbmo/image/upload/v1705603162/web/Icons/naxpklr0qkb85kbvmqaz.svg"
          height="100px"
          width="100px"
        />
      </div>
    </div>
  );
}

export default App;
